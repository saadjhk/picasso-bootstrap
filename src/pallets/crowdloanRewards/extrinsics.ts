import { ApiPromise } from "@polkadot/api";
import { u128, u32 } from "@polkadot/types-codec";
import { KeyringPair } from "@polkadot/keyring/types";
import { ethers } from "ethers";
import * as R from "ramda";
import { sendAndWaitForSuccess } from "polkadot-utils";
import { PalletCrowdloanRewardsModelsRemoteAccount } from "../../interfaces";
import { toHexString, ethAccount } from "../../utils";
import { base58 } from "micro-base";
import BigNumber from "bignumber.js";

export const associateKSM = async (
  api: ApiPromise,
  contributorAccount: KeyringPair,
  rewardAccount: KeyringPair
) => {
  const message = `<Bytes>picasso-${toHexString(
    rewardAccount.publicKey
  )}</Bytes>`;
  const signature = await contributorAccount.sign(message);

  const tx = await api.tx.crowdloanRewards
    .associate(rewardAccount.publicKey, {
      RelayChain: [contributorAccount.publicKey, { Sr25519: signature }],
    })
    .send();

  return tx.hash;
};

export const associateEth = async (
  api: ApiPromise,
  signer: ethers.Signer,
  rewardAccount: KeyringPair
) => {
  const message = `picasso-${toHexString(rewardAccount.publicKey)}`;
  const signature = await signer.signMessage(message);

  const tx = await api.tx.crowdloanRewards
    .associate(rewardAccount.publicKey, {
      proof: { Ethereum: signature },
    })
    .send();

  return tx.hash;
};

export const initialize = async (api: ApiPromise, sudoAccount: KeyringPair) => {
  return await sendAndWaitForSuccess(
    api,
    sudoAccount,
    api.events.sudo.Sudid.is,
    api.tx.sudo.sudo(api.tx.crowdloanRewards.initialize())
  );
};

export const crowdloanRewardsPopulateTest = async (
  api: ApiPromise,
  walletAlice: KeyringPair,
  myDotWallets: KeyringPair[],
  myEthWallets: string[]
) => {
  const sudoKey = walletAlice;
  const vesting48weeks = api.createType("u32", 100800);
  const reward = api.createType("u128", 1_000_000_000_000_000);

  const relay_accounts = R.unfold<
    number,
    [PalletCrowdloanRewardsModelsRemoteAccount, u128, u32]
  >(
    (n) =>
      n > 10
        ? false
        : [
            [
              api.createType("PalletCrowdloanRewardsModelsRemoteAccount", {
                RelayChain: walletAlice.derive("/contributor-" + n.toString())
                  .publicKey,
              }),
              reward,
              vesting48weeks,
            ],
            n + 1,
          ],
    1
  );

  if (myDotWallets.length) {
    myDotWallets.forEach((wallet) => {
      typeof wallet === "object"
        ? relay_accounts.push([
            api.createType("PalletCrowdloanRewardsModelsRemoteAccount", {
              RelayChain: wallet.publicKey,
            }),
            reward,
            vesting48weeks,
          ])
        : typeof wallet === "string"
        ? relay_accounts.push([
            api.createType("PalletCrowdloanRewardsModelsRemoteAccount", {
              RelayChain: base58.decode(wallet).subarray(1, 33),
            }),
            reward,
            vesting48weeks,
          ])
        : console.log("dont add");
    });
  }

  const eth_accounts = R.unfold<
    number,
    [PalletCrowdloanRewardsModelsRemoteAccount, u128, u32]
  >(
    (n) =>
      n > 10
        ? false
        : [
            [
              api.createType("PalletCrowdloanRewardsModelsRemoteAccount", {
                Ethereum: ethAccount(n).address,
              }),
              reward,
              vesting48weeks,
            ],
            n + 1,
          ],
    1
  );

  if (myEthWallets.length) {
    myEthWallets.forEach((wallet) => [
      eth_accounts.push([
        api.createType("PalletCrowdloanRewardsModelsRemoteAccount", {
          Ethereum: wallet,
        }),
        reward,
        vesting48weeks,
      ]),
    ]);
  }
  const accounts = relay_accounts.concat(eth_accounts);
  return await sendAndWaitForSuccess(
    api,
    sudoKey,
    api.events.sudo.Sudid.is,
    api.tx.sudo.sudo(api.tx.crowdloanRewards.populate(accounts))
  );
};

export const crowdloanRewardsPopulateJSON = async (
  api: ApiPromise,
  walletAlice: KeyringPair,
  dotWallets: { address: string; rewards: string }[],
  ethWallets: { address: string; rewards: string }[]
) => {
  const sudoKey = walletAlice;
  const vesting48weeks = api.createType("u32", 100800);

  const decimals = new BigNumber(10).pow(12);

  const relay = dotWallets.map((contributor, ind) => {
    const reward = new BigNumber(contributor.rewards).times(decimals).toString()
    // console.log('KSM ', contributor.address, reward)

    return [
      api.createType("PalletCrowdloanRewardsModelsRemoteAccount", {
        RelayChain: base58.decode(contributor.address).subarray(1, 33),
      }),
      api.createType("u128", reward),
      vesting48weeks
    ]
  })

  const eth = ethWallets.map((contributor, ind) => {
    const reward = new BigNumber(contributor.rewards).times(decimals).toString()
    // console.log('ETH ', contributor.address, reward)

    return [
      api.createType("PalletCrowdloanRewardsModelsRemoteAccount", {
        Ethereum: contributor.address,
      }),
      api.createType("u128", reward),
      vesting48weeks,
    ]
  })

  const accounts = ethWallets.length ? relay.concat(eth) : relay;
  return await sendAndWaitForSuccess(
    api,
    sudoKey,
    api.events.sudo.Sudid.is,
    api.tx.sudo.sudo(api.tx.crowdloanRewards.populate(accounts as any))
  );
};
