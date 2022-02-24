require("dotenv").config();
import Keyring from "@polkadot/keyring";
import { cryptoWaitReady } from "@polkadot/util-crypto";
import {
  crowdloanRewardsPopulateTest,
  initialize,
  amountToClaim,
} from "./pallets";
import * as definitions from "./interfaces/definitions";
import { buildApi } from "./utils";
import { ethers } from "ethers";
import { ApiPromise } from "@polkadot/api";
// import { base58 } from "micro-base";

const createBlock = async (apiPromise: ApiPromise, count: number) => {
  if (count <= 0) return;
  const blockToMine = await apiPromise.rpc.engine.createBlock(true, true);
  console.log(blockToMine.toHuman());
  if (count > 0) createBlock(apiPromise, count-1);
}

function sleep(delay: number) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
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
  // const initRes = await initialize(api, walletSudo);
  
  // const sRelRes = await setRelayer(api, walletSudo, walletSudo);
  // const sNetRes = await setNetwork(api, walletSudo);
  // const sBudgetRes = await setBudget(1, api, walletSudo);

  // const blockNum = await api.rpc.chain.getBlock();
  // const {
  //   block: {
  //     header: { number },
  //   },
  // }: any = blockNum.toHuman();

  // const mosaicTransferId = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("TimeLockedMint"));
  // const timelockedMintRes = await timeLockedMint(
  //   api,
  //   1,
  //   walletBob,
  //   100_000_00,
  //   5,
  //   mosaicTransferId,
  //   walletSudo
  // );

  // let blocksToMine = 1000;
  // const b1 = await api.rpc.engine.createBlock(true, true);
  // const b2 = await api.rpc.engine.createBlock(true, true);

  // let response = await Promise.all(blockPromises);
  // response = response.map((i) => i.toHuman())
  // console.log(response[0])
  // console.log(response[1])
  // for (let i = 0 ; i < blocksToMine ; i++) {
  //   console.log('Waiting');
  //   sleep(10000);
  //   console.log('Create block RPC');
  //   api.rpc.engine.createBlock(true, true).then((created) => {
  //     console.log(created);
  //   })
  // }

  // console.log(`Mosaic Transfer Mint: `, {mosaicTransferId});
  // console.log(crPopRes.data.toHuman());
  // console.log(initRes.data.toHuman());
  // console.log(sRelRes.data.toHuman());
  // console.log(sNetRes.data.toHuman());
  // console.log(sBudgetRes.data.toHuman());
  // console.log(timelockedMintRes.data.toHuman());
  // console.log(claimToRes.data.toHuman());

  createBlock(api, 1000);

  setTimeout(() => {
    amountToClaim(api, myDot1).then((val) => {
      console.log(val);
      // process.exit(0);
    });
  }, 10000);
};

cryptoWaitReady().then(() => {
  main().catch((err) => {
    console.error(err.message);
    // process.exit(0);
  });
});
