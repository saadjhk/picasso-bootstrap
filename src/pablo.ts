import { ApiPromise } from "@polkadot/api";
import { KeyringPair } from "@polkadot/keyring/types";
import { BigNumber } from "bignumber.js";
import { DECIMALS, mintAssetsToWallet } from "./pallets/assets/extrinsics";
import { addFundstoThePool, createConstantProductPool, createLiquidityBootstrappingPool } from "./pallets/pablo/extrinsics";
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
  const baseAssetAmount = new BigNumber('10000').times(DECIMALS);
  const quoteAssetAmount = new BigNumber('10000').times(DECIMALS);
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

export const setupCpp = async (
  api: ApiPromise,
  walletSudo: KeyringPair,
  walletMe: KeyringPair
) => {
  // Base Asset is KSM and Quote Asset is KUSD
  let baseAssetId = 4;
  let quoteAssetId = 129;

  // Mint 999999 PICA and KSM
  await mintAssetsToWallet(api, walletSudo, walletSudo, [quoteAssetId, baseAssetId])
  await mintAssetsToWallet(api, walletMe, walletSudo, [quoteAssetId, baseAssetId])

  // 1.00 % owner fee for the pool
  const ownerFee = 10000;

  const createLBP = await createConstantProductPool(
    api,
    walletSudo,
    baseAssetId,
    quoteAssetId,
    ownerFee,
    ownerFee
  );
  console.log('UniswapCPP Pool Created: ', createLBP.data.toJSON());

  // Add Liquidity to the Pool
  const baseAssetAmount = new BigNumber('10000').times(DECIMALS);
  const quoteAssetAmount = new BigNumber('10000').times(DECIMALS);

  const addLiqRes = await addFundstoThePool(api, walletSudo, 1, baseAssetAmount.toString(), quoteAssetAmount.toString());
  console.log('UniswapCPP Liquidity Added: ', addLiqRes.data.toHuman());

  // Register in DEX Router
  let KsmKusdRoute = api.createType("ComposableTraitsDefiCurrencyPairCurrencyId", {
    base: api.createType('u128', baseAssetId),
    quote: api.createType('u128', quoteAssetId)
  });

  const kusdPicaRouteRes = await sendWait(
      api,
      api.tx.dexRouter.updateRoute(KsmKusdRoute, [1]),
      walletSudo
  );

  console.log(kusdPicaRouteRes.toHuman());
}


export const setupPablo = async (
    api: ApiPromise,
    walletSudo: KeyringPair,
    _walletUser: KeyringPair
) => {
    await setupLBP(api, walletSudo, _walletUser)
    await setupCpp(api, walletSudo, _walletUser)
    return;
}