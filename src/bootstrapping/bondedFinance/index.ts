import { createOffer } from "@dev-test/pallets/bondedFinance/extrinsics";
import { BondOffer, HumanizedBondOffer } from "@dev-test/types";
import { ApiPromise } from "@polkadot/api";
import { KeyringPair } from "@polkadot/keyring/types";
import config from "@dev-test/constants/config.json";
import { toBondOffer } from "@dev-test/utils";

export async function populateBondOffers(
  api: ApiPromise,
  wallet: KeyringPair
): Promise<void> {
    const beneficiary = wallet.publicKey;
    for (const offer of config.bondOffers) {
        let bondOffer: BondOffer & { beneficiary: Uint8Array } =  { ...toBondOffer(api, offer as HumanizedBondOffer), beneficiary }
        const created = await createOffer(api, wallet, bondOffer);
        console.log('Bond Offer Created: ', created.data.toString());
    }
}
