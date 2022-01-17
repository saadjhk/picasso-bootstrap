require("dotenv").config();
import { cryptoWaitReady } from "@polkadot/util-crypto";

const main = async () => {

};

cryptoWaitReady().then(() => {
    main().catch((err) => {
        console.log(err.message);
    });
});