import { createOffer } from "@picasso-bootstrap/lib/pallets/bondedFinance/extrinsics";
import { BondOffer } from "@picasso-bootstrap/types";
import { ApiPromise } from "@polkadot/api";
import { KeyringPair } from "@polkadot/keyring/types";
import config from "@picasso-bootstrap/constants/config.json";
import { toBondOffer, toChainUnits } from "@picasso-bootstrap/utils";
import BigNumber from "bignumber.js";
import { mintAssetsToWallets } from "@picasso-bootstrap/lib";

export async function populateBondOffers(api: ApiPromise, wallet: KeyringPair, walletSudo: KeyringPair): Promise<void> {
  await mintAssetsToWallets(api, [wallet], walletSudo, ["1"], toChainUnits(10));

  const beneficiary = wallet.publicKey;
  for (const offer of config.bondOffers) {
    await mintAssetsToWallets(api, [wallet], walletSudo, [offer.reward.asset], new BigNumber(offer.reward.amount));
    let bondOffer: BondOffer & { beneficiary: Uint8Array } = { ...toBondOffer(api, offer), beneficiary };
    const created = await createOffer(api, wallet, bondOffer);
    console.log("Bond Offer Created: ", created.data.toString());
  }
}
