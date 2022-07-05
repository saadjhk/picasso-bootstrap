import { u128, u32, u16 } from "@polkadot/types";
import { Permill } from "@polkadot/types/interfaces/runtime";

export interface PabloPoolPair {
    base: u128,
    quote: u128
}

export interface PabloPoolFeeConfig {
    feeRate: Permill;
    ownerFeeRate: Permill;
    protocolFeeRate: Permill;
}

export interface PabloLiquidityBootstrappingPoolConfig {
    initialWeight: Permill;
    finalWeight: Permill;
    start: u32;
    end: u32;
}

export interface PabloPool {
    pair: PabloPoolPair,
}

export interface ConstantProductPoolConfig extends PabloPool {
    baseWeight: Permill;
    fee: Permill;
}

export interface StableSwapPoolConfig extends PabloPool {
    amplificationCoefficient: u16;
    fee: Permill;
}

export interface LiquidityBootstrappingPoolConfig extends PabloPool {
    feeConfig: PabloPoolFeeConfig;
    sale: PabloLiquidityBootstrappingPoolConfig;
}