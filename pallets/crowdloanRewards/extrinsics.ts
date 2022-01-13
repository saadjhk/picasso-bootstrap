import { ApiPromise, WsProvider } from "@polkadot/api";
import { Keyring } from "@polkadot/keyring";
import { KeyringPair } from "@polkadot/keyring/types";
import { ethers } from "ethers";
import { toHexString } from "../../utils";

export const associateKSM = async (api: ApiPromise, contributorAccount: KeyringPair, rewardAccount: KeyringPair) => {
    const message = `picasso-${toHexString(rewardAccount.publicKey)}`;
    const signature = await contributorAccount.sign(message);

    const tx = await api.tx.crowdloanRewards
        .associate(contributorAccount.publicKey, {
            RelayChain: [contributorAccount.publicKey, { Sr25519: signature }],
        })
        .signAndSend(contributorAccount);

    return tx.hash;
};

export const associateEth = async (api: ApiPromise, signer: ethers.Signer, rewardAccount: KeyringPair) => {
    const message = `picasso-${toHexString(rewardAccount.publicKey)}`;
    const signature = await signer.signMessage(message);

    const tx = await api.tx.crowdloanRewards
        .associate(rewardAccount.publicKey, {
            proof: { Ethereum: signature },
        })
        .signAndSend(rewardAccount);

    return tx.hash;
};

export const populate = (api: ApiPromise, accounts: Array<Array<any>>) => {};
