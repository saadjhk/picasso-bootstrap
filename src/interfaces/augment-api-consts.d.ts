import type { ApiTypes } from '@polkadot/api-base/types';
import type { Bytes, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { Codec } from '@polkadot/types-codec/types';
import type { Perbill, Permill } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportPalletId, FrameSupportWeightsRuntimeDbWeight, FrameSupportWeightsWeightToFeeCoefficient, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, SpVersionRuntimeVersion, XcmV1MultiLocation } from '@polkadot/types/lookup';
declare module '@polkadot/api-base/types/consts' {
    interface AugmentedConsts<ApiType extends ApiTypes> {
        authorship: {
            uncleGenerations: u32 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        balances: {
            existentialDeposit: u128 & AugmentedConst<ApiType>;
            maxLocks: u32 & AugmentedConst<ApiType>;
            maxReserves: u32 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        bondedFinance: {
            minReward: u128 & AugmentedConst<ApiType>;
            palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
            stake: u128 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        crowdloanRewards: {
            initialPayment: Perbill & AugmentedConst<ApiType>;
            prefix: Bytes & AugmentedConst<ApiType>;
            vestingStep: u32 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        democracy: {
            cooloffPeriod: u32 & AugmentedConst<ApiType>;
            enactmentPeriod: u32 & AugmentedConst<ApiType>;
            fastTrackVotingPeriod: u32 & AugmentedConst<ApiType>;
            instantAllowed: bool & AugmentedConst<ApiType>;
            launchPeriod: u32 & AugmentedConst<ApiType>;
            maxProposals: u32 & AugmentedConst<ApiType>;
            maxVotes: u32 & AugmentedConst<ApiType>;
            minimumDeposit: u128 & AugmentedConst<ApiType>;
            preimageByteDeposit: u128 & AugmentedConst<ApiType>;
            voteLockingPeriod: u32 & AugmentedConst<ApiType>;
            votingPeriod: u32 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        dutchAuction: {
            palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        factory: {
            dynamicCurrencyIdInitial: u128 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        identity: {
            basicDeposit: u128 & AugmentedConst<ApiType>;
            fieldDeposit: u128 & AugmentedConst<ApiType>;
            maxAdditionalFields: u32 & AugmentedConst<ApiType>;
            maxRegistrars: u32 & AugmentedConst<ApiType>;
            maxSubAccounts: u32 & AugmentedConst<ApiType>;
            subAccountDeposit: u128 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        indices: {
            deposit: u128 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        multisig: {
            depositBase: u128 & AugmentedConst<ApiType>;
            depositFactor: u128 & AugmentedConst<ApiType>;
            maxSignatories: u16 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        scheduler: {
            maximumWeight: u64 & AugmentedConst<ApiType>;
            maxScheduledPerBlock: u32 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        system: {
            blockHashCount: u32 & AugmentedConst<ApiType>;
            blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>;
            blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>;
            dbWeight: FrameSupportWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
            ss58Prefix: u16 & AugmentedConst<ApiType>;
            version: SpVersionRuntimeVersion & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        timestamp: {
            minimumPeriod: u64 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        tokens: {
            maxLocks: u32 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        transactionPayment: {
            operationalFeeMultiplier: u8 & AugmentedConst<ApiType>;
            transactionByteFee: u128 & AugmentedConst<ApiType>;
            weightToFee: Vec<FrameSupportWeightsWeightToFeeCoefficient> & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        treasury: {
            burn: Permill & AugmentedConst<ApiType>;
            maxApprovals: u32 & AugmentedConst<ApiType>;
            palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
            proposalBond: Permill & AugmentedConst<ApiType>;
            proposalBondMinimum: u128 & AugmentedConst<ApiType>;
            spendPeriod: u32 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        utility: {
            batchedCallsLimit: u32 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        vault: {
            creationDeposit: u128 & AugmentedConst<ApiType>;
            existentialDeposit: u128 & AugmentedConst<ApiType>;
            minimumDeposit: u128 & AugmentedConst<ApiType>;
            minimumWithdrawal: u128 & AugmentedConst<ApiType>;
            palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
            rentPerBlock: u128 & AugmentedConst<ApiType>;
            tombstoneDuration: u32 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        vesting: {
            minVestedTransfer: u128 & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
        xTokens: {
            baseXcmWeight: u64 & AugmentedConst<ApiType>;
            selfLocation: XcmV1MultiLocation & AugmentedConst<ApiType>;
            [key: string]: Codec;
        };
    }
}
