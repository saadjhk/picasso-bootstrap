import { KeyringPair } from "@polkadot/keyring/types";
import { sendAndWaitForSuccess } from "polkadot-utils";
import { ApiPromise } from "@polkadot/api";
import { base58 } from "micro-base";
import BigNumber from "bignumber.js";

export const createLiquidityPool = async (
  api: ApiPromise,
  walletAlice: KeyringPair,
) => {
};
