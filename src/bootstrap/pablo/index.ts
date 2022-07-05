import { ApiPromise } from "@polkadot/api";
import { KeyringPair } from "@polkadot/keyring/types";
import {
  toChainUnits,
  toConstantProductPoolInitConfig,
  toLiquidityBootstrappingPoolInitConfig,
  toPabloPoolPair,
  toStableSwapPoolInitConfig
} from "@picasso-bootstrap/utils";
import {
  addLiquidity,
  createConstantProductPool,
  createLiquidityBootstrappingPool,
  enableTwap,
  updateDexRoute
} from "@picasso-bootstrap/lib/pallets/pablo/extrinsics";
import config from "@picasso-bootstrap/constants/config.json";
import BigNumber from "bignumber.js";
import { mintAssetsToWallets } from "@picasso-bootstrap/lib";

export async function bootstrapPools(api: ApiPromise, wallets: KeyringPair[], walletSudo: KeyringPair): Promise<void> {
  // Mint 10 Tokens For Gas
  await mintAssetsToWallets(api, wallets, walletSudo, ["1"], toChainUnits(10));

  let walletIndex = 0;
  for (const pool of config.pools as any[]) {
    let poolId;
    try {
      if (pool.sale) {
        const start = await api.query.system.number();
        const lbpConfig = toLiquidityBootstrappingPoolInitConfig(
          api,
          wallets[walletIndex],
          pool,
          new BigNumber(start.toString()),
          25
        );
        const lbpCreated = await createLiquidityBootstrappingPool(api, wallets[walletIndex], lbpConfig);
        console.log(`LBP Created: ${lbpCreated.data[0].toString()}`);
        poolId = new BigNumber(lbpCreated.data[0].toString());
      } else if (pool.baseWeight) {
        const cppConfig = toConstantProductPoolInitConfig(api, wallets[walletIndex], pool);
        const cppCreated = await createConstantProductPool(api, wallets[walletIndex], cppConfig);
        console.log(`CPP Created: ${cppCreated.data[0].toString()}`);
        poolId = new BigNumber(cppCreated.data[0].toString());
      } else if (pool.amplificationCoefficient) {
        const ssConfig = toStableSwapPoolInitConfig(api, wallets[walletIndex], pool);
        const ssCreated = await createConstantProductPool(api, wallets[walletIndex], ssConfig);
        console.log(`Stable Swap Pool Created: ${ssCreated.data[0].toString()}`);
        poolId = new BigNumber(ssCreated.data[0].toString());
      }

      if (poolId) {
        if (pool.addLiquidity) {
          await mintAssetsToWallets(
            api,
            [wallets[walletIndex]],
            walletSudo,
            [pool.pair.base],
            new BigNumber(pool.liquidityAmount.base)
          );
          await mintAssetsToWallets(
            api,
            [wallets[walletIndex]],
            walletSudo,
            [pool.pair.quote],
            new BigNumber(pool.liquidityAmount.quote)
          );

          const liquidityAdded = await addLiquidity(
            api,
            wallets[walletIndex],
            poolId,
            pool.liquidityAmount.base,
            pool.liquidityAmount.quote
          );
          console.log(`Liquidity Added: ${liquidityAdded.data.toHuman()}`);
        }
        if (pool.addDexRoute) {
          let pair = toPabloPoolPair(api, pool.pair.base, pool.pair.quote);
          const dexRouteAdded = await updateDexRoute(api, walletSudo, pair, poolId.toNumber());
          console.log(`Dex Route Added: ${dexRouteAdded.data.toHuman()}`);
        }
        if (pool.enableTwap) {
          let twapEnabled = await enableTwap(api, walletSudo, poolId.toNumber());
          console.log(`Twap Enabled: ${twapEnabled.data.toHuman()}`);
        }
      }

      walletIndex = (walletIndex + 1) % wallets.length;
    } catch (err) {
      console.error(err);
      return;
    }
  }
}
