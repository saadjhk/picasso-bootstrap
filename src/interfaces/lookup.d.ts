declare const _default: {
    FrameSystemAccountInfo: {
        nonce: string;
        consumers: string;
        providers: string;
        sufficients: string;
        data: string;
    };
    PalletBalancesAccountData: {
        free: string;
        reserved: string;
        miscFrozen: string;
        feeFrozen: string;
    };
    FrameSupportWeightsPerDispatchClassU64: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    SpRuntimeDigest: {
        logs: string;
    };
    SpRuntimeDigestDigestItem: {
        _enum: {
            Other: string;
            __Unused1: string;
            __Unused2: string;
            __Unused3: string;
            Consensus: string;
            Seal: string;
            PreRuntime: string;
            __Unused7: string;
            RuntimeEnvironmentUpdated: string;
        };
    };
    FrameSystemEventRecord: {
        phase: string;
        event: string;
        topics: string;
    };
    FrameSystemEvent: {
        _enum: {
            ExtrinsicSuccess: string;
            ExtrinsicFailed: string;
            CodeUpdated: string;
            NewAccount: string;
            KilledAccount: string;
            Remarked: string;
        };
    };
    FrameSupportWeightsDispatchInfo: {
        weight: string;
        class: string;
        paysFee: string;
    };
    FrameSupportWeightsDispatchClass: {
        _enum: string[];
    };
    FrameSupportWeightsPays: {
        _enum: string[];
    };
    SpRuntimeDispatchError: {
        _enum: {
            Other: string;
            CannotLookup: string;
            BadOrigin: string;
            Module: {
                index: string;
                error: string;
            };
            ConsumerRemaining: string;
            NoProviders: string;
            Token: string;
            Arithmetic: string;
        };
    };
    SpRuntimeTokenError: {
        _enum: string[];
    };
    SpRuntimeArithmeticError: {
        _enum: string[];
    };
    PalletIndicesEvent: {
        _enum: {
            IndexAssigned: {
                who: string;
                index: string;
            };
            IndexFreed: {
                index: string;
            };
            IndexFrozen: {
                index: string;
                who: string;
            };
        };
    };
    PalletBalancesEvent: {
        _enum: {
            Endowed: {
                account: string;
                freeBalance: string;
            };
            DustLost: {
                account: string;
                amount: string;
            };
            Transfer: {
                from: string;
                to: string;
                amount: string;
            };
            BalanceSet: {
                who: string;
                free: string;
                reserved: string;
            };
            Reserved: {
                who: string;
                amount: string;
            };
            Unreserved: {
                who: string;
                amount: string;
            };
            ReserveRepatriated: {
                from: string;
                to: string;
                amount: string;
                destinationStatus: string;
            };
            Deposit: {
                who: string;
                amount: string;
            };
            Withdraw: {
                who: string;
                amount: string;
            };
            Slashed: {
                who: string;
                amount: string;
            };
        };
    };
    FrameSupportTokensMiscBalanceStatus: {
        _enum: string[];
    };
    PalletOffencesEvent: {
        _enum: {
            Offence: {
                kind: string;
                timeslot: string;
            };
        };
    };
    PalletSessionEvent: {
        _enum: {
            NewSession: {
                sessionIndex: string;
            };
        };
    };
    PalletGrandpaEvent: {
        _enum: {
            NewAuthorities: {
                authoritySet: string;
            };
            Paused: string;
            Resumed: string;
        };
    };
    SpFinalityGrandpaAppPublic: string;
    SpCoreEd25519Public: string;
    PalletImOnlineEvent: {
        _enum: {
            HeartbeatReceived: {
                authorityId: string;
            };
            AllGood: string;
            SomeOffline: {
                offline: string;
            };
        };
    };
    PalletImOnlineSr25519AppSr25519Public: string;
    SpCoreSr25519Public: string;
    PolkadotRuntimeParachainsInclusionPalletEvent: {
        _enum: {
            CandidateBacked: string;
            CandidateIncluded: string;
            CandidateTimedOut: string;
        };
    };
    PolkadotPrimitivesV1CandidateReceipt: {
        descriptor: string;
        commitmentsHash: string;
    };
    PolkadotPrimitivesV1CandidateDescriptor: {
        paraId: string;
        relayParent: string;
        collator: string;
        persistedValidationDataHash: string;
        povHash: string;
        erasureRoot: string;
        signature: string;
        paraHead: string;
        validationCodeHash: string;
    };
    PolkadotPrimitivesV0CollatorAppPublic: string;
    PolkadotPrimitivesV0CollatorAppSignature: string;
    SpCoreSr25519Signature: string;
    PolkadotRuntimeParachainsParasPalletEvent: {
        _enum: {
            CurrentCodeUpdated: string;
            CurrentHeadUpdated: string;
            CodeUpgradeScheduled: string;
            NewHeadNoted: string;
            ActionQueued: string;
        };
    };
    PolkadotRuntimeParachainsUmpPalletEvent: {
        _enum: {
            InvalidFormat: string;
            UnsupportedVersion: string;
            ExecutedUpward: string;
            WeightExhausted: string;
            UpwardMessagesReceived: string;
            OverweightEnqueued: string;
            OverweightServiced: string;
        };
    };
    XcmV2TraitsOutcome: {
        _enum: {
            Complete: string;
            Incomplete: string;
            Error: string;
        };
    };
    XcmV2TraitsError: {
        _enum: {
            Overflow: string;
            Unimplemented: string;
            UntrustedReserveLocation: string;
            UntrustedTeleportLocation: string;
            MultiLocationFull: string;
            MultiLocationNotInvertible: string;
            BadOrigin: string;
            InvalidLocation: string;
            AssetNotFound: string;
            FailedToTransactAsset: string;
            NotWithdrawable: string;
            LocationCannotHold: string;
            ExceedsMaxMessageSize: string;
            DestinationUnsupported: string;
            Transport: string;
            Unroutable: string;
            UnknownClaim: string;
            FailedToDecode: string;
            TooMuchWeightRequired: string;
            NotHoldingFees: string;
            TooExpensive: string;
            Trap: string;
            UnhandledXcmVersion: string;
            WeightLimitReached: string;
            Barrier: string;
            WeightNotComputable: string;
        };
    };
    PolkadotRuntimeParachainsHrmpPalletEvent: {
        _enum: {
            OpenChannelRequested: string;
            OpenChannelCanceled: string;
            OpenChannelAccepted: string;
            ChannelClosed: string;
        };
    };
    PolkadotParachainPrimitivesHrmpChannelId: {
        sender: string;
        recipient: string;
    };
    PolkadotRuntimeParachainsDisputesPalletEvent: {
        _enum: {
            DisputeInitiated: string;
            DisputeConcluded: string;
            DisputeTimedOut: string;
            Revert: string;
        };
    };
    PolkadotRuntimeParachainsDisputesDisputeLocation: {
        _enum: string[];
    };
    PolkadotRuntimeParachainsDisputesDisputeResult: {
        _enum: string[];
    };
    PolkadotRuntimeCommonParasRegistrarPalletEvent: {
        _enum: {
            Registered: string;
            Deregistered: string;
            Reserved: string;
        };
    };
    PolkadotRuntimeCommonAuctionsPalletEvent: {
        _enum: {
            AuctionStarted: string;
            AuctionClosed: string;
            Reserved: string;
            Unreserved: string;
            ReserveConfiscated: string;
            BidAccepted: string;
            WinningOffset: string;
        };
    };
    PolkadotRuntimeCommonCrowdloanPalletEvent: {
        _enum: {
            Created: string;
            Contributed: string;
            Withdrew: string;
            PartiallyRefunded: string;
            AllRefunded: string;
            Dissolved: string;
            HandleBidResult: string;
            Edited: string;
            MemoUpdated: string;
            AddedToNewRaise: string;
        };
    };
    PolkadotRuntimeCommonSlotsPalletEvent: {
        _enum: {
            NewLeasePeriod: string;
            Leased: string;
        };
    };
    PalletSudoEvent: {
        _enum: {
            Sudid: {
                sudoResult: string;
            };
            KeyChanged: {
                newSudoer: string;
            };
            SudoAsDone: {
                sudoResult: string;
            };
        };
    };
    RococoRuntimeValidatorManagerRawEvent: {
        _enum: {
            ValidatorsRegistered: string;
            ValidatorsDeregistered: string;
        };
    };
    PalletCollectiveEvent: {
        _enum: {
            Proposed: {
                account: string;
                proposalIndex: string;
                proposalHash: string;
                threshold: string;
            };
            Voted: {
                account: string;
                proposalHash: string;
                voted: string;
                yes: string;
                no: string;
            };
            Approved: {
                proposalHash: string;
            };
            Disapproved: {
                proposalHash: string;
            };
            Executed: {
                proposalHash: string;
                result: string;
            };
            MemberExecuted: {
                proposalHash: string;
                result: string;
            };
            Closed: {
                proposalHash: string;
                yes: string;
                no: string;
            };
        };
    };
    PalletMembershipEvent: {
        _enum: string[];
    };
    PalletUtilityEvent: {
        _enum: {
            BatchInterrupted: {
                index: string;
                error: string;
            };
            BatchCompleted: string;
            ItemCompleted: string;
            DispatchedAs: string;
        };
    };
    PalletProxyEvent: {
        _enum: {
            ProxyExecuted: {
                result: string;
            };
            AnonymousCreated: {
                anonymous: string;
                who: string;
                proxyType: string;
                disambiguationIndex: string;
            };
            Announced: {
                real: string;
                proxy: string;
                callHash: string;
            };
            ProxyAdded: {
                delegator: string;
                delegatee: string;
                proxyType: string;
                delay: string;
            };
        };
    };
    RococoRuntimeProxyType: {
        _enum: string[];
    };
    PalletMultisigEvent: {
        _enum: {
            NewMultisig: {
                approving: string;
                multisig: string;
                callHash: string;
            };
            MultisigApproval: {
                approving: string;
                timepoint: string;
                multisig: string;
                callHash: string;
            };
            MultisigExecuted: {
                approving: string;
                timepoint: string;
                multisig: string;
                callHash: string;
                result: string;
            };
            MultisigCancelled: {
                cancelling: string;
                timepoint: string;
                multisig: string;
                callHash: string;
            };
        };
    };
    PalletMultisigTimepoint: {
        height: string;
        index: string;
    };
    PalletXcmEvent: {
        _enum: {
            Attempted: string;
            Sent: string;
            UnexpectedResponse: string;
            ResponseReady: string;
            Notified: string;
            NotifyOverweight: string;
            NotifyDispatchError: string;
            NotifyDecodeFailed: string;
            InvalidResponder: string;
            InvalidResponderVersion: string;
            ResponseTaken: string;
            AssetsTrapped: string;
            VersionChangeNotified: string;
            SupportedVersionChanged: string;
            NotifyTargetSendFail: string;
            NotifyTargetMigrationFail: string;
        };
    };
    XcmV1MultiLocation: {
        parents: string;
        interior: string;
    };
    XcmV1MultilocationJunctions: {
        _enum: {
            Here: string;
            X1: string;
            X2: string;
            X3: string;
            X4: string;
            X5: string;
            X6: string;
            X7: string;
            X8: string;
        };
    };
    XcmV1Junction: {
        _enum: {
            Parachain: string;
            AccountId32: {
                network: string;
                id: string;
            };
            AccountIndex64: {
                network: string;
                index: string;
            };
            AccountKey20: {
                network: string;
                key: string;
            };
            PalletInstance: string;
            GeneralIndex: string;
            GeneralKey: string;
            OnlyChild: string;
            Plurality: {
                id: string;
                part: string;
            };
        };
    };
    XcmV0JunctionNetworkId: {
        _enum: {
            Any: string;
            Named: string;
            Polkadot: string;
            Kusama: string;
        };
    };
    XcmV0JunctionBodyId: {
        _enum: {
            Unit: string;
            Named: string;
            Index: string;
            Executive: string;
            Technical: string;
            Legislative: string;
            Judicial: string;
        };
    };
    XcmV0JunctionBodyPart: {
        _enum: {
            Voice: string;
            Members: {
                count: string;
            };
            Fraction: {
                nom: string;
                denom: string;
            };
            AtLeastProportion: {
                nom: string;
                denom: string;
            };
            MoreThanProportion: {
                nom: string;
                denom: string;
            };
        };
    };
    XcmV2Xcm: string;
    XcmV2Instruction: {
        _enum: {
            WithdrawAsset: string;
            ReserveAssetDeposited: string;
            ReceiveTeleportedAsset: string;
            QueryResponse: {
                queryId: string;
                response: string;
                maxWeight: string;
            };
            TransferAsset: {
                assets: string;
                beneficiary: string;
            };
            TransferReserveAsset: {
                assets: string;
                dest: string;
                xcm: string;
            };
            Transact: {
                originType: string;
                requireWeightAtMost: string;
                call: string;
            };
            HrmpNewChannelOpenRequest: {
                sender: string;
                maxMessageSize: string;
                maxCapacity: string;
            };
            HrmpChannelAccepted: {
                recipient: string;
            };
            HrmpChannelClosing: {
                initiator: string;
                sender: string;
                recipient: string;
            };
            ClearOrigin: string;
            DescendOrigin: string;
            ReportError: {
                queryId: string;
                dest: string;
                maxResponseWeight: string;
            };
            DepositAsset: {
                assets: string;
                maxAssets: string;
                beneficiary: string;
            };
            DepositReserveAsset: {
                assets: string;
                maxAssets: string;
                dest: string;
                xcm: string;
            };
            ExchangeAsset: {
                give: string;
                receive: string;
            };
            InitiateReserveWithdraw: {
                assets: string;
                reserve: string;
                xcm: string;
            };
            InitiateTeleport: {
                assets: string;
                dest: string;
                xcm: string;
            };
            QueryHolding: {
                queryId: string;
                dest: string;
                assets: string;
                maxResponseWeight: string;
            };
            BuyExecution: {
                fees: string;
                weightLimit: string;
            };
            RefundSurplus: string;
            SetErrorHandler: string;
            SetAppendix: string;
            ClearError: string;
            ClaimAsset: {
                assets: string;
                ticket: string;
            };
            Trap: string;
            SubscribeVersion: {
                queryId: string;
                maxResponseWeight: string;
            };
            UnsubscribeVersion: string;
        };
    };
    XcmV1MultiassetMultiAssets: string;
    XcmV1MultiAsset: {
        id: string;
        fun: string;
    };
    XcmV1MultiassetAssetId: {
        _enum: {
            Concrete: string;
            Abstract: string;
        };
    };
    XcmV1MultiassetFungibility: {
        _enum: {
            Fungible: string;
            NonFungible: string;
        };
    };
    XcmV1MultiassetAssetInstance: {
        _enum: {
            Undefined: string;
            Index: string;
            Array4: string;
            Array8: string;
            Array16: string;
            Array32: string;
            Blob: string;
        };
    };
    XcmV2Response: {
        _enum: {
            Null: string;
            Assets: string;
            ExecutionResult: string;
            Version: string;
        };
    };
    XcmV0OriginKind: {
        _enum: string[];
    };
    XcmDoubleEncoded: {
        encoded: string;
    };
    XcmV1MultiassetMultiAssetFilter: {
        _enum: {
            Definite: string;
            Wild: string;
        };
    };
    XcmV1MultiassetWildMultiAsset: {
        _enum: {
            All: string;
            AllOf: {
                id: string;
                fun: string;
            };
        };
    };
    XcmV1MultiassetWildFungibility: {
        _enum: string[];
    };
    XcmV2WeightLimit: {
        _enum: {
            Unlimited: string;
            Limited: string;
        };
    };
    XcmVersionedMultiAssets: {
        _enum: {
            V0: string;
            V1: string;
        };
    };
    XcmV0MultiAsset: {
        _enum: {
            None: string;
            All: string;
            AllFungible: string;
            AllNonFungible: string;
            AllAbstractFungible: {
                id: string;
            };
            AllAbstractNonFungible: {
                class: string;
            };
            AllConcreteFungible: {
                id: string;
            };
            AllConcreteNonFungible: {
                class: string;
            };
            AbstractFungible: {
                id: string;
                amount: string;
            };
            AbstractNonFungible: {
                class: string;
                instance: string;
            };
            ConcreteFungible: {
                id: string;
                amount: string;
            };
            ConcreteNonFungible: {
                class: string;
                instance: string;
            };
        };
    };
    XcmV0MultiLocation: {
        _enum: {
            Null: string;
            X1: string;
            X2: string;
            X3: string;
            X4: string;
            X5: string;
            X6: string;
            X7: string;
            X8: string;
        };
    };
    XcmV0Junction: {
        _enum: {
            Parent: string;
            Parachain: string;
            AccountId32: {
                network: string;
                id: string;
            };
            AccountIndex64: {
                network: string;
                index: string;
            };
            AccountKey20: {
                network: string;
                key: string;
            };
            PalletInstance: string;
            GeneralIndex: string;
            GeneralKey: string;
            OnlyChild: string;
            Plurality: {
                id: string;
                part: string;
            };
        };
    };
    XcmVersionedMultiLocation: {
        _enum: {
            V0: string;
            V1: string;
        };
    };
    FrameSystemPhase: {
        _enum: {
            ApplyExtrinsic: string;
            Finalization: string;
            Initialization: string;
        };
    };
    FrameSystemLastRuntimeUpgradeInfo: {
        specVersion: string;
        specName: string;
    };
    FrameSystemCall: {
        _enum: {
            fill_block: {
                ratio: string;
            };
            remark: {
                remark: string;
            };
            set_heap_pages: {
                pages: string;
            };
            set_code: {
                code: string;
            };
            set_code_without_checks: {
                code: string;
            };
            set_storage: {
                items: string;
            };
            kill_storage: {
                _alias: {
                    keys_: string;
                };
                keys_: string;
            };
            kill_prefix: {
                prefix: string;
                subkeys: string;
            };
            remark_with_event: {
                remark: string;
            };
        };
    };
    FrameSystemLimitsBlockWeights: {
        baseBlock: string;
        maxBlock: string;
        perClass: string;
    };
    FrameSupportWeightsPerDispatchClassWeightsPerClass: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    FrameSystemLimitsWeightsPerClass: {
        baseExtrinsic: string;
        maxExtrinsic: string;
        maxTotal: string;
        reserved: string;
    };
    FrameSystemLimitsBlockLength: {
        max: string;
    };
    FrameSupportWeightsPerDispatchClassU32: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    FrameSupportWeightsRuntimeDbWeight: {
        read: string;
        write: string;
    };
    SpVersionRuntimeVersion: {
        specName: string;
        implName: string;
        authoringVersion: string;
        specVersion: string;
        implVersion: string;
        apis: string;
        transactionVersion: string;
    };
    FrameSystemError: {
        _enum: string[];
    };
    SpConsensusBabeAppPublic: string;
    SpConsensusBabeDigestsNextConfigDescriptor: {
        _enum: {
            __Unused0: string;
            V1: {
                c: string;
                allowedSlots: string;
            };
        };
    };
    SpConsensusBabeAllowedSlots: {
        _enum: string[];
    };
    SpConsensusBabeBabeEpochConfiguration: {
        c: string;
        allowedSlots: string;
    };
    PalletBabeCall: {
        _enum: {
            report_equivocation: {
                equivocationProof: string;
                keyOwnerProof: string;
            };
            report_equivocation_unsigned: {
                equivocationProof: string;
                keyOwnerProof: string;
            };
            plan_config_change: {
                config: string;
            };
        };
    };
    SpConsensusSlotsEquivocationProof: {
        offender: string;
        slot: string;
        firstHeader: string;
        secondHeader: string;
    };
    SpRuntimeHeader: {
        parentHash: string;
        number: string;
        stateRoot: string;
        extrinsicsRoot: string;
        digest: string;
    };
    SpRuntimeBlakeTwo256: string;
    SpSessionMembershipProof: {
        session: string;
        trieNodes: string;
        validatorCount: string;
    };
    PalletBabeError: {
        _enum: string[];
    };
    PalletTimestampCall: {
        _enum: {
            set: {
                now: string;
            };
        };
    };
    PalletIndicesCall: {
        _enum: {
            claim: {
                index: string;
            };
            transfer: {
                _alias: {
                    new_: string;
                };
                new_: string;
                index: string;
            };
            free: {
                index: string;
            };
            force_transfer: {
                _alias: {
                    new_: string;
                };
                new_: string;
                index: string;
                freeze: string;
            };
            freeze: {
                index: string;
            };
        };
    };
    PalletIndicesError: {
        _enum: string[];
    };
    PalletBalancesBalanceLock: {
        id: string;
        amount: string;
        reasons: string;
    };
    PalletBalancesReasons: {
        _enum: string[];
    };
    PalletBalancesReserveData: {
        id: string;
        amount: string;
    };
    PalletBalancesReleases: {
        _enum: string[];
    };
    PalletBalancesCall: {
        _enum: {
            transfer: {
                dest: string;
                value: string;
            };
            set_balance: {
                who: string;
                newFree: string;
                newReserved: string;
            };
            force_transfer: {
                source: string;
                dest: string;
                value: string;
            };
            transfer_keep_alive: {
                dest: string;
                value: string;
            };
            transfer_all: {
                dest: string;
                keepAlive: string;
            };
            force_unreserve: {
                who: string;
                amount: string;
            };
        };
    };
    PalletBalancesError: {
        _enum: string[];
    };
    PalletTransactionPaymentReleases: {
        _enum: string[];
    };
    FrameSupportWeightsWeightToFeeCoefficient: {
        coeffInteger: string;
        coeffFrac: string;
        negative: string;
        degree: string;
    };
    PalletAuthorshipUncleEntryItem: {
        _enum: {
            InclusionHeight: string;
            Uncle: string;
        };
    };
    PalletAuthorshipCall: {
        _enum: {
            set_uncles: {
                newUncles: string;
            };
        };
    };
    PalletAuthorshipError: {
        _enum: string[];
    };
    SpStakingOffenceOffenceDetails: {
        offender: string;
        reporters: string;
    };
    RococoRuntimeSessionKeys: {
        grandpa: string;
        babe: string;
        imOnline: string;
        paraValidator: string;
        paraAssignment: string;
        authorityDiscovery: string;
        beefy: string;
    };
    PolkadotPrimitivesV0ValidatorAppPublic: string;
    PolkadotPrimitivesV1AssignmentAppPublic: string;
    SpAuthorityDiscoveryAppPublic: string;
    BeefyPrimitivesCryptoPublic: string;
    SpCoreEcdsaPublic: string;
    SpCoreCryptoKeyTypeId: string;
    PalletSessionCall: {
        _enum: {
            set_keys: {
                _alias: {
                    keys_: string;
                };
                keys_: string;
                proof: string;
            };
            purge_keys: string;
        };
    };
    PalletSessionError: {
        _enum: string[];
    };
    PalletGrandpaStoredState: {
        _enum: {
            Live: string;
            PendingPause: {
                scheduledAt: string;
                delay: string;
            };
            Paused: string;
            PendingResume: {
                scheduledAt: string;
                delay: string;
            };
        };
    };
    PalletGrandpaStoredPendingChange: {
        scheduledAt: string;
        delay: string;
        nextAuthorities: string;
        forced: string;
    };
    PalletGrandpaCall: {
        _enum: {
            report_equivocation: {
                equivocationProof: string;
                keyOwnerProof: string;
            };
            report_equivocation_unsigned: {
                equivocationProof: string;
                keyOwnerProof: string;
            };
            note_stalled: {
                delay: string;
                bestFinalizedBlockNumber: string;
            };
        };
    };
    SpFinalityGrandpaEquivocationProof: {
        setId: string;
        equivocation: string;
    };
    SpFinalityGrandpaEquivocation: {
        _enum: {
            Prevote: string;
            Precommit: string;
        };
    };
    FinalityGrandpaEquivocationPrevote: {
        roundNumber: string;
        identity: string;
        first: string;
        second: string;
    };
    FinalityGrandpaPrevote: {
        targetHash: string;
        targetNumber: string;
    };
    SpFinalityGrandpaAppSignature: string;
    SpCoreEd25519Signature: string;
    FinalityGrandpaEquivocationPrecommit: {
        roundNumber: string;
        identity: string;
        first: string;
        second: string;
    };
    FinalityGrandpaPrecommit: {
        targetHash: string;
        targetNumber: string;
    };
    PalletGrandpaError: {
        _enum: string[];
    };
    PalletImOnlineBoundedOpaqueNetworkState: {
        peerId: string;
        externalAddresses: string;
    };
    PalletImOnlineCall: {
        _enum: {
            heartbeat: {
                heartbeat: string;
                signature: string;
            };
        };
    };
    PalletImOnlineHeartbeat: {
        blockNumber: string;
        networkState: string;
        sessionIndex: string;
        authorityIndex: string;
        validatorsLen: string;
    };
    SpCoreOffchainOpaqueNetworkState: {
        peerId: string;
        externalAddresses: string;
    };
    PalletImOnlineSr25519AppSr25519Signature: string;
    PalletImOnlineError: {
        _enum: string[];
    };
    PolkadotRuntimeParachainsConfigurationHostConfiguration: {
        maxCodeSize: string;
        maxHeadDataSize: string;
        maxUpwardQueueCount: string;
        maxUpwardQueueSize: string;
        maxUpwardMessageSize: string;
        maxUpwardMessageNumPerCandidate: string;
        hrmpMaxMessageNumPerCandidate: string;
        validationUpgradeFrequency: string;
        validationUpgradeDelay: string;
        maxPovSize: string;
        maxDownwardMessageSize: string;
        umpServiceTotalWeight: string;
        hrmpMaxParachainOutboundChannels: string;
        hrmpMaxParathreadOutboundChannels: string;
        hrmpSenderDeposit: string;
        hrmpRecipientDeposit: string;
        hrmpChannelMaxCapacity: string;
        hrmpChannelMaxTotalSize: string;
        hrmpMaxParachainInboundChannels: string;
        hrmpMaxParathreadInboundChannels: string;
        hrmpChannelMaxMessageSize: string;
        codeRetentionPeriod: string;
        parathreadCores: string;
        parathreadRetries: string;
        groupRotationFrequency: string;
        chainAvailabilityPeriod: string;
        threadAvailabilityPeriod: string;
        schedulingLookahead: string;
        maxValidatorsPerCore: string;
        maxValidators: string;
        disputePeriod: string;
        disputePostConclusionAcceptancePeriod: string;
        disputeMaxSpamSlots: string;
        disputeConclusionByTimeOutPeriod: string;
        noShowSlots: string;
        nDelayTranches: string;
        zerothDelayTrancheWidth: string;
        neededApprovals: string;
        relayVrfModuloSamples: string;
        umpMaxIndividualWeight: string;
    };
    PolkadotRuntimeParachainsConfigurationPalletCall: {
        _enum: {
            set_validation_upgrade_frequency: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_validation_upgrade_delay: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_code_retention_period: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_max_code_size: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_max_pov_size: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_max_head_data_size: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_parathread_cores: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_parathread_retries: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_group_rotation_frequency: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_chain_availability_period: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_thread_availability_period: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_scheduling_lookahead: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_max_validators_per_core: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_max_validators: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_dispute_period: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_dispute_post_conclusion_acceptance_period: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_dispute_max_spam_slots: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_dispute_conclusion_by_time_out_period: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_no_show_slots: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_n_delay_tranches: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_zeroth_delay_tranche_width: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_needed_approvals: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_relay_vrf_modulo_samples: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_max_upward_queue_count: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_max_upward_queue_size: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_max_downward_message_size: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_ump_service_total_weight: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_max_upward_message_size: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_max_upward_message_num_per_candidate: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_hrmp_open_request_ttl: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_hrmp_sender_deposit: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_hrmp_recipient_deposit: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_hrmp_channel_max_capacity: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_hrmp_channel_max_total_size: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_hrmp_max_parachain_inbound_channels: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_hrmp_max_parathread_inbound_channels: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_hrmp_channel_max_message_size: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_hrmp_max_parachain_outbound_channels: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_hrmp_max_parathread_outbound_channels: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_hrmp_max_message_num_per_candidate: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_ump_max_individual_weight: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
        };
    };
    PolkadotRuntimeParachainsConfigurationPalletError: {
        _enum: string[];
    };
    PolkadotRuntimeParachainsSharedPalletCall: string;
    PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord: {
        bitfield: string;
        submittedAt: string;
    };
    BitvecOrderLsb0: string;
    PolkadotRuntimeParachainsInclusionCandidatePendingAvailability: {
        _alias: {
            hash_: string;
        };
        core: string;
        hash_: string;
        descriptor: string;
        availabilityVotes: string;
        backers: string;
        relayParentNumber: string;
        backedInNumber: string;
        backingGroup: string;
    };
    PolkadotPrimitivesV1CandidateCommitments: {
        upwardMessages: string;
        horizontalMessages: string;
        newValidationCode: string;
        headData: string;
        processedDownwardMessages: string;
        hrmpWatermark: string;
    };
    PolkadotCorePrimitivesOutboundHrmpMessage: {
        recipient: string;
        data: string;
    };
    PolkadotRuntimeParachainsInclusionPalletCall: string;
    PolkadotRuntimeParachainsInclusionPalletError: {
        _enum: string[];
    };
    PolkadotPrimitivesV1ScrapedOnChainVotes: {
        session: string;
        backingValidatorsPerCandidate: string;
        disputes: string;
    };
    PolkadotPrimitivesV0ValidityAttestation: {
        _enum: {
            __Unused0: string;
            Implicit: string;
            Explicit: string;
        };
    };
    PolkadotPrimitivesV0ValidatorAppSignature: string;
    PolkadotPrimitivesV1DisputeStatementSet: {
        candidateHash: string;
        session: string;
        statements: string;
    };
    PolkadotPrimitivesV1DisputeStatement: {
        _enum: {
            Valid: string;
            Invalid: string;
        };
    };
    PolkadotPrimitivesV1ValidDisputeStatementKind: {
        _enum: {
            Explicit: string;
            BackingSeconded: string;
            BackingValid: string;
            ApprovalChecking: string;
        };
    };
    PolkadotPrimitivesV1InvalidDisputeStatementKind: {
        _enum: string[];
    };
    PolkadotRuntimeParachainsParasInherentPalletCall: {
        _enum: {
            enter: {
                data: string;
            };
        };
    };
    PolkadotPrimitivesV1InherentData: {
        bitfields: string;
        backedCandidates: string;
        disputes: string;
        parentHeader: string;
    };
    PolkadotPrimitivesV1SignedUncheckedSigned: {
        payload: string;
        validatorIndex: string;
        signature: string;
    };
    PolkadotPrimitivesV1BackedCandidate: {
        candidate: string;
        validityVotes: string;
        validatorIndices: string;
    };
    PolkadotPrimitivesV1CommittedCandidateReceipt: {
        descriptor: string;
        commitments: string;
    };
    PolkadotRuntimeParachainsParasInherentPalletError: {
        _enum: string[];
    };
    PolkadotRuntimeParachainsSchedulerParathreadClaimQueue: {
        queue: string;
        nextCoreOffset: string;
    };
    PolkadotRuntimeParachainsSchedulerQueuedParathread: {
        claim: string;
        coreOffset: string;
    };
    PolkadotPrimitivesV1ParathreadEntry: {
        claim: string;
        retries: string;
    };
    PolkadotPrimitivesV1ParathreadClaim: string;
    PolkadotPrimitivesV1CoreOccupied: {
        _enum: {
            Parathread: string;
            Parachain: string;
        };
    };
    PolkadotRuntimeParachainsSchedulerCoreAssignment: {
        core: string;
        paraId: string;
        kind: string;
        groupIdx: string;
    };
    PolkadotRuntimeParachainsSchedulerAssignmentKind: {
        _enum: {
            Parachain: string;
            Parathread: string;
        };
    };
    PolkadotRuntimeParachainsParasParaLifecycle: {
        _enum: string[];
    };
    PolkadotRuntimeParachainsParasParaPastCodeMeta: {
        upgradeTimes: string;
        lastPruned: string;
    };
    PolkadotRuntimeParachainsParasReplacementTimes: {
        expectedAt: string;
        activatedAt: string;
    };
    PolkadotPrimitivesV1UpgradeGoAhead: {
        _enum: string[];
    };
    PolkadotPrimitivesV1UpgradeRestriction: {
        _enum: string[];
    };
    PolkadotRuntimeParachainsParasParaGenesisArgs: {
        genesisHead: string;
        validationCode: string;
        parachain: string;
    };
    PolkadotRuntimeParachainsParasPalletCall: {
        _enum: {
            force_set_current_code: {
                para: string;
                newCode: string;
            };
            force_set_current_head: {
                para: string;
                newHead: string;
            };
            force_schedule_code_upgrade: {
                para: string;
                newCode: string;
                relayParentNumber: string;
            };
            force_note_new_head: {
                para: string;
                newHead: string;
            };
            force_queue_action: {
                para: string;
            };
        };
    };
    PolkadotRuntimeParachainsParasPalletError: {
        _enum: string[];
    };
    PolkadotRuntimeParachainsInitializerBufferedSessionChange: {
        validators: string;
        queued: string;
        sessionIndex: string;
    };
    PolkadotRuntimeParachainsInitializerPalletCall: {
        _enum: {
            force_approve: {
                upTo: string;
            };
        };
    };
    PolkadotCorePrimitivesInboundDownwardMessage: {
        sentAt: string;
        msg: string;
    };
    PolkadotRuntimeParachainsDmpPalletCall: string;
    PolkadotRuntimeParachainsUmpPalletCall: {
        _enum: {
            service_overweight: {
                index: string;
                weightLimit: string;
            };
        };
    };
    PolkadotRuntimeParachainsUmpPalletError: {
        _enum: string[];
    };
    PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest: {
        confirmed: string;
        age: string;
        senderDeposit: string;
        maxMessageSize: string;
        maxCapacity: string;
        maxTotalSize: string;
    };
    PolkadotRuntimeParachainsHrmpHrmpChannel: {
        maxCapacity: string;
        maxTotalSize: string;
        maxMessageSize: string;
        msgCount: string;
        totalSize: string;
        mqcHead: string;
        senderDeposit: string;
        recipientDeposit: string;
    };
    PolkadotCorePrimitivesInboundHrmpMessage: {
        sentAt: string;
        data: string;
    };
    PolkadotRuntimeParachainsHrmpPalletCall: {
        _enum: {
            hrmp_init_open_channel: {
                recipient: string;
                proposedMaxCapacity: string;
                proposedMaxMessageSize: string;
            };
            hrmp_accept_open_channel: {
                sender: string;
            };
            hrmp_close_channel: {
                channelId: string;
            };
            force_clean_hrmp: {
                para: string;
            };
            force_process_hrmp_open: string;
            force_process_hrmp_close: string;
            hrmp_cancel_open_request: {
                channelId: string;
            };
        };
    };
    PolkadotRuntimeParachainsHrmpPalletError: {
        _enum: string[];
    };
    PolkadotPrimitivesV1SessionInfo: {
        validators: string;
        discoveryKeys: string;
        assignmentKeys: string;
        validatorGroups: string;
        nCores: string;
        zerothDelayTrancheWidth: string;
        relayVrfModuloSamples: string;
        nDelayTranches: string;
        noShowSlots: string;
        neededApprovals: string;
    };
    PolkadotPrimitivesV1DisputeState: {
        validatorsFor: string;
        validatorsAgainst: string;
        start: string;
        concludedAt: string;
    };
    PolkadotRuntimeParachainsDisputesPalletCall: {
        _enum: string[];
    };
    PolkadotRuntimeParachainsDisputesPalletError: {
        _enum: string[];
    };
    PolkadotRuntimeCommonParasRegistrarParaInfo: {
        manager: string;
        deposit: string;
        locked: string;
    };
    PolkadotRuntimeCommonParasRegistrarPalletCall: {
        _enum: {
            register: {
                id: string;
                genesisHead: string;
                validationCode: string;
            };
            force_register: {
                who: string;
                deposit: string;
                id: string;
                genesisHead: string;
                validationCode: string;
            };
            deregister: {
                id: string;
            };
            swap: {
                id: string;
                other: string;
            };
            force_remove_lock: {
                para: string;
            };
            reserve: string;
        };
    };
    PolkadotRuntimeCommonParasRegistrarPalletError: {
        _enum: string[];
    };
    PolkadotRuntimeCommonAuctionsPalletCall: {
        _enum: {
            new_auction: {
                duration: string;
                leasePeriodIndex: string;
            };
            bid: {
                para: string;
                auctionIndex: string;
                firstSlot: string;
                lastSlot: string;
                amount: string;
            };
            cancel_auction: string;
        };
    };
    PolkadotRuntimeCommonAuctionsPalletError: {
        _enum: string[];
    };
    PolkadotRuntimeCommonCrowdloanFundInfo: {
        depositor: string;
        verifier: string;
        deposit: string;
        raised: string;
        end: string;
        cap: string;
        lastContribution: string;
        firstPeriod: string;
        lastPeriod: string;
        trieIndex: string;
    };
    SpRuntimeMultiSigner: {
        _enum: {
            Ed25519: string;
            Sr25519: string;
            Ecdsa: string;
        };
    };
    PolkadotRuntimeCommonCrowdloanLastContribution: {
        _enum: {
            Never: string;
            PreEnding: string;
            Ending: string;
        };
    };
    PolkadotRuntimeCommonCrowdloanPalletCall: {
        _enum: {
            create: {
                index: string;
                cap: string;
                firstPeriod: string;
                lastPeriod: string;
                end: string;
                verifier: string;
            };
            contribute: {
                index: string;
                value: string;
                signature: string;
            };
            withdraw: {
                who: string;
                index: string;
            };
            refund: {
                index: string;
            };
            dissolve: {
                index: string;
            };
            edit: {
                index: string;
                cap: string;
                firstPeriod: string;
                lastPeriod: string;
                end: string;
                verifier: string;
            };
            add_memo: {
                index: string;
                memo: string;
            };
            poke: {
                index: string;
            };
        };
    };
    SpRuntimeMultiSignature: {
        _enum: {
            Ed25519: string;
            Sr25519: string;
            Ecdsa: string;
        };
    };
    SpCoreEcdsaSignature: string;
    FrameSupportPalletId: string;
    PolkadotRuntimeCommonCrowdloanPalletError: {
        _enum: string[];
    };
    PolkadotRuntimeCommonSlotsPalletCall: {
        _enum: {
            force_lease: {
                para: string;
                leaser: string;
                amount: string;
                periodBegin: string;
                periodCount: string;
            };
            clear_all_leases: {
                para: string;
            };
            trigger_onboard: {
                para: string;
            };
        };
    };
    PolkadotRuntimeCommonSlotsPalletError: {
        _enum: string[];
    };
    PolkadotRuntimeCommonParasSudoWrapperPalletCall: {
        _enum: {
            sudo_schedule_para_initialize: {
                id: string;
                genesis: string;
            };
            sudo_schedule_para_cleanup: {
                id: string;
            };
            sudo_schedule_parathread_upgrade: {
                id: string;
            };
            sudo_schedule_parachain_downgrade: {
                id: string;
            };
            sudo_queue_downward_xcm: {
                id: string;
                xcm: string;
            };
            sudo_establish_hrmp_channel: {
                sender: string;
                recipient: string;
                maxCapacity: string;
                maxMessageSize: string;
            };
        };
    };
    XcmVersionedXcm: {
        _enum: {
            V0: string;
            V1: string;
            V2: string;
        };
    };
    XcmV0Xcm: {
        _enum: {
            WithdrawAsset: {
                assets: string;
                effects: string;
            };
            ReserveAssetDeposit: {
                assets: string;
                effects: string;
            };
            TeleportAsset: {
                assets: string;
                effects: string;
            };
            QueryResponse: {
                queryId: string;
                response: string;
            };
            TransferAsset: {
                assets: string;
                dest: string;
            };
            TransferReserveAsset: {
                assets: string;
                dest: string;
                effects: string;
            };
            Transact: {
                originType: string;
                requireWeightAtMost: string;
                call: string;
            };
            HrmpNewChannelOpenRequest: {
                sender: string;
                maxMessageSize: string;
                maxCapacity: string;
            };
            HrmpChannelAccepted: {
                recipient: string;
            };
            HrmpChannelClosing: {
                initiator: string;
                sender: string;
                recipient: string;
            };
            RelayedFrom: {
                who: string;
                message: string;
            };
        };
    };
    XcmV0Order: {
        _enum: {
            Null: string;
            DepositAsset: {
                assets: string;
                dest: string;
            };
            DepositReserveAsset: {
                assets: string;
                dest: string;
                effects: string;
            };
            ExchangeAsset: {
                give: string;
                receive: string;
            };
            InitiateReserveWithdraw: {
                assets: string;
                reserve: string;
                effects: string;
            };
            InitiateTeleport: {
                assets: string;
                dest: string;
                effects: string;
            };
            QueryHolding: {
                queryId: string;
                dest: string;
                assets: string;
            };
            BuyExecution: {
                fees: string;
                weight: string;
                debt: string;
                haltOnError: string;
                xcm: string;
            };
        };
    };
    XcmV0Response: {
        _enum: {
            Assets: string;
        };
    };
    XcmV1Xcm: {
        _enum: {
            WithdrawAsset: {
                assets: string;
                effects: string;
            };
            ReserveAssetDeposited: {
                assets: string;
                effects: string;
            };
            ReceiveTeleportedAsset: {
                assets: string;
                effects: string;
            };
            QueryResponse: {
                queryId: string;
                response: string;
            };
            TransferAsset: {
                assets: string;
                beneficiary: string;
            };
            TransferReserveAsset: {
                assets: string;
                dest: string;
                effects: string;
            };
            Transact: {
                originType: string;
                requireWeightAtMost: string;
                call: string;
            };
            HrmpNewChannelOpenRequest: {
                sender: string;
                maxMessageSize: string;
                maxCapacity: string;
            };
            HrmpChannelAccepted: {
                recipient: string;
            };
            HrmpChannelClosing: {
                initiator: string;
                sender: string;
                recipient: string;
            };
            RelayedFrom: {
                who: string;
                message: string;
            };
            SubscribeVersion: {
                queryId: string;
                maxResponseWeight: string;
            };
            UnsubscribeVersion: string;
        };
    };
    XcmV1Order: {
        _enum: {
            Noop: string;
            DepositAsset: {
                assets: string;
                maxAssets: string;
                beneficiary: string;
            };
            DepositReserveAsset: {
                assets: string;
                maxAssets: string;
                dest: string;
                effects: string;
            };
            ExchangeAsset: {
                give: string;
                receive: string;
            };
            InitiateReserveWithdraw: {
                assets: string;
                reserve: string;
                effects: string;
            };
            InitiateTeleport: {
                assets: string;
                dest: string;
                effects: string;
            };
            QueryHolding: {
                queryId: string;
                dest: string;
                assets: string;
            };
            BuyExecution: {
                fees: string;
                weight: string;
                debt: string;
                haltOnError: string;
                instructions: string;
            };
        };
    };
    XcmV1Response: {
        _enum: {
            Assets: string;
            Version: string;
        };
    };
    PolkadotRuntimeCommonParasSudoWrapperPalletError: {
        _enum: string[];
    };
    PalletSudoCall: {
        _enum: {
            sudo: {
                call: string;
            };
            sudo_unchecked_weight: {
                call: string;
                weight: string;
            };
            set_key: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            sudo_as: {
                who: string;
                call: string;
            };
        };
    };
    RococoRuntimeValidatorManagerCall: {
        _enum: {
            register_validators: {
                validators: string;
            };
            deregister_validators: {
                validators: string;
            };
        };
    };
    PalletCollectiveCall: {
        _enum: {
            set_members: {
                newMembers: string;
                prime: string;
                oldCount: string;
            };
            execute: {
                proposal: string;
                lengthBound: string;
            };
            propose: {
                threshold: string;
                proposal: string;
                lengthBound: string;
            };
            vote: {
                proposal: string;
                index: string;
                approve: string;
            };
            close: {
                proposalHash: string;
                index: string;
                proposalWeightBound: string;
                lengthBound: string;
            };
            disapprove_proposal: {
                proposalHash: string;
            };
        };
    };
    PalletMembershipCall: {
        _enum: {
            add_member: {
                who: string;
            };
            remove_member: {
                who: string;
            };
            swap_member: {
                remove: string;
                add: string;
            };
            reset_members: {
                members: string;
            };
            change_key: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_prime: {
                who: string;
            };
            clear_prime: string;
        };
    };
    PalletUtilityCall: {
        _enum: {
            batch: {
                calls: string;
            };
            as_derivative: {
                index: string;
                call: string;
            };
            batch_all: {
                calls: string;
            };
            dispatch_as: {
                asOrigin: string;
                call: string;
            };
        };
    };
    RococoRuntimeOriginCaller: {
        _enum: {
            system: string;
            __Unused1: string;
            __Unused2: string;
            __Unused3: string;
            Void: string;
            __Unused5: string;
            __Unused6: string;
            __Unused7: string;
            __Unused8: string;
            __Unused9: string;
            __Unused10: string;
            __Unused11: string;
            __Unused12: string;
            ParachainsOrigin: string;
            __Unused14: string;
            __Unused15: string;
            __Unused16: string;
            __Unused17: string;
            __Unused18: string;
            __Unused19: string;
            __Unused20: string;
            __Unused21: string;
            __Unused22: string;
            __Unused23: string;
            __Unused24: string;
            __Unused25: string;
            __Unused26: string;
            __Unused27: string;
            __Unused28: string;
            __Unused29: string;
            __Unused30: string;
            __Unused31: string;
            __Unused32: string;
            __Unused33: string;
            __Unused34: string;
            __Unused35: string;
            __Unused36: string;
            __Unused37: string;
            __Unused38: string;
            __Unused39: string;
            __Unused40: string;
            __Unused41: string;
            __Unused42: string;
            __Unused43: string;
            __Unused44: string;
            __Unused45: string;
            __Unused46: string;
            __Unused47: string;
            __Unused48: string;
            __Unused49: string;
            __Unused50: string;
            __Unused51: string;
            __Unused52: string;
            __Unused53: string;
            __Unused54: string;
            __Unused55: string;
            __Unused56: string;
            __Unused57: string;
            __Unused58: string;
            __Unused59: string;
            __Unused60: string;
            __Unused61: string;
            __Unused62: string;
            __Unused63: string;
            __Unused64: string;
            __Unused65: string;
            __Unused66: string;
            __Unused67: string;
            __Unused68: string;
            __Unused69: string;
            __Unused70: string;
            __Unused71: string;
            __Unused72: string;
            __Unused73: string;
            __Unused74: string;
            __Unused75: string;
            __Unused76: string;
            __Unused77: string;
            __Unused78: string;
            __Unused79: string;
            Collective: string;
            __Unused81: string;
            __Unused82: string;
            __Unused83: string;
            __Unused84: string;
            __Unused85: string;
            __Unused86: string;
            __Unused87: string;
            __Unused88: string;
            __Unused89: string;
            __Unused90: string;
            __Unused91: string;
            __Unused92: string;
            __Unused93: string;
            __Unused94: string;
            __Unused95: string;
            __Unused96: string;
            __Unused97: string;
            __Unused98: string;
            XcmPallet: string;
        };
    };
    FrameSystemRawOrigin: {
        _enum: {
            Root: string;
            Signed: string;
            None: string;
        };
    };
    PolkadotRuntimeParachainsOriginPalletOrigin: {
        _enum: {
            Parachain: string;
        };
    };
    PalletCollectiveRawOrigin: {
        _enum: {
            Members: string;
            Member: string;
            _Phantom: string;
        };
    };
    PalletXcmOrigin: {
        _enum: {
            Xcm: string;
            Response: string;
        };
    };
    SpCoreVoid: string;
    PalletProxyCall: {
        _enum: {
            proxy: {
                real: string;
                forceProxyType: string;
                call: string;
            };
            add_proxy: {
                delegate: string;
                proxyType: string;
                delay: string;
            };
            remove_proxy: {
                delegate: string;
                proxyType: string;
                delay: string;
            };
            remove_proxies: string;
            anonymous: {
                proxyType: string;
                delay: string;
                index: string;
            };
            kill_anonymous: {
                spawner: string;
                proxyType: string;
                index: string;
                height: string;
                extIndex: string;
            };
            announce: {
                real: string;
                callHash: string;
            };
            remove_announcement: {
                real: string;
                callHash: string;
            };
            reject_announcement: {
                delegate: string;
                callHash: string;
            };
            proxy_announced: {
                delegate: string;
                real: string;
                forceProxyType: string;
                call: string;
            };
        };
    };
    PalletMultisigCall: {
        _enum: {
            as_multi_threshold_1: {
                otherSignatories: string;
                call: string;
            };
            as_multi: {
                threshold: string;
                otherSignatories: string;
                maybeTimepoint: string;
                call: string;
                storeCall: string;
                maxWeight: string;
            };
            approve_as_multi: {
                threshold: string;
                otherSignatories: string;
                maybeTimepoint: string;
                callHash: string;
                maxWeight: string;
            };
            cancel_as_multi: {
                threshold: string;
                otherSignatories: string;
                timepoint: string;
                callHash: string;
            };
        };
    };
    PalletXcmCall: {
        _enum: {
            send: {
                dest: string;
                message: string;
            };
            teleport_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
            };
            reserve_transfer_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
            };
            execute: {
                message: string;
                maxWeight: string;
            };
            force_xcm_version: {
                location: string;
                xcmVersion: string;
            };
            force_default_xcm_version: {
                maybeXcmVersion: string;
            };
            force_subscribe_version_notify: {
                location: string;
            };
            force_unsubscribe_version_notify: {
                location: string;
            };
            limited_reserve_transfer_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
                weightLimit: string;
            };
            limited_teleport_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
                weightLimit: string;
            };
        };
    };
    PalletSudoError: {
        _enum: string[];
    };
    BeefyPrimitivesMmrBeefyNextAuthoritySet: {
        id: string;
        len: string;
        root: string;
    };
    RococoRuntimeValidatorManagerError: string;
    PalletCollectiveVotes: {
        index: string;
        threshold: string;
        ayes: string;
        nays: string;
        end: string;
    };
    PalletCollectiveError: {
        _enum: string[];
    };
    PalletMembershipError: {
        _enum: string[];
    };
    PalletUtilityError: {
        _enum: string[];
    };
    PalletProxyProxyDefinition: {
        delegate: string;
        proxyType: string;
        delay: string;
    };
    PalletProxyAnnouncement: {
        real: string;
        callHash: string;
        height: string;
    };
    PalletProxyError: {
        _enum: string[];
    };
    PalletMultisigMultisig: {
        when: string;
        deposit: string;
        depositor: string;
        approvals: string;
    };
    PalletMultisigError: {
        _enum: string[];
    };
    PalletXcmQueryStatus: {
        _enum: {
            Pending: {
                responder: string;
                maybeNotify: string;
                timeout: string;
            };
            VersionNotifier: {
                origin: string;
                isActive: string;
            };
            Ready: {
                response: string;
                at: string;
            };
        };
    };
    XcmVersionedResponse: {
        _enum: {
            V0: string;
            V1: string;
            V2: string;
        };
    };
    PalletXcmVersionMigrationStage: {
        _enum: {
            MigrateSupportedVersion: string;
            MigrateVersionNotifiers: string;
            NotifyCurrentTargets: string;
            MigrateAndNotifyOldTargets: string;
        };
    };
    PalletXcmError: {
        _enum: string[];
    };
    FrameSystemExtensionsCheckSpecVersion: string;
    FrameSystemExtensionsCheckTxVersion: string;
    FrameSystemExtensionsCheckGenesis: string;
    FrameSystemExtensionsCheckNonce: string;
    FrameSystemExtensionsCheckWeight: string;
    PalletTransactionPaymentChargeTransactionPayment: string;
    RococoRuntimeRuntime: string;
};
export default _default;
