require("dotenv").config();
import Keyring from "@polkadot/keyring";
import { cryptoWaitReady, signatureVerify } from "@polkadot/util-crypto";
import { associateKSM, crowdloanRewardsPopulateTest, initialize } from "./pallets/crowdloanRewards";
import { buildApi, toHexString } from "./utils";
import { decodeAddress } from "@polkadot/util-crypto";
import { verifyMessage } from "ethers/lib/utils";

const main = async () => {
    await cryptoWaitReady();
    const api = await buildApi(process.env.PICASSO_RPC_URL || "");
    // alice
    const walletSudo = new Keyring({ type: "sr25519" }).addFromUri("//Alice");
    // const reward = new Keyring({ type: "sr25519" }).addFromMnemonic(process.env.PK || "");
    // const con_1 = walletSudo.derive('/contributor-1');
    // const con_2 = walletSudo.derive('/contributor-2');
    // const con_3 = walletSudo.derive('/contributor-3');
    // console.log(reward.publicKey)
    // console.log(con_1.publicKey)
    // console.log(con_2.publicKey)
    // console.log(con_3.publicKey)


    // let signature = con_1.sign(`picasso-${reward.publicKey}`);
    // console.log(signatureVerify(`picasso-${reward.publicKey}`, signature, con_1.publicKey).isValid);
    // console.log(signatureVerify(`picasso-${reward.publicKey}`, "0xe2e370d59cbaf2502ada9d4e8240f8071e3ca89b6385a492c9a69c4b59d2b47c09efccbb5c7300d6ca5ccce3c507d80b34fd128b937da428d73f4658d4fbd48e", con_1.publicKey));
    // const populatetx = await crowdloanRewardsPopulateTest(api, walletSudo);
    // const initTx = await initialize(api, walletSudo);
    const tx = await associateKSM(api, walletSudo.derive('/contributor-10'), walletSudo)
    console.log(tx)
    // console.log(populatetx.method);
    // console.log(initTx.toString());
    process.exit(0);
};

cryptoWaitReady().then(() => {
    main().catch((err) => {
        console.error(err.message);
        process.exit(0);
    });
});
