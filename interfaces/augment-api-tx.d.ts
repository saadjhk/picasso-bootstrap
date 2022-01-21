import type { ComposableTraitsAssetsXcmAssetLocation, ComposableTraitsAuctionAuctionStepFunction, ComposableTraitsBondedFinanceBondOffer, ComposableTraitsCallFilterCallFilterEntry, ComposableTraitsDefiSell, ComposableTraitsDefiTake, ComposableTraitsVaultVaultConfig, ComposableTraitsVestingVestingSchedule, CumulusPrimitivesParachainInherentParachainInherentData, DaliRuntimeOpaqueSessionKeys, DaliRuntimeOriginCaller, PalletCrowdloanRewardsModelsProof, PalletCrowdloanRewardsModelsRemoteAccount, PalletDemocracyConviction, PalletDemocracyVoteAccountVote, PalletIdentityBitFlags, PalletIdentityIdentityInfo, PalletIdentityJudgement, XcmVersionedMultiAsset } from '@composable/types/interfaces/default';
import type { ApiTypes } from '@polkadot/api-base/types';
import type { Data } from '@polkadot/types';
import type { Bytes, Compact, Option, U8aFixed, Vec, WrapperKeepOpaque, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H256, MultiAddress, Perbill, Percent } from '@polkadot/types/interfaces/runtime';
import type { PalletMultisigTimepoint, SpRuntimeHeader, XcmV1MultiLocation, XcmV2WeightLimit, XcmVersionedMultiAssets, XcmVersionedMultiLocation, XcmVersionedXcm } from '@polkadot/types/lookup';
declare module '@polkadot/api-base/types/submittable' {
    interface AugmentedSubmittables<ApiType extends ApiTypes> {
        assets: {
            burnFrom: AugmentedSubmittable<(assetId: u128 | AnyNumber | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, MultiAddress, Compact<u128>]>;
            forceTransfer: AugmentedSubmittable<(asset: u128 | AnyNumber | Uint8Array, source: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, MultiAddress, MultiAddress, Compact<u128>, bool]>;
            forceTransferNative: AugmentedSubmittable<(source: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Compact<u128>, bool]>;
            mintInitialize: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
            mintInitializeWithGovernance: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, governanceOrigin: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress, MultiAddress]>;
            mintInto: AugmentedSubmittable<(assetId: u128 | AnyNumber | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, MultiAddress, Compact<u128>]>;
            transfer: AugmentedSubmittable<(asset: u128 | AnyNumber | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, MultiAddress, Compact<u128>, bool]>;
            transferAll: AugmentedSubmittable<(asset: u128 | AnyNumber | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, MultiAddress, bool]>;
            transferAllNative: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
            transferNative: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>, bool]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        assetsRegistry: {
            approveAssetsMappingCandidate: AugmentedSubmittable<(localAssetId: u128 | AnyNumber | Uint8Array, foreignAssetId: ComposableTraitsAssetsXcmAssetLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, ComposableTraitsAssetsXcmAssetLocation]>;
            setForeignAdmin: AugmentedSubmittable<(foreignAdmin: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
            setLocalAdmin: AugmentedSubmittable<(localAdmin: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        authorship: {
            setUncles: AugmentedSubmittable<(newUncles: Vec<SpRuntimeHeader> | (SpRuntimeHeader | {
                parentHash?: any;
                number?: any;
                stateRoot?: any;
                extrinsicsRoot?: any;
                digest?: any;
            } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<SpRuntimeHeader>]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        balances: {
            forceTransfer: AugmentedSubmittable<(source: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Compact<u128>]>;
            forceUnreserve: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
            setBalance: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, newReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>, Compact<u128>]>;
            transfer: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
            transferAll: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
            transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        bondedFinance: {
            bond: AugmentedSubmittable<(offerId: u64 | AnyNumber | Uint8Array, nbOfBonds: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, u128]>;
            cancel: AugmentedSubmittable<(offerId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
            offer: AugmentedSubmittable<(offer: ComposableTraitsBondedFinanceBondOffer | {
                beneficiary?: any;
                asset?: any;
                bondPrice?: any;
                nbOfBonds?: any;
                maturity?: any;
                reward?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ComposableTraitsBondedFinanceBondOffer]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        callFilter: {
            disable: AugmentedSubmittable<(entry: ComposableTraitsCallFilterCallFilterEntry | {
                palletName?: any;
                functionName?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ComposableTraitsCallFilterCallFilterEntry]>;
            enable: AugmentedSubmittable<(entry: ComposableTraitsCallFilterCallFilterEntry | {
                palletName?: any;
                functionName?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ComposableTraitsCallFilterCallFilterEntry]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        collatorSelection: {
            leaveIntent: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            registerAsCandidate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            setCandidacyBond: AugmentedSubmittable<(bond: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
            setDesiredCandidates: AugmentedSubmittable<(max: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            setInvulnerables: AugmentedSubmittable<(updated: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        council: {
            close: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: Compact<u64> | AnyNumber | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, Compact<u64>, Compact<u32>]>;
            disapproveProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
            execute: AugmentedSubmittable<(proposal: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Compact<u32>]>;
            propose: AugmentedSubmittable<(threshold: Compact<u32> | AnyNumber | Uint8Array, proposal: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Call, Compact<u32>]>;
            setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], prime: Option<AccountId32> | null | object | string | Uint8Array, oldCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Option<AccountId32>, u32]>;
            vote: AugmentedSubmittable<(proposal: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, bool]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        councilMembership: {
            addMember: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
            changeKey: AugmentedSubmittable<(updated: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
            clearPrime: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            removeMember: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
            resetMembers: AugmentedSubmittable<(members: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
            setPrime: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
            swapMember: AugmentedSubmittable<(remove: AccountId32 | string | Uint8Array, add: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, AccountId32]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        crowdloanRewards: {
            associate: AugmentedSubmittable<(rewardAccount: AccountId32 | string | Uint8Array, proof: PalletCrowdloanRewardsModelsProof | {
                RelayChain: any;
            } | {
                Ethereum: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, PalletCrowdloanRewardsModelsProof]>;
            claim: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            initialize: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            populate: AugmentedSubmittable<(rewards: Vec<ITuple<[PalletCrowdloanRewardsModelsRemoteAccount, u128, u32]>> | ([PalletCrowdloanRewardsModelsRemoteAccount | {
                RelayChain: any;
            } | {
                Ethereum: any;
            } | string | Uint8Array, u128 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[PalletCrowdloanRewardsModelsRemoteAccount, u128, u32]>>]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        cumulusXcm: {
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        democracy: {
            blacklist: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, maybeRefIndex: Option<u32> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Option<u32>]>;
            cancelProposal: AugmentedSubmittable<(propIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
            cancelQueued: AugmentedSubmittable<(which: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            cancelReferendum: AugmentedSubmittable<(refIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
            clearPublicProposals: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            delegate: AugmentedSubmittable<(to: AccountId32 | string | Uint8Array, conviction: PalletDemocracyConviction | 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x' | number | Uint8Array, balance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, PalletDemocracyConviction, u128]>;
            emergencyCancel: AugmentedSubmittable<(refIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            enactProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, u32]>;
            externalPropose: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
            externalProposeDefault: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
            externalProposeMajority: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
            fastTrack: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, votingPeriod: u32 | AnyNumber | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, u32, u32]>;
            noteImminentPreimage: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            noteImminentPreimageOperational: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            notePreimage: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            notePreimageOperational: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            propose: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u128>]>;
            reapPreimage: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, proposalLenUpperBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>]>;
            removeOtherVote: AugmentedSubmittable<(target: AccountId32 | string | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
            removeVote: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            second: AugmentedSubmittable<(proposal: Compact<u32> | AnyNumber | Uint8Array, secondsUpperBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
            undelegate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            unlock: AugmentedSubmittable<(target: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
            vetoExternal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
            vote: AugmentedSubmittable<(refIndex: Compact<u32> | AnyNumber | Uint8Array, vote: PalletDemocracyVoteAccountVote | {
                Standard: any;
            } | {
                Split: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletDemocracyVoteAccountVote]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        dmpQueue: {
            serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, u64]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        dutchAuction: {
            ask: AugmentedSubmittable<(order: ComposableTraitsDefiSell | {
                pair?: any;
                take?: any;
            } | string | Uint8Array, configuration: ComposableTraitsAuctionAuctionStepFunction | {
                LinearDecrease: any;
            } | {
                StairstepExponentialDecrease: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ComposableTraitsDefiSell, ComposableTraitsAuctionAuctionStepFunction]>;
            liquidate: AugmentedSubmittable<(orderId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
            take: AugmentedSubmittable<(orderId: u128 | AnyNumber | Uint8Array, take: ComposableTraitsDefiTake | {
                amount?: any;
                limit?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, ComposableTraitsDefiTake]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        governanceRegistry: {
            grantRoot: AugmentedSubmittable<(assetId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
            remove: AugmentedSubmittable<(assetId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
            set: AugmentedSubmittable<(assetId: u128 | AnyNumber | Uint8Array, value: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, AccountId32]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        identity: {
            addRegistrar: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
            addSub: AugmentedSubmittable<(sub: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, data: Data | {
                None: any;
            } | {
                Raw: any;
            } | {
                BlakeTwo256: any;
            } | {
                Sha256: any;
            } | {
                Keccak256: any;
            } | {
                ShaThree256: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Data]>;
            cancelRequest: AugmentedSubmittable<(regIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            clearIdentity: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            killIdentity: AugmentedSubmittable<(target: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
            provideJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, target: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, judgement: PalletIdentityJudgement | {
                Unknown: any;
            } | {
                FeePaid: any;
            } | {
                Reasonable: any;
            } | {
                KnownGood: any;
            } | {
                OutOfDate: any;
            } | {
                LowQuality: any;
            } | {
                Erroneous: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, PalletIdentityJudgement]>;
            quitSub: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            removeSub: AugmentedSubmittable<(sub: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
            renameSub: AugmentedSubmittable<(sub: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, data: Data | {
                None: any;
            } | {
                Raw: any;
            } | {
                BlakeTwo256: any;
            } | {
                Sha256: any;
            } | {
                Keccak256: any;
            } | {
                ShaThree256: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Data]>;
            requestJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, maxFee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
            setAccountId: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, updated: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, AccountId32]>;
            setFee: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
            setFields: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fields: PalletIdentityBitFlags) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletIdentityBitFlags]>;
            setIdentity: AugmentedSubmittable<(info: PalletIdentityIdentityInfo | {
                additional?: any;
                display?: any;
                legal?: any;
                web?: any;
                riot?: any;
                email?: any;
                pgpFingerprint?: any;
                image?: any;
                twitter?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletIdentityIdentityInfo]>;
            setSubs: AugmentedSubmittable<(subs: Vec<ITuple<[AccountId32, Data]>> | ([AccountId32 | string | Uint8Array, Data | {
                None: any;
            } | {
                Raw: any;
            } | {
                BlakeTwo256: any;
            } | {
                Sha256: any;
            } | {
                Keccak256: any;
            } | {
                ShaThree256: any;
            } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId32, Data]>>]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        indices: {
            claim: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            forceTransfer: AugmentedSubmittable<(updated: AccountId32 | string | Uint8Array, index: u32 | AnyNumber | Uint8Array, freeze: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32, bool]>;
            free: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            freeze: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            transfer: AugmentedSubmittable<(updated: AccountId32 | string | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        multisig: {
            approveAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | object | string | Uint8Array, callHash: U8aFixed | string | Uint8Array, maxWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, U8aFixed, u64]>;
            asMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | object | string | Uint8Array, call: WrapperKeepOpaque<Call> | object | string | Uint8Array, storeCall: bool | boolean | Uint8Array, maxWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, WrapperKeepOpaque<Call>, bool, u64]>;
            asMultiThreshold1: AugmentedSubmittable<(otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], call: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Call]>;
            cancelAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], timepoint: PalletMultisigTimepoint | {
                height?: any;
                index?: any;
            } | string | Uint8Array, callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, PalletMultisigTimepoint, U8aFixed]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        oracle: {
            addAssetAndInfo: AugmentedSubmittable<(assetId: u128 | AnyNumber | Uint8Array, threshold: Percent | AnyNumber | Uint8Array, minAnswers: u32 | AnyNumber | Uint8Array, maxAnswers: u32 | AnyNumber | Uint8Array, blockInterval: u32 | AnyNumber | Uint8Array, reward: u128 | AnyNumber | Uint8Array, slash: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, Percent, u32, u32, u32, u128, u128]>;
            addStake: AugmentedSubmittable<(stake: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
            reclaimStake: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            removeStake: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            setSigner: AugmentedSubmittable<(signer: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
            submitPrice: AugmentedSubmittable<(price: u128 | AnyNumber | Uint8Array, assetId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        parachainSystem: {
            authorizeUpgrade: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
            enactAuthorizedUpgrade: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            setValidationData: AugmentedSubmittable<(data: CumulusPrimitivesParachainInherentParachainInherentData | {
                validationData?: any;
                relayChainState?: any;
                downwardMessages?: any;
                horizontalMessages?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CumulusPrimitivesParachainInherentParachainInherentData]>;
            sudoSendUpwardMessage: AugmentedSubmittable<(message: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        relayerXcm: {
            execute: AugmentedSubmittable<(message: XcmVersionedXcm | {
                V0: any;
            } | {
                V1: any;
            } | {
                V2: any;
            } | string | Uint8Array, maxWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedXcm, u64]>;
            forceDefaultXcmVersion: AugmentedSubmittable<(maybeXcmVersion: Option<u32> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
            forceSubscribeVersionNotify: AugmentedSubmittable<(location: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation]>;
            forceUnsubscribeVersionNotify: AugmentedSubmittable<(location: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation]>;
            forceXcmVersion: AugmentedSubmittable<(location: XcmV1MultiLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array, xcmVersion: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmV1MultiLocation, u32]>;
            limitedReserveTransferAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, assets: XcmVersionedMultiAssets | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV2WeightLimit | {
                Unlimited: any;
            } | {
                Limited: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32, XcmV2WeightLimit]>;
            limitedTeleportAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, assets: XcmVersionedMultiAssets | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV2WeightLimit | {
                Unlimited: any;
            } | {
                Limited: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32, XcmV2WeightLimit]>;
            reserveTransferAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, assets: XcmVersionedMultiAssets | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32]>;
            send: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, message: XcmVersionedXcm | {
                V0: any;
            } | {
                V1: any;
            } | {
                V2: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedXcm]>;
            teleportAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, assets: XcmVersionedMultiAssets | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        scheduler: {
            cancel: AugmentedSubmittable<(when: u32 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
            cancelNamed: AugmentedSubmittable<(id: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            schedule: AugmentedSubmittable<(when: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | object | string | Uint8Array, priority: u8 | AnyNumber | Uint8Array, call: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
            scheduleAfter: AugmentedSubmittable<(after: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | object | string | Uint8Array, priority: u8 | AnyNumber | Uint8Array, call: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
            scheduleNamed: AugmentedSubmittable<(id: Bytes | string | Uint8Array, when: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | object | string | Uint8Array, priority: u8 | AnyNumber | Uint8Array, call: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
            scheduleNamedAfter: AugmentedSubmittable<(id: Bytes | string | Uint8Array, after: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | object | string | Uint8Array, priority: u8 | AnyNumber | Uint8Array, call: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        session: {
            purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            setKeys: AugmentedSubmittable<(keys: DaliRuntimeOpaqueSessionKeys | {
                aura?: any;
            } | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [DaliRuntimeOpaqueSessionKeys, Bytes]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        sudo: {
            setKey: AugmentedSubmittable<(updated: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
            sudo: AugmentedSubmittable<(call: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
            sudoAs: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, call: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Call]>;
            sudoUncheckedWeight: AugmentedSubmittable<(call: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array, weight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, u64]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        system: {
            fillBlock: AugmentedSubmittable<(ratio: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
            killPrefix: AugmentedSubmittable<(prefix: Bytes | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32]>;
            killStorage: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>]>;
            remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
            setStorage: AugmentedSubmittable<(items: Vec<ITuple<[Bytes, Bytes]>> | ([Bytes | string | Uint8Array, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Bytes, Bytes]>>]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        timestamp: {
            set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        tokens: {
            forceTransfer: AugmentedSubmittable<(source: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, currencyId: u128 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, u128, Compact<u128>]>;
            setBalance: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, currencyId: u128 | AnyNumber | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, newReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128, Compact<u128>, Compact<u128>]>;
            transfer: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, currencyId: u128 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128, Compact<u128>]>;
            transferAll: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, currencyId: u128 | AnyNumber | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128, bool]>;
            transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, currencyId: u128 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128, Compact<u128>]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        treasury: {
            approveProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
            proposeSpend: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
            rejectProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        utility: {
            asDerivative: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Call]>;
            batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
            batchAll: AugmentedSubmittable<(calls: Vec<Call> | (Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
            dispatchAs: AugmentedSubmittable<(asOrigin: DaliRuntimeOriginCaller | {
                system: any;
            } | {
                Void: any;
            } | {
                Council: any;
            } | {
                RelayerXcm: any;
            } | {
                CumulusXcm: any;
            } | string | Uint8Array, call: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [DaliRuntimeOriginCaller, Call]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        vault: {
            addSurcharge: AugmentedSubmittable<(dest: u64 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, u128]>;
            claimSurcharge: AugmentedSubmittable<(dest: u64 | AnyNumber | Uint8Array, address: Option<AccountId32> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, Option<AccountId32>]>;
            create: AugmentedSubmittable<(vault: ComposableTraitsVaultVaultConfig | {
                assetId?: any;
                reserved?: any;
                manager?: any;
                strategies?: any;
            } | string | Uint8Array, depositAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ComposableTraitsVaultVaultConfig, u128]>;
            deleteTombstoned: AugmentedSubmittable<(dest: u64 | AnyNumber | Uint8Array, address: Option<AccountId32> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, Option<AccountId32>]>;
            deposit: AugmentedSubmittable<(vault: u64 | AnyNumber | Uint8Array, assetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, u128]>;
            emergencyShutdown: AugmentedSubmittable<(vault: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
            liquidateStrategy: AugmentedSubmittable<(vaultIdx: u64 | AnyNumber | Uint8Array, strategyAccountId: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, AccountId32]>;
            start: AugmentedSubmittable<(vault: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
            withdraw: AugmentedSubmittable<(vault: u64 | AnyNumber | Uint8Array, lpAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, u128]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        vesting: {
            claim: AugmentedSubmittable<(asset: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
            claimFor: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, asset: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
            updateVestingSchedules: AugmentedSubmittable<(who: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, asset: u128 | AnyNumber | Uint8Array, vestingSchedules: Vec<ComposableTraitsVestingVestingSchedule> | (ComposableTraitsVestingVestingSchedule | {
                start?: any;
                period?: any;
                periodCount?: any;
                perPeriod?: any;
            } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128, Vec<ComposableTraitsVestingVestingSchedule>]>;
            vestedTransfer: AugmentedSubmittable<(dest: MultiAddress | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, asset: u128 | AnyNumber | Uint8Array, schedule: ComposableTraitsVestingVestingSchedule | {
                start?: any;
                period?: any;
                periodCount?: any;
                perPeriod?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128, ComposableTraitsVestingVestingSchedule]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        xcmpQueue: {
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
        xTokens: {
            transfer: AugmentedSubmittable<(currencyId: u128 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, destWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128, XcmVersionedMultiLocation, u64]>;
            transferMultiasset: AugmentedSubmittable<(asset: XcmVersionedMultiAsset | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, destWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiAsset, XcmVersionedMultiLocation, u64]>;
            transferMultiassetWithFee: AugmentedSubmittable<(asset: XcmVersionedMultiAsset | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, fee: XcmVersionedMultiAsset | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, destWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiAsset, XcmVersionedMultiAsset, XcmVersionedMultiLocation, u64]>;
            transferWithFee: AugmentedSubmittable<(currencyId: u128 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, fee: u128 | AnyNumber | Uint8Array, dest: XcmVersionedMultiLocation | {
                V0: any;
            } | {
                V1: any;
            } | string | Uint8Array, destWeight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128, u128, XcmVersionedMultiLocation, u64]>;
            [key: string]: SubmittableExtrinsicFunction<ApiType>;
        };
    }
}
