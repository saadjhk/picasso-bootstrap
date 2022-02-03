require("dotenv").config();
import Keyring from "@polkadot/keyring";
import { cryptoWaitReady } from "@polkadot/util-crypto";
import { crowdloanRewardsPopulateTest, initialize } from "./pallets";

import * as definitions from './interfaces/definitions';
import { buildApi } from "./utils";
import { setNetwork, setRelayer } from "./pallets/mosaic/extrinsics";

const main = async () => {
    await cryptoWaitReady();

    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});
    const api = await buildApi(process.env.PICASSO_RPC_URL || "", types);
    const kr = new Keyring({ type: "sr25519" })

    const walletSudo = kr.addFromUri("//Alice"); // alice

    // const crPopRes = await crowdloanRewardsPopulateTest(api, walletSudo);
    // const initRes = await initialize(api, walletSudo);
    // const sRelRes = await setRelayer(api, walletSudo, walletSudo);
    const sNetRes = await setNetwork(api, walletSudo);

    // console.log(crPopRes.data.toHuman());
    // console.log(initRes.data.toHuman());
    // console.log(sRelRes.data.toHuman());
    console.log(sNetRes.data.toHuman());
    process.exit(0);
};

cryptoWaitReady().then(() => {
    main().catch((err) => {
        console.error(err.message);
        process.exit(0);
    });
});
