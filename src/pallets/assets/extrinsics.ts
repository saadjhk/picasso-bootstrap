import { ApiPromise } from "@polkadot/api";
import { KeyringPair } from "@polkadot/keyring/types";
import BigNumber from "bignumber.js";
import { sendAndWaitForSuccess } from "polkadot-utils";

export const DECIMALS = new BigNumber(10).pow(12); // default decimals
export const MaxMint = new BigNumber('100000').times(DECIMALS);

/***
 * This mints all specified assets to a specified wallet.
 * The best way would be to make a list of all transactions, and sending them at once.
 * But due to issues with our current handler when sending transactions at the same time (Priority to low event),
 * we send them one after another. Check [CU-20jc9ug]
 *
 * @param wallet The wallet receiving the assets.
 * @param sudoKey The sudo key making the transaction.
 * @param assetIDs All assets to be minted to wallet.
 * @param amount Mint amount.
 */
export async function mintAssetsToWallets(api: ApiPromise, wallets: KeyringPair[], sudoKey: KeyringPair, assetIDs:number[]) {
  for (const asset of assetIDs) {
    
    for (const wallet of wallets) {
      const {data: [result]} = await sendAndWaitForSuccess(
        api,
        sudoKey,
        api.events.sudo.Sudid.is,
        api.tx.sudo.sudo(
          api.tx.assets.mintInto(asset, wallet.publicKey, MaxMint.toString())
        )
      )
  
      console.log(result.toHuman())

    }
  }
}

/***
 * This mints all specified assets to a specified wallet.
 * The best way would be to make a list of all transactions, and sending them at once.
 * But due to issues with our current handler when sending transactions at the same time (Priority to low event),
 * we send them one after another. Check [CU-20jc9ug]
 *
 * @param wallet The wallet receiving the assets.
 * @param sudoKey The sudo key making the transaction.
 * @param assetIDs All assets to be minted to wallet.
 * @param amount Mint amount.
 */
 export async function mintAssetsToAddress(api: ApiPromise, wallets: string[], sudoKey: KeyringPair, assetIDs:number[]) {
  for (const asset of assetIDs) {
    
    for (const wallet of wallets) {
      const {data: [result]} = await sendAndWaitForSuccess(
        api,
        sudoKey,
        api.events.sudo.Sudid.is,
        api.tx.sudo.sudo(
          api.tx.assets.mintInto(asset, wallet, MaxMint.toString())
        )
      )
  
      console.log(result.toHuman())

    }
  }
}