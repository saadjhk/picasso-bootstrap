import { ApiPromise } from "@polkadot/api";
import { KeyringPair } from "@polkadot/keyring/types";
import { mintAssetsToWallets } from "./pallets/assets/extrinsics";
import { createOffer } from "./pallets/bondedFinance/extrinsics";
import { toChainUnits } from "./utils";

async function setupBondOffer(
  api: ApiPromise,
  walletSudo: KeyringPair,
  wallet: KeyringPair
): Promise<void> {
  let daliAsset = 1;
  let rewardAsset = 201;
  let principalAsset = 4;

  await mintAssetsToWallets(api, [wallet], walletSudo, [
    daliAsset,
    principalAsset,
    rewardAsset,
  ]);

  const requestParameters = {
    beneficiary: wallet.publicKey,
    asset: api.createType("u128", principalAsset),
    bondPrice: api.createType("u128", toChainUnits(100).toString()),
    nbOfBonds: api.createType("u128", 10),
    maturity: { Finite: { returnIn: api.createType("u32", 100) } },
    reward: {
      asset: api.createType("u128", rewardAsset),
      amount: api.createType("u128", toChainUnits(1000).toString()),
      maturity: api.createType("u32", 20),
    },
  };
  const {
    data: [result],
  } = await createOffer(api, wallet, requestParameters);

  console.log(result.toJSON());
}

export async function setupBonds(
  api: ApiPromise,
  sudoWallet:KeyringPair,
  wallet: KeyringPair
): Promise<void> {
  await setupBondOffer(api, sudoWallet, wallet);
}
