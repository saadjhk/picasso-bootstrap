import type { ApiTypes } from '@polkadot/api-base/types';
declare module '@polkadot/api-base/types/errors' {
    interface AugmentedErrors<ApiType extends ApiTypes> {
        assets: {
            BadOrigin: AugmentedError<ApiType>;
            CannotSetNewCurrencyToRegistry: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        assetsRegistry: {
            ForeignAssetIdAlreadyUsed: AugmentedError<ApiType>;
            LocalAssetIdAlreadyUsed: AugmentedError<ApiType>;
            OnlyAllowedForAdmins: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        authorship: {
            GenesisUncle: AugmentedError<ApiType>;
            InvalidUncleParent: AugmentedError<ApiType>;
            OldUncle: AugmentedError<ApiType>;
            TooHighUncle: AugmentedError<ApiType>;
            TooManyUncles: AugmentedError<ApiType>;
            UncleAlreadyIncluded: AugmentedError<ApiType>;
            UnclesAlreadySet: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        balances: {
            DeadAccount: AugmentedError<ApiType>;
            ExistentialDeposit: AugmentedError<ApiType>;
            ExistingVestingSchedule: AugmentedError<ApiType>;
            InsufficientBalance: AugmentedError<ApiType>;
            KeepAlive: AugmentedError<ApiType>;
            LiquidityRestrictions: AugmentedError<ApiType>;
            TooManyReserves: AugmentedError<ApiType>;
            VestingBalance: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        bondedFinance: {
            BondOfferNotFound: AugmentedError<ApiType>;
            InvalidBondOffer: AugmentedError<ApiType>;
            InvalidNumberOfBonds: AugmentedError<ApiType>;
            OfferCompleted: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        callFilter: {
            CannotDisable: AugmentedError<ApiType>;
            InvalidString: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        collatorSelection: {
            AlreadyCandidate: AugmentedError<ApiType>;
            AlreadyInvulnerable: AugmentedError<ApiType>;
            NoAssociatedValidatorId: AugmentedError<ApiType>;
            NotCandidate: AugmentedError<ApiType>;
            Permission: AugmentedError<ApiType>;
            TooFewCandidates: AugmentedError<ApiType>;
            TooManyCandidates: AugmentedError<ApiType>;
            Unknown: AugmentedError<ApiType>;
            ValidatorNotRegistered: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        council: {
            AlreadyInitialized: AugmentedError<ApiType>;
            DuplicateProposal: AugmentedError<ApiType>;
            DuplicateVote: AugmentedError<ApiType>;
            NotMember: AugmentedError<ApiType>;
            ProposalMissing: AugmentedError<ApiType>;
            TooEarly: AugmentedError<ApiType>;
            TooManyProposals: AugmentedError<ApiType>;
            WrongIndex: AugmentedError<ApiType>;
            WrongProposalLength: AugmentedError<ApiType>;
            WrongProposalWeight: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        councilMembership: {
            AlreadyMember: AugmentedError<ApiType>;
            NotMember: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        crowdloanRewards: {
            AlreadyAssociated: AugmentedError<ApiType>;
            AlreadyInitialized: AugmentedError<ApiType>;
            InvalidClaim: AugmentedError<ApiType>;
            InvalidProof: AugmentedError<ApiType>;
            NotAssociated: AugmentedError<ApiType>;
            NothingToClaim: AugmentedError<ApiType>;
            NotInitialized: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        cumulusXcm: {
            [key: string]: AugmentedError<ApiType>;
        };
        democracy: {
            AlreadyCanceled: AugmentedError<ApiType>;
            AlreadyDelegating: AugmentedError<ApiType>;
            AlreadyVetoed: AugmentedError<ApiType>;
            DuplicatePreimage: AugmentedError<ApiType>;
            DuplicateProposal: AugmentedError<ApiType>;
            Imminent: AugmentedError<ApiType>;
            InstantNotAllowed: AugmentedError<ApiType>;
            InsufficientFunds: AugmentedError<ApiType>;
            InvalidHash: AugmentedError<ApiType>;
            MaxVotesReached: AugmentedError<ApiType>;
            NoneWaiting: AugmentedError<ApiType>;
            Nonsense: AugmentedError<ApiType>;
            NoPermission: AugmentedError<ApiType>;
            NoProposal: AugmentedError<ApiType>;
            NotDelegating: AugmentedError<ApiType>;
            NotImminent: AugmentedError<ApiType>;
            NotSimpleMajority: AugmentedError<ApiType>;
            NotVoter: AugmentedError<ApiType>;
            PreimageInvalid: AugmentedError<ApiType>;
            PreimageMissing: AugmentedError<ApiType>;
            ProposalBlacklisted: AugmentedError<ApiType>;
            ProposalMissing: AugmentedError<ApiType>;
            ReferendumInvalid: AugmentedError<ApiType>;
            TooEarly: AugmentedError<ApiType>;
            TooManyProposals: AugmentedError<ApiType>;
            ValueLow: AugmentedError<ApiType>;
            VotesExist: AugmentedError<ApiType>;
            WrongUpperBound: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        dmpQueue: {
            OverLimit: AugmentedError<ApiType>;
            Unknown: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        dutchAuction: {
            OrderNotFound: AugmentedError<ApiType>;
            OrderParametersIsInvalid: AugmentedError<ApiType>;
            RequestedOrderDoesNotExists: AugmentedError<ApiType>;
            TakeLimitDoesNotSatisfiesOrder: AugmentedError<ApiType>;
            TakeParametersIsInvalid: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        factory: {
            [key: string]: AugmentedError<ApiType>;
        };
        governanceRegistry: {
            NoneError: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        identity: {
            AlreadyClaimed: AugmentedError<ApiType>;
            EmptyIndex: AugmentedError<ApiType>;
            FeeChanged: AugmentedError<ApiType>;
            InvalidIndex: AugmentedError<ApiType>;
            InvalidJudgement: AugmentedError<ApiType>;
            InvalidTarget: AugmentedError<ApiType>;
            JudgementGiven: AugmentedError<ApiType>;
            NoIdentity: AugmentedError<ApiType>;
            NotFound: AugmentedError<ApiType>;
            NotNamed: AugmentedError<ApiType>;
            NotOwned: AugmentedError<ApiType>;
            NotSub: AugmentedError<ApiType>;
            StickyJudgement: AugmentedError<ApiType>;
            TooManyFields: AugmentedError<ApiType>;
            TooManyRegistrars: AugmentedError<ApiType>;
            TooManySubAccounts: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        indices: {
            InUse: AugmentedError<ApiType>;
            NotAssigned: AugmentedError<ApiType>;
            NotOwner: AugmentedError<ApiType>;
            NotTransfer: AugmentedError<ApiType>;
            Permanent: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        multisig: {
            AlreadyApproved: AugmentedError<ApiType>;
            AlreadyStored: AugmentedError<ApiType>;
            MaxWeightTooLow: AugmentedError<ApiType>;
            MinimumThreshold: AugmentedError<ApiType>;
            NoApprovalsNeeded: AugmentedError<ApiType>;
            NotFound: AugmentedError<ApiType>;
            NoTimepoint: AugmentedError<ApiType>;
            NotOwner: AugmentedError<ApiType>;
            SenderInSignatories: AugmentedError<ApiType>;
            SignatoriesOutOfOrder: AugmentedError<ApiType>;
            TooFewSignatories: AugmentedError<ApiType>;
            TooManySignatories: AugmentedError<ApiType>;
            UnexpectedTimepoint: AugmentedError<ApiType>;
            WrongTimepoint: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        oracle: {
            AlreadySet: AugmentedError<ApiType>;
            AlreadySubmitted: AugmentedError<ApiType>;
            ArithmeticError: AugmentedError<ApiType>;
            AvoidPanic: AugmentedError<ApiType>;
            BlockIntervalLength: AugmentedError<ApiType>;
            ControllerUsed: AugmentedError<ApiType>;
            DepthTooLarge: AugmentedError<ApiType>;
            ExceedAssetsCount: AugmentedError<ApiType>;
            ExceedMaxAnswers: AugmentedError<ApiType>;
            ExceedStake: AugmentedError<ApiType>;
            ExceedThreshold: AugmentedError<ApiType>;
            InvalidAssetId: AugmentedError<ApiType>;
            InvalidMinAnswers: AugmentedError<ApiType>;
            MaxAnswersLessThanMinAnswers: AugmentedError<ApiType>;
            MaxPrices: AugmentedError<ApiType>;
            MustSumTo100: AugmentedError<ApiType>;
            NoPermission: AugmentedError<ApiType>;
            NoStake: AugmentedError<ApiType>;
            NotEnoughFunds: AugmentedError<ApiType>;
            NotEnoughStake: AugmentedError<ApiType>;
            PriceNotFound: AugmentedError<ApiType>;
            PriceNotRequested: AugmentedError<ApiType>;
            SignerUsed: AugmentedError<ApiType>;
            StakeLocked: AugmentedError<ApiType>;
            TransferError: AugmentedError<ApiType>;
            Unknown: AugmentedError<ApiType>;
            UnsetController: AugmentedError<ApiType>;
            UnsetSigner: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        parachainSystem: {
            HostConfigurationNotAvailable: AugmentedError<ApiType>;
            NothingAuthorized: AugmentedError<ApiType>;
            NotScheduled: AugmentedError<ApiType>;
            OverlappingUpgrades: AugmentedError<ApiType>;
            ProhibitedByPolkadot: AugmentedError<ApiType>;
            TooBig: AugmentedError<ApiType>;
            Unauthorized: AugmentedError<ApiType>;
            ValidationDataNotAvailable: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        relayerXcm: {
            AlreadySubscribed: AugmentedError<ApiType>;
            BadLocation: AugmentedError<ApiType>;
            BadVersion: AugmentedError<ApiType>;
            CannotReanchor: AugmentedError<ApiType>;
            DestinationNotInvertible: AugmentedError<ApiType>;
            Empty: AugmentedError<ApiType>;
            Filtered: AugmentedError<ApiType>;
            InvalidOrigin: AugmentedError<ApiType>;
            NoSubscription: AugmentedError<ApiType>;
            SendFailure: AugmentedError<ApiType>;
            TooManyAssets: AugmentedError<ApiType>;
            Unreachable: AugmentedError<ApiType>;
            UnweighableMessage: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        scheduler: {
            FailedToSchedule: AugmentedError<ApiType>;
            NotFound: AugmentedError<ApiType>;
            RescheduleNoChange: AugmentedError<ApiType>;
            TargetBlockNumberInPast: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        session: {
            DuplicatedKey: AugmentedError<ApiType>;
            InvalidProof: AugmentedError<ApiType>;
            NoAccount: AugmentedError<ApiType>;
            NoAssociatedValidatorId: AugmentedError<ApiType>;
            NoKeys: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        sudo: {
            RequireSudo: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        system: {
            CallFiltered: AugmentedError<ApiType>;
            FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
            InvalidSpecName: AugmentedError<ApiType>;
            NonDefaultComposite: AugmentedError<ApiType>;
            NonZeroRefCount: AugmentedError<ApiType>;
            SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        tokens: {
            AmountIntoBalanceFailed: AugmentedError<ApiType>;
            BalanceTooLow: AugmentedError<ApiType>;
            DeadAccount: AugmentedError<ApiType>;
            ExistentialDeposit: AugmentedError<ApiType>;
            KeepAlive: AugmentedError<ApiType>;
            LiquidityRestrictions: AugmentedError<ApiType>;
            MaxLocksExceeded: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        treasury: {
            InsufficientProposersBalance: AugmentedError<ApiType>;
            InvalidIndex: AugmentedError<ApiType>;
            TooManyApprovals: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        unknownTokens: {
            BalanceOverflow: AugmentedError<ApiType>;
            BalanceTooLow: AugmentedError<ApiType>;
            UnhandledAsset: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        utility: {
            TooManyCalls: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        vault: {
            AccountIsNotManager: AugmentedError<ApiType>;
            AllocationMustSumToOne: AugmentedError<ApiType>;
            AmountMustGteMinimumDeposit: AugmentedError<ApiType>;
            AmountMustGteMinimumWithdrawal: AugmentedError<ApiType>;
            CannotCreateAsset: AugmentedError<ApiType>;
            DepositsHalted: AugmentedError<ApiType>;
            InsufficientCreationDeposit: AugmentedError<ApiType>;
            InsufficientFunds: AugmentedError<ApiType>;
            InsufficientLpTokens: AugmentedError<ApiType>;
            InvalidAddSurcharge: AugmentedError<ApiType>;
            InvalidDeletionClaim: AugmentedError<ApiType>;
            InvalidSurchargeClaim: AugmentedError<ApiType>;
            MintFailed: AugmentedError<ApiType>;
            NoFreeVaultAllocation: AugmentedError<ApiType>;
            NotEnoughLiquidity: AugmentedError<ApiType>;
            NotVaultLpToken: AugmentedError<ApiType>;
            OnlyManagerCanDoThisOperation: AugmentedError<ApiType>;
            TombstoneDurationNotExceeded: AugmentedError<ApiType>;
            TooManyStrategies: AugmentedError<ApiType>;
            TransferFromFailed: AugmentedError<ApiType>;
            VaultDoesNotExist: AugmentedError<ApiType>;
            VaultNotTombstoned: AugmentedError<ApiType>;
            WithdrawalsHalted: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        vesting: {
            AmountLow: AugmentedError<ApiType>;
            InsufficientBalanceToLock: AugmentedError<ApiType>;
            MaxVestingSchedulesExceeded: AugmentedError<ApiType>;
            TooManyVestingSchedules: AugmentedError<ApiType>;
            ZeroVestingPeriod: AugmentedError<ApiType>;
            ZeroVestingPeriodCount: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        xcmpQueue: {
            BadXcm: AugmentedError<ApiType>;
            BadXcmOrigin: AugmentedError<ApiType>;
            FailedToSend: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        xTokens: {
            AssetHasNoReserve: AugmentedError<ApiType>;
            BadVersion: AugmentedError<ApiType>;
            CannotReanchor: AugmentedError<ApiType>;
            DestinationNotInvertible: AugmentedError<ApiType>;
            DistincAssetAndFeeId: AugmentedError<ApiType>;
            FeeCannotBeZero: AugmentedError<ApiType>;
            InvalidAncestry: AugmentedError<ApiType>;
            InvalidDest: AugmentedError<ApiType>;
            NotCrossChainTransfer: AugmentedError<ApiType>;
            NotCrossChainTransferableCurrency: AugmentedError<ApiType>;
            NotFungible: AugmentedError<ApiType>;
            UnweighableMessage: AugmentedError<ApiType>;
            XcmExecutionFailed: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
    }
}
