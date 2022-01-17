require("dotenv").config();
import Keyring from "@polkadot/keyring";
import { cryptoWaitReady } from "@polkadot/util-crypto";
import { crowdloanRewardsPopulateTest } from "./pallets/crowdloanRewards";
import { buildApi } from "./utils";

const main = async () => {
    await cryptoWaitReady();

    const walletAlice = new Keyring().addFromUri("//Alice");
    const api = await buildApi(process.env.PICASSO_RPC_URL || "");
    const tx = await crowdloanRewardsPopulateTest(api, walletAlice);
    console.log(tx);
    process.exit(0);
};

cryptoWaitReady().then(() => {
    main().catch((err) => {
        console.error(err.message);
        process.exit(0);
    });
});
