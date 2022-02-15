import { ApiPromise, WsProvider } from "@polkadot/api";
import { IKeyringPair } from "@polkadot/types/types";
import Web3 from "web3";
const web3 = new Web3(process.env.GANACHE_URL || "");

export const buildApi = async (substrateNodeUrl: string, types: any, rpc: any): Promise<ApiPromise> => {
    const wsProvider = new WsProvider(substrateNodeUrl, 1000);
    const api = await ApiPromise.create({ provider: wsProvider, types, rpc });

    return await api.isReady;
};

export const toHexString = (bytes: Uint8Array) =>
    Array.prototype.map.call(bytes, (x) => ("0" + (x & 0xff).toString(16)).slice(-2)).join("");

// The prefix is defined as pallet config
export const proofMessage = (account: IKeyringPair) => "picasso-" + toHexString(account.publicKey);

export const ethAccount = (seed: number) => web3.eth.accounts.privateKeyToAccount("0x" + seed.toString(16).padStart(64, "0"));
