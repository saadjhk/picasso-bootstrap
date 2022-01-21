import type { ComposableTraitsAssetsXcmAssetLocation, ComposableTraitsBondedFinanceBondOffer, ComposableTraitsCallFilterCallFilterEntry, ComposableTraitsGovernanceSignedRawOrigin, ComposableTraitsVestingVestingSchedule, CumulusPalletDmpQueueConfigData, CumulusPalletDmpQueuePageIndexData, CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot, CumulusPalletXcmpQueueInboundStatus, CumulusPalletXcmpQueueOutboundStatus, CumulusPalletXcmpQueueQueueConfigData, DaliRuntimeOpaqueSessionKeys, OrmlTokensAccountData, OrmlTokensBalanceLock, PalletAssetsRegistryCandidateStatus, PalletCollatorSelectionCandidateInfo, PalletCrowdloanRewardsModelsRemoteAccount, PalletCrowdloanRewardsReward, PalletDemocracyPreimageStatus, PalletDemocracyReferendumInfo, PalletDemocracyReleases, PalletDemocracyVoteThreshold, PalletDemocracyVoteVoting, PalletDutchAuctionSellOrder, PalletDutchAuctionTakeOrder, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletOracleAssetInfo, PalletOraclePrePrice, PalletOraclePrice, PalletOracleWithdraw, PalletSchedulerReleases, PalletSchedulerScheduledV2, PalletTreasuryProposal, PalletVaultModelsStrategyOverview, PalletVaultModelsVaultInfo, PolkadotParachainPrimitivesXcmpMessageFormat, PolkadotPrimitivesV1AbridgedHostConfiguration, PolkadotPrimitivesV1PersistedValidationData, SpConsensusAuraSr25519AppSr25519Public } from '@composable/types/interfaces/default';
import type { ApiTypes } from '@polkadot/api-base/types';
import type { Data } from '@polkadot/types';
import type { BTreeMap, Bytes, Null, Option, U8aFixed, Vec, WrapperKeepOpaque, bool, u128, u16, u32, u64 } from '@polkadot/types-codec';
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H256 } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportWeightsPerDispatchClassU64, FrameSystemAccountInfo, FrameSystemEventRecord, FrameSystemLastRuntimeUpgradeInfo, FrameSystemPhase, PalletAuthorshipUncleEntryItem, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesReleases, PalletBalancesReserveData, PalletCollectiveVotes, PalletMultisigMultisig, PalletTransactionPaymentReleases, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotPrimitivesV1UpgradeRestriction, SpCoreCryptoKeyTypeId, SpRuntimeDigest, XcmV1MultiLocation } from '@polkadot/types/lookup';
import type { Observable } from '@polkadot/types/types';
declare module '@polkadot/api-base/types/storage' {
    interface AugmentedQueries<ApiType extends ApiTypes> {
        assets: {
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        assetsRegistry: {
            assetsMappingCandidates: AugmentedQuery<ApiType, (arg: ITuple<[u128, ComposableTraitsAssetsXcmAssetLocation]> | [u128 | AnyNumber | Uint8Array, ComposableTraitsAssetsXcmAssetLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array]) => Observable<Option<PalletAssetsRegistryCandidateStatus>>, [ITuple<[u128, ComposableTraitsAssetsXcmAssetLocation]>]> & QueryableStorageEntry<ApiType, [ITuple<[u128, ComposableTraitsAssetsXcmAssetLocation]>]>;
            foreignAdmin: AugmentedQuery<ApiType, () => Observable<AccountId32>, []> & QueryableStorageEntry<ApiType, []>;
            foreignToLocal: AugmentedQuery<ApiType, (arg: ComposableTraitsAssetsXcmAssetLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array) => Observable<Option<u128>>, [ComposableTraitsAssetsXcmAssetLocation]> & QueryableStorageEntry<ApiType, [ComposableTraitsAssetsXcmAssetLocation]>;
            localAdmin: AugmentedQuery<ApiType, () => Observable<AccountId32>, []> & QueryableStorageEntry<ApiType, []>;
            localToForeign: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<XcmV1MultiLocation>>, [u128]> & QueryableStorageEntry<ApiType, [u128]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        aura: {
            authorities: AugmentedQuery<ApiType, () => Observable<Vec<SpConsensusAuraSr25519AppSr25519Public>>, []> & QueryableStorageEntry<ApiType, []>;
            currentSlot: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        authorship: {
            author: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            didSetUncles: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            uncles: AugmentedQuery<ApiType, () => Observable<Vec<PalletAuthorshipUncleEntryItem>>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        balances: {
            account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletBalancesAccountData>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            locks: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesBalanceLock>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            reserves: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesReserveData>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            storageVersion: AugmentedQuery<ApiType, () => Observable<PalletBalancesReleases>, []> & QueryableStorageEntry<ApiType, []>;
            totalIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        bondedFinance: {
            bondOfferCount: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            bondOffers: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[AccountId32, ComposableTraitsBondedFinanceBondOffer]>>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        callFilter: {
            disabledCalls: AugmentedQuery<ApiType, (arg: ComposableTraitsCallFilterCallFilterEntry | {
                palletName?: any;
                functionName?: any;
            } | string | Uint8Array) => Observable<Option<Null>>, [ComposableTraitsCallFilterCallFilterEntry]> & QueryableStorageEntry<ApiType, [ComposableTraitsCallFilterCallFilterEntry]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        collatorSelection: {
            candidacyBond: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            candidates: AugmentedQuery<ApiType, () => Observable<Vec<PalletCollatorSelectionCandidateInfo>>, []> & QueryableStorageEntry<ApiType, []>;
            desiredCandidates: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            invulnerables: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            lastAuthoredBlock: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u32>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        council: {
            members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
            voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveVotes>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        councilMembership: {
            members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        crowdloanRewards: {
            associations: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletCrowdloanRewardsModelsRemoteAccount>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            claimedRewards: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            rewards: AugmentedQuery<ApiType, (arg: PalletCrowdloanRewardsModelsRemoteAccount | {
                RelayChain: any;
            } | {
                Ethereum: any;
            } | string | Uint8Array) => Observable<Option<PalletCrowdloanRewardsReward>>, [PalletCrowdloanRewardsModelsRemoteAccount]> & QueryableStorageEntry<ApiType, [PalletCrowdloanRewardsModelsRemoteAccount]>;
            totalContributors: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            totalRewards: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            vestingBlockStart: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        democracy: {
            blacklist: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<ITuple<[u32, Vec<AccountId32>]>>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            cancellations: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<bool>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            depositOf: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[Vec<AccountId32>, u128]>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            lastTabledWasExternal: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            locks: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<u32>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            lowestUnbaked: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            nextExternal: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[H256, PalletDemocracyVoteThreshold]>>>, []> & QueryableStorageEntry<ApiType, []>;
            preimages: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletDemocracyPreimageStatus>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            publicPropCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            publicProps: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, H256, AccountId32]>>>, []> & QueryableStorageEntry<ApiType, []>;
            referendumCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            referendumInfoOf: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletDemocracyReferendumInfo>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            storageVersion: AugmentedQuery<ApiType, () => Observable<Option<PalletDemocracyReleases>>, []> & QueryableStorageEntry<ApiType, []>;
            votingOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletDemocracyVoteVoting>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        dmpQueue: {
            configuration: AugmentedQuery<ApiType, () => Observable<CumulusPalletDmpQueueConfigData>, []> & QueryableStorageEntry<ApiType, []>;
            overweight: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u32, Bytes]>>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
            pageIndex: AugmentedQuery<ApiType, () => Observable<CumulusPalletDmpQueuePageIndexData>, []> & QueryableStorageEntry<ApiType, []>;
            pages: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<ITuple<[u32, Bytes]>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        dutchAuction: {
            ordersIndex: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            sellOrders: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<PalletDutchAuctionSellOrder>>, [u128]> & QueryableStorageEntry<ApiType, [u128]>;
            takes: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<Vec<PalletDutchAuctionTakeOrder>>>, [u128]> & QueryableStorageEntry<ApiType, [u128]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        factory: {
            currencyCounter: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        governanceRegistry: {
            originsByAssetId: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<ComposableTraitsGovernanceSignedRawOrigin>>, [u128]> & QueryableStorageEntry<ApiType, [u128]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        identity: {
            identityOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletIdentityRegistration>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            registrars: AugmentedQuery<ApiType, () => Observable<Vec<Option<PalletIdentityRegistrarInfo>>>, []> & QueryableStorageEntry<ApiType, []>;
            subsOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[u128, Vec<AccountId32>]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            superOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<ITuple<[AccountId32, Data]>>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        indices: {
            accounts: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[AccountId32, u128, bool]>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        multisig: {
            calls: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<ITuple<[WrapperKeepOpaque<Call>, AccountId32, u128]>>>, [U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
            multisigs: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: U8aFixed | string | Uint8Array) => Observable<Option<PalletMultisigMultisig>>, [AccountId32, U8aFixed]> & QueryableStorageEntry<ApiType, [AccountId32, U8aFixed]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        oracle: {
            answerInTransit: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<u128>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            assetsCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            assetsInfo: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<PalletOracleAssetInfo>, [u128]> & QueryableStorageEntry<ApiType, [u128]>;
            controllerToSigner: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<AccountId32>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            declaredWithdraws: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletOracleWithdraw>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            oracleStake: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<u128>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            prePrices: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Vec<PalletOraclePrePrice>>, [u128]> & QueryableStorageEntry<ApiType, [u128]>;
            priceHistory: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Vec<PalletOraclePrice>>, [u128]> & QueryableStorageEntry<ApiType, [u128]>;
            prices: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<PalletOraclePrice>, [u128]> & QueryableStorageEntry<ApiType, [u128]>;
            signerToController: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<AccountId32>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        parachainInfo: {
            parachainId: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        parachainSystem: {
            announcedHrmpMessagesPerCandidate: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            authorizedUpgrade: AugmentedQuery<ApiType, () => Observable<Option<H256>>, []> & QueryableStorageEntry<ApiType, []>;
            didSetValidationCode: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            hostConfiguration: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV1AbridgedHostConfiguration>>, []> & QueryableStorageEntry<ApiType, []>;
            hrmpOutboundMessages: AugmentedQuery<ApiType, () => Observable<Vec<PolkadotCorePrimitivesOutboundHrmpMessage>>, []> & QueryableStorageEntry<ApiType, []>;
            hrmpWatermark: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            lastDmqMqcHead: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
            lastHrmpMqcHeads: AugmentedQuery<ApiType, () => Observable<BTreeMap<u32, H256>>, []> & QueryableStorageEntry<ApiType, []>;
            newValidationCode: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
            pendingUpwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
            pendingValidationCode: AugmentedQuery<ApiType, () => Observable<Bytes>, []> & QueryableStorageEntry<ApiType, []>;
            processedDownwardMessages: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            relevantMessagingState: AugmentedQuery<ApiType, () => Observable<Option<CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot>>, []> & QueryableStorageEntry<ApiType, []>;
            reservedDmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []> & QueryableStorageEntry<ApiType, []>;
            reservedXcmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []> & QueryableStorageEntry<ApiType, []>;
            upgradeRestrictionSignal: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV1UpgradeRestriction>>, []> & QueryableStorageEntry<ApiType, []>;
            upwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
            validationData: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV1PersistedValidationData>>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        randomnessCollectiveFlip: {
            randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        scheduler: {
            agenda: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<Option<PalletSchedulerScheduledV2>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            lookup: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<ITuple<[u32, u32]>>>, [Bytes]> & QueryableStorageEntry<ApiType, [Bytes]>;
            storageVersion: AugmentedQuery<ApiType, () => Observable<PalletSchedulerReleases>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        session: {
            currentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
            keyOwner: AugmentedQuery<ApiType, (arg: ITuple<[SpCoreCryptoKeyTypeId, Bytes]> | [SpCoreCryptoKeyTypeId | string | Uint8Array, Bytes | string | Uint8Array]) => Observable<Option<AccountId32>>, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]> & QueryableStorageEntry<ApiType, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]>;
            nextKeys: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<DaliRuntimeOpaqueSessionKeys>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId32, DaliRuntimeOpaqueSessionKeys]>>>, []> & QueryableStorageEntry<ApiType, []>;
            validators: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        sudo: {
            key: AugmentedQuery<ApiType, () => Observable<AccountId32>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        system: {
            account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<FrameSystemAccountInfo>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
            allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
            blockHash: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<H256>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            blockWeight: AugmentedQuery<ApiType, () => Observable<FrameSupportWeightsPerDispatchClassU64>, []> & QueryableStorageEntry<ApiType, []>;
            digest: AugmentedQuery<ApiType, () => Observable<SpRuntimeDigest>, []> & QueryableStorageEntry<ApiType, []>;
            eventCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            events: AugmentedQuery<ApiType, () => Observable<Vec<FrameSystemEventRecord>>, []> & QueryableStorageEntry<ApiType, []>;
            eventTopics: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Vec<ITuple<[u32, u32]>>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
            executionPhase: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemPhase>>, []> & QueryableStorageEntry<ApiType, []>;
            extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
            extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemLastRuntimeUpgradeInfo>>, []> & QueryableStorageEntry<ApiType, []>;
            number: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            parentHash: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
            upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        timestamp: {
            didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
            now: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        tokens: {
            accounts: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u128 | AnyNumber | Uint8Array) => Observable<OrmlTokensAccountData>, [AccountId32, u128]> & QueryableStorageEntry<ApiType, [AccountId32, u128]>;
            locks: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u128 | AnyNumber | Uint8Array) => Observable<Vec<OrmlTokensBalanceLock>>, [AccountId32, u128]> & QueryableStorageEntry<ApiType, [AccountId32, u128]>;
            totalIssuance: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<u128>, [u128]> & QueryableStorageEntry<ApiType, [u128]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        transactionPayment: {
            nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
            storageVersion: AugmentedQuery<ApiType, () => Observable<PalletTransactionPaymentReleases>, []> & QueryableStorageEntry<ApiType, []>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        treasury: {
            approvals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
            proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
            proposals: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletTreasuryProposal>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        unknownTokens: {
            abstractFungibleBalances: AugmentedQuery<ApiType, (arg1: XcmV1MultiLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array, arg2: Bytes | string | Uint8Array) => Observable<u128>, [XcmV1MultiLocation, Bytes]> & QueryableStorageEntry<ApiType, [XcmV1MultiLocation, Bytes]>;
            concreteFungibleBalances: AugmentedQuery<ApiType, (arg1: XcmV1MultiLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array, arg2: XcmV1MultiLocation | {
                parents?: any;
                interior?: any;
            } | string | Uint8Array) => Observable<u128>, [XcmV1MultiLocation, XcmV1MultiLocation]> & QueryableStorageEntry<ApiType, [XcmV1MultiLocation, XcmV1MultiLocation]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        vault: {
            capitalStructure: AugmentedQuery<ApiType, (arg1: u64 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<PalletVaultModelsStrategyOverview>, [u64, AccountId32]> & QueryableStorageEntry<ApiType, [u64, AccountId32]>;
            lpTokensToVaults: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<u64>>, [u128]> & QueryableStorageEntry<ApiType, [u128]>;
            vaultCount: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
            vaults: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletVaultModelsVaultInfo>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        vesting: {
            vestingSchedules: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u128 | AnyNumber | Uint8Array) => Observable<Vec<ComposableTraitsVestingVestingSchedule>>, [AccountId32, u128]> & QueryableStorageEntry<ApiType, [AccountId32, u128]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        xcmpQueue: {
            inboundXcmpMessages: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32, u32]> & QueryableStorageEntry<ApiType, [u32, u32]>;
            inboundXcmpStatus: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, CumulusPalletXcmpQueueInboundStatus, Vec<ITuple<[u32, PolkadotParachainPrimitivesXcmpMessageFormat]>>]>>>, []> & QueryableStorageEntry<ApiType, []>;
            outboundXcmpMessages: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u16 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32, u16]> & QueryableStorageEntry<ApiType, [u32, u16]>;
            outboundXcmpStatus: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, CumulusPalletXcmpQueueOutboundStatus, bool, u16, u16]>>>, []> & QueryableStorageEntry<ApiType, []>;
            queueConfig: AugmentedQuery<ApiType, () => Observable<CumulusPalletXcmpQueueQueueConfigData>, []> & QueryableStorageEntry<ApiType, []>;
            signalMessages: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
            [key: string]: QueryableStorageEntry<ApiType>;
        };
        xTokens: {
            [key: string]: QueryableStorageEntry<ApiType>;
        };
    }
}
