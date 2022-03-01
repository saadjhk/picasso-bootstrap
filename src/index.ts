require("dotenv").config();
import Keyring from "@polkadot/keyring";
import { cryptoWaitReady } from "@polkadot/util-crypto";
import {crowdloanRewardsPopulateJSON,
  crowdloanRewardsPopulateTest,
  initialize,
} from "./pallets";
import * as definitions from "./interfaces/definitions";
import { buildApi } from "./utils";
import { ethers } from "ethers";
import { ApiPromise } from "@polkadot/api";
// import { base58 } from "micro-base";
import rewards from "./constants/rewards.json";

const createBlock = async (apiPromise: ApiPromise, count: number) => {
  if (count <= 0) return;
  const blockToMine = await apiPromise.rpc.engine.createBlock(true, true);
  console.log(blockToMine.toHuman());
  if (count > 0) createBlock(apiPromise, count-1);
}

const main = async () => {
  await cryptoWaitReady();

  const kr = new Keyring({ type: "sr25519" });
  const myDot1 = kr.addFromMnemonic(
    process.env.DOT_MNEMONIC ? process.env.DOT_MNEMONIC : ""
  );
  const myDot2 = kr.addFromMnemonic(
    process.env.DOT_MNEMONIC1 ? process.env.DOT_MNEMONIC1 : ""
  );
  const walletSudo = kr.addFromUri("//Alice"); // alice

  // const decoded = base58.decode("15SP8c4vwuUFgGUpfXuqFC3WsdPytBw5uPdgM2qbLeavem5V")
  // console.log('mb', decoded.subarray(1, 33));
  // console.log('kr', myDot1.publicKey);

  const myEth1 = new ethers.Wallet(
    process.env.ETH_PK ? process.env.ETH_PK : ""
  );
  const myEth2 = new ethers.Wallet(
    process.env.ETH_PK ? process.env.ETH_PK : ""
  );

  const rpc = Object.keys(definitions).reduce(
    (accumulator, key) => ({
      ...accumulator,
      [key]: (definitions as any)[key].rpc,
    }),
    {}
  );
  const types = Object.values(definitions).reduce(
    (accumulator, { types }) => ({ ...accumulator, ...types }),
    {}
  );
  const api = await buildApi(process.env.PICASSO_RPC_URL || "", types, rpc);

  // const walletBob = kr.addFromUri("//Bob");

  // const crPopRes = await crowdloanRewardsPopulateTest(
  //   api,
  //   walletSudo,
  //   [
  //     myDot1,
  //     myDot2,
  //     // peter dot wallets
  //     "5uymjr2xLL14upmg4nezH5LZMNgenGn7MrbQ2WnJ7dhcDb4C",
  //     "5z6opGwNemAtYG7o7KehBn2KdKbGPw64E23ZpwxcXoGiwufL",
  //     "E4syq7LfkjrZuqofYRg5dX2zzd8DR54p82F2BHuFLqHHGm6",
  //     "GRxsfLzj5wthacZ6bYSdL9FNosAMFBkVhcwWWxGtMsCSx8G",
  //     "FhJDi6usuBii4kbHEiUbYcd2a1yXk5CJCJEkxr2BT3wqHmc",
  //     "5GgjZECB6XsH3iao7rg6dDbMG9urjsWVjinDBF2ngqWFxyoC",
  //     "F53d3jeyFvb2eYsgAERhjC8mogao4Kg4GsdezrqiT8aj55v" // liviu
  //   ] as any[],
  //   [
  //     myEth1.address,
  //     myEth2.address,
  //     // peter eth wallets
  //     "0x33Cd07B1ae8485a6090091ee55389237eCB0Aed4",
  //     "0xfe302f2D69cAf32d71812587ECcd4fcDF8287E22",
  //     "0x38650E1FD89E6bBEfDD2f150190C70da02454b93",
  //   ]
  // );

  const ksm = Object.keys(rewards).filter((addr: string) => {
    return !addr.startsWith("0x")
  }).map((addr) => {
    return {
      address: addr,
      rewards: (rewards as any)[addr]
    }
  })

  const eth = Object.keys(rewards).filter((addr: string) => {
    return addr.startsWith("0x")
  }).map((addr) => {
    return {
      address: addr,
      rewards: (rewards as any)[addr]
    }
  })

  ksm.push({
    address: "5tfaf3MPRwzECcLhnzv75zvML1DHGJcvPYamoSNLoeAgGQ4S",
    rewards: "1223.231"
  });

  eth.push({
    address: myEth1.address.toLowerCase(),
    rewards: "1223.231"
  })

  console.log(ksm.length)
  console.log(eth.length)
  const crPopRes = await crowdloanRewardsPopulateJSON(api, walletSudo, ksm.slice(0, 500), eth.slice(0,500));
  const initRes = await initialize(api, walletSudo);
  
  // createBlock(api, 100_000_000);
  console.log(crPopRes.data.toHuman());
  console.log(initRes.data.toHuman());

};

cryptoWaitReady().then(() => {
  main().catch((err) => {
    console.error(err.message);
    // process.exit(0);
  });
});
