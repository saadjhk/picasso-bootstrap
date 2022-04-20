import { ApiPromise } from "@polkadot/api";
import { KeyringPair } from "@polkadot/keyring/types";
import { mintAssetsToWallet } from "./pallets/assets/extrinsics";
import { createLiquidityBootstrappingPool, createConstantProductPool, addFundstoThePool } from "./pallets/pablo/extrinsics";

export const setupPablo = async (
    api: ApiPromise,
    walletSudo: KeyringPair,
    _walletUser: KeyringPair
) => {
    let baseAssetId = 4; // KUSAMA
    let quoteAssetId = 129; // kUSD
    const ownerFee = 10000;
    await mintAssetsToWallet(api, walletSudo, walletSudo, [1, quoteAssetId, baseAssetId])
    
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

    quoteAssetId = 1;
    const createConstantProduct = await createConstantProductPool(
      api,
      walletSudo,
      baseAssetId,
      quoteAssetId,
      ownerFee,
      ownerFee
    );
   
    // const baseAmount = 2500;
    // const quoteAmount = 2500;
  
    // const lbpLiquidity = await addFundstoThePool(api, walletSudo, 0, baseAmount, quoteAmount);
    // const constantProductLiquidity = await addFundstoThePool(api, walletSudo, 1, baseAmount, quoteAmount);
      
    console.log('LBP Create: ', createLBP.data.toHuman());
    // console.log('LBP Liquidity: ', lbpLiquidity.data.toHuman());
  
    console.log('Uniswap Create: ', createConstantProduct.data.toHuman());
    // console.log('Uniswap Liquidity: ', constantProductLiquidity.data.toHuman());
  
}