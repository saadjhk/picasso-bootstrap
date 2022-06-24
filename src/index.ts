require('dotenv').config()
import { cryptoWaitReady } from '@polkadot/util-crypto'
import { ApiPromise, WsProvider } from "@polkadot/api";
import { getSubstrateWallets, getSudoWallet } from './keys';
import * as definitions from "../interfaces/definitions";
import { createRPC, createTypes } from './utils';
import { setupPablo } from './pablo';
import { setupBonds } from './bond';

const main = async () => {
  await cryptoWaitReady()
  const sudoWallet = getSudoWallet("dali-local");
  const dotWallets = getSubstrateWallets();
  const ethWallets = getSubstrateWallets();

  if (!dotWallets.length || !ethWallets.length) throw new Error('Needs atleast one ETH and Substrate wallet')

  const rpc = createRPC(definitions);
  const types = createTypes(definitions);

  const provider = new WsProvider(process.env.PICASSO_RPC_URL || '', 1000);
  const api = await ApiPromise.create({ provider, types, rpc });
  await api.isReady

  await setupPablo(api, sudoWallet, dotWallets[0])
  await setupBonds(api, sudoWallet, dotWallets[0]);

  await api.disconnect();
  process.exit(0);
}

cryptoWaitReady().then(() => {
  main().catch((err) => {
    console.error(err.message)
  })
})
