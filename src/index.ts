require("dotenv").config();
import Keyring from "@polkadot/keyring";
import { cryptoWaitReady } from "@polkadot/util-crypto";
import {
  crowdloanRewardsPopulateJSON,
  // crowdloanRewardsPopulateTest,
  initialize,
} from "./pallets";
import * as definitions from "./interfaces/definitions";
import { buildApi } from "./utils";
import { ethers } from "ethers";
import { ApiPromise } from "@polkadot/api";
// import { base58 } from "micro-base";
// import rewards from "./constants/rewards.json";

import { KeyringPair } from "@polkadot/keyring/types";
import BN from "bn.js";
function sleep(delay: number) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}
// createBlock(api, 100_000_000);
const createBlock = async (apiPromise: ApiPromise, count: number) => {
  if (count <= 0) return;
  const blockToMine = await apiPromise.rpc.engine.createBlock(true, true);
  console.log(blockToMine.toHuman());
  if (count > 0) createBlock(apiPromise, count - 1);
};

const populateChunk = async (
  api: ApiPromise,
  walletSudo: KeyringPair,
  ksm: { address: string; rewards: string }[],
  eth: { address: string; rewards: string }[],
  startingIndex: number
) => {
  const response = await crowdloanRewardsPopulateJSON(
    api,
    walletSudo,
    ksm.slice(startingIndex * 1000, (startingIndex + 1) * 1000),
    (startingIndex + 1) * 1000 > ksm.length ? eth : []
  );

  console.log(response.data.toHuman());
  if ((startingIndex + 1) * 1000 < ksm.length) {
    populateChunk(api, walletSudo, ksm, eth, startingIndex + 1);
  }
};

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
    process.env.ETH_PK1 ? process.env.ETH_PK1 : ""
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

  // const ksm = Object.keys(rewards)
  //   .filter((addr: string) => {
  //     return !addr.startsWith("0x");
  //   })
  //   .map((addr) => {
  //     return {
  //       address: addr,
  //       rewards: (rewards as any)[addr],
  //     };
  //   });

  // const eth = Object.keys(rewards)
  //   .filter((addr: string) => {
  //     return addr.startsWith("0x");
  //   })
  //   .map((addr) => {
  //     return {
  //       address: addr,
  //       rewards: (rewards as any)[addr],
  //     };
  //   });

  // ksm.push({
  //   address: "5tfaf3MPRwzECcLhnzv75zvML1DHGJcvPYamoSNLoeAgGQ4S",
  //   rewards: "1223.231",
  // });

  // eth.push({
  //   address: myEth1.address.toLowerCase(),
  //   rewards: "1223.231",
  // });
  // const crPopRes = await crowdloanRewardsPopulateJSON(api, walletSudo, ksm.slice(0, 1500), eth.slice(0,500));

  const palletId = "5w3oyasYQg6vkbxZKeMG8Dz2evBw1P7Xr7xhVwk4qwwFkm8u";
  const txM = await api.tx.sudo
    .sudo(
      api.tx.assets.mintInto(
        1,
        walletSudo.publicKey,
        api.createType("u128", (1400 * 1e12).toString())
      )
    )
    .signAndSend(walletSudo, async (result) => {
      console.log(`[MINT] Current status is ${result.status}`);
      if (result.status.isInBlock) {
        console.log(
          `[MINT] Transaction included at blockHash ${result.status.asInBlock}`
        );
      } else if (result.status.isFinalized) {
        console.log(
          `[MINT] Transaction finalized at blockHash ${result.status.asFinalized}`
        );

        const tx = await api.tx.assets
          .transfer(
            1,
            palletId,
            api.createType("u128", (1400 * 1e12).toString()),
            true
          )
          .signAndSend(walletSudo, async (result1) => {
            console.log(`[TRANSFER] Current status is ${result1.status}`);
            if (result1.status.isInBlock) {
              console.log(
                `[TRANSFER] Transaction included at blockHash ${result1.status.asInBlock}`
              );
            } else if (result1.status.isFinalized) {
              console.log(
                `[TRANSFER] Transaction finalized at blockHash ${result1.status.asFinalized}`
              );
            }
          });
      }
    });

  // const crPopRes = await crowdloanRewardsPopulateJSON(
  //   api,
  //   walletSudo,
  //   [
  //     { address: "5tfaf3MPRwzECcLhnzv75zvML1DHGJcvPYamoSNLoeAgGQ4S", rewards: "100"},
  //     { address: "5y1hoDbgnAKsL9JZ3d1zkM5LYQQPaAnb9Un7VXMM2YipSeUE", rewards: "100"},
  //     // peter dot wallets
  //     { address: "5uymjr2xLL14upmg4nezH5LZMNgenGn7MrbQ2WnJ7dhcDb4C", rewards: "100"},
  //     { address: "5z6opGwNemAtYG7o7KehBn2KdKbGPw64E23ZpwxcXoGiwufL", rewards: "100"},
  //     { address: "E4syq7LfkjrZuqofYRg5dX2zzd8DR54p82F2BHuFLqHHGm6", rewards: "100"},
  //     { address: "GRxsfLzj5wthacZ6bYSdL9FNosAMFBkVhcwWWxGtMsCSx8G", rewards: "100"},
  //     { address: "FhJDi6usuBii4kbHEiUbYcd2a1yXk5CJCJEkxr2BT3wqHmc", rewards: "100"},
  //     { address: "5GgjZECB6XsH3iao7rg6dDbMG9urjsWVjinDBF2ngqWFxyoC", rewards: "100"},
  //     { address: "F53d3jeyFvb2eYsgAERhjC8mogao4Kg4GsdezrqiT8aj55v", rewards: "100"}, // liviu
  //   ],
  //   [
  //     { address: myEth1.address, rewards: "100"},
  //     { address: myEth2.address, rewards: "100"},
  //     // peter eth wallets
  //     { address: "0x33Cd07B1ae8485a6090091ee55389237eCB0Aed4", rewards: "100"},
  //     { address: "0xfe302f2D69cAf32d71812587ECcd4fcDF8287E22", rewards: "100"},
  //     { address: "0x38650E1FD89E6bBEfDD2f150190C70da02454b93", rewards: "100"},
  //   ]
  // );
  // console.log(crPopRes.data.toHuman());
  
  // const initRes = await initialize(api, walletSudo);
  // console.log(initRes.data.toHuman());
};

cryptoWaitReady().then(() => {
  main().catch((err) => {
    console.error(err.message);
    // process.exit(0);
  });
});
