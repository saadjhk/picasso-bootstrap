import { ApiPromise, WsProvider } from "@polkadot/api";
import { KeyringPair } from "@polkadot/keyring/types";
import R from "ramda";

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

export const generateTestRewardAccounts = (account: KeyringPair, vestingPeriod: number, maxAccounts: number = 10) => {
    return R.unfold(
        (n) =>
            n > maxAccounts
                ? false
                : [[{ RelayChain: account.derive("/contributor-" + n.toString()).publicKey }, n * 1_000_000_000_000, vestingPeriod], n + 1],
        1
    );
};
