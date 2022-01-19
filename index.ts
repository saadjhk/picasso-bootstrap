require("dotenv").config();
import Keyring from "@polkadot/keyring";
import { cryptoWaitReady } from "@polkadot/util-crypto";
import { crowdloanRewardsPopulateTest, initialize } from "./pallets/crowdloanRewards";
import { buildApi, toHexString } from "./utils";
import { decodeAddress } from "@polkadot/util-crypto";

const main = async () => {
    await cryptoWaitReady();
    const api = await buildApi(process.env.PICASSO_RPC_URL || "");
    // alice
    const walletSudo = new Keyring({ type: "sr25519" }).addFromUri("//Alice");
    const populatetx = await crowdloanRewardsPopulateTest(api, walletSudo);
    const initTx = await initialize(api, walletSudo);

    console.log(populatetx.method);
    console.log(initTx.toString());
};

cryptoWaitReady().then(() => {
    main().catch((err) => {
        console.error(err.message);
        process.exit(0);
    });
});
