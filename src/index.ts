require('dotenv').config()
import Keyring from '@polkadot/keyring'
import { cryptoWaitReady } from '@polkadot/util-crypto'
import { ethers } from "ethers";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { addFundstoThePool, createConstantProductPool } from './pallets/pablo/extrinsics';
import { mintAssetsToWallet } from './pallets/assets/extrinsics';
import * as definitions from "./interfaces/definitions";

const createBlock = async (apiPromise: ApiPromise, count: number) => {
  if (count <= 0) return
  const blockToMine = await apiPromise.rpc.engine.createBlock(true, true)
  console.log(blockToMine.toHuman())
  if (count > 0) createBlock(apiPromise, count - 1)
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

  const baseAssetId = 4; // KUSAMA
  const quoteAssetId = 129; // kUSD
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
  
  const ownerFee = 10000;
  // const createPool = await createConstantProductPool(
  //   api,
  //   walletSudo,
  //   baseAssetId,
  //   quoteAssetId,
  //   ownerFee,
  //   ownerFee
  //   );
 
  const baseAmount = 25000;
  const quoteAmount = 2500;

  const addLiq = await addFundstoThePool(api, walletSudo, 0, baseAmount, quoteAmount)
    
  // console.log(createPool.data.toHuman());
  console.log(addLiq.data.toHuman());
  process.exit(0);
}

cryptoWaitReady().then(() => {
  main().catch((err) => {
    console.error(err.message)
    // process.exit(0);
  })
})
