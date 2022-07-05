import { u128, u32 } from "@polkadot/types"

export type BondOffer = {
    asset: u128,
    bondPrice: u128,
    nbOfBonds: u128,
    maturity: "Infinite" | { Finite: { returnIn: u32 } },
    reward: {
        asset: u128,
        amount: u128,
        maturity: u32
    }
}

export type HumanizedBondOffer = {
    asset: string,
    bondPrice: string,
    nbOfBonds: string,
    maturity: "Infinite" | { Finite: { returnIn: string } },
    reward: {
        asset: string,
        amount: string,
        maturity: string
    }

}