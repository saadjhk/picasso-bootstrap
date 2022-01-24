import { ApiPromise } from "@polkadot/api";
import { u128, u32 } from "@polkadot/types-codec";
import { KeyringPair } from "@polkadot/keyring/types";
import { ethers } from "ethers";
import { ethAccount, toHexString } from "../../utils";
import * as R from "ramda";
import { PalletCrowdloanRewardsModelsRemoteAccount } from "../../interfaces";
import { sendAndWaitForSuccess } from "polkadot-utils";

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
  walletAlice: KeyringPair
) => {
  const sudoKey = walletAlice;
  const vesting48weeks = api.createType("u32", 100800);
  const reward = api.createType("u128", 1_000_000_000_000);

  const relay_accounts = R.unfold<
    number,
    [PalletCrowdloanRewardsModelsRemoteAccount, u128, u32]
  >(
    (n) =>
      n > 50
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

  const eth_accounts = R.unfold<
    number,
    [PalletCrowdloanRewardsModelsRemoteAccount, u128, u32]
  >(
    (n) =>
      n > 50
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

  const accounts = relay_accounts.concat(eth_accounts);
  return await sendAndWaitForSuccess(
    api,
    sudoKey,
    api.events.sudo.Sudid.is,
    api.tx.sudo.sudo(api.tx.crowdloanRewards.populate(accounts))
  );
};
