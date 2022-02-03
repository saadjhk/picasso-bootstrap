import { ApiPromise } from "@polkadot/api";
import { KeyringPair } from "@polkadot/keyring/types";
import { sendAndWaitForSuccess } from "polkadot-utils";

export const setRelayer = async (
  api: ApiPromise,
  relayerAccount: KeyringPair,
  sudoAccount: KeyringPair
) => {
  return sendAndWaitForSuccess(
    api,
    sudoAccount,
    api.events.sudo.Sudid.is,
    api.tx.sudo.sudo(api.tx.mosaic.setRelayer(relayerAccount.publicKey))
  );
};

export const setNetwork = async (api: ApiPromise, sudoAccount: KeyringPair) => {
  return sendAndWaitForSuccess(
    api,
    sudoAccount,
    api.events.mosaic.NetworksUpdated.is,
    api.tx.mosaic.setNetwork(1, {
      enabled: true,
      maxTransferSize: api.createType("u128", 100_000_000_000_000),
    })
  );
};
