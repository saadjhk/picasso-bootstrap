import { ApiPromise } from '@polkadot/api'
import { KeyringPair } from '@polkadot/keyring/types'
import BigNumber from 'bignumber.js';
import { sendAndWaitForSuccess } from 'polkadot-utils'

export async function createPool(
  api: ApiPromise,
  sudoKey: KeyringPair,
  baseAssetId: number,
  quoteAssetId: number,
  fee: number,
  end: any,
  startDelay = 5,
) {
  const start = await api.query.system.number();

  const pool = api.createType('PalletPabloPoolInitConfiguration', {
    LiquidityBootstrapping: {
      owner: api.createType('AccountId32', sudoKey.publicKey),
      pair: api.createType('ComposableTraitsDefiCurrencyPairCurrencyId', {
        base: api.createType('u128', baseAssetId),
        quote: api.createType('u128', quoteAssetId),
      }),
      sale: api.createType('ComposableTraitsDexSale', {
        start: api.createType(
          'u32',
          new BigNumber(start.toString()).plus(startDelay).toString(),
        ),
        end: end,
        initialWeight: api.consts.liquidityBootstrapping.maxInitialWeight,
        finalWeight: api.consts.liquidityBootstrapping.minFinalWeight,
      }),
      fee: api.createType('Permill', fee)
    }
  });
  return await sendAndWaitForSuccess(
    api,
    sudoKey,
    api.events.pablo.PoolCreated.is,
    api.tx.pablo.create(pool),
  )
}
export async function addFundstoThePool(
  api: ApiPromise,
  walletId: KeyringPair,
  poolId: number,
  baseAmount: number,
  quoteAmount: number,
) {
  const baseAmountParam = api.createType('u128', baseAmount)
  const quoteAmountParam = api.createType('u128', quoteAmount)
  const keepAliveParam = api.createType('bool', true)
  return await sendAndWaitForSuccess(
    api,
    walletId,
    api.events.liquidityBootstrapping.LiquidityAdded.is,
    api.tx.liquidityBootstrapping.addLiquidity(
      poolId,
      baseAmountParam,
      quoteAmountParam,
      keepAliveParam,
    ),
  )
}

export async function buyFromPool(
  api: ApiPromise,
  walletId: KeyringPair,
  poolId: number,
  assetId: number,
  amountToBuy: number,
) {
  const poolIdParam = api.createType('u128', poolId)
  const assetIdParam = api.createType('u128', assetId)
  const amountParam = api.createType('u128', amountToBuy)
  const keepAlive = api.createType('bool', true)
  return await sendAndWaitForSuccess(
    api,
    walletId,
    api.events.liquidityBootstrapping.Swapped.is,
    api.tx.liquidityBootstrapping.buy(
      poolIdParam,
      assetIdParam,
      amountParam, // convert amount to buy from price
      keepAlive,
    ),
  )
}

export async function sellToPool(
  api: ApiPromise,
  walletId: KeyringPair,
  poolId: number,
  assetId: number,
  amount: number,
) {
  const poolIdParam = api.createType('u128', poolId)
  const assetIdParam = api.createType('u128', assetId)
  const amountParam = api.createType('u128', amount)
  const keepAliveParam = api.createType('bool', false)
  return await sendAndWaitForSuccess(
    api,
    walletId,
    api.events.liquidityBootstrapping.Swapped.is,
    api.tx.liquidityBootstrapping.sell(
      poolIdParam,
      assetIdParam,
      amountParam,
      keepAliveParam,
    ),
  )
}

export async function removeLiquidityFromPool(
  api: ApiPromise,
  walletId: KeyringPair,
  poolId: number,
) {
  const poolIdParam = api.createType('u128', poolId)
  return await sendAndWaitForSuccess(
    api,
    walletId,
    api.events.liquidityBootstrapping.PoolDeleted.is, // Doesn't Exist!
    api.tx.liquidityBootstrapping.removeLiquidity(poolIdParam),
  )
}

export async function swapTokenPairs(
  api: ApiPromise,
  wallet: KeyringPair,
  poolId: number,
  baseAssetId: number,
  quoteAssetId: number,
  quoteAmount: number,
  minReceiveAmount = 0,
) {
  const poolIdParam = api.createType('u128', poolId)
  const currencyPair = api.createType('ComposableTraitsDefiCurrencyPair', {
    base: api.createType('u128', baseAssetId),
    quote: api.createType('u128', quoteAssetId),
  })
  const quoteAmountParam = api.createType('u128', quoteAmount)
  const minReceiveParam = api.createType('u128', minReceiveAmount)
  const keepAliveParam = api.createType('bool', true)
  return await sendAndWaitForSuccess(
    api,
    wallet,
    api.events.liquidityBootstrapping.Swapped.is,
    api.tx.liquidityBootstrapping.swap(
      poolIdParam,
      currencyPair,
      quoteAmountParam,
      minReceiveParam,
      keepAliveParam,
    ),
  )
}
