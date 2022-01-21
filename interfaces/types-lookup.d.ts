declare module '@polkadot/types/lookup' {
    import type { BitVec, Bytes, Compact, Enum, Null, Option, Result, Struct, Text, U8aFixed, Vec, WrapperKeepOpaque, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
    import type { ITuple } from '@polkadot/types-codec/types';
    import type { AccountId32, Call, H256, MultiAddress, Perbill } from '@polkadot/types/interfaces/runtime';
    import type { Event } from '@polkadot/types/interfaces/system';
    interface FrameSystemAccountInfo extends Struct {
        readonly nonce: u32;
        readonly consumers: u32;
        readonly providers: u32;
        readonly sufficients: u32;
        readonly data: PalletBalancesAccountData;
    }
    interface PalletBalancesAccountData extends Struct {
        readonly free: u128;
        readonly reserved: u128;
        readonly miscFrozen: u128;
        readonly feeFrozen: u128;
    }
    interface FrameSupportWeightsPerDispatchClassU64 extends Struct {
        readonly normal: u64;
        readonly operational: u64;
        readonly mandatory: u64;
    }
    interface SpRuntimeDigest extends Struct {
        readonly logs: Vec<SpRuntimeDigestDigestItem>;
    }
    interface SpRuntimeDigestDigestItem extends Enum {
        readonly isOther: boolean;
        readonly asOther: Bytes;
        readonly isConsensus: boolean;
        readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
        readonly isSeal: boolean;
        readonly asSeal: ITuple<[U8aFixed, Bytes]>;
        readonly isPreRuntime: boolean;
        readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
        readonly isRuntimeEnvironmentUpdated: boolean;
        readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
    }
    interface FrameSystemEventRecord extends Struct {
        readonly phase: FrameSystemPhase;
        readonly event: Event;
        readonly topics: Vec<H256>;
    }
    interface FrameSystemEvent extends Enum {
        readonly isExtrinsicSuccess: boolean;
        readonly asExtrinsicSuccess: FrameSupportWeightsDispatchInfo;
        readonly isExtrinsicFailed: boolean;
        readonly asExtrinsicFailed: ITuple<[SpRuntimeDispatchError, FrameSupportWeightsDispatchInfo]>;
        readonly isCodeUpdated: boolean;
        readonly isNewAccount: boolean;
        readonly asNewAccount: AccountId32;
        readonly isKilledAccount: boolean;
        readonly asKilledAccount: AccountId32;
        readonly isRemarked: boolean;
        readonly asRemarked: ITuple<[AccountId32, H256]>;
        readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked';
    }
    interface FrameSupportWeightsDispatchInfo extends Struct {
        readonly weight: u64;
        readonly class: FrameSupportWeightsDispatchClass;
        readonly paysFee: FrameSupportWeightsPays;
    }
    interface FrameSupportWeightsDispatchClass extends Enum {
        readonly isNormal: boolean;
        readonly isOperational: boolean;
        readonly isMandatory: boolean;
        readonly type: 'Normal' | 'Operational' | 'Mandatory';
    }
    interface FrameSupportWeightsPays extends Enum {
        readonly isYes: boolean;
        readonly isNo: boolean;
        readonly type: 'Yes' | 'No';
    }
    interface SpRuntimeDispatchError extends Enum {
        readonly isOther: boolean;
        readonly isCannotLookup: boolean;
        readonly isBadOrigin: boolean;
        readonly isModule: boolean;
        readonly asModule: {
            readonly index: u8;
            readonly error: u8;
        } & Struct;
        readonly isConsumerRemaining: boolean;
        readonly isNoProviders: boolean;
        readonly isToken: boolean;
        readonly asToken: SpRuntimeTokenError;
        readonly isArithmetic: boolean;
        readonly asArithmetic: SpRuntimeArithmeticError;
        readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'Token' | 'Arithmetic';
    }
    interface SpRuntimeTokenError extends Enum {
        readonly isNoFunds: boolean;
        readonly isWouldDie: boolean;
        readonly isBelowMinimum: boolean;
        readonly isCannotCreate: boolean;
        readonly isUnknownAsset: boolean;
        readonly isFrozen: boolean;
        readonly isUnsupported: boolean;
        readonly type: 'NoFunds' | 'WouldDie' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported';
    }
    interface SpRuntimeArithmeticError extends Enum {
        readonly isUnderflow: boolean;
        readonly isOverflow: boolean;
        readonly isDivisionByZero: boolean;
        readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
    }
    interface PalletIndicesEvent extends Enum {
        readonly isIndexAssigned: boolean;
        readonly asIndexAssigned: {
            readonly who: AccountId32;
            readonly index: u32;
        } & Struct;
        readonly isIndexFreed: boolean;
        readonly asIndexFreed: {
            readonly index: u32;
        } & Struct;
        readonly isIndexFrozen: boolean;
        readonly asIndexFrozen: {
            readonly index: u32;
            readonly who: AccountId32;
        } & Struct;
        readonly type: 'IndexAssigned' | 'IndexFreed' | 'IndexFrozen';
    }
    interface PalletBalancesEvent extends Enum {
        readonly isEndowed: boolean;
        readonly asEndowed: {
            readonly account: AccountId32;
            readonly freeBalance: u128;
        } & Struct;
        readonly isDustLost: boolean;
        readonly asDustLost: {
            readonly account: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly from: AccountId32;
            readonly to: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isBalanceSet: boolean;
        readonly asBalanceSet: {
            readonly who: AccountId32;
            readonly free: u128;
            readonly reserved: u128;
        } & Struct;
        readonly isReserved: boolean;
        readonly asReserved: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isUnreserved: boolean;
        readonly asUnreserved: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isReserveRepatriated: boolean;
        readonly asReserveRepatriated: {
            readonly from: AccountId32;
            readonly to: AccountId32;
            readonly amount: u128;
            readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
        } & Struct;
        readonly isDeposit: boolean;
        readonly asDeposit: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isWithdraw: boolean;
        readonly asWithdraw: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isSlashed: boolean;
        readonly asSlashed: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed';
    }
    interface FrameSupportTokensMiscBalanceStatus extends Enum {
        readonly isFree: boolean;
        readonly isReserved: boolean;
        readonly type: 'Free' | 'Reserved';
    }
    interface PalletOffencesEvent extends Enum {
        readonly isOffence: boolean;
        readonly asOffence: {
            readonly kind: U8aFixed;
            readonly timeslot: Bytes;
        } & Struct;
        readonly type: 'Offence';
    }
    interface PalletSessionEvent extends Enum {
        readonly isNewSession: boolean;
        readonly asNewSession: {
            readonly sessionIndex: u32;
        } & Struct;
        readonly type: 'NewSession';
    }
    interface PalletGrandpaEvent extends Enum {
        readonly isNewAuthorities: boolean;
        readonly asNewAuthorities: {
            readonly authoritySet: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
        } & Struct;
        readonly isPaused: boolean;
        readonly isResumed: boolean;
        readonly type: 'NewAuthorities' | 'Paused' | 'Resumed';
    }
    interface SpFinalityGrandpaAppPublic extends SpCoreEd25519Public {
    }
    interface SpCoreEd25519Public extends U8aFixed {
    }
    interface PalletImOnlineEvent extends Enum {
        readonly isHeartbeatReceived: boolean;
        readonly asHeartbeatReceived: {
            readonly authorityId: PalletImOnlineSr25519AppSr25519Public;
        } & Struct;
        readonly isAllGood: boolean;
        readonly isSomeOffline: boolean;
        readonly asSomeOffline: {
            readonly offline: Vec<ITuple<[AccountId32, Null]>>;
        } & Struct;
        readonly type: 'HeartbeatReceived' | 'AllGood' | 'SomeOffline';
    }
    interface PalletImOnlineSr25519AppSr25519Public extends SpCoreSr25519Public {
    }
    interface SpCoreSr25519Public extends U8aFixed {
    }
    interface PolkadotRuntimeParachainsInclusionPalletEvent extends Enum {
        readonly isCandidateBacked: boolean;
        readonly asCandidateBacked: ITuple<[PolkadotPrimitivesV1CandidateReceipt, Bytes, u32, u32]>;
        readonly isCandidateIncluded: boolean;
        readonly asCandidateIncluded: ITuple<[PolkadotPrimitivesV1CandidateReceipt, Bytes, u32, u32]>;
        readonly isCandidateTimedOut: boolean;
        readonly asCandidateTimedOut: ITuple<[PolkadotPrimitivesV1CandidateReceipt, Bytes, u32]>;
        readonly type: 'CandidateBacked' | 'CandidateIncluded' | 'CandidateTimedOut';
    }
    interface PolkadotPrimitivesV1CandidateReceipt extends Struct {
        readonly descriptor: PolkadotPrimitivesV1CandidateDescriptor;
        readonly commitmentsHash: H256;
    }
    interface PolkadotPrimitivesV1CandidateDescriptor extends Struct {
        readonly paraId: u32;
        readonly relayParent: H256;
        readonly collator: PolkadotPrimitivesV0CollatorAppPublic;
        readonly persistedValidationDataHash: H256;
        readonly povHash: H256;
        readonly erasureRoot: H256;
        readonly signature: PolkadotPrimitivesV0CollatorAppSignature;
        readonly paraHead: H256;
        readonly validationCodeHash: H256;
    }
    interface PolkadotPrimitivesV0CollatorAppPublic extends SpCoreSr25519Public {
    }
    interface PolkadotPrimitivesV0CollatorAppSignature extends SpCoreSr25519Signature {
    }
    interface SpCoreSr25519Signature extends U8aFixed {
    }
    interface PolkadotRuntimeParachainsParasPalletEvent extends Enum {
        readonly isCurrentCodeUpdated: boolean;
        readonly asCurrentCodeUpdated: u32;
        readonly isCurrentHeadUpdated: boolean;
        readonly asCurrentHeadUpdated: u32;
        readonly isCodeUpgradeScheduled: boolean;
        readonly asCodeUpgradeScheduled: u32;
        readonly isNewHeadNoted: boolean;
        readonly asNewHeadNoted: u32;
        readonly isActionQueued: boolean;
        readonly asActionQueued: ITuple<[u32, u32]>;
        readonly type: 'CurrentCodeUpdated' | 'CurrentHeadUpdated' | 'CodeUpgradeScheduled' | 'NewHeadNoted' | 'ActionQueued';
    }
    interface PolkadotRuntimeParachainsUmpPalletEvent extends Enum {
        readonly isInvalidFormat: boolean;
        readonly asInvalidFormat: U8aFixed;
        readonly isUnsupportedVersion: boolean;
        readonly asUnsupportedVersion: U8aFixed;
        readonly isExecutedUpward: boolean;
        readonly asExecutedUpward: ITuple<[U8aFixed, XcmV2TraitsOutcome]>;
        readonly isWeightExhausted: boolean;
        readonly asWeightExhausted: ITuple<[U8aFixed, u64, u64]>;
        readonly isUpwardMessagesReceived: boolean;
        readonly asUpwardMessagesReceived: ITuple<[u32, u32, u32]>;
        readonly isOverweightEnqueued: boolean;
        readonly asOverweightEnqueued: ITuple<[u32, U8aFixed, u64, u64]>;
        readonly isOverweightServiced: boolean;
        readonly asOverweightServiced: ITuple<[u64, u64]>;
        readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedUpward' | 'WeightExhausted' | 'UpwardMessagesReceived' | 'OverweightEnqueued' | 'OverweightServiced';
    }
    interface XcmV2TraitsOutcome extends Enum {
        readonly isComplete: boolean;
        readonly asComplete: u64;
        readonly isIncomplete: boolean;
        readonly asIncomplete: ITuple<[u64, XcmV2TraitsError]>;
        readonly isError: boolean;
        readonly asError: XcmV2TraitsError;
        readonly type: 'Complete' | 'Incomplete' | 'Error';
    }
    interface XcmV2TraitsError extends Enum {
        readonly isOverflow: boolean;
        readonly isUnimplemented: boolean;
        readonly isUntrustedReserveLocation: boolean;
        readonly isUntrustedTeleportLocation: boolean;
        readonly isMultiLocationFull: boolean;
        readonly isMultiLocationNotInvertible: boolean;
        readonly isBadOrigin: boolean;
        readonly isInvalidLocation: boolean;
        readonly isAssetNotFound: boolean;
        readonly isFailedToTransactAsset: boolean;
        readonly isNotWithdrawable: boolean;
        readonly isLocationCannotHold: boolean;
        readonly isExceedsMaxMessageSize: boolean;
        readonly isDestinationUnsupported: boolean;
        readonly isTransport: boolean;
        readonly isUnroutable: boolean;
        readonly isUnknownClaim: boolean;
        readonly isFailedToDecode: boolean;
        readonly isTooMuchWeightRequired: boolean;
        readonly isNotHoldingFees: boolean;
        readonly isTooExpensive: boolean;
        readonly isTrap: boolean;
        readonly asTrap: u64;
        readonly isUnhandledXcmVersion: boolean;
        readonly isWeightLimitReached: boolean;
        readonly asWeightLimitReached: u64;
        readonly isBarrier: boolean;
        readonly isWeightNotComputable: boolean;
        readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'MultiLocationFull' | 'MultiLocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'TooMuchWeightRequired' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable';
    }
    interface PolkadotRuntimeParachainsHrmpPalletEvent extends Enum {
        readonly isOpenChannelRequested: boolean;
        readonly asOpenChannelRequested: ITuple<[u32, u32, u32, u32]>;
        readonly isOpenChannelCanceled: boolean;
        readonly asOpenChannelCanceled: ITuple<[u32, PolkadotParachainPrimitivesHrmpChannelId]>;
        readonly isOpenChannelAccepted: boolean;
        readonly asOpenChannelAccepted: ITuple<[u32, u32]>;
        readonly isChannelClosed: boolean;
        readonly asChannelClosed: ITuple<[u32, PolkadotParachainPrimitivesHrmpChannelId]>;
        readonly type: 'OpenChannelRequested' | 'OpenChannelCanceled' | 'OpenChannelAccepted' | 'ChannelClosed';
    }
    interface PolkadotParachainPrimitivesHrmpChannelId extends Struct {
        readonly sender: u32;
        readonly recipient: u32;
    }
    interface PolkadotRuntimeParachainsDisputesPalletEvent extends Enum {
        readonly isDisputeInitiated: boolean;
        readonly asDisputeInitiated: ITuple<[H256, PolkadotRuntimeParachainsDisputesDisputeLocation]>;
        readonly isDisputeConcluded: boolean;
        readonly asDisputeConcluded: ITuple<[H256, PolkadotRuntimeParachainsDisputesDisputeResult]>;
        readonly isDisputeTimedOut: boolean;
        readonly asDisputeTimedOut: H256;
        readonly isRevert: boolean;
        readonly asRevert: u32;
        readonly type: 'DisputeInitiated' | 'DisputeConcluded' | 'DisputeTimedOut' | 'Revert';
    }
    interface PolkadotRuntimeParachainsDisputesDisputeLocation extends Enum {
        readonly isLocal: boolean;
        readonly isRemote: boolean;
        readonly type: 'Local' | 'Remote';
    }
    interface PolkadotRuntimeParachainsDisputesDisputeResult extends Enum {
        readonly isValid: boolean;
        readonly isInvalid: boolean;
        readonly type: 'Valid' | 'Invalid';
    }
    interface PolkadotRuntimeCommonParasRegistrarPalletEvent extends Enum {
        readonly isRegistered: boolean;
        readonly asRegistered: ITuple<[u32, AccountId32]>;
        readonly isDeregistered: boolean;
        readonly asDeregistered: u32;
        readonly isReserved: boolean;
        readonly asReserved: ITuple<[u32, AccountId32]>;
        readonly type: 'Registered' | 'Deregistered' | 'Reserved';
    }
    interface PolkadotRuntimeCommonAuctionsPalletEvent extends Enum {
        readonly isAuctionStarted: boolean;
        readonly asAuctionStarted: ITuple<[u32, u32, u32]>;
        readonly isAuctionClosed: boolean;
        readonly asAuctionClosed: u32;
        readonly isReserved: boolean;
        readonly asReserved: ITuple<[AccountId32, u128, u128]>;
        readonly isUnreserved: boolean;
        readonly asUnreserved: ITuple<[AccountId32, u128]>;
        readonly isReserveConfiscated: boolean;
        readonly asReserveConfiscated: ITuple<[u32, AccountId32, u128]>;
        readonly isBidAccepted: boolean;
        readonly asBidAccepted: ITuple<[AccountId32, u32, u128, u32, u32]>;
        readonly isWinningOffset: boolean;
        readonly asWinningOffset: ITuple<[u32, u32]>;
        readonly type: 'AuctionStarted' | 'AuctionClosed' | 'Reserved' | 'Unreserved' | 'ReserveConfiscated' | 'BidAccepted' | 'WinningOffset';
    }
    interface PolkadotRuntimeCommonCrowdloanPalletEvent extends Enum {
        readonly isCreated: boolean;
        readonly asCreated: u32;
        readonly isContributed: boolean;
        readonly asContributed: ITuple<[AccountId32, u32, u128]>;
        readonly isWithdrew: boolean;
        readonly asWithdrew: ITuple<[AccountId32, u32, u128]>;
        readonly isPartiallyRefunded: boolean;
        readonly asPartiallyRefunded: u32;
        readonly isAllRefunded: boolean;
        readonly asAllRefunded: u32;
        readonly isDissolved: boolean;
        readonly asDissolved: u32;
        readonly isHandleBidResult: boolean;
        readonly asHandleBidResult: ITuple<[u32, Result<Null, SpRuntimeDispatchError>]>;
        readonly isEdited: boolean;
        readonly asEdited: u32;
        readonly isMemoUpdated: boolean;
        readonly asMemoUpdated: ITuple<[AccountId32, u32, Bytes]>;
        readonly isAddedToNewRaise: boolean;
        readonly asAddedToNewRaise: u32;
        readonly type: 'Created' | 'Contributed' | 'Withdrew' | 'PartiallyRefunded' | 'AllRefunded' | 'Dissolved' | 'HandleBidResult' | 'Edited' | 'MemoUpdated' | 'AddedToNewRaise';
    }
    interface PolkadotRuntimeCommonSlotsPalletEvent extends Enum {
        readonly isNewLeasePeriod: boolean;
        readonly asNewLeasePeriod: u32;
        readonly isLeased: boolean;
        readonly asLeased: ITuple<[u32, AccountId32, u32, u32, u128, u128]>;
        readonly type: 'NewLeasePeriod' | 'Leased';
    }
    interface PalletSudoEvent extends Enum {
        readonly isSudid: boolean;
        readonly asSudid: {
            readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly isKeyChanged: boolean;
        readonly asKeyChanged: {
            readonly newSudoer: AccountId32;
        } & Struct;
        readonly isSudoAsDone: boolean;
        readonly asSudoAsDone: {
            readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly type: 'Sudid' | 'KeyChanged' | 'SudoAsDone';
    }
    interface RococoRuntimeValidatorManagerRawEvent extends Enum {
        readonly isValidatorsRegistered: boolean;
        readonly asValidatorsRegistered: Vec<AccountId32>;
        readonly isValidatorsDeregistered: boolean;
        readonly asValidatorsDeregistered: Vec<AccountId32>;
        readonly type: 'ValidatorsRegistered' | 'ValidatorsDeregistered';
    }
    interface PalletCollectiveEvent extends Enum {
        readonly isProposed: boolean;
        readonly asProposed: {
            readonly account: AccountId32;
            readonly proposalIndex: u32;
            readonly proposalHash: H256;
            readonly threshold: u32;
        } & Struct;
        readonly isVoted: boolean;
        readonly asVoted: {
            readonly account: AccountId32;
            readonly proposalHash: H256;
            readonly voted: bool;
            readonly yes: u32;
            readonly no: u32;
        } & Struct;
        readonly isApproved: boolean;
        readonly asApproved: {
            readonly proposalHash: H256;
        } & Struct;
        readonly isDisapproved: boolean;
        readonly asDisapproved: {
            readonly proposalHash: H256;
        } & Struct;
        readonly isExecuted: boolean;
        readonly asExecuted: {
            readonly proposalHash: H256;
            readonly result: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly isMemberExecuted: boolean;
        readonly asMemberExecuted: {
            readonly proposalHash: H256;
            readonly result: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly isClosed: boolean;
        readonly asClosed: {
            readonly proposalHash: H256;
            readonly yes: u32;
            readonly no: u32;
        } & Struct;
        readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed';
    }
    interface PalletMembershipEvent extends Enum {
        readonly isMemberAdded: boolean;
        readonly isMemberRemoved: boolean;
        readonly isMembersSwapped: boolean;
        readonly isMembersReset: boolean;
        readonly isKeyChanged: boolean;
        readonly isDummy: boolean;
        readonly type: 'MemberAdded' | 'MemberRemoved' | 'MembersSwapped' | 'MembersReset' | 'KeyChanged' | 'Dummy';
    }
    interface PalletUtilityEvent extends Enum {
        readonly isBatchInterrupted: boolean;
        readonly asBatchInterrupted: {
            readonly index: u32;
            readonly error: SpRuntimeDispatchError;
        } & Struct;
        readonly isBatchCompleted: boolean;
        readonly isItemCompleted: boolean;
        readonly isDispatchedAs: boolean;
        readonly asDispatchedAs: Result<Null, SpRuntimeDispatchError>;
        readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'ItemCompleted' | 'DispatchedAs';
    }
    interface PalletProxyEvent extends Enum {
        readonly isProxyExecuted: boolean;
        readonly asProxyExecuted: {
            readonly result: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly isAnonymousCreated: boolean;
        readonly asAnonymousCreated: {
            readonly anonymous: AccountId32;
            readonly who: AccountId32;
            readonly proxyType: RococoRuntimeProxyType;
            readonly disambiguationIndex: u16;
        } & Struct;
        readonly isAnnounced: boolean;
        readonly asAnnounced: {
            readonly real: AccountId32;
            readonly proxy: AccountId32;
            readonly callHash: H256;
        } & Struct;
        readonly isProxyAdded: boolean;
        readonly asProxyAdded: {
            readonly delegator: AccountId32;
            readonly delegatee: AccountId32;
            readonly proxyType: RococoRuntimeProxyType;
            readonly delay: u32;
        } & Struct;
        readonly type: 'ProxyExecuted' | 'AnonymousCreated' | 'Announced' | 'ProxyAdded';
    }
    interface RococoRuntimeProxyType extends Enum {
        readonly isAny: boolean;
        readonly isCancelProxy: boolean;
        readonly isAuction: boolean;
        readonly type: 'Any' | 'CancelProxy' | 'Auction';
    }
    interface PalletMultisigEvent extends Enum {
        readonly isNewMultisig: boolean;
        readonly asNewMultisig: {
            readonly approving: AccountId32;
            readonly multisig: AccountId32;
            readonly callHash: U8aFixed;
        } & Struct;
        readonly isMultisigApproval: boolean;
        readonly asMultisigApproval: {
            readonly approving: AccountId32;
            readonly timepoint: PalletMultisigTimepoint;
            readonly multisig: AccountId32;
            readonly callHash: U8aFixed;
        } & Struct;
        readonly isMultisigExecuted: boolean;
        readonly asMultisigExecuted: {
            readonly approving: AccountId32;
            readonly timepoint: PalletMultisigTimepoint;
            readonly multisig: AccountId32;
            readonly callHash: U8aFixed;
            readonly result: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly isMultisigCancelled: boolean;
        readonly asMultisigCancelled: {
            readonly cancelling: AccountId32;
            readonly timepoint: PalletMultisigTimepoint;
            readonly multisig: AccountId32;
            readonly callHash: U8aFixed;
        } & Struct;
        readonly type: 'NewMultisig' | 'MultisigApproval' | 'MultisigExecuted' | 'MultisigCancelled';
    }
    interface PalletMultisigTimepoint extends Struct {
        readonly height: u32;
        readonly index: u32;
    }
    interface PalletXcmEvent extends Enum {
        readonly isAttempted: boolean;
        readonly asAttempted: XcmV2TraitsOutcome;
        readonly isSent: boolean;
        readonly asSent: ITuple<[XcmV1MultiLocation, XcmV1MultiLocation, XcmV2Xcm]>;
        readonly isUnexpectedResponse: boolean;
        readonly asUnexpectedResponse: ITuple<[XcmV1MultiLocation, u64]>;
        readonly isResponseReady: boolean;
        readonly asResponseReady: ITuple<[u64, XcmV2Response]>;
        readonly isNotified: boolean;
        readonly asNotified: ITuple<[u64, u8, u8]>;
        readonly isNotifyOverweight: boolean;
        readonly asNotifyOverweight: ITuple<[u64, u8, u8, u64, u64]>;
        readonly isNotifyDispatchError: boolean;
        readonly asNotifyDispatchError: ITuple<[u64, u8, u8]>;
        readonly isNotifyDecodeFailed: boolean;
        readonly asNotifyDecodeFailed: ITuple<[u64, u8, u8]>;
        readonly isInvalidResponder: boolean;
        readonly asInvalidResponder: ITuple<[XcmV1MultiLocation, u64, Option<XcmV1MultiLocation>]>;
        readonly isInvalidResponderVersion: boolean;
        readonly asInvalidResponderVersion: ITuple<[XcmV1MultiLocation, u64]>;
        readonly isResponseTaken: boolean;
        readonly asResponseTaken: u64;
        readonly isAssetsTrapped: boolean;
        readonly asAssetsTrapped: ITuple<[H256, XcmV1MultiLocation, XcmVersionedMultiAssets]>;
        readonly isVersionChangeNotified: boolean;
        readonly asVersionChangeNotified: ITuple<[XcmV1MultiLocation, u32]>;
        readonly isSupportedVersionChanged: boolean;
        readonly asSupportedVersionChanged: ITuple<[XcmV1MultiLocation, u32]>;
        readonly isNotifyTargetSendFail: boolean;
        readonly asNotifyTargetSendFail: ITuple<[XcmV1MultiLocation, u64, XcmV2TraitsError]>;
        readonly isNotifyTargetMigrationFail: boolean;
        readonly asNotifyTargetMigrationFail: ITuple<[XcmVersionedMultiLocation, u64]>;
        readonly type: 'Attempted' | 'Sent' | 'UnexpectedResponse' | 'ResponseReady' | 'Notified' | 'NotifyOverweight' | 'NotifyDispatchError' | 'NotifyDecodeFailed' | 'InvalidResponder' | 'InvalidResponderVersion' | 'ResponseTaken' | 'AssetsTrapped' | 'VersionChangeNotified' | 'SupportedVersionChanged' | 'NotifyTargetSendFail' | 'NotifyTargetMigrationFail';
    }
    interface XcmV1MultiLocation extends Struct {
        readonly parents: u8;
        readonly interior: XcmV1MultilocationJunctions;
    }
    interface XcmV1MultilocationJunctions extends Enum {
        readonly isHere: boolean;
        readonly isX1: boolean;
        readonly asX1: XcmV1Junction;
        readonly isX2: boolean;
        readonly asX2: ITuple<[XcmV1Junction, XcmV1Junction]>;
        readonly isX3: boolean;
        readonly asX3: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
        readonly isX4: boolean;
        readonly asX4: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
        readonly isX5: boolean;
        readonly asX5: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
        readonly isX6: boolean;
        readonly asX6: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
        readonly isX7: boolean;
        readonly asX7: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
        readonly isX8: boolean;
        readonly asX8: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
        readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
    }
    interface XcmV1Junction extends Enum {
        readonly isParachain: boolean;
        readonly asParachain: Compact<u32>;
        readonly isAccountId32: boolean;
        readonly asAccountId32: {
            readonly network: XcmV0JunctionNetworkId;
            readonly id: U8aFixed;
        } & Struct;
        readonly isAccountIndex64: boolean;
        readonly asAccountIndex64: {
            readonly network: XcmV0JunctionNetworkId;
            readonly index: Compact<u64>;
        } & Struct;
        readonly isAccountKey20: boolean;
        readonly asAccountKey20: {
            readonly network: XcmV0JunctionNetworkId;
            readonly key: U8aFixed;
        } & Struct;
        readonly isPalletInstance: boolean;
        readonly asPalletInstance: u8;
        readonly isGeneralIndex: boolean;
        readonly asGeneralIndex: Compact<u128>;
        readonly isGeneralKey: boolean;
        readonly asGeneralKey: Bytes;
        readonly isOnlyChild: boolean;
        readonly isPlurality: boolean;
        readonly asPlurality: {
            readonly id: XcmV0JunctionBodyId;
            readonly part: XcmV0JunctionBodyPart;
        } & Struct;
        readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
    }
    interface XcmV0JunctionNetworkId extends Enum {
        readonly isAny: boolean;
        readonly isNamed: boolean;
        readonly asNamed: Bytes;
        readonly isPolkadot: boolean;
        readonly isKusama: boolean;
        readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
    }
    interface XcmV0JunctionBodyId extends Enum {
        readonly isUnit: boolean;
        readonly isNamed: boolean;
        readonly asNamed: Bytes;
        readonly isIndex: boolean;
        readonly asIndex: Compact<u32>;
        readonly isExecutive: boolean;
        readonly isTechnical: boolean;
        readonly isLegislative: boolean;
        readonly isJudicial: boolean;
        readonly type: 'Unit' | 'Named' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial';
    }
    interface XcmV0JunctionBodyPart extends Enum {
        readonly isVoice: boolean;
        readonly isMembers: boolean;
        readonly asMembers: {
            readonly count: Compact<u32>;
        } & Struct;
        readonly isFraction: boolean;
        readonly asFraction: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly isAtLeastProportion: boolean;
        readonly asAtLeastProportion: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly isMoreThanProportion: boolean;
        readonly asMoreThanProportion: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
    }
    interface XcmV2Xcm extends Vec<XcmV2Instruction> {
    }
    interface XcmV2Instruction extends Enum {
        readonly isWithdrawAsset: boolean;
        readonly asWithdrawAsset: XcmV1MultiassetMultiAssets;
        readonly isReserveAssetDeposited: boolean;
        readonly asReserveAssetDeposited: XcmV1MultiassetMultiAssets;
        readonly isReceiveTeleportedAsset: boolean;
        readonly asReceiveTeleportedAsset: XcmV1MultiassetMultiAssets;
        readonly isQueryResponse: boolean;
        readonly asQueryResponse: {
            readonly queryId: Compact<u64>;
            readonly response: XcmV2Response;
            readonly maxWeight: Compact<u64>;
        } & Struct;
        readonly isTransferAsset: boolean;
        readonly asTransferAsset: {
            readonly assets: XcmV1MultiassetMultiAssets;
            readonly beneficiary: XcmV1MultiLocation;
        } & Struct;
        readonly isTransferReserveAsset: boolean;
        readonly asTransferReserveAsset: {
            readonly assets: XcmV1MultiassetMultiAssets;
            readonly dest: XcmV1MultiLocation;
            readonly xcm: XcmV2Xcm;
        } & Struct;
        readonly isTransact: boolean;
        readonly asTransact: {
            readonly originType: XcmV0OriginKind;
            readonly requireWeightAtMost: Compact<u64>;
            readonly call: XcmDoubleEncoded;
        } & Struct;
        readonly isHrmpNewChannelOpenRequest: boolean;
        readonly asHrmpNewChannelOpenRequest: {
            readonly sender: Compact<u32>;
            readonly maxMessageSize: Compact<u32>;
            readonly maxCapacity: Compact<u32>;
        } & Struct;
        readonly isHrmpChannelAccepted: boolean;
        readonly asHrmpChannelAccepted: {
            readonly recipient: Compact<u32>;
        } & Struct;
        readonly isHrmpChannelClosing: boolean;
        readonly asHrmpChannelClosing: {
            readonly initiator: Compact<u32>;
            readonly sender: Compact<u32>;
            readonly recipient: Compact<u32>;
        } & Struct;
        readonly isClearOrigin: boolean;
        readonly isDescendOrigin: boolean;
        readonly asDescendOrigin: XcmV1MultilocationJunctions;
        readonly isReportError: boolean;
        readonly asReportError: {
            readonly queryId: Compact<u64>;
            readonly dest: XcmV1MultiLocation;
            readonly maxResponseWeight: Compact<u64>;
        } & Struct;
        readonly isDepositAsset: boolean;
        readonly asDepositAsset: {
            readonly assets: XcmV1MultiassetMultiAssetFilter;
            readonly maxAssets: Compact<u32>;
            readonly beneficiary: XcmV1MultiLocation;
        } & Struct;
        readonly isDepositReserveAsset: boolean;
        readonly asDepositReserveAsset: {
            readonly assets: XcmV1MultiassetMultiAssetFilter;
            readonly maxAssets: Compact<u32>;
            readonly dest: XcmV1MultiLocation;
            readonly xcm: XcmV2Xcm;
        } & Struct;
        readonly isExchangeAsset: boolean;
        readonly asExchangeAsset: {
            readonly give: XcmV1MultiassetMultiAssetFilter;
            readonly receive: XcmV1MultiassetMultiAssets;
        } & Struct;
        readonly isInitiateReserveWithdraw: boolean;
        readonly asInitiateReserveWithdraw: {
            readonly assets: XcmV1MultiassetMultiAssetFilter;
            readonly reserve: XcmV1MultiLocation;
            readonly xcm: XcmV2Xcm;
        } & Struct;
        readonly isInitiateTeleport: boolean;
        readonly asInitiateTeleport: {
            readonly assets: XcmV1MultiassetMultiAssetFilter;
            readonly dest: XcmV1MultiLocation;
            readonly xcm: XcmV2Xcm;
        } & Struct;
        readonly isQueryHolding: boolean;
        readonly asQueryHolding: {
            readonly queryId: Compact<u64>;
            readonly dest: XcmV1MultiLocation;
            readonly assets: XcmV1MultiassetMultiAssetFilter;
            readonly maxResponseWeight: Compact<u64>;
        } & Struct;
        readonly isBuyExecution: boolean;
        readonly asBuyExecution: {
            readonly fees: XcmV1MultiAsset;
            readonly weightLimit: XcmV2WeightLimit;
        } & Struct;
        readonly isRefundSurplus: boolean;
        readonly isSetErrorHandler: boolean;
        readonly asSetErrorHandler: XcmV2Xcm;
        readonly isSetAppendix: boolean;
        readonly asSetAppendix: XcmV2Xcm;
        readonly isClearError: boolean;
        readonly isClaimAsset: boolean;
        readonly asClaimAsset: {
            readonly assets: XcmV1MultiassetMultiAssets;
            readonly ticket: XcmV1MultiLocation;
        } & Struct;
        readonly isTrap: boolean;
        readonly asTrap: Compact<u64>;
        readonly isSubscribeVersion: boolean;
        readonly asSubscribeVersion: {
            readonly queryId: Compact<u64>;
            readonly maxResponseWeight: Compact<u64>;
        } & Struct;
        readonly isUnsubscribeVersion: boolean;
        readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion';
    }
    interface XcmV1MultiassetMultiAssets extends Vec<XcmV1MultiAsset> {
    }
    interface XcmV1MultiAsset extends Struct {
        readonly id: XcmV1MultiassetAssetId;
        readonly fun: XcmV1MultiassetFungibility;
    }
    interface XcmV1MultiassetAssetId extends Enum {
        readonly isConcrete: boolean;
        readonly asConcrete: XcmV1MultiLocation;
        readonly isAbstract: boolean;
        readonly asAbstract: Bytes;
        readonly type: 'Concrete' | 'Abstract';
    }
    interface XcmV1MultiassetFungibility extends Enum {
        readonly isFungible: boolean;
        readonly asFungible: Compact<u128>;
        readonly isNonFungible: boolean;
        readonly asNonFungible: XcmV1MultiassetAssetInstance;
        readonly type: 'Fungible' | 'NonFungible';
    }
    interface XcmV1MultiassetAssetInstance extends Enum {
        readonly isUndefined: boolean;
        readonly isIndex: boolean;
        readonly asIndex: Compact<u128>;
        readonly isArray4: boolean;
        readonly asArray4: U8aFixed;
        readonly isArray8: boolean;
        readonly asArray8: U8aFixed;
        readonly isArray16: boolean;
        readonly asArray16: U8aFixed;
        readonly isArray32: boolean;
        readonly asArray32: U8aFixed;
        readonly isBlob: boolean;
        readonly asBlob: Bytes;
        readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32' | 'Blob';
    }
    interface XcmV2Response extends Enum {
        readonly isNull: boolean;
        readonly isAssets: boolean;
        readonly asAssets: XcmV1MultiassetMultiAssets;
        readonly isExecutionResult: boolean;
        readonly asExecutionResult: Option<ITuple<[u32, XcmV2TraitsError]>>;
        readonly isVersion: boolean;
        readonly asVersion: u32;
        readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version';
    }
    interface XcmV0OriginKind extends Enum {
        readonly isNative: boolean;
        readonly isSovereignAccount: boolean;
        readonly isSuperuser: boolean;
        readonly isXcm: boolean;
        readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
    }
    interface XcmDoubleEncoded extends Struct {
        readonly encoded: Bytes;
    }
    interface XcmV1MultiassetMultiAssetFilter extends Enum {
        readonly isDefinite: boolean;
        readonly asDefinite: XcmV1MultiassetMultiAssets;
        readonly isWild: boolean;
        readonly asWild: XcmV1MultiassetWildMultiAsset;
        readonly type: 'Definite' | 'Wild';
    }
    interface XcmV1MultiassetWildMultiAsset extends Enum {
        readonly isAll: boolean;
        readonly isAllOf: boolean;
        readonly asAllOf: {
            readonly id: XcmV1MultiassetAssetId;
            readonly fun: XcmV1MultiassetWildFungibility;
        } & Struct;
        readonly type: 'All' | 'AllOf';
    }
    interface XcmV1MultiassetWildFungibility extends Enum {
        readonly isFungible: boolean;
        readonly isNonFungible: boolean;
        readonly type: 'Fungible' | 'NonFungible';
    }
    interface XcmV2WeightLimit extends Enum {
        readonly isUnlimited: boolean;
        readonly isLimited: boolean;
        readonly asLimited: Compact<u64>;
        readonly type: 'Unlimited' | 'Limited';
    }
    interface XcmVersionedMultiAssets extends Enum {
        readonly isV0: boolean;
        readonly asV0: Vec<XcmV0MultiAsset>;
        readonly isV1: boolean;
        readonly asV1: XcmV1MultiassetMultiAssets;
        readonly type: 'V0' | 'V1';
    }
    interface XcmV0MultiAsset extends Enum {
        readonly isNone: boolean;
        readonly isAll: boolean;
        readonly isAllFungible: boolean;
        readonly isAllNonFungible: boolean;
        readonly isAllAbstractFungible: boolean;
        readonly asAllAbstractFungible: {
            readonly id: Bytes;
        } & Struct;
        readonly isAllAbstractNonFungible: boolean;
        readonly asAllAbstractNonFungible: {
            readonly class: Bytes;
        } & Struct;
        readonly isAllConcreteFungible: boolean;
        readonly asAllConcreteFungible: {
            readonly id: XcmV0MultiLocation;
        } & Struct;
        readonly isAllConcreteNonFungible: boolean;
        readonly asAllConcreteNonFungible: {
            readonly class: XcmV0MultiLocation;
        } & Struct;
        readonly isAbstractFungible: boolean;
        readonly asAbstractFungible: {
            readonly id: Bytes;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isAbstractNonFungible: boolean;
        readonly asAbstractNonFungible: {
            readonly class: Bytes;
            readonly instance: XcmV1MultiassetAssetInstance;
        } & Struct;
        readonly isConcreteFungible: boolean;
        readonly asConcreteFungible: {
            readonly id: XcmV0MultiLocation;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isConcreteNonFungible: boolean;
        readonly asConcreteNonFungible: {
            readonly class: XcmV0MultiLocation;
            readonly instance: XcmV1MultiassetAssetInstance;
        } & Struct;
        readonly type: 'None' | 'All' | 'AllFungible' | 'AllNonFungible' | 'AllAbstractFungible' | 'AllAbstractNonFungible' | 'AllConcreteFungible' | 'AllConcreteNonFungible' | 'AbstractFungible' | 'AbstractNonFungible' | 'ConcreteFungible' | 'ConcreteNonFungible';
    }
    interface XcmV0MultiLocation extends Enum {
        readonly isNull: boolean;
        readonly isX1: boolean;
        readonly asX1: XcmV0Junction;
        readonly isX2: boolean;
        readonly asX2: ITuple<[XcmV0Junction, XcmV0Junction]>;
        readonly isX3: boolean;
        readonly asX3: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
        readonly isX4: boolean;
        readonly asX4: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
        readonly isX5: boolean;
        readonly asX5: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
        readonly isX6: boolean;
        readonly asX6: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
        readonly isX7: boolean;
        readonly asX7: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
        readonly isX8: boolean;
        readonly asX8: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
        readonly type: 'Null' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
    }
    interface XcmV0Junction extends Enum {
        readonly isParent: boolean;
        readonly isParachain: boolean;
        readonly asParachain: Compact<u32>;
        readonly isAccountId32: boolean;
        readonly asAccountId32: {
            readonly network: XcmV0JunctionNetworkId;
            readonly id: U8aFixed;
        } & Struct;
        readonly isAccountIndex64: boolean;
        readonly asAccountIndex64: {
            readonly network: XcmV0JunctionNetworkId;
            readonly index: Compact<u64>;
        } & Struct;
        readonly isAccountKey20: boolean;
        readonly asAccountKey20: {
            readonly network: XcmV0JunctionNetworkId;
            readonly key: U8aFixed;
        } & Struct;
        readonly isPalletInstance: boolean;
        readonly asPalletInstance: u8;
        readonly isGeneralIndex: boolean;
        readonly asGeneralIndex: Compact<u128>;
        readonly isGeneralKey: boolean;
        readonly asGeneralKey: Bytes;
        readonly isOnlyChild: boolean;
        readonly isPlurality: boolean;
        readonly asPlurality: {
            readonly id: XcmV0JunctionBodyId;
            readonly part: XcmV0JunctionBodyPart;
        } & Struct;
        readonly type: 'Parent' | 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
    }
    interface XcmVersionedMultiLocation extends Enum {
        readonly isV0: boolean;
        readonly asV0: XcmV0MultiLocation;
        readonly isV1: boolean;
        readonly asV1: XcmV1MultiLocation;
        readonly type: 'V0' | 'V1';
    }
    interface FrameSystemPhase extends Enum {
        readonly isApplyExtrinsic: boolean;
        readonly asApplyExtrinsic: u32;
        readonly isFinalization: boolean;
        readonly isInitialization: boolean;
        readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
    }
    interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
        readonly specVersion: Compact<u32>;
        readonly specName: Text;
    }
    interface FrameSystemCall extends Enum {
        readonly isFillBlock: boolean;
        readonly asFillBlock: {
            readonly ratio: Perbill;
        } & Struct;
        readonly isRemark: boolean;
        readonly asRemark: {
            readonly remark: Bytes;
        } & Struct;
        readonly isSetHeapPages: boolean;
        readonly asSetHeapPages: {
            readonly pages: u64;
        } & Struct;
        readonly isSetCode: boolean;
        readonly asSetCode: {
            readonly code: Bytes;
        } & Struct;
        readonly isSetCodeWithoutChecks: boolean;
        readonly asSetCodeWithoutChecks: {
            readonly code: Bytes;
        } & Struct;
        readonly isSetStorage: boolean;
        readonly asSetStorage: {
            readonly items: Vec<ITuple<[Bytes, Bytes]>>;
        } & Struct;
        readonly isKillStorage: boolean;
        readonly asKillStorage: {
            readonly keys_: Vec<Bytes>;
        } & Struct;
        readonly isKillPrefix: boolean;
        readonly asKillPrefix: {
            readonly prefix: Bytes;
            readonly subkeys: u32;
        } & Struct;
        readonly isRemarkWithEvent: boolean;
        readonly asRemarkWithEvent: {
            readonly remark: Bytes;
        } & Struct;
        readonly type: 'FillBlock' | 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
    }
    interface FrameSystemLimitsBlockWeights extends Struct {
        readonly baseBlock: u64;
        readonly maxBlock: u64;
        readonly perClass: FrameSupportWeightsPerDispatchClassWeightsPerClass;
    }
    interface FrameSupportWeightsPerDispatchClassWeightsPerClass extends Struct {
        readonly normal: FrameSystemLimitsWeightsPerClass;
        readonly operational: FrameSystemLimitsWeightsPerClass;
        readonly mandatory: FrameSystemLimitsWeightsPerClass;
    }
    interface FrameSystemLimitsWeightsPerClass extends Struct {
        readonly baseExtrinsic: u64;
        readonly maxExtrinsic: Option<u64>;
        readonly maxTotal: Option<u64>;
        readonly reserved: Option<u64>;
    }
    interface FrameSystemLimitsBlockLength extends Struct {
        readonly max: FrameSupportWeightsPerDispatchClassU32;
    }
    interface FrameSupportWeightsPerDispatchClassU32 extends Struct {
        readonly normal: u32;
        readonly operational: u32;
        readonly mandatory: u32;
    }
    interface FrameSupportWeightsRuntimeDbWeight extends Struct {
        readonly read: u64;
        readonly write: u64;
    }
    interface SpVersionRuntimeVersion extends Struct {
        readonly specName: Text;
        readonly implName: Text;
        readonly authoringVersion: u32;
        readonly specVersion: u32;
        readonly implVersion: u32;
        readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
        readonly transactionVersion: u32;
    }
    interface FrameSystemError extends Enum {
        readonly isInvalidSpecName: boolean;
        readonly isSpecVersionNeedsToIncrease: boolean;
        readonly isFailedToExtractRuntimeVersion: boolean;
        readonly isNonDefaultComposite: boolean;
        readonly isNonZeroRefCount: boolean;
        readonly isCallFiltered: boolean;
        readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
    }
    interface SpConsensusBabeAppPublic extends SpCoreSr25519Public {
    }
    interface SpConsensusBabeDigestsNextConfigDescriptor extends Enum {
        readonly isV1: boolean;
        readonly asV1: {
            readonly c: ITuple<[u64, u64]>;
            readonly allowedSlots: SpConsensusBabeAllowedSlots;
        } & Struct;
        readonly type: 'V1';
    }
    interface SpConsensusBabeAllowedSlots extends Enum {
        readonly isPrimarySlots: boolean;
        readonly isPrimaryAndSecondaryPlainSlots: boolean;
        readonly isPrimaryAndSecondaryVRFSlots: boolean;
        readonly type: 'PrimarySlots' | 'PrimaryAndSecondaryPlainSlots' | 'PrimaryAndSecondaryVRFSlots';
    }
    interface SpConsensusBabeBabeEpochConfiguration extends Struct {
        readonly c: ITuple<[u64, u64]>;
        readonly allowedSlots: SpConsensusBabeAllowedSlots;
    }
    interface PalletBabeCall extends Enum {
        readonly isReportEquivocation: boolean;
        readonly asReportEquivocation: {
            readonly equivocationProof: SpConsensusSlotsEquivocationProof;
            readonly keyOwnerProof: SpSessionMembershipProof;
        } & Struct;
        readonly isReportEquivocationUnsigned: boolean;
        readonly asReportEquivocationUnsigned: {
            readonly equivocationProof: SpConsensusSlotsEquivocationProof;
            readonly keyOwnerProof: SpSessionMembershipProof;
        } & Struct;
        readonly isPlanConfigChange: boolean;
        readonly asPlanConfigChange: {
            readonly config: SpConsensusBabeDigestsNextConfigDescriptor;
        } & Struct;
        readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'PlanConfigChange';
    }
    interface SpConsensusSlotsEquivocationProof extends Struct {
        readonly offender: SpConsensusBabeAppPublic;
        readonly slot: u64;
        readonly firstHeader: SpRuntimeHeader;
        readonly secondHeader: SpRuntimeHeader;
    }
    interface SpRuntimeHeader extends Struct {
        readonly parentHash: H256;
        readonly number: Compact<u32>;
        readonly stateRoot: H256;
        readonly extrinsicsRoot: H256;
        readonly digest: SpRuntimeDigest;
    }
    type SpRuntimeBlakeTwo256 = Null;
    interface SpSessionMembershipProof extends Struct {
        readonly session: u32;
        readonly trieNodes: Vec<Bytes>;
        readonly validatorCount: u32;
    }
    interface PalletBabeError extends Enum {
        readonly isInvalidEquivocationProof: boolean;
        readonly isInvalidKeyOwnershipProof: boolean;
        readonly isDuplicateOffenceReport: boolean;
        readonly type: 'InvalidEquivocationProof' | 'InvalidKeyOwnershipProof' | 'DuplicateOffenceReport';
    }
    interface PalletTimestampCall extends Enum {
        readonly isSet: boolean;
        readonly asSet: {
            readonly now: Compact<u64>;
        } & Struct;
        readonly type: 'Set';
    }
    interface PalletIndicesCall extends Enum {
        readonly isClaim: boolean;
        readonly asClaim: {
            readonly index: u32;
        } & Struct;
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly new_: AccountId32;
            readonly index: u32;
        } & Struct;
        readonly isFree: boolean;
        readonly asFree: {
            readonly index: u32;
        } & Struct;
        readonly isForceTransfer: boolean;
        readonly asForceTransfer: {
            readonly new_: AccountId32;
            readonly index: u32;
            readonly freeze: bool;
        } & Struct;
        readonly isFreeze: boolean;
        readonly asFreeze: {
            readonly index: u32;
        } & Struct;
        readonly type: 'Claim' | 'Transfer' | 'Free' | 'ForceTransfer' | 'Freeze';
    }
    interface PalletIndicesError extends Enum {
        readonly isNotAssigned: boolean;
        readonly isNotOwner: boolean;
        readonly isInUse: boolean;
        readonly isNotTransfer: boolean;
        readonly isPermanent: boolean;
        readonly type: 'NotAssigned' | 'NotOwner' | 'InUse' | 'NotTransfer' | 'Permanent';
    }
    interface PalletBalancesBalanceLock extends Struct {
        readonly id: U8aFixed;
        readonly amount: u128;
        readonly reasons: PalletBalancesReasons;
    }
    interface PalletBalancesReasons extends Enum {
        readonly isFee: boolean;
        readonly isMisc: boolean;
        readonly isAll: boolean;
        readonly type: 'Fee' | 'Misc' | 'All';
    }
    interface PalletBalancesReserveData extends Struct {
        readonly id: U8aFixed;
        readonly amount: u128;
    }
    interface PalletBalancesReleases extends Enum {
        readonly isV100: boolean;
        readonly isV200: boolean;
        readonly type: 'V100' | 'V200';
    }
    interface PalletBalancesCall extends Enum {
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly dest: MultiAddress;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isSetBalance: boolean;
        readonly asSetBalance: {
            readonly who: MultiAddress;
            readonly newFree: Compact<u128>;
            readonly newReserved: Compact<u128>;
        } & Struct;
        readonly isForceTransfer: boolean;
        readonly asForceTransfer: {
            readonly source: MultiAddress;
            readonly dest: MultiAddress;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isTransferKeepAlive: boolean;
        readonly asTransferKeepAlive: {
            readonly dest: MultiAddress;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isTransferAll: boolean;
        readonly asTransferAll: {
            readonly dest: MultiAddress;
            readonly keepAlive: bool;
        } & Struct;
        readonly isForceUnreserve: boolean;
        readonly asForceUnreserve: {
            readonly who: MultiAddress;
            readonly amount: u128;
        } & Struct;
        readonly type: 'Transfer' | 'SetBalance' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve';
    }
    interface PalletBalancesError extends Enum {
        readonly isVestingBalance: boolean;
        readonly isLiquidityRestrictions: boolean;
        readonly isInsufficientBalance: boolean;
        readonly isExistentialDeposit: boolean;
        readonly isKeepAlive: boolean;
        readonly isExistingVestingSchedule: boolean;
        readonly isDeadAccount: boolean;
        readonly isTooManyReserves: boolean;
        readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'KeepAlive' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves';
    }
    interface PalletTransactionPaymentReleases extends Enum {
        readonly isV1Ancient: boolean;
        readonly isV2: boolean;
        readonly type: 'V1Ancient' | 'V2';
    }
    interface FrameSupportWeightsWeightToFeeCoefficient extends Struct {
        readonly coeffInteger: u128;
        readonly coeffFrac: Perbill;
        readonly negative: bool;
        readonly degree: u8;
    }
    interface PalletAuthorshipUncleEntryItem extends Enum {
        readonly isInclusionHeight: boolean;
        readonly asInclusionHeight: u32;
        readonly isUncle: boolean;
        readonly asUncle: ITuple<[H256, Option<AccountId32>]>;
        readonly type: 'InclusionHeight' | 'Uncle';
    }
    interface PalletAuthorshipCall extends Enum {
        readonly isSetUncles: boolean;
        readonly asSetUncles: {
            readonly newUncles: Vec<SpRuntimeHeader>;
        } & Struct;
        readonly type: 'SetUncles';
    }
    interface PalletAuthorshipError extends Enum {
        readonly isInvalidUncleParent: boolean;
        readonly isUnclesAlreadySet: boolean;
        readonly isTooManyUncles: boolean;
        readonly isGenesisUncle: boolean;
        readonly isTooHighUncle: boolean;
        readonly isUncleAlreadyIncluded: boolean;
        readonly isOldUncle: boolean;
        readonly type: 'InvalidUncleParent' | 'UnclesAlreadySet' | 'TooManyUncles' | 'GenesisUncle' | 'TooHighUncle' | 'UncleAlreadyIncluded' | 'OldUncle';
    }
    interface SpStakingOffenceOffenceDetails extends Struct {
        readonly offender: ITuple<[AccountId32, Null]>;
        readonly reporters: Vec<AccountId32>;
    }
    interface RococoRuntimeSessionKeys extends Struct {
        readonly grandpa: SpFinalityGrandpaAppPublic;
        readonly babe: SpConsensusBabeAppPublic;
        readonly imOnline: PalletImOnlineSr25519AppSr25519Public;
        readonly paraValidator: PolkadotPrimitivesV0ValidatorAppPublic;
        readonly paraAssignment: PolkadotPrimitivesV1AssignmentAppPublic;
        readonly authorityDiscovery: SpAuthorityDiscoveryAppPublic;
        readonly beefy: BeefyPrimitivesCryptoPublic;
    }
    interface PolkadotPrimitivesV0ValidatorAppPublic extends SpCoreSr25519Public {
    }
    interface PolkadotPrimitivesV1AssignmentAppPublic extends SpCoreSr25519Public {
    }
    interface SpAuthorityDiscoveryAppPublic extends SpCoreSr25519Public {
    }
    interface BeefyPrimitivesCryptoPublic extends SpCoreEcdsaPublic {
    }
    interface SpCoreEcdsaPublic extends U8aFixed {
    }
    interface SpCoreCryptoKeyTypeId extends U8aFixed {
    }
    interface PalletSessionCall extends Enum {
        readonly isSetKeys: boolean;
        readonly asSetKeys: {
            readonly keys_: RococoRuntimeSessionKeys;
            readonly proof: Bytes;
        } & Struct;
        readonly isPurgeKeys: boolean;
        readonly type: 'SetKeys' | 'PurgeKeys';
    }
    interface PalletSessionError extends Enum {
        readonly isInvalidProof: boolean;
        readonly isNoAssociatedValidatorId: boolean;
        readonly isDuplicatedKey: boolean;
        readonly isNoKeys: boolean;
        readonly isNoAccount: boolean;
        readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
    }
    interface PalletGrandpaStoredState extends Enum {
        readonly isLive: boolean;
        readonly isPendingPause: boolean;
        readonly asPendingPause: {
            readonly scheduledAt: u32;
            readonly delay: u32;
        } & Struct;
        readonly isPaused: boolean;
        readonly isPendingResume: boolean;
        readonly asPendingResume: {
            readonly scheduledAt: u32;
            readonly delay: u32;
        } & Struct;
        readonly type: 'Live' | 'PendingPause' | 'Paused' | 'PendingResume';
    }
    interface PalletGrandpaStoredPendingChange extends Struct {
        readonly scheduledAt: u32;
        readonly delay: u32;
        readonly nextAuthorities: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
        readonly forced: Option<u32>;
    }
    interface PalletGrandpaCall extends Enum {
        readonly isReportEquivocation: boolean;
        readonly asReportEquivocation: {
            readonly equivocationProof: SpFinalityGrandpaEquivocationProof;
            readonly keyOwnerProof: SpSessionMembershipProof;
        } & Struct;
        readonly isReportEquivocationUnsigned: boolean;
        readonly asReportEquivocationUnsigned: {
            readonly equivocationProof: SpFinalityGrandpaEquivocationProof;
            readonly keyOwnerProof: SpSessionMembershipProof;
        } & Struct;
        readonly isNoteStalled: boolean;
        readonly asNoteStalled: {
            readonly delay: u32;
            readonly bestFinalizedBlockNumber: u32;
        } & Struct;
        readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'NoteStalled';
    }
    interface SpFinalityGrandpaEquivocationProof extends Struct {
        readonly setId: u64;
        readonly equivocation: SpFinalityGrandpaEquivocation;
    }
    interface SpFinalityGrandpaEquivocation extends Enum {
        readonly isPrevote: boolean;
        readonly asPrevote: FinalityGrandpaEquivocationPrevote;
        readonly isPrecommit: boolean;
        readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
        readonly type: 'Prevote' | 'Precommit';
    }
    interface FinalityGrandpaEquivocationPrevote extends Struct {
        readonly roundNumber: u64;
        readonly identity: SpFinalityGrandpaAppPublic;
        readonly first: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
        readonly second: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
    }
    interface FinalityGrandpaPrevote extends Struct {
        readonly targetHash: H256;
        readonly targetNumber: u32;
    }
    interface SpFinalityGrandpaAppSignature extends SpCoreEd25519Signature {
    }
    interface SpCoreEd25519Signature extends U8aFixed {
    }
    interface FinalityGrandpaEquivocationPrecommit extends Struct {
        readonly roundNumber: u64;
        readonly identity: SpFinalityGrandpaAppPublic;
        readonly first: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
        readonly second: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
    }
    interface FinalityGrandpaPrecommit extends Struct {
        readonly targetHash: H256;
        readonly targetNumber: u32;
    }
    interface PalletGrandpaError extends Enum {
        readonly isPauseFailed: boolean;
        readonly isResumeFailed: boolean;
        readonly isChangePending: boolean;
        readonly isTooSoon: boolean;
        readonly isInvalidKeyOwnershipProof: boolean;
        readonly isInvalidEquivocationProof: boolean;
        readonly isDuplicateOffenceReport: boolean;
        readonly type: 'PauseFailed' | 'ResumeFailed' | 'ChangePending' | 'TooSoon' | 'InvalidKeyOwnershipProof' | 'InvalidEquivocationProof' | 'DuplicateOffenceReport';
    }
    interface PalletImOnlineBoundedOpaqueNetworkState extends Struct {
        readonly peerId: Bytes;
        readonly externalAddresses: Vec<Bytes>;
    }
    interface PalletImOnlineCall extends Enum {
        readonly isHeartbeat: boolean;
        readonly asHeartbeat: {
            readonly heartbeat: PalletImOnlineHeartbeat;
            readonly signature: PalletImOnlineSr25519AppSr25519Signature;
        } & Struct;
        readonly type: 'Heartbeat';
    }
    interface PalletImOnlineHeartbeat extends Struct {
        readonly blockNumber: u32;
        readonly networkState: SpCoreOffchainOpaqueNetworkState;
        readonly sessionIndex: u32;
        readonly authorityIndex: u32;
        readonly validatorsLen: u32;
    }
    interface SpCoreOffchainOpaqueNetworkState extends Struct {
        readonly peerId: Bytes;
        readonly externalAddresses: Vec<Bytes>;
    }
    interface PalletImOnlineSr25519AppSr25519Signature extends SpCoreSr25519Signature {
    }
    interface PalletImOnlineError extends Enum {
        readonly isInvalidKey: boolean;
        readonly isDuplicatedHeartbeat: boolean;
        readonly type: 'InvalidKey' | 'DuplicatedHeartbeat';
    }
    interface PolkadotRuntimeParachainsConfigurationHostConfiguration extends Struct {
        readonly maxCodeSize: u32;
        readonly maxHeadDataSize: u32;
        readonly maxUpwardQueueCount: u32;
        readonly maxUpwardQueueSize: u32;
        readonly maxUpwardMessageSize: u32;
        readonly maxUpwardMessageNumPerCandidate: u32;
        readonly hrmpMaxMessageNumPerCandidate: u32;
        readonly validationUpgradeFrequency: u32;
        readonly validationUpgradeDelay: u32;
        readonly maxPovSize: u32;
        readonly maxDownwardMessageSize: u32;
        readonly umpServiceTotalWeight: u64;
        readonly hrmpMaxParachainOutboundChannels: u32;
        readonly hrmpMaxParathreadOutboundChannels: u32;
        readonly hrmpSenderDeposit: u128;
        readonly hrmpRecipientDeposit: u128;
        readonly hrmpChannelMaxCapacity: u32;
        readonly hrmpChannelMaxTotalSize: u32;
        readonly hrmpMaxParachainInboundChannels: u32;
        readonly hrmpMaxParathreadInboundChannels: u32;
        readonly hrmpChannelMaxMessageSize: u32;
        readonly codeRetentionPeriod: u32;
        readonly parathreadCores: u32;
        readonly parathreadRetries: u32;
        readonly groupRotationFrequency: u32;
        readonly chainAvailabilityPeriod: u32;
        readonly threadAvailabilityPeriod: u32;
        readonly schedulingLookahead: u32;
        readonly maxValidatorsPerCore: Option<u32>;
        readonly maxValidators: Option<u32>;
        readonly disputePeriod: u32;
        readonly disputePostConclusionAcceptancePeriod: u32;
        readonly disputeMaxSpamSlots: u32;
        readonly disputeConclusionByTimeOutPeriod: u32;
        readonly noShowSlots: u32;
        readonly nDelayTranches: u32;
        readonly zerothDelayTrancheWidth: u32;
        readonly neededApprovals: u32;
        readonly relayVrfModuloSamples: u32;
        readonly umpMaxIndividualWeight: u64;
    }
    interface PolkadotRuntimeParachainsConfigurationPalletCall extends Enum {
        readonly isSetValidationUpgradeFrequency: boolean;
        readonly asSetValidationUpgradeFrequency: {
            readonly new_: u32;
        } & Struct;
        readonly isSetValidationUpgradeDelay: boolean;
        readonly asSetValidationUpgradeDelay: {
            readonly new_: u32;
        } & Struct;
        readonly isSetCodeRetentionPeriod: boolean;
        readonly asSetCodeRetentionPeriod: {
            readonly new_: u32;
        } & Struct;
        readonly isSetMaxCodeSize: boolean;
        readonly asSetMaxCodeSize: {
            readonly new_: u32;
        } & Struct;
        readonly isSetMaxPovSize: boolean;
        readonly asSetMaxPovSize: {
            readonly new_: u32;
        } & Struct;
        readonly isSetMaxHeadDataSize: boolean;
        readonly asSetMaxHeadDataSize: {
            readonly new_: u32;
        } & Struct;
        readonly isSetParathreadCores: boolean;
        readonly asSetParathreadCores: {
            readonly new_: u32;
        } & Struct;
        readonly isSetParathreadRetries: boolean;
        readonly asSetParathreadRetries: {
            readonly new_: u32;
        } & Struct;
        readonly isSetGroupRotationFrequency: boolean;
        readonly asSetGroupRotationFrequency: {
            readonly new_: u32;
        } & Struct;
        readonly isSetChainAvailabilityPeriod: boolean;
        readonly asSetChainAvailabilityPeriod: {
            readonly new_: u32;
        } & Struct;
        readonly isSetThreadAvailabilityPeriod: boolean;
        readonly asSetThreadAvailabilityPeriod: {
            readonly new_: u32;
        } & Struct;
        readonly isSetSchedulingLookahead: boolean;
        readonly asSetSchedulingLookahead: {
            readonly new_: u32;
        } & Struct;
        readonly isSetMaxValidatorsPerCore: boolean;
        readonly asSetMaxValidatorsPerCore: {
            readonly new_: Option<u32>;
        } & Struct;
        readonly isSetMaxValidators: boolean;
        readonly asSetMaxValidators: {
            readonly new_: Option<u32>;
        } & Struct;
        readonly isSetDisputePeriod: boolean;
        readonly asSetDisputePeriod: {
            readonly new_: u32;
        } & Struct;
        readonly isSetDisputePostConclusionAcceptancePeriod: boolean;
        readonly asSetDisputePostConclusionAcceptancePeriod: {
            readonly new_: u32;
        } & Struct;
        readonly isSetDisputeMaxSpamSlots: boolean;
        readonly asSetDisputeMaxSpamSlots: {
            readonly new_: u32;
        } & Struct;
        readonly isSetDisputeConclusionByTimeOutPeriod: boolean;
        readonly asSetDisputeConclusionByTimeOutPeriod: {
            readonly new_: u32;
        } & Struct;
        readonly isSetNoShowSlots: boolean;
        readonly asSetNoShowSlots: {
            readonly new_: u32;
        } & Struct;
        readonly isSetNDelayTranches: boolean;
        readonly asSetNDelayTranches: {
            readonly new_: u32;
        } & Struct;
        readonly isSetZerothDelayTrancheWidth: boolean;
        readonly asSetZerothDelayTrancheWidth: {
            readonly new_: u32;
        } & Struct;
        readonly isSetNeededApprovals: boolean;
        readonly asSetNeededApprovals: {
            readonly new_: u32;
        } & Struct;
        readonly isSetRelayVrfModuloSamples: boolean;
        readonly asSetRelayVrfModuloSamples: {
            readonly new_: u32;
        } & Struct;
        readonly isSetMaxUpwardQueueCount: boolean;
        readonly asSetMaxUpwardQueueCount: {
            readonly new_: u32;
        } & Struct;
        readonly isSetMaxUpwardQueueSize: boolean;
        readonly asSetMaxUpwardQueueSize: {
            readonly new_: u32;
        } & Struct;
        readonly isSetMaxDownwardMessageSize: boolean;
        readonly asSetMaxDownwardMessageSize: {
            readonly new_: u32;
        } & Struct;
        readonly isSetUmpServiceTotalWeight: boolean;
        readonly asSetUmpServiceTotalWeight: {
            readonly new_: u64;
        } & Struct;
        readonly isSetMaxUpwardMessageSize: boolean;
        readonly asSetMaxUpwardMessageSize: {
            readonly new_: u32;
        } & Struct;
        readonly isSetMaxUpwardMessageNumPerCandidate: boolean;
        readonly asSetMaxUpwardMessageNumPerCandidate: {
            readonly new_: u32;
        } & Struct;
        readonly isSetHrmpOpenRequestTtl: boolean;
        readonly asSetHrmpOpenRequestTtl: {
            readonly new_: u32;
        } & Struct;
        readonly isSetHrmpSenderDeposit: boolean;
        readonly asSetHrmpSenderDeposit: {
            readonly new_: u128;
        } & Struct;
        readonly isSetHrmpRecipientDeposit: boolean;
        readonly asSetHrmpRecipientDeposit: {
            readonly new_: u128;
        } & Struct;
        readonly isSetHrmpChannelMaxCapacity: boolean;
        readonly asSetHrmpChannelMaxCapacity: {
            readonly new_: u32;
        } & Struct;
        readonly isSetHrmpChannelMaxTotalSize: boolean;
        readonly asSetHrmpChannelMaxTotalSize: {
            readonly new_: u32;
        } & Struct;
        readonly isSetHrmpMaxParachainInboundChannels: boolean;
        readonly asSetHrmpMaxParachainInboundChannels: {
            readonly new_: u32;
        } & Struct;
        readonly isSetHrmpMaxParathreadInboundChannels: boolean;
        readonly asSetHrmpMaxParathreadInboundChannels: {
            readonly new_: u32;
        } & Struct;
        readonly isSetHrmpChannelMaxMessageSize: boolean;
        readonly asSetHrmpChannelMaxMessageSize: {
            readonly new_: u32;
        } & Struct;
        readonly isSetHrmpMaxParachainOutboundChannels: boolean;
        readonly asSetHrmpMaxParachainOutboundChannels: {
            readonly new_: u32;
        } & Struct;
        readonly isSetHrmpMaxParathreadOutboundChannels: boolean;
        readonly asSetHrmpMaxParathreadOutboundChannels: {
            readonly new_: u32;
        } & Struct;
        readonly isSetHrmpMaxMessageNumPerCandidate: boolean;
        readonly asSetHrmpMaxMessageNumPerCandidate: {
            readonly new_: u32;
        } & Struct;
        readonly isSetUmpMaxIndividualWeight: boolean;
        readonly asSetUmpMaxIndividualWeight: {
            readonly new_: u64;
        } & Struct;
        readonly type: 'SetValidationUpgradeFrequency' | 'SetValidationUpgradeDelay' | 'SetCodeRetentionPeriod' | 'SetMaxCodeSize' | 'SetMaxPovSize' | 'SetMaxHeadDataSize' | 'SetParathreadCores' | 'SetParathreadRetries' | 'SetGroupRotationFrequency' | 'SetChainAvailabilityPeriod' | 'SetThreadAvailabilityPeriod' | 'SetSchedulingLookahead' | 'SetMaxValidatorsPerCore' | 'SetMaxValidators' | 'SetDisputePeriod' | 'SetDisputePostConclusionAcceptancePeriod' | 'SetDisputeMaxSpamSlots' | 'SetDisputeConclusionByTimeOutPeriod' | 'SetNoShowSlots' | 'SetNDelayTranches' | 'SetZerothDelayTrancheWidth' | 'SetNeededApprovals' | 'SetRelayVrfModuloSamples' | 'SetMaxUpwardQueueCount' | 'SetMaxUpwardQueueSize' | 'SetMaxDownwardMessageSize' | 'SetUmpServiceTotalWeight' | 'SetMaxUpwardMessageSize' | 'SetMaxUpwardMessageNumPerCandidate' | 'SetHrmpOpenRequestTtl' | 'SetHrmpSenderDeposit' | 'SetHrmpRecipientDeposit' | 'SetHrmpChannelMaxCapacity' | 'SetHrmpChannelMaxTotalSize' | 'SetHrmpMaxParachainInboundChannels' | 'SetHrmpMaxParathreadInboundChannels' | 'SetHrmpChannelMaxMessageSize' | 'SetHrmpMaxParachainOutboundChannels' | 'SetHrmpMaxParathreadOutboundChannels' | 'SetHrmpMaxMessageNumPerCandidate' | 'SetUmpMaxIndividualWeight';
    }
    interface PolkadotRuntimeParachainsConfigurationPalletError extends Enum {
        readonly isInvalidNewValue: boolean;
        readonly type: 'InvalidNewValue';
    }
    type PolkadotRuntimeParachainsSharedPalletCall = Null;
    interface PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord extends Struct {
        readonly bitfield: BitVec;
        readonly submittedAt: u32;
    }
    type BitvecOrderLsb0 = Null;
    interface PolkadotRuntimeParachainsInclusionCandidatePendingAvailability extends Struct {
        readonly core: u32;
        readonly hash_: H256;
        readonly descriptor: PolkadotPrimitivesV1CandidateDescriptor;
        readonly availabilityVotes: BitVec;
        readonly backers: BitVec;
        readonly relayParentNumber: u32;
        readonly backedInNumber: u32;
        readonly backingGroup: u32;
    }
    interface PolkadotPrimitivesV1CandidateCommitments extends Struct {
        readonly upwardMessages: Vec<Bytes>;
        readonly horizontalMessages: Vec<PolkadotCorePrimitivesOutboundHrmpMessage>;
        readonly newValidationCode: Option<Bytes>;
        readonly headData: Bytes;
        readonly processedDownwardMessages: u32;
        readonly hrmpWatermark: u32;
    }
    interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
        readonly recipient: u32;
        readonly data: Bytes;
    }
    type PolkadotRuntimeParachainsInclusionPalletCall = Null;
    interface PolkadotRuntimeParachainsInclusionPalletError extends Enum {
        readonly isWrongBitfieldSize: boolean;
        readonly isBitfieldDuplicateOrUnordered: boolean;
        readonly isValidatorIndexOutOfBounds: boolean;
        readonly isInvalidBitfieldSignature: boolean;
        readonly isUnscheduledCandidate: boolean;
        readonly isCandidateScheduledBeforeParaFree: boolean;
        readonly isWrongCollator: boolean;
        readonly isScheduledOutOfOrder: boolean;
        readonly isHeadDataTooLarge: boolean;
        readonly isPrematureCodeUpgrade: boolean;
        readonly isNewCodeTooLarge: boolean;
        readonly isCandidateNotInParentContext: boolean;
        readonly isInvalidGroupIndex: boolean;
        readonly isInsufficientBacking: boolean;
        readonly isInvalidBacking: boolean;
        readonly isNotCollatorSigned: boolean;
        readonly isValidationDataHashMismatch: boolean;
        readonly isIncorrectDownwardMessageHandling: boolean;
        readonly isInvalidUpwardMessages: boolean;
        readonly isHrmpWatermarkMishandling: boolean;
        readonly isInvalidOutboundHrmp: boolean;
        readonly isInvalidValidationCodeHash: boolean;
        readonly isParaHeadMismatch: boolean;
        readonly isBitfieldReferencesFreedCore: boolean;
        readonly type: 'WrongBitfieldSize' | 'BitfieldDuplicateOrUnordered' | 'ValidatorIndexOutOfBounds' | 'InvalidBitfieldSignature' | 'UnscheduledCandidate' | 'CandidateScheduledBeforeParaFree' | 'WrongCollator' | 'ScheduledOutOfOrder' | 'HeadDataTooLarge' | 'PrematureCodeUpgrade' | 'NewCodeTooLarge' | 'CandidateNotInParentContext' | 'InvalidGroupIndex' | 'InsufficientBacking' | 'InvalidBacking' | 'NotCollatorSigned' | 'ValidationDataHashMismatch' | 'IncorrectDownwardMessageHandling' | 'InvalidUpwardMessages' | 'HrmpWatermarkMishandling' | 'InvalidOutboundHrmp' | 'InvalidValidationCodeHash' | 'ParaHeadMismatch' | 'BitfieldReferencesFreedCore';
    }
    interface PolkadotPrimitivesV1ScrapedOnChainVotes extends Struct {
        readonly session: u32;
        readonly backingValidatorsPerCandidate: Vec<ITuple<[PolkadotPrimitivesV1CandidateReceipt, Vec<ITuple<[u32, PolkadotPrimitivesV0ValidityAttestation]>>]>>;
        readonly disputes: Vec<PolkadotPrimitivesV1DisputeStatementSet>;
    }
    interface PolkadotPrimitivesV0ValidityAttestation extends Enum {
        readonly isImplicit: boolean;
        readonly asImplicit: PolkadotPrimitivesV0ValidatorAppSignature;
        readonly isExplicit: boolean;
        readonly asExplicit: PolkadotPrimitivesV0ValidatorAppSignature;
        readonly type: 'Implicit' | 'Explicit';
    }
    interface PolkadotPrimitivesV0ValidatorAppSignature extends SpCoreSr25519Signature {
    }
    interface PolkadotPrimitivesV1DisputeStatementSet extends Struct {
        readonly candidateHash: H256;
        readonly session: u32;
        readonly statements: Vec<ITuple<[PolkadotPrimitivesV1DisputeStatement, u32, PolkadotPrimitivesV0ValidatorAppSignature]>>;
    }
    interface PolkadotPrimitivesV1DisputeStatement extends Enum {
        readonly isValid: boolean;
        readonly asValid: PolkadotPrimitivesV1ValidDisputeStatementKind;
        readonly isInvalid: boolean;
        readonly asInvalid: PolkadotPrimitivesV1InvalidDisputeStatementKind;
        readonly type: 'Valid' | 'Invalid';
    }
    interface PolkadotPrimitivesV1ValidDisputeStatementKind extends Enum {
        readonly isExplicit: boolean;
        readonly isBackingSeconded: boolean;
        readonly asBackingSeconded: H256;
        readonly isBackingValid: boolean;
        readonly asBackingValid: H256;
        readonly isApprovalChecking: boolean;
        readonly type: 'Explicit' | 'BackingSeconded' | 'BackingValid' | 'ApprovalChecking';
    }
    interface PolkadotPrimitivesV1InvalidDisputeStatementKind extends Enum {
        readonly isExplicit: boolean;
        readonly type: 'Explicit';
    }
    interface PolkadotRuntimeParachainsParasInherentPalletCall extends Enum {
        readonly isEnter: boolean;
        readonly asEnter: {
            readonly data: PolkadotPrimitivesV1InherentData;
        } & Struct;
        readonly type: 'Enter';
    }
    interface PolkadotPrimitivesV1InherentData extends Struct {
        readonly bitfields: Vec<PolkadotPrimitivesV1SignedUncheckedSigned>;
        readonly backedCandidates: Vec<PolkadotPrimitivesV1BackedCandidate>;
        readonly disputes: Vec<PolkadotPrimitivesV1DisputeStatementSet>;
        readonly parentHeader: SpRuntimeHeader;
    }
    interface PolkadotPrimitivesV1SignedUncheckedSigned extends Struct {
        readonly payload: BitVec;
        readonly validatorIndex: u32;
        readonly signature: PolkadotPrimitivesV0ValidatorAppSignature;
    }
    interface PolkadotPrimitivesV1BackedCandidate extends Struct {
        readonly candidate: PolkadotPrimitivesV1CommittedCandidateReceipt;
        readonly validityVotes: Vec<PolkadotPrimitivesV0ValidityAttestation>;
        readonly validatorIndices: BitVec;
    }
    interface PolkadotPrimitivesV1CommittedCandidateReceipt extends Struct {
        readonly descriptor: PolkadotPrimitivesV1CandidateDescriptor;
        readonly commitments: PolkadotPrimitivesV1CandidateCommitments;
    }
    interface PolkadotRuntimeParachainsParasInherentPalletError extends Enum {
        readonly isTooManyInclusionInherents: boolean;
        readonly isInvalidParentHeader: boolean;
        readonly isCandidateConcludedInvalid: boolean;
        readonly isInherentOverweight: boolean;
        readonly type: 'TooManyInclusionInherents' | 'InvalidParentHeader' | 'CandidateConcludedInvalid' | 'InherentOverweight';
    }
    interface PolkadotRuntimeParachainsSchedulerParathreadClaimQueue extends Struct {
        readonly queue: Vec<PolkadotRuntimeParachainsSchedulerQueuedParathread>;
        readonly nextCoreOffset: u32;
    }
    interface PolkadotRuntimeParachainsSchedulerQueuedParathread extends Struct {
        readonly claim: PolkadotPrimitivesV1ParathreadEntry;
        readonly coreOffset: u32;
    }
    interface PolkadotPrimitivesV1ParathreadEntry extends Struct {
        readonly claim: PolkadotPrimitivesV1ParathreadClaim;
        readonly retries: u32;
    }
    interface PolkadotPrimitivesV1ParathreadClaim extends ITuple<[u32, PolkadotPrimitivesV0CollatorAppPublic]> {
    }
    interface PolkadotPrimitivesV1CoreOccupied extends Enum {
        readonly isParathread: boolean;
        readonly asParathread: PolkadotPrimitivesV1ParathreadEntry;
        readonly isParachain: boolean;
        readonly type: 'Parathread' | 'Parachain';
    }
    interface PolkadotRuntimeParachainsSchedulerCoreAssignment extends Struct {
        readonly core: u32;
        readonly paraId: u32;
        readonly kind: PolkadotRuntimeParachainsSchedulerAssignmentKind;
        readonly groupIdx: u32;
    }
    interface PolkadotRuntimeParachainsSchedulerAssignmentKind extends Enum {
        readonly isParachain: boolean;
        readonly isParathread: boolean;
        readonly asParathread: ITuple<[PolkadotPrimitivesV0CollatorAppPublic, u32]>;
        readonly type: 'Parachain' | 'Parathread';
    }
    interface PolkadotRuntimeParachainsParasParaLifecycle extends Enum {
        readonly isOnboarding: boolean;
        readonly isParathread: boolean;
        readonly isParachain: boolean;
        readonly isUpgradingParathread: boolean;
        readonly isDowngradingParachain: boolean;
        readonly isOffboardingParathread: boolean;
        readonly isOffboardingParachain: boolean;
        readonly type: 'Onboarding' | 'Parathread' | 'Parachain' | 'UpgradingParathread' | 'DowngradingParachain' | 'OffboardingParathread' | 'OffboardingParachain';
    }
    interface PolkadotRuntimeParachainsParasParaPastCodeMeta extends Struct {
        readonly upgradeTimes: Vec<PolkadotRuntimeParachainsParasReplacementTimes>;
        readonly lastPruned: Option<u32>;
    }
    interface PolkadotRuntimeParachainsParasReplacementTimes extends Struct {
        readonly expectedAt: u32;
        readonly activatedAt: u32;
    }
    interface PolkadotPrimitivesV1UpgradeGoAhead extends Enum {
        readonly isAbort: boolean;
        readonly isGoAhead: boolean;
        readonly type: 'Abort' | 'GoAhead';
    }
    interface PolkadotPrimitivesV1UpgradeRestriction extends Enum {
        readonly isPresent: boolean;
        readonly type: 'Present';
    }
    interface PolkadotRuntimeParachainsParasParaGenesisArgs extends Struct {
        readonly genesisHead: Bytes;
        readonly validationCode: Bytes;
        readonly parachain: bool;
    }
    interface PolkadotRuntimeParachainsParasPalletCall extends Enum {
        readonly isForceSetCurrentCode: boolean;
        readonly asForceSetCurrentCode: {
            readonly para: u32;
            readonly newCode: Bytes;
        } & Struct;
        readonly isForceSetCurrentHead: boolean;
        readonly asForceSetCurrentHead: {
            readonly para: u32;
            readonly newHead: Bytes;
        } & Struct;
        readonly isForceScheduleCodeUpgrade: boolean;
        readonly asForceScheduleCodeUpgrade: {
            readonly para: u32;
            readonly newCode: Bytes;
            readonly relayParentNumber: u32;
        } & Struct;
        readonly isForceNoteNewHead: boolean;
        readonly asForceNoteNewHead: {
            readonly para: u32;
            readonly newHead: Bytes;
        } & Struct;
        readonly isForceQueueAction: boolean;
        readonly asForceQueueAction: {
            readonly para: u32;
        } & Struct;
        readonly type: 'ForceSetCurrentCode' | 'ForceSetCurrentHead' | 'ForceScheduleCodeUpgrade' | 'ForceNoteNewHead' | 'ForceQueueAction';
    }
    interface PolkadotRuntimeParachainsParasPalletError extends Enum {
        readonly isNotRegistered: boolean;
        readonly isCannotOnboard: boolean;
        readonly isCannotOffboard: boolean;
        readonly isCannotUpgrade: boolean;
        readonly isCannotDowngrade: boolean;
        readonly type: 'NotRegistered' | 'CannotOnboard' | 'CannotOffboard' | 'CannotUpgrade' | 'CannotDowngrade';
    }
    interface PolkadotRuntimeParachainsInitializerBufferedSessionChange extends Struct {
        readonly validators: Vec<PolkadotPrimitivesV0ValidatorAppPublic>;
        readonly queued: Vec<PolkadotPrimitivesV0ValidatorAppPublic>;
        readonly sessionIndex: u32;
    }
    interface PolkadotRuntimeParachainsInitializerPalletCall extends Enum {
        readonly isForceApprove: boolean;
        readonly asForceApprove: {
            readonly upTo: u32;
        } & Struct;
        readonly type: 'ForceApprove';
    }
    interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
        readonly sentAt: u32;
        readonly msg: Bytes;
    }
    type PolkadotRuntimeParachainsDmpPalletCall = Null;
    interface PolkadotRuntimeParachainsUmpPalletCall extends Enum {
        readonly isServiceOverweight: boolean;
        readonly asServiceOverweight: {
            readonly index: u64;
            readonly weightLimit: u64;
        } & Struct;
        readonly type: 'ServiceOverweight';
    }
    interface PolkadotRuntimeParachainsUmpPalletError extends Enum {
        readonly isUnknownMessageIndex: boolean;
        readonly isWeightOverLimit: boolean;
        readonly type: 'UnknownMessageIndex' | 'WeightOverLimit';
    }
    interface PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest extends Struct {
        readonly confirmed: bool;
        readonly age: u32;
        readonly senderDeposit: u128;
        readonly maxMessageSize: u32;
        readonly maxCapacity: u32;
        readonly maxTotalSize: u32;
    }
    interface PolkadotRuntimeParachainsHrmpHrmpChannel extends Struct {
        readonly maxCapacity: u32;
        readonly maxTotalSize: u32;
        readonly maxMessageSize: u32;
        readonly msgCount: u32;
        readonly totalSize: u32;
        readonly mqcHead: Option<H256>;
        readonly senderDeposit: u128;
        readonly recipientDeposit: u128;
    }
    interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
        readonly sentAt: u32;
        readonly data: Bytes;
    }
    interface PolkadotRuntimeParachainsHrmpPalletCall extends Enum {
        readonly isHrmpInitOpenChannel: boolean;
        readonly asHrmpInitOpenChannel: {
            readonly recipient: u32;
            readonly proposedMaxCapacity: u32;
            readonly proposedMaxMessageSize: u32;
        } & Struct;
        readonly isHrmpAcceptOpenChannel: boolean;
        readonly asHrmpAcceptOpenChannel: {
            readonly sender: u32;
        } & Struct;
        readonly isHrmpCloseChannel: boolean;
        readonly asHrmpCloseChannel: {
            readonly channelId: PolkadotParachainPrimitivesHrmpChannelId;
        } & Struct;
        readonly isForceCleanHrmp: boolean;
        readonly asForceCleanHrmp: {
            readonly para: u32;
        } & Struct;
        readonly isForceProcessHrmpOpen: boolean;
        readonly isForceProcessHrmpClose: boolean;
        readonly isHrmpCancelOpenRequest: boolean;
        readonly asHrmpCancelOpenRequest: {
            readonly channelId: PolkadotParachainPrimitivesHrmpChannelId;
        } & Struct;
        readonly type: 'HrmpInitOpenChannel' | 'HrmpAcceptOpenChannel' | 'HrmpCloseChannel' | 'ForceCleanHrmp' | 'ForceProcessHrmpOpen' | 'ForceProcessHrmpClose' | 'HrmpCancelOpenRequest';
    }
    interface PolkadotRuntimeParachainsHrmpPalletError extends Enum {
        readonly isOpenHrmpChannelToSelf: boolean;
        readonly isOpenHrmpChannelInvalidRecipient: boolean;
        readonly isOpenHrmpChannelZeroCapacity: boolean;
        readonly isOpenHrmpChannelCapacityExceedsLimit: boolean;
        readonly isOpenHrmpChannelZeroMessageSize: boolean;
        readonly isOpenHrmpChannelMessageSizeExceedsLimit: boolean;
        readonly isOpenHrmpChannelAlreadyExists: boolean;
        readonly isOpenHrmpChannelAlreadyRequested: boolean;
        readonly isOpenHrmpChannelLimitExceeded: boolean;
        readonly isAcceptHrmpChannelDoesntExist: boolean;
        readonly isAcceptHrmpChannelAlreadyConfirmed: boolean;
        readonly isAcceptHrmpChannelLimitExceeded: boolean;
        readonly isCloseHrmpChannelUnauthorized: boolean;
        readonly isCloseHrmpChannelDoesntExist: boolean;
        readonly isCloseHrmpChannelAlreadyUnderway: boolean;
        readonly isCancelHrmpOpenChannelUnauthorized: boolean;
        readonly isOpenHrmpChannelDoesntExist: boolean;
        readonly isOpenHrmpChannelAlreadyConfirmed: boolean;
        readonly type: 'OpenHrmpChannelToSelf' | 'OpenHrmpChannelInvalidRecipient' | 'OpenHrmpChannelZeroCapacity' | 'OpenHrmpChannelCapacityExceedsLimit' | 'OpenHrmpChannelZeroMessageSize' | 'OpenHrmpChannelMessageSizeExceedsLimit' | 'OpenHrmpChannelAlreadyExists' | 'OpenHrmpChannelAlreadyRequested' | 'OpenHrmpChannelLimitExceeded' | 'AcceptHrmpChannelDoesntExist' | 'AcceptHrmpChannelAlreadyConfirmed' | 'AcceptHrmpChannelLimitExceeded' | 'CloseHrmpChannelUnauthorized' | 'CloseHrmpChannelDoesntExist' | 'CloseHrmpChannelAlreadyUnderway' | 'CancelHrmpOpenChannelUnauthorized' | 'OpenHrmpChannelDoesntExist' | 'OpenHrmpChannelAlreadyConfirmed';
    }
    interface PolkadotPrimitivesV1SessionInfo extends Struct {
        readonly validators: Vec<PolkadotPrimitivesV0ValidatorAppPublic>;
        readonly discoveryKeys: Vec<SpAuthorityDiscoveryAppPublic>;
        readonly assignmentKeys: Vec<PolkadotPrimitivesV1AssignmentAppPublic>;
        readonly validatorGroups: Vec<Vec<u32>>;
        readonly nCores: u32;
        readonly zerothDelayTrancheWidth: u32;
        readonly relayVrfModuloSamples: u32;
        readonly nDelayTranches: u32;
        readonly noShowSlots: u32;
        readonly neededApprovals: u32;
    }
    interface PolkadotPrimitivesV1DisputeState extends Struct {
        readonly validatorsFor: BitVec;
        readonly validatorsAgainst: BitVec;
        readonly start: u32;
        readonly concludedAt: Option<u32>;
    }
    interface PolkadotRuntimeParachainsDisputesPalletCall extends Enum {
        readonly isForceUnfreeze: boolean;
        readonly type: 'ForceUnfreeze';
    }
    interface PolkadotRuntimeParachainsDisputesPalletError extends Enum {
        readonly isDuplicateDisputeStatementSets: boolean;
        readonly isAncientDisputeStatement: boolean;
        readonly isValidatorIndexOutOfBounds: boolean;
        readonly isInvalidSignature: boolean;
        readonly isDuplicateStatement: boolean;
        readonly isPotentialSpam: boolean;
        readonly isSingleSidedDispute: boolean;
        readonly type: 'DuplicateDisputeStatementSets' | 'AncientDisputeStatement' | 'ValidatorIndexOutOfBounds' | 'InvalidSignature' | 'DuplicateStatement' | 'PotentialSpam' | 'SingleSidedDispute';
    }
    interface PolkadotRuntimeCommonParasRegistrarParaInfo extends Struct {
        readonly manager: AccountId32;
        readonly deposit: u128;
        readonly locked: bool;
    }
    interface PolkadotRuntimeCommonParasRegistrarPalletCall extends Enum {
        readonly isRegister: boolean;
        readonly asRegister: {
            readonly id: u32;
            readonly genesisHead: Bytes;
            readonly validationCode: Bytes;
        } & Struct;
        readonly isForceRegister: boolean;
        readonly asForceRegister: {
            readonly who: AccountId32;
            readonly deposit: u128;
            readonly id: u32;
            readonly genesisHead: Bytes;
            readonly validationCode: Bytes;
        } & Struct;
        readonly isDeregister: boolean;
        readonly asDeregister: {
            readonly id: u32;
        } & Struct;
        readonly isSwap: boolean;
        readonly asSwap: {
            readonly id: u32;
            readonly other: u32;
        } & Struct;
        readonly isForceRemoveLock: boolean;
        readonly asForceRemoveLock: {
            readonly para: u32;
        } & Struct;
        readonly isReserve: boolean;
        readonly type: 'Register' | 'ForceRegister' | 'Deregister' | 'Swap' | 'ForceRemoveLock' | 'Reserve';
    }
    interface PolkadotRuntimeCommonParasRegistrarPalletError extends Enum {
        readonly isNotRegistered: boolean;
        readonly isAlreadyRegistered: boolean;
        readonly isNotOwner: boolean;
        readonly isCodeTooLarge: boolean;
        readonly isHeadDataTooLarge: boolean;
        readonly isNotParachain: boolean;
        readonly isNotParathread: boolean;
        readonly isCannotDeregister: boolean;
        readonly isCannotDowngrade: boolean;
        readonly isCannotUpgrade: boolean;
        readonly isParaLocked: boolean;
        readonly isNotReserved: boolean;
        readonly type: 'NotRegistered' | 'AlreadyRegistered' | 'NotOwner' | 'CodeTooLarge' | 'HeadDataTooLarge' | 'NotParachain' | 'NotParathread' | 'CannotDeregister' | 'CannotDowngrade' | 'CannotUpgrade' | 'ParaLocked' | 'NotReserved';
    }
    interface PolkadotRuntimeCommonAuctionsPalletCall extends Enum {
        readonly isNewAuction: boolean;
        readonly asNewAuction: {
            readonly duration: Compact<u32>;
            readonly leasePeriodIndex: Compact<u32>;
        } & Struct;
        readonly isBid: boolean;
        readonly asBid: {
            readonly para: Compact<u32>;
            readonly auctionIndex: Compact<u32>;
            readonly firstSlot: Compact<u32>;
            readonly lastSlot: Compact<u32>;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isCancelAuction: boolean;
        readonly type: 'NewAuction' | 'Bid' | 'CancelAuction';
    }
    interface PolkadotRuntimeCommonAuctionsPalletError extends Enum {
        readonly isAuctionInProgress: boolean;
        readonly isLeasePeriodInPast: boolean;
        readonly isParaNotRegistered: boolean;
        readonly isNotCurrentAuction: boolean;
        readonly isNotAuction: boolean;
        readonly isAuctionEnded: boolean;
        readonly isAlreadyLeasedOut: boolean;
        readonly type: 'AuctionInProgress' | 'LeasePeriodInPast' | 'ParaNotRegistered' | 'NotCurrentAuction' | 'NotAuction' | 'AuctionEnded' | 'AlreadyLeasedOut';
    }
    interface PolkadotRuntimeCommonCrowdloanFundInfo extends Struct {
        readonly depositor: AccountId32;
        readonly verifier: Option<SpRuntimeMultiSigner>;
        readonly deposit: u128;
        readonly raised: u128;
        readonly end: u32;
        readonly cap: u128;
        readonly lastContribution: PolkadotRuntimeCommonCrowdloanLastContribution;
        readonly firstPeriod: u32;
        readonly lastPeriod: u32;
        readonly trieIndex: u32;
    }
    interface SpRuntimeMultiSigner extends Enum {
        readonly isEd25519: boolean;
        readonly asEd25519: SpCoreEd25519Public;
        readonly isSr25519: boolean;
        readonly asSr25519: SpCoreSr25519Public;
        readonly isEcdsa: boolean;
        readonly asEcdsa: SpCoreEcdsaPublic;
        readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
    }
    interface PolkadotRuntimeCommonCrowdloanLastContribution extends Enum {
        readonly isNever: boolean;
        readonly isPreEnding: boolean;
        readonly asPreEnding: u32;
        readonly isEnding: boolean;
        readonly asEnding: u32;
        readonly type: 'Never' | 'PreEnding' | 'Ending';
    }
    interface PolkadotRuntimeCommonCrowdloanPalletCall extends Enum {
        readonly isCreate: boolean;
        readonly asCreate: {
            readonly index: Compact<u32>;
            readonly cap: Compact<u128>;
            readonly firstPeriod: Compact<u32>;
            readonly lastPeriod: Compact<u32>;
            readonly end: Compact<u32>;
            readonly verifier: Option<SpRuntimeMultiSigner>;
        } & Struct;
        readonly isContribute: boolean;
        readonly asContribute: {
            readonly index: Compact<u32>;
            readonly value: Compact<u128>;
            readonly signature: Option<SpRuntimeMultiSignature>;
        } & Struct;
        readonly isWithdraw: boolean;
        readonly asWithdraw: {
            readonly who: AccountId32;
            readonly index: Compact<u32>;
        } & Struct;
        readonly isRefund: boolean;
        readonly asRefund: {
            readonly index: Compact<u32>;
        } & Struct;
        readonly isDissolve: boolean;
        readonly asDissolve: {
            readonly index: Compact<u32>;
        } & Struct;
        readonly isEdit: boolean;
        readonly asEdit: {
            readonly index: Compact<u32>;
            readonly cap: Compact<u128>;
            readonly firstPeriod: Compact<u32>;
            readonly lastPeriod: Compact<u32>;
            readonly end: Compact<u32>;
            readonly verifier: Option<SpRuntimeMultiSigner>;
        } & Struct;
        readonly isAddMemo: boolean;
        readonly asAddMemo: {
            readonly index: u32;
            readonly memo: Bytes;
        } & Struct;
        readonly isPoke: boolean;
        readonly asPoke: {
            readonly index: u32;
        } & Struct;
        readonly type: 'Create' | 'Contribute' | 'Withdraw' | 'Refund' | 'Dissolve' | 'Edit' | 'AddMemo' | 'Poke';
    }
    interface SpRuntimeMultiSignature extends Enum {
        readonly isEd25519: boolean;
        readonly asEd25519: SpCoreEd25519Signature;
        readonly isSr25519: boolean;
        readonly asSr25519: SpCoreSr25519Signature;
        readonly isEcdsa: boolean;
        readonly asEcdsa: SpCoreEcdsaSignature;
        readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
    }
    interface SpCoreEcdsaSignature extends U8aFixed {
    }
    interface FrameSupportPalletId extends U8aFixed {
    }
    interface PolkadotRuntimeCommonCrowdloanPalletError extends Enum {
        readonly isFirstPeriodInPast: boolean;
        readonly isFirstPeriodTooFarInFuture: boolean;
        readonly isLastPeriodBeforeFirstPeriod: boolean;
        readonly isLastPeriodTooFarInFuture: boolean;
        readonly isCannotEndInPast: boolean;
        readonly isEndTooFarInFuture: boolean;
        readonly isOverflow: boolean;
        readonly isContributionTooSmall: boolean;
        readonly isInvalidParaId: boolean;
        readonly isCapExceeded: boolean;
        readonly isContributionPeriodOver: boolean;
        readonly isInvalidOrigin: boolean;
        readonly isNotParachain: boolean;
        readonly isLeaseActive: boolean;
        readonly isBidOrLeaseActive: boolean;
        readonly isFundNotEnded: boolean;
        readonly isNoContributions: boolean;
        readonly isNotReadyToDissolve: boolean;
        readonly isInvalidSignature: boolean;
        readonly isMemoTooLarge: boolean;
        readonly isAlreadyInNewRaise: boolean;
        readonly isVrfDelayInProgress: boolean;
        readonly isNoLeasePeriod: boolean;
        readonly type: 'FirstPeriodInPast' | 'FirstPeriodTooFarInFuture' | 'LastPeriodBeforeFirstPeriod' | 'LastPeriodTooFarInFuture' | 'CannotEndInPast' | 'EndTooFarInFuture' | 'Overflow' | 'ContributionTooSmall' | 'InvalidParaId' | 'CapExceeded' | 'ContributionPeriodOver' | 'InvalidOrigin' | 'NotParachain' | 'LeaseActive' | 'BidOrLeaseActive' | 'FundNotEnded' | 'NoContributions' | 'NotReadyToDissolve' | 'InvalidSignature' | 'MemoTooLarge' | 'AlreadyInNewRaise' | 'VrfDelayInProgress' | 'NoLeasePeriod';
    }
    interface PolkadotRuntimeCommonSlotsPalletCall extends Enum {
        readonly isForceLease: boolean;
        readonly asForceLease: {
            readonly para: u32;
            readonly leaser: AccountId32;
            readonly amount: u128;
            readonly periodBegin: u32;
            readonly periodCount: u32;
        } & Struct;
        readonly isClearAllLeases: boolean;
        readonly asClearAllLeases: {
            readonly para: u32;
        } & Struct;
        readonly isTriggerOnboard: boolean;
        readonly asTriggerOnboard: {
            readonly para: u32;
        } & Struct;
        readonly type: 'ForceLease' | 'ClearAllLeases' | 'TriggerOnboard';
    }
    interface PolkadotRuntimeCommonSlotsPalletError extends Enum {
        readonly isParaNotOnboarding: boolean;
        readonly isLeaseError: boolean;
        readonly type: 'ParaNotOnboarding' | 'LeaseError';
    }
    interface PolkadotRuntimeCommonParasSudoWrapperPalletCall extends Enum {
        readonly isSudoScheduleParaInitialize: boolean;
        readonly asSudoScheduleParaInitialize: {
            readonly id: u32;
            readonly genesis: PolkadotRuntimeParachainsParasParaGenesisArgs;
        } & Struct;
        readonly isSudoScheduleParaCleanup: boolean;
        readonly asSudoScheduleParaCleanup: {
            readonly id: u32;
        } & Struct;
        readonly isSudoScheduleParathreadUpgrade: boolean;
        readonly asSudoScheduleParathreadUpgrade: {
            readonly id: u32;
        } & Struct;
        readonly isSudoScheduleParachainDowngrade: boolean;
        readonly asSudoScheduleParachainDowngrade: {
            readonly id: u32;
        } & Struct;
        readonly isSudoQueueDownwardXcm: boolean;
        readonly asSudoQueueDownwardXcm: {
            readonly id: u32;
            readonly xcm: XcmVersionedXcm;
        } & Struct;
        readonly isSudoEstablishHrmpChannel: boolean;
        readonly asSudoEstablishHrmpChannel: {
            readonly sender: u32;
            readonly recipient: u32;
            readonly maxCapacity: u32;
            readonly maxMessageSize: u32;
        } & Struct;
        readonly type: 'SudoScheduleParaInitialize' | 'SudoScheduleParaCleanup' | 'SudoScheduleParathreadUpgrade' | 'SudoScheduleParachainDowngrade' | 'SudoQueueDownwardXcm' | 'SudoEstablishHrmpChannel';
    }
    interface XcmVersionedXcm extends Enum {
        readonly isV0: boolean;
        readonly asV0: XcmV0Xcm;
        readonly isV1: boolean;
        readonly asV1: XcmV1Xcm;
        readonly isV2: boolean;
        readonly asV2: XcmV2Xcm;
        readonly type: 'V0' | 'V1' | 'V2';
    }
    interface XcmV0Xcm extends Enum {
        readonly isWithdrawAsset: boolean;
        readonly asWithdrawAsset: {
            readonly assets: Vec<XcmV0MultiAsset>;
            readonly effects: Vec<XcmV0Order>;
        } & Struct;
        readonly isReserveAssetDeposit: boolean;
        readonly asReserveAssetDeposit: {
            readonly assets: Vec<XcmV0MultiAsset>;
            readonly effects: Vec<XcmV0Order>;
        } & Struct;
        readonly isTeleportAsset: boolean;
        readonly asTeleportAsset: {
            readonly assets: Vec<XcmV0MultiAsset>;
            readonly effects: Vec<XcmV0Order>;
        } & Struct;
        readonly isQueryResponse: boolean;
        readonly asQueryResponse: {
            readonly queryId: Compact<u64>;
            readonly response: XcmV0Response;
        } & Struct;
        readonly isTransferAsset: boolean;
        readonly asTransferAsset: {
            readonly assets: Vec<XcmV0MultiAsset>;
            readonly dest: XcmV0MultiLocation;
        } & Struct;
        readonly isTransferReserveAsset: boolean;
        readonly asTransferReserveAsset: {
            readonly assets: Vec<XcmV0MultiAsset>;
            readonly dest: XcmV0MultiLocation;
            readonly effects: Vec<XcmV0Order>;
        } & Struct;
        readonly isTransact: boolean;
        readonly asTransact: {
            readonly originType: XcmV0OriginKind;
            readonly requireWeightAtMost: u64;
            readonly call: XcmDoubleEncoded;
        } & Struct;
        readonly isHrmpNewChannelOpenRequest: boolean;
        readonly asHrmpNewChannelOpenRequest: {
            readonly sender: Compact<u32>;
            readonly maxMessageSize: Compact<u32>;
            readonly maxCapacity: Compact<u32>;
        } & Struct;
        readonly isHrmpChannelAccepted: boolean;
        readonly asHrmpChannelAccepted: {
            readonly recipient: Compact<u32>;
        } & Struct;
        readonly isHrmpChannelClosing: boolean;
        readonly asHrmpChannelClosing: {
            readonly initiator: Compact<u32>;
            readonly sender: Compact<u32>;
            readonly recipient: Compact<u32>;
        } & Struct;
        readonly isRelayedFrom: boolean;
        readonly asRelayedFrom: {
            readonly who: XcmV0MultiLocation;
            readonly message: XcmV0Xcm;
        } & Struct;
        readonly type: 'WithdrawAsset' | 'ReserveAssetDeposit' | 'TeleportAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'RelayedFrom';
    }
    interface XcmV0Order extends Enum {
        readonly isNull: boolean;
        readonly isDepositAsset: boolean;
        readonly asDepositAsset: {
            readonly assets: Vec<XcmV0MultiAsset>;
            readonly dest: XcmV0MultiLocation;
        } & Struct;
        readonly isDepositReserveAsset: boolean;
        readonly asDepositReserveAsset: {
            readonly assets: Vec<XcmV0MultiAsset>;
            readonly dest: XcmV0MultiLocation;
            readonly effects: Vec<XcmV0Order>;
        } & Struct;
        readonly isExchangeAsset: boolean;
        readonly asExchangeAsset: {
            readonly give: Vec<XcmV0MultiAsset>;
            readonly receive: Vec<XcmV0MultiAsset>;
        } & Struct;
        readonly isInitiateReserveWithdraw: boolean;
        readonly asInitiateReserveWithdraw: {
            readonly assets: Vec<XcmV0MultiAsset>;
            readonly reserve: XcmV0MultiLocation;
            readonly effects: Vec<XcmV0Order>;
        } & Struct;
        readonly isInitiateTeleport: boolean;
        readonly asInitiateTeleport: {
            readonly assets: Vec<XcmV0MultiAsset>;
            readonly dest: XcmV0MultiLocation;
            readonly effects: Vec<XcmV0Order>;
        } & Struct;
        readonly isQueryHolding: boolean;
        readonly asQueryHolding: {
            readonly queryId: Compact<u64>;
            readonly dest: XcmV0MultiLocation;
            readonly assets: Vec<XcmV0MultiAsset>;
        } & Struct;
        readonly isBuyExecution: boolean;
        readonly asBuyExecution: {
            readonly fees: XcmV0MultiAsset;
            readonly weight: u64;
            readonly debt: u64;
            readonly haltOnError: bool;
            readonly xcm: Vec<XcmV0Xcm>;
        } & Struct;
        readonly type: 'Null' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution';
    }
    interface XcmV0Response extends Enum {
        readonly isAssets: boolean;
        readonly asAssets: Vec<XcmV0MultiAsset>;
        readonly type: 'Assets';
    }
    interface XcmV1Xcm extends Enum {
        readonly isWithdrawAsset: boolean;
        readonly asWithdrawAsset: {
            readonly assets: XcmV1MultiassetMultiAssets;
            readonly effects: Vec<XcmV1Order>;
        } & Struct;
        readonly isReserveAssetDeposited: boolean;
        readonly asReserveAssetDeposited: {
            readonly assets: XcmV1MultiassetMultiAssets;
            readonly effects: Vec<XcmV1Order>;
        } & Struct;
        readonly isReceiveTeleportedAsset: boolean;
        readonly asReceiveTeleportedAsset: {
            readonly assets: XcmV1MultiassetMultiAssets;
            readonly effects: Vec<XcmV1Order>;
        } & Struct;
        readonly isQueryResponse: boolean;
        readonly asQueryResponse: {
            readonly queryId: Compact<u64>;
            readonly response: XcmV1Response;
        } & Struct;
        readonly isTransferAsset: boolean;
        readonly asTransferAsset: {
            readonly assets: XcmV1MultiassetMultiAssets;
            readonly beneficiary: XcmV1MultiLocation;
        } & Struct;
        readonly isTransferReserveAsset: boolean;
        readonly asTransferReserveAsset: {
            readonly assets: XcmV1MultiassetMultiAssets;
            readonly dest: XcmV1MultiLocation;
            readonly effects: Vec<XcmV1Order>;
        } & Struct;
        readonly isTransact: boolean;
        readonly asTransact: {
            readonly originType: XcmV0OriginKind;
            readonly requireWeightAtMost: u64;
            readonly call: XcmDoubleEncoded;
        } & Struct;
        readonly isHrmpNewChannelOpenRequest: boolean;
        readonly asHrmpNewChannelOpenRequest: {
            readonly sender: Compact<u32>;
            readonly maxMessageSize: Compact<u32>;
            readonly maxCapacity: Compact<u32>;
        } & Struct;
        readonly isHrmpChannelAccepted: boolean;
        readonly asHrmpChannelAccepted: {
            readonly recipient: Compact<u32>;
        } & Struct;
        readonly isHrmpChannelClosing: boolean;
        readonly asHrmpChannelClosing: {
            readonly initiator: Compact<u32>;
            readonly sender: Compact<u32>;
            readonly recipient: Compact<u32>;
        } & Struct;
        readonly isRelayedFrom: boolean;
        readonly asRelayedFrom: {
            readonly who: XcmV1MultilocationJunctions;
            readonly message: XcmV1Xcm;
        } & Struct;
        readonly isSubscribeVersion: boolean;
        readonly asSubscribeVersion: {
            readonly queryId: Compact<u64>;
            readonly maxResponseWeight: Compact<u64>;
        } & Struct;
        readonly isUnsubscribeVersion: boolean;
        readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'RelayedFrom' | 'SubscribeVersion' | 'UnsubscribeVersion';
    }
    interface XcmV1Order extends Enum {
        readonly isNoop: boolean;
        readonly isDepositAsset: boolean;
        readonly asDepositAsset: {
            readonly assets: XcmV1MultiassetMultiAssetFilter;
            readonly maxAssets: u32;
            readonly beneficiary: XcmV1MultiLocation;
        } & Struct;
        readonly isDepositReserveAsset: boolean;
        readonly asDepositReserveAsset: {
            readonly assets: XcmV1MultiassetMultiAssetFilter;
            readonly maxAssets: u32;
            readonly dest: XcmV1MultiLocation;
            readonly effects: Vec<XcmV1Order>;
        } & Struct;
        readonly isExchangeAsset: boolean;
        readonly asExchangeAsset: {
            readonly give: XcmV1MultiassetMultiAssetFilter;
            readonly receive: XcmV1MultiassetMultiAssets;
        } & Struct;
        readonly isInitiateReserveWithdraw: boolean;
        readonly asInitiateReserveWithdraw: {
            readonly assets: XcmV1MultiassetMultiAssetFilter;
            readonly reserve: XcmV1MultiLocation;
            readonly effects: Vec<XcmV1Order>;
        } & Struct;
        readonly isInitiateTeleport: boolean;
        readonly asInitiateTeleport: {
            readonly assets: XcmV1MultiassetMultiAssetFilter;
            readonly dest: XcmV1MultiLocation;
            readonly effects: Vec<XcmV1Order>;
        } & Struct;
        readonly isQueryHolding: boolean;
        readonly asQueryHolding: {
            readonly queryId: Compact<u64>;
            readonly dest: XcmV1MultiLocation;
            readonly assets: XcmV1MultiassetMultiAssetFilter;
        } & Struct;
        readonly isBuyExecution: boolean;
        readonly asBuyExecution: {
            readonly fees: XcmV1MultiAsset;
            readonly weight: u64;
            readonly debt: u64;
            readonly haltOnError: bool;
            readonly instructions: Vec<XcmV1Xcm>;
        } & Struct;
        readonly type: 'Noop' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution';
    }
    interface XcmV1Response extends Enum {
        readonly isAssets: boolean;
        readonly asAssets: XcmV1MultiassetMultiAssets;
        readonly isVersion: boolean;
        readonly asVersion: u32;
        readonly type: 'Assets' | 'Version';
    }
    interface PolkadotRuntimeCommonParasSudoWrapperPalletError extends Enum {
        readonly isParaDoesntExist: boolean;
        readonly isParaAlreadyExists: boolean;
        readonly isExceedsMaxMessageSize: boolean;
        readonly isCouldntCleanup: boolean;
        readonly isNotParathread: boolean;
        readonly isNotParachain: boolean;
        readonly isCannotUpgrade: boolean;
        readonly isCannotDowngrade: boolean;
        readonly type: 'ParaDoesntExist' | 'ParaAlreadyExists' | 'ExceedsMaxMessageSize' | 'CouldntCleanup' | 'NotParathread' | 'NotParachain' | 'CannotUpgrade' | 'CannotDowngrade';
    }
    interface PalletSudoCall extends Enum {
        readonly isSudo: boolean;
        readonly asSudo: {
            readonly call: Call;
        } & Struct;
        readonly isSudoUncheckedWeight: boolean;
        readonly asSudoUncheckedWeight: {
            readonly call: Call;
            readonly weight: u64;
        } & Struct;
        readonly isSetKey: boolean;
        readonly asSetKey: {
            readonly new_: MultiAddress;
        } & Struct;
        readonly isSudoAs: boolean;
        readonly asSudoAs: {
            readonly who: MultiAddress;
            readonly call: Call;
        } & Struct;
        readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs';
    }
    interface RococoRuntimeValidatorManagerCall extends Enum {
        readonly isRegisterValidators: boolean;
        readonly asRegisterValidators: {
            readonly validators: Vec<AccountId32>;
        } & Struct;
        readonly isDeregisterValidators: boolean;
        readonly asDeregisterValidators: {
            readonly validators: Vec<AccountId32>;
        } & Struct;
        readonly type: 'RegisterValidators' | 'DeregisterValidators';
    }
    interface PalletCollectiveCall extends Enum {
        readonly isSetMembers: boolean;
        readonly asSetMembers: {
            readonly newMembers: Vec<AccountId32>;
            readonly prime: Option<AccountId32>;
            readonly oldCount: u32;
        } & Struct;
        readonly isExecute: boolean;
        readonly asExecute: {
            readonly proposal: Call;
            readonly lengthBound: Compact<u32>;
        } & Struct;
        readonly isPropose: boolean;
        readonly asPropose: {
            readonly threshold: Compact<u32>;
            readonly proposal: Call;
            readonly lengthBound: Compact<u32>;
        } & Struct;
        readonly isVote: boolean;
        readonly asVote: {
            readonly proposal: H256;
            readonly index: Compact<u32>;
            readonly approve: bool;
        } & Struct;
        readonly isClose: boolean;
        readonly asClose: {
            readonly proposalHash: H256;
            readonly index: Compact<u32>;
            readonly proposalWeightBound: Compact<u64>;
            readonly lengthBound: Compact<u32>;
        } & Struct;
        readonly isDisapproveProposal: boolean;
        readonly asDisapproveProposal: {
            readonly proposalHash: H256;
        } & Struct;
        readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'Close' | 'DisapproveProposal';
    }
    interface PalletMembershipCall extends Enum {
        readonly isAddMember: boolean;
        readonly asAddMember: {
            readonly who: AccountId32;
        } & Struct;
        readonly isRemoveMember: boolean;
        readonly asRemoveMember: {
            readonly who: AccountId32;
        } & Struct;
        readonly isSwapMember: boolean;
        readonly asSwapMember: {
            readonly remove: AccountId32;
            readonly add: AccountId32;
        } & Struct;
        readonly isResetMembers: boolean;
        readonly asResetMembers: {
            readonly members: Vec<AccountId32>;
        } & Struct;
        readonly isChangeKey: boolean;
        readonly asChangeKey: {
            readonly new_: AccountId32;
        } & Struct;
        readonly isSetPrime: boolean;
        readonly asSetPrime: {
            readonly who: AccountId32;
        } & Struct;
        readonly isClearPrime: boolean;
        readonly type: 'AddMember' | 'RemoveMember' | 'SwapMember' | 'ResetMembers' | 'ChangeKey' | 'SetPrime' | 'ClearPrime';
    }
    interface PalletUtilityCall extends Enum {
        readonly isBatch: boolean;
        readonly asBatch: {
            readonly calls: Vec<Call>;
        } & Struct;
        readonly isAsDerivative: boolean;
        readonly asAsDerivative: {
            readonly index: u16;
            readonly call: Call;
        } & Struct;
        readonly isBatchAll: boolean;
        readonly asBatchAll: {
            readonly calls: Vec<Call>;
        } & Struct;
        readonly isDispatchAs: boolean;
        readonly asDispatchAs: {
            readonly asOrigin: RococoRuntimeOriginCaller;
            readonly call: Call;
        } & Struct;
        readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs';
    }
    interface RococoRuntimeOriginCaller extends Enum {
        readonly isSystem: boolean;
        readonly asSystem: FrameSystemRawOrigin;
        readonly isVoid: boolean;
        readonly isParachainsOrigin: boolean;
        readonly asParachainsOrigin: PolkadotRuntimeParachainsOriginPalletOrigin;
        readonly isCollective: boolean;
        readonly asCollective: PalletCollectiveRawOrigin;
        readonly isXcmPallet: boolean;
        readonly asXcmPallet: PalletXcmOrigin;
        readonly type: 'System' | 'Void' | 'ParachainsOrigin' | 'Collective' | 'XcmPallet';
    }
    interface FrameSystemRawOrigin extends Enum {
        readonly isRoot: boolean;
        readonly isSigned: boolean;
        readonly asSigned: AccountId32;
        readonly isNone: boolean;
        readonly type: 'Root' | 'Signed' | 'None';
    }
    interface PolkadotRuntimeParachainsOriginPalletOrigin extends Enum {
        readonly isParachain: boolean;
        readonly asParachain: u32;
        readonly type: 'Parachain';
    }
    interface PalletCollectiveRawOrigin extends Enum {
        readonly isMembers: boolean;
        readonly asMembers: ITuple<[u32, u32]>;
        readonly isMember: boolean;
        readonly asMember: AccountId32;
        readonly isPhantom: boolean;
        readonly type: 'Members' | 'Member' | 'Phantom';
    }
    interface PalletXcmOrigin extends Enum {
        readonly isXcm: boolean;
        readonly asXcm: XcmV1MultiLocation;
        readonly isResponse: boolean;
        readonly asResponse: XcmV1MultiLocation;
        readonly type: 'Xcm' | 'Response';
    }
    type SpCoreVoid = Null;
    interface PalletProxyCall extends Enum {
        readonly isProxy: boolean;
        readonly asProxy: {
            readonly real: AccountId32;
            readonly forceProxyType: Option<RococoRuntimeProxyType>;
            readonly call: Call;
        } & Struct;
        readonly isAddProxy: boolean;
        readonly asAddProxy: {
            readonly delegate: AccountId32;
            readonly proxyType: RococoRuntimeProxyType;
            readonly delay: u32;
        } & Struct;
        readonly isRemoveProxy: boolean;
        readonly asRemoveProxy: {
            readonly delegate: AccountId32;
            readonly proxyType: RococoRuntimeProxyType;
            readonly delay: u32;
        } & Struct;
        readonly isRemoveProxies: boolean;
        readonly isAnonymous: boolean;
        readonly asAnonymous: {
            readonly proxyType: RococoRuntimeProxyType;
            readonly delay: u32;
            readonly index: u16;
        } & Struct;
        readonly isKillAnonymous: boolean;
        readonly asKillAnonymous: {
            readonly spawner: AccountId32;
            readonly proxyType: RococoRuntimeProxyType;
            readonly index: u16;
            readonly height: Compact<u32>;
            readonly extIndex: Compact<u32>;
        } & Struct;
        readonly isAnnounce: boolean;
        readonly asAnnounce: {
            readonly real: AccountId32;
            readonly callHash: H256;
        } & Struct;
        readonly isRemoveAnnouncement: boolean;
        readonly asRemoveAnnouncement: {
            readonly real: AccountId32;
            readonly callHash: H256;
        } & Struct;
        readonly isRejectAnnouncement: boolean;
        readonly asRejectAnnouncement: {
            readonly delegate: AccountId32;
            readonly callHash: H256;
        } & Struct;
        readonly isProxyAnnounced: boolean;
        readonly asProxyAnnounced: {
            readonly delegate: AccountId32;
            readonly real: AccountId32;
            readonly forceProxyType: Option<RococoRuntimeProxyType>;
            readonly call: Call;
        } & Struct;
        readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'Anonymous' | 'KillAnonymous' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced';
    }
    interface PalletMultisigCall extends Enum {
        readonly isAsMultiThreshold1: boolean;
        readonly asAsMultiThreshold1: {
            readonly otherSignatories: Vec<AccountId32>;
            readonly call: Call;
        } & Struct;
        readonly isAsMulti: boolean;
        readonly asAsMulti: {
            readonly threshold: u16;
            readonly otherSignatories: Vec<AccountId32>;
            readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
            readonly call: WrapperKeepOpaque<Call>;
            readonly storeCall: bool;
            readonly maxWeight: u64;
        } & Struct;
        readonly isApproveAsMulti: boolean;
        readonly asApproveAsMulti: {
            readonly threshold: u16;
            readonly otherSignatories: Vec<AccountId32>;
            readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
            readonly callHash: U8aFixed;
            readonly maxWeight: u64;
        } & Struct;
        readonly isCancelAsMulti: boolean;
        readonly asCancelAsMulti: {
            readonly threshold: u16;
            readonly otherSignatories: Vec<AccountId32>;
            readonly timepoint: PalletMultisigTimepoint;
            readonly callHash: U8aFixed;
        } & Struct;
        readonly type: 'AsMultiThreshold1' | 'AsMulti' | 'ApproveAsMulti' | 'CancelAsMulti';
    }
    interface PalletXcmCall extends Enum {
        readonly isSend: boolean;
        readonly asSend: {
            readonly dest: XcmVersionedMultiLocation;
            readonly message: XcmVersionedXcm;
        } & Struct;
        readonly isTeleportAssets: boolean;
        readonly asTeleportAssets: {
            readonly dest: XcmVersionedMultiLocation;
            readonly beneficiary: XcmVersionedMultiLocation;
            readonly assets: XcmVersionedMultiAssets;
            readonly feeAssetItem: u32;
        } & Struct;
        readonly isReserveTransferAssets: boolean;
        readonly asReserveTransferAssets: {
            readonly dest: XcmVersionedMultiLocation;
            readonly beneficiary: XcmVersionedMultiLocation;
            readonly assets: XcmVersionedMultiAssets;
            readonly feeAssetItem: u32;
        } & Struct;
        readonly isExecute: boolean;
        readonly asExecute: {
            readonly message: XcmVersionedXcm;
            readonly maxWeight: u64;
        } & Struct;
        readonly isForceXcmVersion: boolean;
        readonly asForceXcmVersion: {
            readonly location: XcmV1MultiLocation;
            readonly xcmVersion: u32;
        } & Struct;
        readonly isForceDefaultXcmVersion: boolean;
        readonly asForceDefaultXcmVersion: {
            readonly maybeXcmVersion: Option<u32>;
        } & Struct;
        readonly isForceSubscribeVersionNotify: boolean;
        readonly asForceSubscribeVersionNotify: {
            readonly location: XcmVersionedMultiLocation;
        } & Struct;
        readonly isForceUnsubscribeVersionNotify: boolean;
        readonly asForceUnsubscribeVersionNotify: {
            readonly location: XcmVersionedMultiLocation;
        } & Struct;
        readonly isLimitedReserveTransferAssets: boolean;
        readonly asLimitedReserveTransferAssets: {
            readonly dest: XcmVersionedMultiLocation;
            readonly beneficiary: XcmVersionedMultiLocation;
            readonly assets: XcmVersionedMultiAssets;
            readonly feeAssetItem: u32;
            readonly weightLimit: XcmV2WeightLimit;
        } & Struct;
        readonly isLimitedTeleportAssets: boolean;
        readonly asLimitedTeleportAssets: {
            readonly dest: XcmVersionedMultiLocation;
            readonly beneficiary: XcmVersionedMultiLocation;
            readonly assets: XcmVersionedMultiAssets;
            readonly feeAssetItem: u32;
            readonly weightLimit: XcmV2WeightLimit;
        } & Struct;
        readonly type: 'Send' | 'TeleportAssets' | 'ReserveTransferAssets' | 'Execute' | 'ForceXcmVersion' | 'ForceDefaultXcmVersion' | 'ForceSubscribeVersionNotify' | 'ForceUnsubscribeVersionNotify' | 'LimitedReserveTransferAssets' | 'LimitedTeleportAssets';
    }
    interface PalletSudoError extends Enum {
        readonly isRequireSudo: boolean;
        readonly type: 'RequireSudo';
    }
    interface BeefyPrimitivesMmrBeefyNextAuthoritySet extends Struct {
        readonly id: u64;
        readonly len: u32;
        readonly root: H256;
    }
    type RococoRuntimeValidatorManagerError = Null;
    interface PalletCollectiveVotes extends Struct {
        readonly index: u32;
        readonly threshold: u32;
        readonly ayes: Vec<AccountId32>;
        readonly nays: Vec<AccountId32>;
        readonly end: u32;
    }
    interface PalletCollectiveError extends Enum {
        readonly isNotMember: boolean;
        readonly isDuplicateProposal: boolean;
        readonly isProposalMissing: boolean;
        readonly isWrongIndex: boolean;
        readonly isDuplicateVote: boolean;
        readonly isAlreadyInitialized: boolean;
        readonly isTooEarly: boolean;
        readonly isTooManyProposals: boolean;
        readonly isWrongProposalWeight: boolean;
        readonly isWrongProposalLength: boolean;
        readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength';
    }
    interface PalletMembershipError extends Enum {
        readonly isAlreadyMember: boolean;
        readonly isNotMember: boolean;
        readonly type: 'AlreadyMember' | 'NotMember';
    }
    interface PalletUtilityError extends Enum {
        readonly isTooManyCalls: boolean;
        readonly type: 'TooManyCalls';
    }
    interface PalletProxyProxyDefinition extends Struct {
        readonly delegate: AccountId32;
        readonly proxyType: RococoRuntimeProxyType;
        readonly delay: u32;
    }
    interface PalletProxyAnnouncement extends Struct {
        readonly real: AccountId32;
        readonly callHash: H256;
        readonly height: u32;
    }
    interface PalletProxyError extends Enum {
        readonly isTooMany: boolean;
        readonly isNotFound: boolean;
        readonly isNotProxy: boolean;
        readonly isUnproxyable: boolean;
        readonly isDuplicate: boolean;
        readonly isNoPermission: boolean;
        readonly isUnannounced: boolean;
        readonly isNoSelfProxy: boolean;
        readonly type: 'TooMany' | 'NotFound' | 'NotProxy' | 'Unproxyable' | 'Duplicate' | 'NoPermission' | 'Unannounced' | 'NoSelfProxy';
    }
    interface PalletMultisigMultisig extends Struct {
        readonly when: PalletMultisigTimepoint;
        readonly deposit: u128;
        readonly depositor: AccountId32;
        readonly approvals: Vec<AccountId32>;
    }
    interface PalletMultisigError extends Enum {
        readonly isMinimumThreshold: boolean;
        readonly isAlreadyApproved: boolean;
        readonly isNoApprovalsNeeded: boolean;
        readonly isTooFewSignatories: boolean;
        readonly isTooManySignatories: boolean;
        readonly isSignatoriesOutOfOrder: boolean;
        readonly isSenderInSignatories: boolean;
        readonly isNotFound: boolean;
        readonly isNotOwner: boolean;
        readonly isNoTimepoint: boolean;
        readonly isWrongTimepoint: boolean;
        readonly isUnexpectedTimepoint: boolean;
        readonly isMaxWeightTooLow: boolean;
        readonly isAlreadyStored: boolean;
        readonly type: 'MinimumThreshold' | 'AlreadyApproved' | 'NoApprovalsNeeded' | 'TooFewSignatories' | 'TooManySignatories' | 'SignatoriesOutOfOrder' | 'SenderInSignatories' | 'NotFound' | 'NotOwner' | 'NoTimepoint' | 'WrongTimepoint' | 'UnexpectedTimepoint' | 'MaxWeightTooLow' | 'AlreadyStored';
    }
    interface PalletXcmQueryStatus extends Enum {
        readonly isPending: boolean;
        readonly asPending: {
            readonly responder: XcmVersionedMultiLocation;
            readonly maybeNotify: Option<ITuple<[u8, u8]>>;
            readonly timeout: u32;
        } & Struct;
        readonly isVersionNotifier: boolean;
        readonly asVersionNotifier: {
            readonly origin: XcmVersionedMultiLocation;
            readonly isActive: bool;
        } & Struct;
        readonly isReady: boolean;
        readonly asReady: {
            readonly response: XcmVersionedResponse;
            readonly at: u32;
        } & Struct;
        readonly type: 'Pending' | 'VersionNotifier' | 'Ready';
    }
    interface XcmVersionedResponse extends Enum {
        readonly isV0: boolean;
        readonly asV0: XcmV0Response;
        readonly isV1: boolean;
        readonly asV1: XcmV1Response;
        readonly isV2: boolean;
        readonly asV2: XcmV2Response;
        readonly type: 'V0' | 'V1' | 'V2';
    }
    interface PalletXcmVersionMigrationStage extends Enum {
        readonly isMigrateSupportedVersion: boolean;
        readonly isMigrateVersionNotifiers: boolean;
        readonly isNotifyCurrentTargets: boolean;
        readonly asNotifyCurrentTargets: Option<Bytes>;
        readonly isMigrateAndNotifyOldTargets: boolean;
        readonly type: 'MigrateSupportedVersion' | 'MigrateVersionNotifiers' | 'NotifyCurrentTargets' | 'MigrateAndNotifyOldTargets';
    }
    interface PalletXcmError extends Enum {
        readonly isUnreachable: boolean;
        readonly isSendFailure: boolean;
        readonly isFiltered: boolean;
        readonly isUnweighableMessage: boolean;
        readonly isDestinationNotInvertible: boolean;
        readonly isEmpty: boolean;
        readonly isCannotReanchor: boolean;
        readonly isTooManyAssets: boolean;
        readonly isInvalidOrigin: boolean;
        readonly isBadVersion: boolean;
        readonly isBadLocation: boolean;
        readonly isNoSubscription: boolean;
        readonly isAlreadySubscribed: boolean;
        readonly type: 'Unreachable' | 'SendFailure' | 'Filtered' | 'UnweighableMessage' | 'DestinationNotInvertible' | 'Empty' | 'CannotReanchor' | 'TooManyAssets' | 'InvalidOrigin' | 'BadVersion' | 'BadLocation' | 'NoSubscription' | 'AlreadySubscribed';
    }
    type FrameSystemExtensionsCheckSpecVersion = Null;
    type FrameSystemExtensionsCheckTxVersion = Null;
    type FrameSystemExtensionsCheckGenesis = Null;
    interface FrameSystemExtensionsCheckNonce extends Compact<u32> {
    }
    type FrameSystemExtensionsCheckWeight = Null;
    interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {
    }
    type RococoRuntimeRuntime = Null;
}
