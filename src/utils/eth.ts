import Web3 from "web3";

export const ethAccountFromSeed = (seed: number) =>
    new Web3(process.env.GANACHE_URL || "").eth.accounts.privateKeyToAccount(
        "0x" + seed.toString(16).padStart(64, "0")
    );