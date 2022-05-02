import { ApiPromise } from "@polkadot/api";
import { KeyringPair } from "@polkadot/keyring/types";
import { BigNumber } from "bignumber.js";
import { DECIMALS, mintAssetsToWallet } from "./pallets/assets/extrinsics";
import { addFundstoThePool, createLiquidityBootstrappingPool } from "./pallets/pablo/extrinsics";
import { sendWait } from "./utils/polkadot";

export const setupLBP = async (
  api: ApiPromise,
  walletSudo: KeyringPair,
  walletMe: KeyringPair
) => {
  // Base Asset is PICA and Quote Asset is KUSD
  let baseAssetId = 1;
  let quoteAssetId = 129;
  
  // Mint 999999 PICA and KUSD
  await mintAssetsToWallet(api, walletSudo, walletSudo, [quoteAssetId, baseAssetId])
  await mintAssetsToWallet(api, walletMe, walletSudo, [quoteAssetId])

  // 1.00 % owner fee for the pool
  const ownerFee = 10000;

  // Create LBP with Max Sale Duration
  const end = api.createType('u32', api.consts.pablo.lbpMaxSaleDuration);
  const createLBP = await createLiquidityBootstrappingPool(
    api,
    walletSudo,
    baseAssetId,
    quoteAssetId,
    ownerFee,
    end
  );
  console.log('LBP Pool Created: ', createLBP.data.toJSON());

  // Add Liquidity to the Pool
  const baseAssetAmount = new BigNumber('100000').times(DECIMALS);
  const quoteAssetAmount = new BigNumber('950000').times(DECIMALS);
  const addLiqRes = await addFundstoThePool(api, walletSudo, 0, baseAssetAmount.toString(), quoteAssetAmount.toString());
  console.log('LBP Liquidity Added: ', addLiqRes.data.toHuman());

  // Register in DEX Router
  let picaKusdRoute = api.createType("ComposableTraitsDefiCurrencyPairCurrencyId", {
    base: api.createType('u128', baseAssetId),
    quote: api.createType('u128', quoteAssetId)
  });

  const kusdPicaRouteRes = await sendWait(
      api,
      api.tx.dexRouter.updateRoute(picaKusdRoute, [0]),
      walletSudo
  );

  console.log(kusdPicaRouteRes.toHuman());
}


export const setupPablo = async (
    api: ApiPromise,
    walletSudo: KeyringPair,
    _walletUser: KeyringPair
) => {
    // let baseAssetId = 1; // PICASSO
    // let quoteAssetId = 4; // KUSAMA
    // const ownerFee = 10000;
    // await mintAssetsToWallet(api, walletSudo, walletSudo, [quoteAssetId, baseAssetId])

    // const createConstantProduct = await createConstantProductPool(
    //   api,
    //   walletSudo,
    //   baseAssetId,
    //   quoteAssetId,
    //   ownerFee,
    //   ownerFee
    // );
    // console.log('Uniswap Pool Created: ', createConstantProduct.data.toHuman());

    // baseAssetId = 1;
    // quoteAssetId = 129;
    // const createStableSwap = await createStableSwapPool(
    //   api,
    //   walletSudo,
    //   baseAssetId,
    //   quoteAssetId,
    //   100,
    //   ownerFee,
    //   ownerFee
    // )
    // console.log('Curve Pool Created: ', createStableSwap.data.toHuman());

    // const baseAmount = 2500;
    // const quoteAmount = 2500;
    // const lbpLiquidity = await addFundstoThePool(api, walletSudo, 0, baseAmount, quoteAmount);
    // const constantProductLiquidity = await addFundstoThePool(api, walletSudo, 1, baseAmount, quoteAmount);
    // console.log('LBP Liquidity: ', lbpLiquidity.data.toHuman());
  
    // let ksmPicaRoute = api.createType("ComposableTraitsDefiCurrencyPairCurrencyId", {
    //     base: api.createType('u128', baseAssetId),
    //     quote: api.createType('u128', quoteAssetId)
    //   });

    // const ksmkpicaRouteRes = await sendWait(
    //     api,
    //     api.tx.dexRouter.updateRoute(ksmPicaRoute, [0]),
    //     walletSudo
    // )

    // console.log('KSM PICA Route: ', ksmkpicaRouteRes.toHuman())

    // baseAssetId = 1;
    // let kusdPicaRoute = api.createType("ComposableTraitsDefiCurrencyPairCurrencyId", {
    //   base: api.createType('u128', baseAssetId),
    //   quote: api.createType('u128', quoteAssetId)
    // });

    // const kusdPicaRouteRes = await sendWait(
    //     api,
    //     api.tx.dexRouter.updateRoute(kusdPicaRoute, [1]),
    //     walletSudo
    // )

    // console.log('PICA KUSD Route: ', kusdPicaRouteRes.toHuman())
    await setupLBP(api, walletSudo, _walletUser)
    return;
}