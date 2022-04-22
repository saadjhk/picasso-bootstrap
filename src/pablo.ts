import { ApiPromise } from "@polkadot/api";
import { KeyringPair } from "@polkadot/keyring/types";
import { mintAssetsToWallet } from "./pallets/assets/extrinsics";
import { createConstantProductPool } from "./pallets/pablo/extrinsics";
import { ISubmittableResult } from '@polkadot/types/types';

export const setupPablo = async (
    api: ApiPromise,
    walletSudo: KeyringPair,
    _walletUser: KeyringPair
) => {
    let baseAssetId = 4; // KUSAMA
    let quoteAssetId = 129; // kUSD
    const ownerFee = 10000;
    await mintAssetsToWallet(api, walletSudo, walletSudo, [1, quoteAssetId, baseAssetId])

    const createConstantProduct = await createConstantProductPool(
      api,
      walletSudo,
      baseAssetId,
      quoteAssetId,
      ownerFee,
      ownerFee
    );
    console.log('Uniswap Create: ', createConstantProduct.data.toHuman());
   
        
    // LBP
    // const end = api.createType('u32', api.consts.pablo.lbpMaxSaleDuration);
    // const createLBP = await createLiquidityBootstrappingPool(
    //   api,
    //   walletSudo,
    //   baseAssetId,
    //   quoteAssetId,
    //   ownerFee,
    //   end
    // );    
    // const baseAmount = 2500;
    // const quoteAmount = 2500;
    // const lbpLiquidity = await addFundstoThePool(api, walletSudo, 0, baseAmount, quoteAmount);
    // const constantProductLiquidity = await addFundstoThePool(api, walletSudo, 1, baseAmount, quoteAmount);
    // console.log('LBP Create: ', createLBP.data.toHuman());
    // console.log('LBP Liquidity: ', lbpLiquidity.data.toHuman());
  

    let dexRoute = api.createType("ComposableTraitsDefiCurrencyPairCurrencyId", {
        base: api.createType('u128', baseAssetId),
        quote: api.createType('u128', quoteAssetId)
      });

    const call = api.tx.dexRouter.updateRoute(dexRoute, [0])

    const unsub = await call.signAndSend(walletSudo, (res: ISubmittableResult) => {
      console.log(res.toHuman())
      if (res.dispatchError) {
        console.log(res.dispatchError.toHuman());
        unsub();
      }

      if (res.isFinalized) {
        console.log('Finalized');
        unsub();
      }
    });

}