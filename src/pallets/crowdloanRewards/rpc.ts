import { ApiPromise } from "@polkadot/api";
import { KeyringPair } from "@polkadot/keyring/types";

export const amountToClaim = async (
  api: ApiPromise,
  rewardAccount: KeyringPair
) => {
  const availableClaim = await (api.rpc.crowdloanRewards.amountAvailableToClaimFor(
    rewardAccount.publicKey
  ));

  return availableClaim.toHuman();
};
