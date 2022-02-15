require("dotenv").config();
import Keyring from "@polkadot/keyring";
import { cryptoWaitReady } from "@polkadot/util-crypto";
import { crowdloanRewardsPopulateTest, initialize, amountToClaim } from "./pallets";
import * as definitions from "./interfaces/definitions";
import { buildApi } from "./utils";
import { ethers } from "ethers";

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

  const myEth1 = new ethers.Wallet(process.env.ETH_PK ? process.env.ETH_PK : "")
  const myEth2 = new ethers.Wallet(process.env.ETH_PK ? process.env.ETH_PK : "")

  const types = Object.values(definitions).reduce(
    (res, { types }): object => ({ ...res, ...types }),
    {}
  );
  const api = await buildApi(process.env.PICASSO_RPC_URL || "", types);

  // const walletBob = kr.addFromUri("//Bob");

  // const crPopRes = await crowdloanRewardsPopulateTest(
  //   api,
  //   walletSudo,
  //   [myDot1, myDot2],
  //   [myEth1.address, myEth2.address]
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

  // console.log(`Mosaic Transfer Mint: `, {mosaicTransferId});
  // console.log(crPopRes.data.toHuman());
  // console.log(initRes.data.toHuman());
  // console.log(sRelRes.data.toHuman());
  // console.log(sNetRes.data.toHuman());
  // console.log(sBudgetRes.data.toHuman());
  // console.log(timelockedMintRes.data.toHuman());

  // console.log(claimToRes.data.toHuman());

  setTimeout(() => {
    amountToClaim(api, myDot1).then((val) => {
      console.log(val);
      process.exit(0);
    })
  }, 10000);
};

cryptoWaitReady().then(() => {
  main().catch((err) => {
    console.error(err.message);
    process.exit(0);
  });
});
