import { ApiPromise, WsProvider } from "@polkadot/api";
import { IKeyringPair } from "@polkadot/types/types";
import Web3 from "web3";
const web3 = new Web3(process.env.GANACHE_URL || "")

export const buildApi = async (substrateNodeUrl: string): Promise<ApiPromise | null> => {
    try {
        const wsProvider = new WsProvider(process.env.PICASSO_RPC_URL!, 1000);
        const polkadotApi = new ApiPromise({ provider: wsProvider });

        return await polkadotApi.isReady;
    } catch (err: any) {
        console.error(`Error Connecting: ${err.message}`);
        return null;
    }
};

export const toHexString = (bytes: Uint8Array) =>
    Array.prototype.map.call(bytes, (x) => ("0" + (x & 0xff).toString(16)).slice(-2)).join("");

    // The prefix is defined as pallet config
export const proofMessage = (account: IKeyringPair) =>
  "picasso-" + toHexString(account.publicKey);

export const ethAccount = (seed: number) =>
  web3.eth.accounts.privateKeyToAccount("0x" + seed.toString(16).padStart(64, '0'))
