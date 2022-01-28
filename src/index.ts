require("dotenv").config();
import Keyring from "@polkadot/keyring";
import { cryptoWaitReady } from "@polkadot/util-crypto";
import { crowdloanRewardsPopulateTest, initialize } from "./pallets";

import * as definitions from './interfaces/definitions';
import { buildApi } from "./utils";

const main = async () => {
    await cryptoWaitReady();

    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});
    const api = await buildApi(process.env.PICASSO_RPC_URL || "", types);
    const kr = new Keyring({ type: "sr25519" })

    const walletSudo = kr.addFromUri("//Alice"); // alice

    await crowdloanRewardsPopulateTest(api, walletSudo);
    await initialize(api, walletSudo);
    process.exit(0);
};

cryptoWaitReady().then(() => {
    main().catch((err) => {
        console.error(err.message);
        process.exit(0);
    });
});
