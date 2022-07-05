import Keyring from "@polkadot/keyring";
import { KeyringPair } from "@polkadot/keyring/types";
import { hexToU8a } from "@polkadot/util";
import { ethers } from "ethers";
import { privateKeyFromSeed } from "./eth";

export function getSubstrateWallets(): KeyringPair[] {
    const kr = new Keyring({ type: 'sr25519' });
    let wallets: KeyringPair[] = [];

    wallets.push(kr.addFromUri("//Saad-1"));
    wallets.push(kr.addFromUri("//Saad-2")); 
    wallets.push(kr.addFromUri("//Saad-3"));
    wallets.push(kr.addFromUri("//Saad-4"));
    wallets.push(kr.addFromUri("//Saad-5"));

    return wallets;
}

export function getEthereumWallets(): ethers.Wallet[] {
    let wallets: ethers.Wallet[] = [];

    wallets.push(new ethers.Wallet(privateKeyFromSeed(1)));
    wallets.push(new ethers.Wallet(privateKeyFromSeed(2)));
    wallets.push(new ethers.Wallet(privateKeyFromSeed(3)));
    wallets.push(new ethers.Wallet(privateKeyFromSeed(4)));
    wallets.push(new ethers.Wallet(privateKeyFromSeed(5)));

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