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
import { addFundstoThePool, createPool } from './pallets/liquidityBootstrapping/extrinsics';
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
  //     // peter dot wallets
  //     "5uymjr2xLL14upmg4nezH5LZMNgenGn7MrbQ2WnJ7dhcDb4C",
  //     "5z6opGwNemAtYG7o7KehBn2KdKbGPw64E23ZpwxcXoGiwufL",
  //     "E4syq7LfkjrZuqofYRg5dX2zzd8DR54p82F2BHuFLqHHGm6",
  //     "GRxsfLzj5wthacZ6bYSdL9FNosAMFBkVhcwWWxGtMsCSx8G",
  //     "FhJDi6usuBii4kbHEiUbYcd2a1yXk5CJCJEkxr2BT3wqHmc",
  //     "5GgjZECB6XsH3iao7rg6dDbMG9urjsWVjinDBF2ngqWFxyoC",
  //     "F53d3jeyFvb2eYsgAERhjC8mogao4Kg4GsdezrqiT8aj55v" // liviu
  //     // peter eth wallets
  //     "0x33Cd07B1ae8485a6090091ee55389237eCB0Aed4",
  //     "0xfe302f2D69cAf32d71812587ECcd4fcDF8287E22",
  //     "0x38650E1FD89E6bBEfDD2f150190C70da02454b93",

  // let netRewards = Object.values(rewardsDev).reduce((acc, c) => {
  //   let bnAcc = new BigNumber(acc);
  //   bnAcc = bnAcc.plus(new BigNumber(c));
  //   return bnAcc.toString();
  // }, "0");
  // let decimals = new BigNumber(10).pow(12);
  // let base = new BigNumber(netRewards).times(decimals);
  // const palletId = "5w3oyasYQg6vkbxZKeMG8Dz2evBw1P7Xr7xhVwk4qwwFkm8u";
  // let mintResponse = await sendAndWaitForSuccess(
  //   api,
  //   walletSudo,
  //   api.events.sudo.Sudid.is,
  //   api.tx.sudo.sudo(api.tx.assets.mintInto(1, walletSudo.publicKey, api.createType("u128", base.toString())))
  // );
  // console.log(mintResponse.data.toHuman())
  // let transferResponse = await sendAndWaitFor(
  //   api,
  //   walletSudo,
  //   api.events.balances.Transfer.is,
  //   api.tx.assets.transfer(
  //     1,
  //     palletId,
  //     api.createType("u128", base.toString()),
  //     true
  //   )
  // )
  // console.log(transferResponse.data.toHuman())
  // const crPopRes = await crowdloanRewardsPopulateJSON(
  //   api,
  //   walletSudo,
  //   Object.keys(rewardsDev).filter(addr => !addr.startsWith("0x")).map((rewardAccount: string) => {
  //     return {
  //       address: rewardAccount,
  //       rewards: (rewardsDev as any)[rewardAccount]
  //     }
  //   }),
  //   Object.keys(rewardsDev).filter(addr => addr.startsWith("0x")).map((rewardAccount: string) => {
  //     return {
  //       address: rewardAccount,
  //       rewards: (rewardsDev as any)[rewardAccount]
  //     }
  //   })
  // );
  // console.log(crPopRes.data.toHuman());
  // const initRes = await initialize(api, walletSudo);
  // console.log(initRes.data.toHuman());

  // const KSMBalance = await api.query.tokens.accounts(myDot1.address, "4");
  // console.log('KSM Balance: ', KSMBalance.toHuman())

  // const baseAmount = 250000000000;
  // const quoteAmount = 250000000000;
  // const baseAssetId = 4; // KUSAMA
  // const quoteAssetId = 129; // kUSD
  // const ownerFee = 10000;

  // await mintAssetsToWallet(api, walletSudo, walletSudo, [1, quoteAssetId, baseAssetId])
  // const end = api.createType('u32', api.consts.pablo.lbpMaxSaleDuration);

  // const { data: [result] } = await createPool(
  //   api,
  //   walletSudo,
  //   baseAssetId,
  //   quoteAssetId,
  //   ownerFee,
  //   end
  // );

  // console.log(result.toHuman())
  // const liq = await addFundstoThePool(api, walletSudo, 0, baseAmount, quoteAmount)
  // console.log(liq)

  let KSM = api.createType('Text', 4);
  // @ts-ignore
  let KSMBalance = await api.rpc.assets.balanceOf(KSM as SafeRpcWrapper, walletSudo.address);
  console.log('KSM Balance: ', KSMBalance.toHuman())

  let KUSD = api.createType('Safe', 129);
  // @ts-ignore
  let KUSDBalance = await api.rpc.assets.balanceOf(KUSD as SafeRpcWrapper, walletSudo.address);
  console.log('KUSD Balance: ', KUSDBalance.toHuman())

}

cryptoWaitReady().then(() => {
  main().catch((err) => {
    console.error(err.message)
    // process.exit(0);
  })
})
