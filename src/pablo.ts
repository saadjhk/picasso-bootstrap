import { ApiPromise } from "@polkadot/api";
import { KeyringPair } from "@polkadot/keyring/types";
import { mintAssetsToWallet } from "./pallets/assets/extrinsics";
import { addFundstoThePool, createConstantProductPool, createLiquidityBootstrappingPool, createStableSwapPool } from "./pallets/pablo/extrinsics";
import { ISubmittableResult } from '@polkadot/types/types';
import { sendWait } from "./utils/polkadot";

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
    console.log('Uniswap Pool Created: ', createConstantProduct.data.toHuman());

    baseAssetId = 1;
    quoteAssetId = 129;
    const createStableSwap = await createStableSwapPool(
      api,
      walletSudo,
      baseAssetId,
      quoteAssetId,
      100,
      ownerFee,
      ownerFee
    )
    console.log('Curve Pool Created: ', createStableSwap.data.toHuman());
    
    // LBP
    const end = api.createType('u32', api.consts.pablo.lbpMaxSaleDuration);
    const createLBP = await createLiquidityBootstrappingPool(
      api,
      walletSudo,
      baseAssetId,
      quoteAssetId,
      ownerFee,
      end
    );    
    console.log('LBP Pool Created: ', createLBP.data.toHuman());

    // const baseAmount = 2500;
    // const quoteAmount = 2500;
    // const lbpLiquidity = await addFundstoThePool(api, walletSudo, 0, baseAmount, quoteAmount);
    // const constantProductLiquidity = await addFundstoThePool(api, walletSudo, 1, baseAmount, quoteAmount);
    // console.log('LBP Liquidity: ', lbpLiquidity.data.toHuman());
  

    baseAssetId = 4;
    let ksmkusdRoute = api.createType("ComposableTraitsDefiCurrencyPairCurrencyId", {
        base: api.createType('u128', baseAssetId),
        quote: api.createType('u128', quoteAssetId)
      });

    const ksmkusdRouteRes = await sendWait(
        api,
        api.tx.dexRouter.updateRoute(ksmkusdRoute, [0]),
        walletSudo
    )

    console.log('KSM KUSD Route: ', ksmkusdRouteRes.toHuman())

    baseAssetId = 1;
    let kusdPicaRoute = api.createType("ComposableTraitsDefiCurrencyPairCurrencyId", {
      base: api.createType('u128', baseAssetId),
      quote: api.createType('u128', quoteAssetId)
    });

    const kusdPicaRouteRes = await sendWait(
        api,
        api.tx.dexRouter.updateRoute(kusdPicaRoute, [1]),
        walletSudo
    )

    console.log('PICA KUSD Route: ', kusdPicaRouteRes.toHuman())

    return;
}