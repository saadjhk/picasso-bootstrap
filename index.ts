require("dotenv").config();
import Keyring from "@polkadot/keyring";
import { cryptoWaitReady, signatureVerify } from "@polkadot/util-crypto";
import { associateKSM, crowdloanRewardsPopulateTest, initialize } from "./pallets/crowdloanRewards";
import { buildApi, toHexString } from "./utils";

const main = async () => {
    await cryptoWaitReady();
    const api = await buildApi(process.env.PICASSO_RPC_URL || "");
    const kr = new Keyring({ type: "sr25519" })
    const walletSudo = kr.addFromUri("//Alice"); // alice
    const populatetx = await crowdloanRewardsPopulateTest(api, walletSudo);
    const initTx = await initialize(api, walletSudo);
    const tx = await associateKSM(api, walletSudo.derive('/contributor-40'), walletSudo.derive('/reward-40'));

    console.log(populatetx);
    console.log(initTx);
    console.log(tx)
    process.exit(0);
};

cryptoWaitReady().then(() => {
    main().catch((err) => {
        console.error(err.message);
        process.exit(0);
    });
});
