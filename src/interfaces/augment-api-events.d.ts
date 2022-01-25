import type { ComposableTraitsAssetsXcmAssetLocation, ComposableTraitsCallFilterCallFilterEntry, ComposableTraitsVestingVestingSchedule, PalletCrowdloanRewardsModelsRemoteAccount, PalletDemocracyVoteThreshold, PalletDutchAuctionSellOrder } from '@composable/types/interfaces/default';
import type { ApiTypes } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, U8aFixed, Vec, bool, u128, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H256, Percent } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportTokensMiscBalanceStatus, FrameSupportWeightsDispatchInfo, PalletMultisigTimepoint, SpRuntimeDispatchError, XcmV1MultiAsset, XcmV1MultiLocation, XcmV2Response, XcmV2TraitsError, XcmV2TraitsOutcome, XcmV2Xcm, XcmVersionedMultiAssets, XcmVersionedMultiLocation } from '@polkadot/types/lookup';
declare module '@polkadot/api-base/types/events' {
    interface AugmentedEvents<ApiType extends ApiTypes> {
        assetsRegistry: {
            AssetsMappingCandidateUpdated: AugmentedEvent<ApiType, [u128, ComposableTraitsAssetsXcmAssetLocation]>;
            ForeignAdminUpdated: AugmentedEvent<ApiType, [AccountId32]>;
            LocalAdminUpdated: AugmentedEvent<ApiType, [AccountId32]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        balances: {
            BalanceSet: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
            Deposit: AugmentedEvent<ApiType, [AccountId32, u128]>;
            DustLost: AugmentedEvent<ApiType, [AccountId32, u128]>;
            Endowed: AugmentedEvent<ApiType, [AccountId32, u128]>;
            Reserved: AugmentedEvent<ApiType, [AccountId32, u128]>;
            ReserveRepatriated: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128, FrameSupportTokensMiscBalanceStatus]>;
            Slashed: AugmentedEvent<ApiType, [AccountId32, u128]>;
            Transfer: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
            Unreserved: AugmentedEvent<ApiType, [AccountId32, u128]>;
            Withdraw: AugmentedEvent<ApiType, [AccountId32, u128]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        bondedFinance: {
            NewBond: AugmentedEvent<ApiType, [u64, AccountId32, u128]>;
            NewOffer: AugmentedEvent<ApiType, [u64]>;
            OfferCancelled: AugmentedEvent<ApiType, [u64]>;
            OfferCompleted: AugmentedEvent<ApiType, [u64]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        callFilter: {
            Disabled: AugmentedEvent<ApiType, [ComposableTraitsCallFilterCallFilterEntry]>;
            Enabled: AugmentedEvent<ApiType, [ComposableTraitsCallFilterCallFilterEntry]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        collatorSelection: {
            CandidateAdded: AugmentedEvent<ApiType, [AccountId32, u128]>;
            CandidateRemoved: AugmentedEvent<ApiType, [AccountId32]>;
            NewCandidacyBond: AugmentedEvent<ApiType, [u128]>;
            NewDesiredCandidates: AugmentedEvent<ApiType, [u32]>;
            NewInvulnerables: AugmentedEvent<ApiType, [Vec<AccountId32>]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        council: {
            Approved: AugmentedEvent<ApiType, [H256]>;
            Closed: AugmentedEvent<ApiType, [H256, u32, u32]>;
            Disapproved: AugmentedEvent<ApiType, [H256]>;
            Executed: AugmentedEvent<ApiType, [H256, Result<Null, SpRuntimeDispatchError>]>;
            MemberExecuted: AugmentedEvent<ApiType, [H256, Result<Null, SpRuntimeDispatchError>]>;
            Proposed: AugmentedEvent<ApiType, [AccountId32, u32, H256, u32]>;
            Voted: AugmentedEvent<ApiType, [AccountId32, H256, bool, u32, u32]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        councilMembership: {
            Dummy: AugmentedEvent<ApiType, []>;
            KeyChanged: AugmentedEvent<ApiType, []>;
            MemberAdded: AugmentedEvent<ApiType, []>;
            MemberRemoved: AugmentedEvent<ApiType, []>;
            MembersReset: AugmentedEvent<ApiType, []>;
            MembersSwapped: AugmentedEvent<ApiType, []>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        crowdloanRewards: {
            Associated: AugmentedEvent<ApiType, [PalletCrowdloanRewardsModelsRemoteAccount, AccountId32]>;
            Claimed: AugmentedEvent<ApiType, [PalletCrowdloanRewardsModelsRemoteAccount, AccountId32, u128]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        cumulusXcm: {
            ExecutedDownward: AugmentedEvent<ApiType, [U8aFixed, XcmV2TraitsOutcome]>;
            InvalidFormat: AugmentedEvent<ApiType, [U8aFixed]>;
            UnsupportedVersion: AugmentedEvent<ApiType, [U8aFixed]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        democracy: {
            Blacklisted: AugmentedEvent<ApiType, [H256]>;
            Cancelled: AugmentedEvent<ApiType, [u32]>;
            Delegated: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
            Executed: AugmentedEvent<ApiType, [u32, Result<Null, SpRuntimeDispatchError>]>;
            ExternalTabled: AugmentedEvent<ApiType, []>;
            NotPassed: AugmentedEvent<ApiType, [u32]>;
            Passed: AugmentedEvent<ApiType, [u32]>;
            PreimageInvalid: AugmentedEvent<ApiType, [H256, u32]>;
            PreimageMissing: AugmentedEvent<ApiType, [H256, u32]>;
            PreimageNoted: AugmentedEvent<ApiType, [H256, AccountId32, u128]>;
            PreimageReaped: AugmentedEvent<ApiType, [H256, AccountId32, u128, AccountId32]>;
            PreimageUsed: AugmentedEvent<ApiType, [H256, AccountId32, u128]>;
            Proposed: AugmentedEvent<ApiType, [u32, u128]>;
            Started: AugmentedEvent<ApiType, [u32, PalletDemocracyVoteThreshold]>;
            Tabled: AugmentedEvent<ApiType, [u32, u128, Vec<AccountId32>]>;
            Undelegated: AugmentedEvent<ApiType, [AccountId32]>;
            Vetoed: AugmentedEvent<ApiType, [AccountId32, H256, u32]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        dmpQueue: {
            ExecutedDownward: AugmentedEvent<ApiType, [U8aFixed, XcmV2TraitsOutcome]>;
            InvalidFormat: AugmentedEvent<ApiType, [U8aFixed]>;
            OverweightEnqueued: AugmentedEvent<ApiType, [U8aFixed, u64, u64]>;
            OverweightServiced: AugmentedEvent<ApiType, [u64, u64]>;
            UnsupportedVersion: AugmentedEvent<ApiType, [U8aFixed]>;
            WeightExhausted: AugmentedEvent<ApiType, [U8aFixed, u64, u64]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        dutchAuction: {
            OrderAdded: AugmentedEvent<ApiType, [u128, PalletDutchAuctionSellOrder]>;
            OrderRemoved: AugmentedEvent<ApiType, [u128]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        factory: {
            [key: string]: AugmentedEvent<ApiType>;
        };
        governanceRegistry: {
            GrantRoot: AugmentedEvent<ApiType, [u128]>;
            Remove: AugmentedEvent<ApiType, [u128]>;
            Set: AugmentedEvent<ApiType, [u128, AccountId32]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        identity: {
            IdentityCleared: AugmentedEvent<ApiType, [AccountId32, u128]>;
            IdentityKilled: AugmentedEvent<ApiType, [AccountId32, u128]>;
            IdentitySet: AugmentedEvent<ApiType, [AccountId32]>;
            JudgementGiven: AugmentedEvent<ApiType, [AccountId32, u32]>;
            JudgementRequested: AugmentedEvent<ApiType, [AccountId32, u32]>;
            JudgementUnrequested: AugmentedEvent<ApiType, [AccountId32, u32]>;
            RegistrarAdded: AugmentedEvent<ApiType, [u32]>;
            SubIdentityAdded: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
            SubIdentityRemoved: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
            SubIdentityRevoked: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        indices: {
            IndexAssigned: AugmentedEvent<ApiType, [AccountId32, u32]>;
            IndexFreed: AugmentedEvent<ApiType, [u32]>;
            IndexFrozen: AugmentedEvent<ApiType, [u32, AccountId32]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        multisig: {
            MultisigApproval: AugmentedEvent<ApiType, [AccountId32, PalletMultisigTimepoint, AccountId32, U8aFixed]>;
            MultisigCancelled: AugmentedEvent<ApiType, [AccountId32, PalletMultisigTimepoint, AccountId32, U8aFixed]>;
            MultisigExecuted: AugmentedEvent<ApiType, [AccountId32, PalletMultisigTimepoint, AccountId32, U8aFixed, Result<Null, SpRuntimeDispatchError>]>;
            NewMultisig: AugmentedEvent<ApiType, [AccountId32, AccountId32, U8aFixed]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        oracle: {
            AnswerPruned: AugmentedEvent<ApiType, [AccountId32, u128]>;
            AssetInfoChange: AugmentedEvent<ApiType, [u128, Percent, u32, u32, u32, u128, u128]>;
            PriceSubmitted: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
            SignerSet: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
            StakeAdded: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
            StakeReclaimed: AugmentedEvent<ApiType, [AccountId32, u128]>;
            StakeRemoved: AugmentedEvent<ApiType, [AccountId32, u128, u32]>;
            UserRewarded: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
            UserSlashed: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        parachainSystem: {
            DownwardMessagesProcessed: AugmentedEvent<ApiType, [u64, H256]>;
            DownwardMessagesReceived: AugmentedEvent<ApiType, [u32]>;
            UpgradeAuthorized: AugmentedEvent<ApiType, [H256]>;
            ValidationFunctionApplied: AugmentedEvent<ApiType, [u32]>;
            ValidationFunctionDiscarded: AugmentedEvent<ApiType, []>;
            ValidationFunctionStored: AugmentedEvent<ApiType, []>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        relayerXcm: {
            AssetsTrapped: AugmentedEvent<ApiType, [H256, XcmV1MultiLocation, XcmVersionedMultiAssets]>;
            Attempted: AugmentedEvent<ApiType, [XcmV2TraitsOutcome]>;
            InvalidResponder: AugmentedEvent<ApiType, [XcmV1MultiLocation, u64, Option<XcmV1MultiLocation>]>;
            InvalidResponderVersion: AugmentedEvent<ApiType, [XcmV1MultiLocation, u64]>;
            Notified: AugmentedEvent<ApiType, [u64, u8, u8]>;
            NotifyDecodeFailed: AugmentedEvent<ApiType, [u64, u8, u8]>;
            NotifyDispatchError: AugmentedEvent<ApiType, [u64, u8, u8]>;
            NotifyOverweight: AugmentedEvent<ApiType, [u64, u8, u8, u64, u64]>;
            NotifyTargetMigrationFail: AugmentedEvent<ApiType, [XcmVersionedMultiLocation, u64]>;
            NotifyTargetSendFail: AugmentedEvent<ApiType, [XcmV1MultiLocation, u64, XcmV2TraitsError]>;
            ResponseReady: AugmentedEvent<ApiType, [u64, XcmV2Response]>;
            ResponseTaken: AugmentedEvent<ApiType, [u64]>;
            Sent: AugmentedEvent<ApiType, [XcmV1MultiLocation, XcmV1MultiLocation, XcmV2Xcm]>;
            SupportedVersionChanged: AugmentedEvent<ApiType, [XcmV1MultiLocation, u32]>;
            UnexpectedResponse: AugmentedEvent<ApiType, [XcmV1MultiLocation, u64]>;
            VersionChangeNotified: AugmentedEvent<ApiType, [XcmV1MultiLocation, u32]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        scheduler: {
            Canceled: AugmentedEvent<ApiType, [u32, u32]>;
            Dispatched: AugmentedEvent<ApiType, [ITuple<[u32, u32]>, Option<Bytes>, Result<Null, SpRuntimeDispatchError>]>;
            Scheduled: AugmentedEvent<ApiType, [u32, u32]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        session: {
            NewSession: AugmentedEvent<ApiType, [u32]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        sudo: {
            KeyChanged: AugmentedEvent<ApiType, [AccountId32]>;
            Sudid: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
            SudoAsDone: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        system: {
            CodeUpdated: AugmentedEvent<ApiType, []>;
            ExtrinsicFailed: AugmentedEvent<ApiType, [SpRuntimeDispatchError, FrameSupportWeightsDispatchInfo]>;
            ExtrinsicSuccess: AugmentedEvent<ApiType, [FrameSupportWeightsDispatchInfo]>;
            KilledAccount: AugmentedEvent<ApiType, [AccountId32]>;
            NewAccount: AugmentedEvent<ApiType, [AccountId32]>;
            Remarked: AugmentedEvent<ApiType, [AccountId32, H256]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        tokens: {
            BalanceSet: AugmentedEvent<ApiType, [u128, AccountId32, u128, u128]>;
            DustLost: AugmentedEvent<ApiType, [u128, AccountId32, u128]>;
            Endowed: AugmentedEvent<ApiType, [u128, AccountId32, u128]>;
            RepatriatedReserve: AugmentedEvent<ApiType, [u128, AccountId32, AccountId32, u128, FrameSupportTokensMiscBalanceStatus]>;
            Reserved: AugmentedEvent<ApiType, [u128, AccountId32, u128]>;
            Transfer: AugmentedEvent<ApiType, [u128, AccountId32, AccountId32, u128]>;
            Unreserved: AugmentedEvent<ApiType, [u128, AccountId32, u128]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        treasury: {
            Awarded: AugmentedEvent<ApiType, [u32, u128, AccountId32]>;
            Burnt: AugmentedEvent<ApiType, [u128]>;
            Deposit: AugmentedEvent<ApiType, [u128]>;
            Proposed: AugmentedEvent<ApiType, [u32]>;
            Rejected: AugmentedEvent<ApiType, [u32, u128]>;
            Rollover: AugmentedEvent<ApiType, [u128]>;
            Spending: AugmentedEvent<ApiType, [u128]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        unknownTokens: {
            Deposited: AugmentedEvent<ApiType, [XcmV1MultiAsset, XcmV1MultiLocation]>;
            Withdrawn: AugmentedEvent<ApiType, [XcmV1MultiAsset, XcmV1MultiLocation]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        utility: {
            BatchCompleted: AugmentedEvent<ApiType, []>;
            BatchInterrupted: AugmentedEvent<ApiType, [u32, SpRuntimeDispatchError]>;
            DispatchedAs: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
            ItemCompleted: AugmentedEvent<ApiType, []>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        vault: {
            Deposited: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
            EmergencyShutdown: AugmentedEvent<ApiType, [u64]>;
            LiquidateStrategy: AugmentedEvent<ApiType, [AccountId32, u128]>;
            VaultCreated: AugmentedEvent<ApiType, [u64]>;
            VaultStarted: AugmentedEvent<ApiType, [u64]>;
            Withdrawn: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        vesting: {
            Claimed: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
            VestingScheduleAdded: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128, ComposableTraitsVestingVestingSchedule]>;
            VestingSchedulesUpdated: AugmentedEvent<ApiType, [AccountId32]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        xcmpQueue: {
            BadFormat: AugmentedEvent<ApiType, [Option<H256>]>;
            BadVersion: AugmentedEvent<ApiType, [Option<H256>]>;
            Fail: AugmentedEvent<ApiType, [Option<H256>, XcmV2TraitsError]>;
            Success: AugmentedEvent<ApiType, [Option<H256>]>;
            UpwardMessageSent: AugmentedEvent<ApiType, [Option<H256>]>;
            XcmpMessageSent: AugmentedEvent<ApiType, [Option<H256>]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
        xTokens: {
            Transferred: AugmentedEvent<ApiType, [AccountId32, u128, u128, XcmV1MultiLocation]>;
            TransferredMultiAsset: AugmentedEvent<ApiType, [AccountId32, XcmV1MultiAsset, XcmV1MultiLocation]>;
            TransferredMultiAssetWithFee: AugmentedEvent<ApiType, [AccountId32, XcmV1MultiAsset, XcmV1MultiAsset, XcmV1MultiLocation]>;
            TransferredWithFee: AugmentedEvent<ApiType, [AccountId32, u128, u128, u128, XcmV1MultiLocation]>;
            [key: string]: AugmentedEvent<ApiType>;
        };
    }
}
