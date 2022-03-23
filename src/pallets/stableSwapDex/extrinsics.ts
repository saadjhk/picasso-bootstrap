import { ApiPromise } from "@polkadot/api";
import { KeyringPair } from "@polkadot/keyring/types";
import { sendAndWaitForSuccess } from "polkadot-utils";

// copy pasta from mosaic
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
