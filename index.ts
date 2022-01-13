require("dotenv").config();
import Keyring from "@polkadot/keyring";
import { cryptoWaitReady } from "@polkadot/util-crypto";
import { toHexString } from "./utils";
import * as R from "ramda";

const main = async () => {
    const vesting48weeks = 100800;
    const keyring = new Keyring({ type: "sr25519" });
    let Wallets = {
        Alice: keyring.addFromUri("//Alice"),
        Bob: keyring.addFromUri("//Bob"),
        Charlie: keyring.addFromUri("//Charlie"),
        Ruth: keyring.addFromUri("//Ruth"),
    };

    console.log(toHexString(Wallets.Alice.publicKey));
    console.log(toHexString(Wallets.Alice.derive("/contributor-1").publicKey));
    console.log(toHexString(Wallets.Alice.derive("/reward").publicKey));
};

cryptoWaitReady().then(() => {
    main().catch((err) => {
        console.log(err.message);
    });
});
