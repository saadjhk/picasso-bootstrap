import Keyring from "@polkadot/keyring";
import { KeyringPair } from "@polkadot/keyring/types";
import { hexToU8a } from "@polkadot/util";
import { ethers } from "ethers";

export function getSubstrateWallets(): KeyringPair[] {
    const kr = new Keyring({ type: 'sr25519' });
    let wallets: KeyringPair[] = [];

    let firstPK = process.env.DOT_MNEMONIC && process.env.DOT_MNEMONIC.length ? process.env.DOT_MNEMONIC : undefined;
    let secondPK = process.env.DOT_MNEMONIC1 && process.env.DOT_MNEMONIC1.length ? process.env.DOT_MNEMONIC1 : undefined;

    if (firstPK) wallets.push(kr.addFromMnemonic(firstPK))
    if (secondPK) wallets.push(kr.addFromMnemonic(secondPK))

    return wallets;
}

export function getEthersWallets(): ethers.Wallet[] {
    let wallets: ethers.Wallet[] = [];

    let firstPK = process.env.ETH_PK && process.env.ETH_PK.length ? process.env.ETH_PK : undefined;
    let secondPK = process.env.ETH_PK1 && process.env.ETH_PK1.length ? process.env.ETH_PK1 : undefined;

    if (firstPK) wallets.push(new ethers.Wallet(firstPK))
    if (secondPK) wallets.push(new ethers.Wallet(secondPK))

    return wallets;
}


export function getSudoWallet(chain: "dali-local" | "dali-rococo"): KeyringPair {
    const kr = new Keyring({ type: 'sr25519' });
    if (chain === "dali-local") {
        return kr.addFromUri("//Alice");
    } else {
        let pk = process.env.SUDO_MNEMONIC && process.env.SUDO_MNEMONIC.length ? process.env.SUDO_MNEMONIC : undefined;
        if (!pk?.length) throw new Error('Provide a sudo key env variable');
        return kr.addFromSeed(hexToU8a(pk))
    }
}

/**
 * All in ss58 49
 */
export const TESTING_ADDRESSES = [
    "5w53mgBc2w2kNQZgFBaYT5h79cQQNfv8vUuoa85zUe5VxBvQ",
    "5tirEmQwRYbyadq5QrrFvnPNBPf4WLXsh97qHJUqcqMADDQ9",
    "5z3wa9ojQra3HqeJthg9Q6hQnsRDsUgH6DC7ZXkb7YXofh3m",
    "5uxGz8eZmbjvVBMpun9nvQ3G8s5cWD5xHnzgU6SHyAnJf9Vy",
    "5vVWqFFPg258rCUy1HabDSf6z1bnRbKeDWKYF3XrVLvk3nEc",
    "5vVWqFFPg258rCUy1HabDSf6z1bnRbKeDWKYF3XrVLvk3nEc",
    "5ygiZBBgoTEjJqu3hpTQAw9oqaoEaz9eSJUBYGoTguG2qsQ3"
]