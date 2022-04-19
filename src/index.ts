require('dotenv').config()
import Keyring from '@polkadot/keyring'
import { cryptoWaitReady } from '@polkadot/util-crypto'
import {
  crowdloanRewardsPopulateJSON, initialize,
} from "./pallets";
import * as definitions from "./interfaces/definitions";
import { ethers } from "ethers";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { KeyringPair } from '@polkadot/keyring/types'
// import BN from 'bn.js'
import rewardsDev from './constants/rewards-dev.json'
import BigNumber from 'bignumber.js';
import { addFundstoThePool, createConstantProductPool, createLiquidityBootstrappingPool } from './pallets/pablo/extrinsics';
import { sendAndWaitFor, sendAndWaitForSuccess } from 'polkadot-utils';
import { mintAssetsToWallet } from './pallets/assets/extrinsics';
import { SafeRpcWrapper } from './interfaces';

function sleep(delay: number) {
  var start = new Date().getTime()
  while (new Date().getTime() < start + delay);
}

const createBlock = async (apiPromise: ApiPromise, count: number) => {
  if (count <= 0) return
  const blockToMine = await apiPromise.rpc.engine.createBlock(true, true)
  console.log(blockToMine.toHuman())
  if (count > 0) createBlock(apiPromise, count - 1)
}

const populateChunk = async (
  api: ApiPromise,
  walletSudo: KeyringPair,
  ksm: { address: string; rewards: string }[],
  eth: { address: string; rewards: string }[],
  startingIndex: number,
) => {
  const response = await crowdloanRewardsPopulateJSON(
    api,
    walletSudo,
    ksm.slice(startingIndex * 1000, (startingIndex + 1) * 1000),
    (startingIndex + 1) * 1000 > ksm.length ? eth : [],
  )

  console.log(response.data.toHuman())
  if ((startingIndex + 1) * 1000 < ksm.length) {
    populateChunk(api, walletSudo, ksm, eth, startingIndex + 1)
  }
}

const main = async () => {
  await cryptoWaitReady()
  const kr = new Keyring({ type: 'sr25519' })
  const myDot1 = kr.addFromMnemonic(
    process.env.DOT_MNEMONIC ? process.env.DOT_MNEMONIC : '',
  )
  const myDot2 = kr.addFromMnemonic(
    process.env.DOT_MNEMONIC1 ? process.env.DOT_MNEMONIC1 : '',
  )
  const walletSudo = kr.addFromUri('//Alice') // alice
  const myEth1 = new ethers.Wallet(process.env.ETH_PK ? process.env.ETH_PK : '')
  const myEth2 = new ethers.Wallet(
    process.env.ETH_PK1 ? process.env.ETH_PK1 : '',
  )

  const rpc = Object.keys(definitions)
      .filter(k => Object.keys((definitions as any)[k].rpc).length > 0)
      .reduce((accumulator, key) => ({ ...accumulator, [key]: (definitions as any)[key].rpc }), {});
    const types = Object.values(definitions).reduce((accumulator, { types }) => ({ ...accumulator, ...types }), {});

  const provider = new WsProvider(process.env.PICASSO_RPC_URL || '', 1000);
  const api = await ApiPromise.create({ provider, types, rpc });

  await api.isReady

  const baseAmount = 250000000000;
  const quoteAmount = 250000000000;
  const baseAssetId = 4; // KUSAMA
  const quoteAssetId = 129; // kUSD
  const ownerFee = 10000;
  
  await mintAssetsToWallet(api, walletSudo, walletSudo, [1, quoteAssetId, baseAssetId])

  // LBP
  // const end = api.createType('u32', api.consts.pablo.lbpMaxSaleDuration);
  // const { data: [result] } = await createLiquidityBootstrappingPool(
  //   api,
  //   walletSudo,
  //   baseAssetId,
  //   quoteAssetId,
  //   ownerFee,
  //   end
  // );

  const { data: [result] } = await createConstantProductPool(
    api,
    walletSudo,
    baseAssetId,
    quoteAssetId,
    ownerFee,
    ownerFee
  );

  console.log(result.toHuman());


  process.exit(0);
}

cryptoWaitReady().then(() => {
  main().catch((err) => {
    console.error(err.message)
    // process.exit(0);
  })
})
