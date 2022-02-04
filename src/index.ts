require("dotenv").config();
import Keyring from "@polkadot/keyring";
import { cryptoWaitReady } from "@polkadot/util-crypto";
import { crowdloanRewardsPopulateTest, initialize } from "./pallets";

import * as definitions from "./interfaces/definitions";
import { buildApi } from "./utils";
import {
  setBudget,
  setNetwork,
  setRelayer,
  timeLockedMint,
} from "./pallets/mosaic/extrinsics";
import { ethers } from "ethers";

const main = async () => {
  await cryptoWaitReady();

  const types = Object.values(definitions).reduce(
    (res, { types }): object => ({ ...res, ...types }),
    {}
  );
  const api = await buildApi(process.env.PICASSO_RPC_URL || "", types);
  const kr = new Keyring({ type: "sr25519" });

  const walletSudo = kr.addFromUri("//Alice"); // alice
  const walletBob = kr.addFromUri("//Bob");

  const crPopRes = await crowdloanRewardsPopulateTest(api, walletSudo);
  const initRes = await initialize(api, walletSudo);
  const sRelRes = await setRelayer(api, walletSudo, walletSudo);
  const sNetRes = await setNetwork(api, walletSudo);
  const sBudgetRes = await setBudget(1, api, walletSudo);

  const blockNum = await api.rpc.chain.getBlock();
  const {
    block: {
      header: { number },
    },
  }: any = blockNum.toHuman();

  const timelockedMintRes = await timeLockedMint(
    api,
    1,
    walletBob,
    100,
    number + 5,
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes("TimeLockedMint")),
    walletSudo
  );

  console.log(crPopRes.data.toHuman());
  console.log(initRes.data.toHuman());
  console.log(sRelRes.data.toHuman());
  console.log(sNetRes.data.toHuman());
  console.log(sBudgetRes.data.toHuman());
  console.log(timelockedMintRes.data.toHuman());
  process.exit(0);
};

cryptoWaitReady().then(() => {
  main().catch((err) => {
    console.error(err.message);
    process.exit(0);
  });
});
