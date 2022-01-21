"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    FrameSystemAccountInfo: {
        nonce: 'u32',
        consumers: 'u32',
        providers: 'u32',
        sufficients: 'u32',
        data: 'PalletBalancesAccountData'
    },
    PalletBalancesAccountData: {
        free: 'u128',
        reserved: 'u128',
        miscFrozen: 'u128',
        feeFrozen: 'u128'
    },
    FrameSupportWeightsPerDispatchClassU64: {
        normal: 'u64',
        operational: 'u64',
        mandatory: 'u64'
    },
    SpRuntimeDigest: {
        logs: 'Vec<SpRuntimeDigestDigestItem>'
    },
    SpRuntimeDigestDigestItem: {
        _enum: {
            Other: 'Bytes',
            __Unused1: 'Null',
            __Unused2: 'Null',
            __Unused3: 'Null',
            Consensus: '([u8;4],Bytes)',
            Seal: '([u8;4],Bytes)',
            PreRuntime: '([u8;4],Bytes)',
            __Unused7: 'Null',
            RuntimeEnvironmentUpdated: 'Null'
        }
    },
    FrameSystemEventRecord: {
        phase: 'FrameSystemPhase',
        event: 'Event',
        topics: 'Vec<H256>'
    },
    FrameSystemEvent: {
        _enum: {
            ExtrinsicSuccess: 'FrameSupportWeightsDispatchInfo',
            ExtrinsicFailed: '(SpRuntimeDispatchError,FrameSupportWeightsDispatchInfo)',
            CodeUpdated: 'Null',
            NewAccount: 'AccountId32',
            KilledAccount: 'AccountId32',
            Remarked: '(AccountId32,H256)'
        }
    },
    FrameSupportWeightsDispatchInfo: {
        weight: 'u64',
        class: 'FrameSupportWeightsDispatchClass',
        paysFee: 'FrameSupportWeightsPays'
    },
    FrameSupportWeightsDispatchClass: {
        _enum: ['Normal', 'Operational', 'Mandatory']
    },
    FrameSupportWeightsPays: {
        _enum: ['Yes', 'No']
    },
    SpRuntimeDispatchError: {
        _enum: {
            Other: 'Null',
            CannotLookup: 'Null',
            BadOrigin: 'Null',
            Module: {
                index: 'u8',
                error: 'u8',
            },
            ConsumerRemaining: 'Null',
            NoProviders: 'Null',
            Token: 'SpRuntimeTokenError',
            Arithmetic: 'SpRuntimeArithmeticError'
        }
    },
    SpRuntimeTokenError: {
        _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
    },
    SpRuntimeArithmeticError: {
        _enum: ['Underflow', 'Overflow', 'DivisionByZero']
    },
    PalletIndicesEvent: {
        _enum: {
            IndexAssigned: {
                who: 'AccountId32',
                index: 'u32',
            },
            IndexFreed: {
                index: 'u32',
            },
            IndexFrozen: {
                index: 'u32',
                who: 'AccountId32'
            }
        }
    },
    PalletBalancesEvent: {
        _enum: {
            Endowed: {
                account: 'AccountId32',
                freeBalance: 'u128',
            },
            DustLost: {
                account: 'AccountId32',
                amount: 'u128',
            },
            Transfer: {
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
            },
            BalanceSet: {
                who: 'AccountId32',
                free: 'u128',
                reserved: 'u128',
            },
            Reserved: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Unreserved: {
                who: 'AccountId32',
                amount: 'u128',
            },
            ReserveRepatriated: {
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
                destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
            },
            Deposit: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Withdraw: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Slashed: {
                who: 'AccountId32',
                amount: 'u128'
            }
        }
    },
    FrameSupportTokensMiscBalanceStatus: {
        _enum: ['Free', 'Reserved']
    },
    PalletOffencesEvent: {
        _enum: {
            Offence: {
                kind: '[u8;16]',
                timeslot: 'Bytes'
            }
        }
    },
    PalletSessionEvent: {
        _enum: {
            NewSession: {
                sessionIndex: 'u32'
            }
        }
    },
    PalletGrandpaEvent: {
        _enum: {
            NewAuthorities: {
                authoritySet: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
            },
            Paused: 'Null',
            Resumed: 'Null'
        }
    },
    SpFinalityGrandpaAppPublic: 'SpCoreEd25519Public',
    SpCoreEd25519Public: '[u8;32]',
    PalletImOnlineEvent: {
        _enum: {
            HeartbeatReceived: {
                authorityId: 'PalletImOnlineSr25519AppSr25519Public',
            },
            AllGood: 'Null',
            SomeOffline: {
                offline: 'Vec<(AccountId32,Null)>'
            }
        }
    },
    PalletImOnlineSr25519AppSr25519Public: 'SpCoreSr25519Public',
    SpCoreSr25519Public: '[u8;32]',
    PolkadotRuntimeParachainsInclusionPalletEvent: {
        _enum: {
            CandidateBacked: '(PolkadotPrimitivesV1CandidateReceipt,Bytes,u32,u32)',
            CandidateIncluded: '(PolkadotPrimitivesV1CandidateReceipt,Bytes,u32,u32)',
            CandidateTimedOut: '(PolkadotPrimitivesV1CandidateReceipt,Bytes,u32)'
        }
    },
    PolkadotPrimitivesV1CandidateReceipt: {
        descriptor: 'PolkadotPrimitivesV1CandidateDescriptor',
        commitmentsHash: 'H256'
    },
    PolkadotPrimitivesV1CandidateDescriptor: {
        paraId: 'u32',
        relayParent: 'H256',
        collator: 'PolkadotPrimitivesV0CollatorAppPublic',
        persistedValidationDataHash: 'H256',
        povHash: 'H256',
        erasureRoot: 'H256',
        signature: 'PolkadotPrimitivesV0CollatorAppSignature',
        paraHead: 'H256',
        validationCodeHash: 'H256'
    },
    PolkadotPrimitivesV0CollatorAppPublic: 'SpCoreSr25519Public',
    PolkadotPrimitivesV0CollatorAppSignature: 'SpCoreSr25519Signature',
    SpCoreSr25519Signature: '[u8;64]',
    PolkadotRuntimeParachainsParasPalletEvent: {
        _enum: {
            CurrentCodeUpdated: 'u32',
            CurrentHeadUpdated: 'u32',
            CodeUpgradeScheduled: 'u32',
            NewHeadNoted: 'u32',
            ActionQueued: '(u32,u32)'
        }
    },
    PolkadotRuntimeParachainsUmpPalletEvent: {
        _enum: {
            InvalidFormat: '[u8;32]',
            UnsupportedVersion: '[u8;32]',
            ExecutedUpward: '([u8;32],XcmV2TraitsOutcome)',
            WeightExhausted: '([u8;32],u64,u64)',
            UpwardMessagesReceived: '(u32,u32,u32)',
            OverweightEnqueued: '(u32,[u8;32],u64,u64)',
            OverweightServiced: '(u64,u64)'
        }
    },
    XcmV2TraitsOutcome: {
        _enum: {
            Complete: 'u64',
            Incomplete: '(u64,XcmV2TraitsError)',
            Error: 'XcmV2TraitsError'
        }
    },
    XcmV2TraitsError: {
        _enum: {
            Overflow: 'Null',
            Unimplemented: 'Null',
            UntrustedReserveLocation: 'Null',
            UntrustedTeleportLocation: 'Null',
            MultiLocationFull: 'Null',
            MultiLocationNotInvertible: 'Null',
            BadOrigin: 'Null',
            InvalidLocation: 'Null',
            AssetNotFound: 'Null',
            FailedToTransactAsset: 'Null',
            NotWithdrawable: 'Null',
            LocationCannotHold: 'Null',
            ExceedsMaxMessageSize: 'Null',
            DestinationUnsupported: 'Null',
            Transport: 'Null',
            Unroutable: 'Null',
            UnknownClaim: 'Null',
            FailedToDecode: 'Null',
            TooMuchWeightRequired: 'Null',
            NotHoldingFees: 'Null',
            TooExpensive: 'Null',
            Trap: 'u64',
            UnhandledXcmVersion: 'Null',
            WeightLimitReached: 'u64',
            Barrier: 'Null',
            WeightNotComputable: 'Null'
        }
    },
    PolkadotRuntimeParachainsHrmpPalletEvent: {
        _enum: {
            OpenChannelRequested: '(u32,u32,u32,u32)',
            OpenChannelCanceled: '(u32,PolkadotParachainPrimitivesHrmpChannelId)',
            OpenChannelAccepted: '(u32,u32)',
            ChannelClosed: '(u32,PolkadotParachainPrimitivesHrmpChannelId)'
        }
    },
    PolkadotParachainPrimitivesHrmpChannelId: {
        sender: 'u32',
        recipient: 'u32'
    },
    PolkadotRuntimeParachainsDisputesPalletEvent: {
        _enum: {
            DisputeInitiated: '(H256,PolkadotRuntimeParachainsDisputesDisputeLocation)',
            DisputeConcluded: '(H256,PolkadotRuntimeParachainsDisputesDisputeResult)',
            DisputeTimedOut: 'H256',
            Revert: 'u32'
        }
    },
    PolkadotRuntimeParachainsDisputesDisputeLocation: {
        _enum: ['Local', 'Remote']
    },
    PolkadotRuntimeParachainsDisputesDisputeResult: {
        _enum: ['Valid', 'Invalid']
    },
    PolkadotRuntimeCommonParasRegistrarPalletEvent: {
        _enum: {
            Registered: '(u32,AccountId32)',
            Deregistered: 'u32',
            Reserved: '(u32,AccountId32)'
        }
    },
    PolkadotRuntimeCommonAuctionsPalletEvent: {
        _enum: {
            AuctionStarted: '(u32,u32,u32)',
            AuctionClosed: 'u32',
            Reserved: '(AccountId32,u128,u128)',
            Unreserved: '(AccountId32,u128)',
            ReserveConfiscated: '(u32,AccountId32,u128)',
            BidAccepted: '(AccountId32,u32,u128,u32,u32)',
            WinningOffset: '(u32,u32)'
        }
    },
    PolkadotRuntimeCommonCrowdloanPalletEvent: {
        _enum: {
            Created: 'u32',
            Contributed: '(AccountId32,u32,u128)',
            Withdrew: '(AccountId32,u32,u128)',
            PartiallyRefunded: 'u32',
            AllRefunded: 'u32',
            Dissolved: 'u32',
            HandleBidResult: '(u32,Result<Null, SpRuntimeDispatchError>)',
            Edited: 'u32',
            MemoUpdated: '(AccountId32,u32,Bytes)',
            AddedToNewRaise: 'u32'
        }
    },
    PolkadotRuntimeCommonSlotsPalletEvent: {
        _enum: {
            NewLeasePeriod: 'u32',
            Leased: '(u32,AccountId32,u32,u32,u128,u128)'
        }
    },
    PalletSudoEvent: {
        _enum: {
            Sudid: {
                sudoResult: 'Result<Null, SpRuntimeDispatchError>',
            },
            KeyChanged: {
                newSudoer: 'AccountId32',
            },
            SudoAsDone: {
                sudoResult: 'Result<Null, SpRuntimeDispatchError>'
            }
        }
    },
    RococoRuntimeValidatorManagerRawEvent: {
        _enum: {
            ValidatorsRegistered: 'Vec<AccountId32>',
            ValidatorsDeregistered: 'Vec<AccountId32>'
        }
    },
    PalletCollectiveEvent: {
        _enum: {
            Proposed: {
                account: 'AccountId32',
                proposalIndex: 'u32',
                proposalHash: 'H256',
                threshold: 'u32',
            },
            Voted: {
                account: 'AccountId32',
                proposalHash: 'H256',
                voted: 'bool',
                yes: 'u32',
                no: 'u32',
            },
            Approved: {
                proposalHash: 'H256',
            },
            Disapproved: {
                proposalHash: 'H256',
            },
            Executed: {
                proposalHash: 'H256',
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            MemberExecuted: {
                proposalHash: 'H256',
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            Closed: {
                proposalHash: 'H256',
                yes: 'u32',
                no: 'u32'
            }
        }
    },
    PalletMembershipEvent: {
        _enum: ['MemberAdded', 'MemberRemoved', 'MembersSwapped', 'MembersReset', 'KeyChanged', 'Dummy']
    },
    PalletUtilityEvent: {
        _enum: {
            BatchInterrupted: {
                index: 'u32',
                error: 'SpRuntimeDispatchError',
            },
            BatchCompleted: 'Null',
            ItemCompleted: 'Null',
            DispatchedAs: 'Result<Null, SpRuntimeDispatchError>'
        }
    },
    PalletProxyEvent: {
        _enum: {
            ProxyExecuted: {
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            AnonymousCreated: {
                anonymous: 'AccountId32',
                who: 'AccountId32',
                proxyType: 'RococoRuntimeProxyType',
                disambiguationIndex: 'u16',
            },
            Announced: {
                real: 'AccountId32',
                proxy: 'AccountId32',
                callHash: 'H256',
            },
            ProxyAdded: {
                delegator: 'AccountId32',
                delegatee: 'AccountId32',
                proxyType: 'RococoRuntimeProxyType',
                delay: 'u32'
            }
        }
    },
    RococoRuntimeProxyType: {
        _enum: ['Any', 'CancelProxy', 'Auction']
    },
    PalletMultisigEvent: {
        _enum: {
            NewMultisig: {
                approving: 'AccountId32',
                multisig: 'AccountId32',
                callHash: '[u8;32]',
            },
            MultisigApproval: {
                approving: 'AccountId32',
                timepoint: 'PalletMultisigTimepoint',
                multisig: 'AccountId32',
                callHash: '[u8;32]',
            },
            MultisigExecuted: {
                approving: 'AccountId32',
                timepoint: 'PalletMultisigTimepoint',
                multisig: 'AccountId32',
                callHash: '[u8;32]',
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            MultisigCancelled: {
                cancelling: 'AccountId32',
                timepoint: 'PalletMultisigTimepoint',
                multisig: 'AccountId32',
                callHash: '[u8;32]'
            }
        }
    },
    PalletMultisigTimepoint: {
        height: 'u32',
        index: 'u32'
    },
    PalletXcmEvent: {
        _enum: {
            Attempted: 'XcmV2TraitsOutcome',
            Sent: '(XcmV1MultiLocation,XcmV1MultiLocation,XcmV2Xcm)',
            UnexpectedResponse: '(XcmV1MultiLocation,u64)',
            ResponseReady: '(u64,XcmV2Response)',
            Notified: '(u64,u8,u8)',
            NotifyOverweight: '(u64,u8,u8,u64,u64)',
            NotifyDispatchError: '(u64,u8,u8)',
            NotifyDecodeFailed: '(u64,u8,u8)',
            InvalidResponder: '(XcmV1MultiLocation,u64,Option<XcmV1MultiLocation>)',
            InvalidResponderVersion: '(XcmV1MultiLocation,u64)',
            ResponseTaken: 'u64',
            AssetsTrapped: '(H256,XcmV1MultiLocation,XcmVersionedMultiAssets)',
            VersionChangeNotified: '(XcmV1MultiLocation,u32)',
            SupportedVersionChanged: '(XcmV1MultiLocation,u32)',
            NotifyTargetSendFail: '(XcmV1MultiLocation,u64,XcmV2TraitsError)',
            NotifyTargetMigrationFail: '(XcmVersionedMultiLocation,u64)'
        }
    },
    XcmV1MultiLocation: {
        parents: 'u8',
        interior: 'XcmV1MultilocationJunctions'
    },
    XcmV1MultilocationJunctions: {
        _enum: {
            Here: 'Null',
            X1: 'XcmV1Junction',
            X2: '(XcmV1Junction,XcmV1Junction)',
            X3: '(XcmV1Junction,XcmV1Junction,XcmV1Junction)',
            X4: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
            X5: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
            X6: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
            X7: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
            X8: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)'
        }
    },
    XcmV1Junction: {
        _enum: {
            Parachain: 'Compact<u32>',
            AccountId32: {
                network: 'XcmV0JunctionNetworkId',
                id: '[u8;32]',
            },
            AccountIndex64: {
                network: 'XcmV0JunctionNetworkId',
                index: 'Compact<u64>',
            },
            AccountKey20: {
                network: 'XcmV0JunctionNetworkId',
                key: '[u8;20]',
            },
            PalletInstance: 'u8',
            GeneralIndex: 'Compact<u128>',
            GeneralKey: 'Bytes',
            OnlyChild: 'Null',
            Plurality: {
                id: 'XcmV0JunctionBodyId',
                part: 'XcmV0JunctionBodyPart'
            }
        }
    },
    XcmV0JunctionNetworkId: {
        _enum: {
            Any: 'Null',
            Named: 'Bytes',
            Polkadot: 'Null',
            Kusama: 'Null'
        }
    },
    XcmV0JunctionBodyId: {
        _enum: {
            Unit: 'Null',
            Named: 'Bytes',
            Index: 'Compact<u32>',
            Executive: 'Null',
            Technical: 'Null',
            Legislative: 'Null',
            Judicial: 'Null'
        }
    },
    XcmV0JunctionBodyPart: {
        _enum: {
            Voice: 'Null',
            Members: {
                count: 'Compact<u32>',
            },
            Fraction: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>',
            },
            AtLeastProportion: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>',
            },
            MoreThanProportion: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>'
            }
        }
    },
    XcmV2Xcm: 'Vec<XcmV2Instruction>',
    XcmV2Instruction: {
        _enum: {
            WithdrawAsset: 'XcmV1MultiassetMultiAssets',
            ReserveAssetDeposited: 'XcmV1MultiassetMultiAssets',
            ReceiveTeleportedAsset: 'XcmV1MultiassetMultiAssets',
            QueryResponse: {
                queryId: 'Compact<u64>',
                response: 'XcmV2Response',
                maxWeight: 'Compact<u64>',
            },
            TransferAsset: {
                assets: 'XcmV1MultiassetMultiAssets',
                beneficiary: 'XcmV1MultiLocation',
            },
            TransferReserveAsset: {
                assets: 'XcmV1MultiassetMultiAssets',
                dest: 'XcmV1MultiLocation',
                xcm: 'XcmV2Xcm',
            },
            Transact: {
                originType: 'XcmV0OriginKind',
                requireWeightAtMost: 'Compact<u64>',
                call: 'XcmDoubleEncoded',
            },
            HrmpNewChannelOpenRequest: {
                sender: 'Compact<u32>',
                maxMessageSize: 'Compact<u32>',
                maxCapacity: 'Compact<u32>',
            },
            HrmpChannelAccepted: {
                recipient: 'Compact<u32>',
            },
            HrmpChannelClosing: {
                initiator: 'Compact<u32>',
                sender: 'Compact<u32>',
                recipient: 'Compact<u32>',
            },
            ClearOrigin: 'Null',
            DescendOrigin: 'XcmV1MultilocationJunctions',
            ReportError: {
                queryId: 'Compact<u64>',
                dest: 'XcmV1MultiLocation',
                maxResponseWeight: 'Compact<u64>',
            },
            DepositAsset: {
                assets: 'XcmV1MultiassetMultiAssetFilter',
                maxAssets: 'Compact<u32>',
                beneficiary: 'XcmV1MultiLocation',
            },
            DepositReserveAsset: {
                assets: 'XcmV1MultiassetMultiAssetFilter',
                maxAssets: 'Compact<u32>',
                dest: 'XcmV1MultiLocation',
                xcm: 'XcmV2Xcm',
            },
            ExchangeAsset: {
                give: 'XcmV1MultiassetMultiAssetFilter',
                receive: 'XcmV1MultiassetMultiAssets',
            },
            InitiateReserveWithdraw: {
                assets: 'XcmV1MultiassetMultiAssetFilter',
                reserve: 'XcmV1MultiLocation',
                xcm: 'XcmV2Xcm',
            },
            InitiateTeleport: {
                assets: 'XcmV1MultiassetMultiAssetFilter',
                dest: 'XcmV1MultiLocation',
                xcm: 'XcmV2Xcm',
            },
            QueryHolding: {
                queryId: 'Compact<u64>',
                dest: 'XcmV1MultiLocation',
                assets: 'XcmV1MultiassetMultiAssetFilter',
                maxResponseWeight: 'Compact<u64>',
            },
            BuyExecution: {
                fees: 'XcmV1MultiAsset',
                weightLimit: 'XcmV2WeightLimit',
            },
            RefundSurplus: 'Null',
            SetErrorHandler: 'XcmV2Xcm',
            SetAppendix: 'XcmV2Xcm',
            ClearError: 'Null',
            ClaimAsset: {
                assets: 'XcmV1MultiassetMultiAssets',
                ticket: 'XcmV1MultiLocation',
            },
            Trap: 'Compact<u64>',
            SubscribeVersion: {
                queryId: 'Compact<u64>',
                maxResponseWeight: 'Compact<u64>',
            },
            UnsubscribeVersion: 'Null'
        }
    },
    XcmV1MultiassetMultiAssets: 'Vec<XcmV1MultiAsset>',
    XcmV1MultiAsset: {
        id: 'XcmV1MultiassetAssetId',
        fun: 'XcmV1MultiassetFungibility'
    },
    XcmV1MultiassetAssetId: {
        _enum: {
            Concrete: 'XcmV1MultiLocation',
            Abstract: 'Bytes'
        }
    },
    XcmV1MultiassetFungibility: {
        _enum: {
            Fungible: 'Compact<u128>',
            NonFungible: 'XcmV1MultiassetAssetInstance'
        }
    },
    XcmV1MultiassetAssetInstance: {
        _enum: {
            Undefined: 'Null',
            Index: 'Compact<u128>',
            Array4: '[u8;4]',
            Array8: '[u8;8]',
            Array16: '[u8;16]',
            Array32: '[u8;32]',
            Blob: 'Bytes'
        }
    },
    XcmV2Response: {
        _enum: {
            Null: 'Null',
            Assets: 'XcmV1MultiassetMultiAssets',
            ExecutionResult: 'Option<(u32,XcmV2TraitsError)>',
            Version: 'u32'
        }
    },
    XcmV0OriginKind: {
        _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
    },
    XcmDoubleEncoded: {
        encoded: 'Bytes'
    },
    XcmV1MultiassetMultiAssetFilter: {
        _enum: {
            Definite: 'XcmV1MultiassetMultiAssets',
            Wild: 'XcmV1MultiassetWildMultiAsset'
        }
    },
    XcmV1MultiassetWildMultiAsset: {
        _enum: {
            All: 'Null',
            AllOf: {
                id: 'XcmV1MultiassetAssetId',
                fun: 'XcmV1MultiassetWildFungibility'
            }
        }
    },
    XcmV1MultiassetWildFungibility: {
        _enum: ['Fungible', 'NonFungible']
    },
    XcmV2WeightLimit: {
        _enum: {
            Unlimited: 'Null',
            Limited: 'Compact<u64>'
        }
    },
    XcmVersionedMultiAssets: {
        _enum: {
            V0: 'Vec<XcmV0MultiAsset>',
            V1: 'XcmV1MultiassetMultiAssets'
        }
    },
    XcmV0MultiAsset: {
        _enum: {
            None: 'Null',
            All: 'Null',
            AllFungible: 'Null',
            AllNonFungible: 'Null',
            AllAbstractFungible: {
                id: 'Bytes',
            },
            AllAbstractNonFungible: {
                class: 'Bytes',
            },
            AllConcreteFungible: {
                id: 'XcmV0MultiLocation',
            },
            AllConcreteNonFungible: {
                class: 'XcmV0MultiLocation',
            },
            AbstractFungible: {
                id: 'Bytes',
                amount: 'Compact<u128>',
            },
            AbstractNonFungible: {
                class: 'Bytes',
                instance: 'XcmV1MultiassetAssetInstance',
            },
            ConcreteFungible: {
                id: 'XcmV0MultiLocation',
                amount: 'Compact<u128>',
            },
            ConcreteNonFungible: {
                class: 'XcmV0MultiLocation',
                instance: 'XcmV1MultiassetAssetInstance'
            }
        }
    },
    XcmV0MultiLocation: {
        _enum: {
            Null: 'Null',
            X1: 'XcmV0Junction',
            X2: '(XcmV0Junction,XcmV0Junction)',
            X3: '(XcmV0Junction,XcmV0Junction,XcmV0Junction)',
            X4: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
            X5: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
            X6: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
            X7: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
            X8: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)'
        }
    },
    XcmV0Junction: {
        _enum: {
            Parent: 'Null',
            Parachain: 'Compact<u32>',
            AccountId32: {
                network: 'XcmV0JunctionNetworkId',
                id: '[u8;32]',
            },
            AccountIndex64: {
                network: 'XcmV0JunctionNetworkId',
                index: 'Compact<u64>',
            },
            AccountKey20: {
                network: 'XcmV0JunctionNetworkId',
                key: '[u8;20]',
            },
            PalletInstance: 'u8',
            GeneralIndex: 'Compact<u128>',
            GeneralKey: 'Bytes',
            OnlyChild: 'Null',
            Plurality: {
                id: 'XcmV0JunctionBodyId',
                part: 'XcmV0JunctionBodyPart'
            }
        }
    },
    XcmVersionedMultiLocation: {
        _enum: {
            V0: 'XcmV0MultiLocation',
            V1: 'XcmV1MultiLocation'
        }
    },
    FrameSystemPhase: {
        _enum: {
            ApplyExtrinsic: 'u32',
            Finalization: 'Null',
            Initialization: 'Null'
        }
    },
    FrameSystemLastRuntimeUpgradeInfo: {
        specVersion: 'Compact<u32>',
        specName: 'Text'
    },
    FrameSystemCall: {
        _enum: {
            fill_block: {
                ratio: 'Perbill',
            },
            remark: {
                remark: 'Bytes',
            },
            set_heap_pages: {
                pages: 'u64',
            },
            set_code: {
                code: 'Bytes',
            },
            set_code_without_checks: {
                code: 'Bytes',
            },
            set_storage: {
                items: 'Vec<(Bytes,Bytes)>',
            },
            kill_storage: {
                _alias: {
                    keys_: 'keys',
                },
                keys_: 'Vec<Bytes>',
            },
            kill_prefix: {
                prefix: 'Bytes',
                subkeys: 'u32',
            },
            remark_with_event: {
                remark: 'Bytes'
            }
        }
    },
    FrameSystemLimitsBlockWeights: {
        baseBlock: 'u64',
        maxBlock: 'u64',
        perClass: 'FrameSupportWeightsPerDispatchClassWeightsPerClass'
    },
    FrameSupportWeightsPerDispatchClassWeightsPerClass: {
        normal: 'FrameSystemLimitsWeightsPerClass',
        operational: 'FrameSystemLimitsWeightsPerClass',
        mandatory: 'FrameSystemLimitsWeightsPerClass'
    },
    FrameSystemLimitsWeightsPerClass: {
        baseExtrinsic: 'u64',
        maxExtrinsic: 'Option<u64>',
        maxTotal: 'Option<u64>',
        reserved: 'Option<u64>'
    },
    FrameSystemLimitsBlockLength: {
        max: 'FrameSupportWeightsPerDispatchClassU32'
    },
    FrameSupportWeightsPerDispatchClassU32: {
        normal: 'u32',
        operational: 'u32',
        mandatory: 'u32'
    },
    FrameSupportWeightsRuntimeDbWeight: {
        read: 'u64',
        write: 'u64'
    },
    SpVersionRuntimeVersion: {
        specName: 'Text',
        implName: 'Text',
        authoringVersion: 'u32',
        specVersion: 'u32',
        implVersion: 'u32',
        apis: 'Vec<([u8;8],u32)>',
        transactionVersion: 'u32'
    },
    FrameSystemError: {
        _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
    },
    SpConsensusBabeAppPublic: 'SpCoreSr25519Public',
    SpConsensusBabeDigestsNextConfigDescriptor: {
        _enum: {
            __Unused0: 'Null',
            V1: {
                c: '(u64,u64)',
                allowedSlots: 'SpConsensusBabeAllowedSlots'
            }
        }
    },
    SpConsensusBabeAllowedSlots: {
        _enum: ['PrimarySlots', 'PrimaryAndSecondaryPlainSlots', 'PrimaryAndSecondaryVRFSlots']
    },
    SpConsensusBabeBabeEpochConfiguration: {
        c: '(u64,u64)',
        allowedSlots: 'SpConsensusBabeAllowedSlots'
    },
    PalletBabeCall: {
        _enum: {
            report_equivocation: {
                equivocationProof: 'SpConsensusSlotsEquivocationProof',
                keyOwnerProof: 'SpSessionMembershipProof',
            },
            report_equivocation_unsigned: {
                equivocationProof: 'SpConsensusSlotsEquivocationProof',
                keyOwnerProof: 'SpSessionMembershipProof',
            },
            plan_config_change: {
                config: 'SpConsensusBabeDigestsNextConfigDescriptor'
            }
        }
    },
    SpConsensusSlotsEquivocationProof: {
        offender: 'SpConsensusBabeAppPublic',
        slot: 'u64',
        firstHeader: 'SpRuntimeHeader',
        secondHeader: 'SpRuntimeHeader'
    },
    SpRuntimeHeader: {
        parentHash: 'H256',
        number: 'Compact<u32>',
        stateRoot: 'H256',
        extrinsicsRoot: 'H256',
        digest: 'SpRuntimeDigest'
    },
    SpRuntimeBlakeTwo256: 'Null',
    SpSessionMembershipProof: {
        session: 'u32',
        trieNodes: 'Vec<Bytes>',
        validatorCount: 'u32'
    },
    PalletBabeError: {
        _enum: ['InvalidEquivocationProof', 'InvalidKeyOwnershipProof', 'DuplicateOffenceReport']
    },
    PalletTimestampCall: {
        _enum: {
            set: {
                now: 'Compact<u64>'
            }
        }
    },
    PalletIndicesCall: {
        _enum: {
            claim: {
                index: 'u32',
            },
            transfer: {
                _alias: {
                    new_: 'new',
                },
                new_: 'AccountId32',
                index: 'u32',
            },
            free: {
                index: 'u32',
            },
            force_transfer: {
                _alias: {
                    new_: 'new',
                },
                new_: 'AccountId32',
                index: 'u32',
                freeze: 'bool',
            },
            freeze: {
                index: 'u32'
            }
        }
    },
    PalletIndicesError: {
        _enum: ['NotAssigned', 'NotOwner', 'InUse', 'NotTransfer', 'Permanent']
    },
    PalletBalancesBalanceLock: {
        id: '[u8;8]',
        amount: 'u128',
        reasons: 'PalletBalancesReasons'
    },
    PalletBalancesReasons: {
        _enum: ['Fee', 'Misc', 'All']
    },
    PalletBalancesReserveData: {
        id: '[u8;8]',
        amount: 'u128'
    },
    PalletBalancesReleases: {
        _enum: ['V1_0_0', 'V2_0_0']
    },
    PalletBalancesCall: {
        _enum: {
            transfer: {
                dest: 'MultiAddress',
                value: 'Compact<u128>',
            },
            set_balance: {
                who: 'MultiAddress',
                newFree: 'Compact<u128>',
                newReserved: 'Compact<u128>',
            },
            force_transfer: {
                source: 'MultiAddress',
                dest: 'MultiAddress',
                value: 'Compact<u128>',
            },
            transfer_keep_alive: {
                dest: 'MultiAddress',
                value: 'Compact<u128>',
            },
            transfer_all: {
                dest: 'MultiAddress',
                keepAlive: 'bool',
            },
            force_unreserve: {
                who: 'MultiAddress',
                amount: 'u128'
            }
        }
    },
    PalletBalancesError: {
        _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'KeepAlive', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves']
    },
    PalletTransactionPaymentReleases: {
        _enum: ['V1Ancient', 'V2']
    },
    FrameSupportWeightsWeightToFeeCoefficient: {
        coeffInteger: 'u128',
        coeffFrac: 'Perbill',
        negative: 'bool',
        degree: 'u8'
    },
    PalletAuthorshipUncleEntryItem: {
        _enum: {
            InclusionHeight: 'u32',
            Uncle: '(H256,Option<AccountId32>)'
        }
    },
    PalletAuthorshipCall: {
        _enum: {
            set_uncles: {
                newUncles: 'Vec<SpRuntimeHeader>'
            }
        }
    },
    PalletAuthorshipError: {
        _enum: ['InvalidUncleParent', 'UnclesAlreadySet', 'TooManyUncles', 'GenesisUncle', 'TooHighUncle', 'UncleAlreadyIncluded', 'OldUncle']
    },
    SpStakingOffenceOffenceDetails: {
        offender: '(AccountId32,Null)',
        reporters: 'Vec<AccountId32>'
    },
    RococoRuntimeSessionKeys: {
        grandpa: 'SpFinalityGrandpaAppPublic',
        babe: 'SpConsensusBabeAppPublic',
        imOnline: 'PalletImOnlineSr25519AppSr25519Public',
        paraValidator: 'PolkadotPrimitivesV0ValidatorAppPublic',
        paraAssignment: 'PolkadotPrimitivesV1AssignmentAppPublic',
        authorityDiscovery: 'SpAuthorityDiscoveryAppPublic',
        beefy: 'BeefyPrimitivesCryptoPublic'
    },
    PolkadotPrimitivesV0ValidatorAppPublic: 'SpCoreSr25519Public',
    PolkadotPrimitivesV1AssignmentAppPublic: 'SpCoreSr25519Public',
    SpAuthorityDiscoveryAppPublic: 'SpCoreSr25519Public',
    BeefyPrimitivesCryptoPublic: 'SpCoreEcdsaPublic',
    SpCoreEcdsaPublic: '[u8;33]',
    SpCoreCryptoKeyTypeId: '[u8;4]',
    PalletSessionCall: {
        _enum: {
            set_keys: {
                _alias: {
                    keys_: 'keys',
                },
                keys_: 'RococoRuntimeSessionKeys',
                proof: 'Bytes',
            },
            purge_keys: 'Null'
        }
    },
    PalletSessionError: {
        _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
    },
    PalletGrandpaStoredState: {
        _enum: {
            Live: 'Null',
            PendingPause: {
                scheduledAt: 'u32',
                delay: 'u32',
            },
            Paused: 'Null',
            PendingResume: {
                scheduledAt: 'u32',
                delay: 'u32'
            }
        }
    },
    PalletGrandpaStoredPendingChange: {
        scheduledAt: 'u32',
        delay: 'u32',
        nextAuthorities: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
        forced: 'Option<u32>'
    },
    PalletGrandpaCall: {
        _enum: {
            report_equivocation: {
                equivocationProof: 'SpFinalityGrandpaEquivocationProof',
                keyOwnerProof: 'SpSessionMembershipProof',
            },
            report_equivocation_unsigned: {
                equivocationProof: 'SpFinalityGrandpaEquivocationProof',
                keyOwnerProof: 'SpSessionMembershipProof',
            },
            note_stalled: {
                delay: 'u32',
                bestFinalizedBlockNumber: 'u32'
            }
        }
    },
    SpFinalityGrandpaEquivocationProof: {
        setId: 'u64',
        equivocation: 'SpFinalityGrandpaEquivocation'
    },
    SpFinalityGrandpaEquivocation: {
        _enum: {
            Prevote: 'FinalityGrandpaEquivocationPrevote',
            Precommit: 'FinalityGrandpaEquivocationPrecommit'
        }
    },
    FinalityGrandpaEquivocationPrevote: {
        roundNumber: 'u64',
        identity: 'SpFinalityGrandpaAppPublic',
        first: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)',
        second: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)'
    },
    FinalityGrandpaPrevote: {
        targetHash: 'H256',
        targetNumber: 'u32'
    },
    SpFinalityGrandpaAppSignature: 'SpCoreEd25519Signature',
    SpCoreEd25519Signature: '[u8;64]',
    FinalityGrandpaEquivocationPrecommit: {
        roundNumber: 'u64',
        identity: 'SpFinalityGrandpaAppPublic',
        first: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)',
        second: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)'
    },
    FinalityGrandpaPrecommit: {
        targetHash: 'H256',
        targetNumber: 'u32'
    },
    PalletGrandpaError: {
        _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
    },
    PalletImOnlineBoundedOpaqueNetworkState: {
        peerId: 'Bytes',
        externalAddresses: 'Vec<Bytes>'
    },
    PalletImOnlineCall: {
        _enum: {
            heartbeat: {
                heartbeat: 'PalletImOnlineHeartbeat',
                signature: 'PalletImOnlineSr25519AppSr25519Signature'
            }
        }
    },
    PalletImOnlineHeartbeat: {
        blockNumber: 'u32',
        networkState: 'SpCoreOffchainOpaqueNetworkState',
        sessionIndex: 'u32',
        authorityIndex: 'u32',
        validatorsLen: 'u32'
    },
    SpCoreOffchainOpaqueNetworkState: {
        peerId: 'Bytes',
        externalAddresses: 'Vec<Bytes>'
    },
    PalletImOnlineSr25519AppSr25519Signature: 'SpCoreSr25519Signature',
    PalletImOnlineError: {
        _enum: ['InvalidKey', 'DuplicatedHeartbeat']
    },
    PolkadotRuntimeParachainsConfigurationHostConfiguration: {
        maxCodeSize: 'u32',
        maxHeadDataSize: 'u32',
        maxUpwardQueueCount: 'u32',
        maxUpwardQueueSize: 'u32',
        maxUpwardMessageSize: 'u32',
        maxUpwardMessageNumPerCandidate: 'u32',
        hrmpMaxMessageNumPerCandidate: 'u32',
        validationUpgradeFrequency: 'u32',
        validationUpgradeDelay: 'u32',
        maxPovSize: 'u32',
        maxDownwardMessageSize: 'u32',
        umpServiceTotalWeight: 'u64',
        hrmpMaxParachainOutboundChannels: 'u32',
        hrmpMaxParathreadOutboundChannels: 'u32',
        hrmpSenderDeposit: 'u128',
        hrmpRecipientDeposit: 'u128',
        hrmpChannelMaxCapacity: 'u32',
        hrmpChannelMaxTotalSize: 'u32',
        hrmpMaxParachainInboundChannels: 'u32',
        hrmpMaxParathreadInboundChannels: 'u32',
        hrmpChannelMaxMessageSize: 'u32',
        codeRetentionPeriod: 'u32',
        parathreadCores: 'u32',
        parathreadRetries: 'u32',
        groupRotationFrequency: 'u32',
        chainAvailabilityPeriod: 'u32',
        threadAvailabilityPeriod: 'u32',
        schedulingLookahead: 'u32',
        maxValidatorsPerCore: 'Option<u32>',
        maxValidators: 'Option<u32>',
        disputePeriod: 'u32',
        disputePostConclusionAcceptancePeriod: 'u32',
        disputeMaxSpamSlots: 'u32',
        disputeConclusionByTimeOutPeriod: 'u32',
        noShowSlots: 'u32',
        nDelayTranches: 'u32',
        zerothDelayTrancheWidth: 'u32',
        neededApprovals: 'u32',
        relayVrfModuloSamples: 'u32',
        umpMaxIndividualWeight: 'u64'
    },
    PolkadotRuntimeParachainsConfigurationPalletCall: {
        _enum: {
            set_validation_upgrade_frequency: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_validation_upgrade_delay: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_code_retention_period: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_max_code_size: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_max_pov_size: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_max_head_data_size: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_parathread_cores: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_parathread_retries: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_group_rotation_frequency: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_chain_availability_period: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_thread_availability_period: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_scheduling_lookahead: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_max_validators_per_core: {
                _alias: {
                    new_: 'new',
                },
                new_: 'Option<u32>',
            },
            set_max_validators: {
                _alias: {
                    new_: 'new',
                },
                new_: 'Option<u32>',
            },
            set_dispute_period: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_dispute_post_conclusion_acceptance_period: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_dispute_max_spam_slots: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_dispute_conclusion_by_time_out_period: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_no_show_slots: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_n_delay_tranches: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_zeroth_delay_tranche_width: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_needed_approvals: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_relay_vrf_modulo_samples: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_max_upward_queue_count: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_max_upward_queue_size: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_max_downward_message_size: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_ump_service_total_weight: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u64',
            },
            set_max_upward_message_size: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_max_upward_message_num_per_candidate: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_hrmp_open_request_ttl: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_hrmp_sender_deposit: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u128',
            },
            set_hrmp_recipient_deposit: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u128',
            },
            set_hrmp_channel_max_capacity: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_hrmp_channel_max_total_size: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_hrmp_max_parachain_inbound_channels: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_hrmp_max_parathread_inbound_channels: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_hrmp_channel_max_message_size: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_hrmp_max_parachain_outbound_channels: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_hrmp_max_parathread_outbound_channels: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_hrmp_max_message_num_per_candidate: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_ump_max_individual_weight: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u64'
            }
        }
    },
    PolkadotRuntimeParachainsConfigurationPalletError: {
        _enum: ['InvalidNewValue']
    },
    PolkadotRuntimeParachainsSharedPalletCall: 'Null',
    PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord: {
        bitfield: 'BitVec',
        submittedAt: 'u32'
    },
    BitvecOrderLsb0: 'Null',
    PolkadotRuntimeParachainsInclusionCandidatePendingAvailability: {
        _alias: {
            hash_: 'hash'
        },
        core: 'u32',
        hash_: 'H256',
        descriptor: 'PolkadotPrimitivesV1CandidateDescriptor',
        availabilityVotes: 'BitVec',
        backers: 'BitVec',
        relayParentNumber: 'u32',
        backedInNumber: 'u32',
        backingGroup: 'u32'
    },
    PolkadotPrimitivesV1CandidateCommitments: {
        upwardMessages: 'Vec<Bytes>',
        horizontalMessages: 'Vec<PolkadotCorePrimitivesOutboundHrmpMessage>',
        newValidationCode: 'Option<Bytes>',
        headData: 'Bytes',
        processedDownwardMessages: 'u32',
        hrmpWatermark: 'u32'
    },
    PolkadotCorePrimitivesOutboundHrmpMessage: {
        recipient: 'u32',
        data: 'Bytes'
    },
    PolkadotRuntimeParachainsInclusionPalletCall: 'Null',
    PolkadotRuntimeParachainsInclusionPalletError: {
        _enum: ['WrongBitfieldSize', 'BitfieldDuplicateOrUnordered', 'ValidatorIndexOutOfBounds', 'InvalidBitfieldSignature', 'UnscheduledCandidate', 'CandidateScheduledBeforeParaFree', 'WrongCollator', 'ScheduledOutOfOrder', 'HeadDataTooLarge', 'PrematureCodeUpgrade', 'NewCodeTooLarge', 'CandidateNotInParentContext', 'InvalidGroupIndex', 'InsufficientBacking', 'InvalidBacking', 'NotCollatorSigned', 'ValidationDataHashMismatch', 'IncorrectDownwardMessageHandling', 'InvalidUpwardMessages', 'HrmpWatermarkMishandling', 'InvalidOutboundHrmp', 'InvalidValidationCodeHash', 'ParaHeadMismatch', 'BitfieldReferencesFreedCore']
    },
    PolkadotPrimitivesV1ScrapedOnChainVotes: {
        session: 'u32',
        backingValidatorsPerCandidate: 'Vec<(PolkadotPrimitivesV1CandidateReceipt,Vec<(u32,PolkadotPrimitivesV0ValidityAttestation)>)>',
        disputes: 'Vec<PolkadotPrimitivesV1DisputeStatementSet>'
    },
    PolkadotPrimitivesV0ValidityAttestation: {
        _enum: {
            __Unused0: 'Null',
            Implicit: 'PolkadotPrimitivesV0ValidatorAppSignature',
            Explicit: 'PolkadotPrimitivesV0ValidatorAppSignature'
        }
    },
    PolkadotPrimitivesV0ValidatorAppSignature: 'SpCoreSr25519Signature',
    PolkadotPrimitivesV1DisputeStatementSet: {
        candidateHash: 'H256',
        session: 'u32',
        statements: 'Vec<(PolkadotPrimitivesV1DisputeStatement,u32,PolkadotPrimitivesV0ValidatorAppSignature)>'
    },
    PolkadotPrimitivesV1DisputeStatement: {
        _enum: {
            Valid: 'PolkadotPrimitivesV1ValidDisputeStatementKind',
            Invalid: 'PolkadotPrimitivesV1InvalidDisputeStatementKind'
        }
    },
    PolkadotPrimitivesV1ValidDisputeStatementKind: {
        _enum: {
            Explicit: 'Null',
            BackingSeconded: 'H256',
            BackingValid: 'H256',
            ApprovalChecking: 'Null'
        }
    },
    PolkadotPrimitivesV1InvalidDisputeStatementKind: {
        _enum: ['Explicit']
    },
    PolkadotRuntimeParachainsParasInherentPalletCall: {
        _enum: {
            enter: {
                data: 'PolkadotPrimitivesV1InherentData'
            }
        }
    },
    PolkadotPrimitivesV1InherentData: {
        bitfields: 'Vec<PolkadotPrimitivesV1SignedUncheckedSigned>',
        backedCandidates: 'Vec<PolkadotPrimitivesV1BackedCandidate>',
        disputes: 'Vec<PolkadotPrimitivesV1DisputeStatementSet>',
        parentHeader: 'SpRuntimeHeader'
    },
    PolkadotPrimitivesV1SignedUncheckedSigned: {
        payload: 'BitVec',
        validatorIndex: 'u32',
        signature: 'PolkadotPrimitivesV0ValidatorAppSignature'
    },
    PolkadotPrimitivesV1BackedCandidate: {
        candidate: 'PolkadotPrimitivesV1CommittedCandidateReceipt',
        validityVotes: 'Vec<PolkadotPrimitivesV0ValidityAttestation>',
        validatorIndices: 'BitVec'
    },
    PolkadotPrimitivesV1CommittedCandidateReceipt: {
        descriptor: 'PolkadotPrimitivesV1CandidateDescriptor',
        commitments: 'PolkadotPrimitivesV1CandidateCommitments'
    },
    PolkadotRuntimeParachainsParasInherentPalletError: {
        _enum: ['TooManyInclusionInherents', 'InvalidParentHeader', 'CandidateConcludedInvalid', 'InherentOverweight']
    },
    PolkadotRuntimeParachainsSchedulerParathreadClaimQueue: {
        queue: 'Vec<PolkadotRuntimeParachainsSchedulerQueuedParathread>',
        nextCoreOffset: 'u32'
    },
    PolkadotRuntimeParachainsSchedulerQueuedParathread: {
        claim: 'PolkadotPrimitivesV1ParathreadEntry',
        coreOffset: 'u32'
    },
    PolkadotPrimitivesV1ParathreadEntry: {
        claim: 'PolkadotPrimitivesV1ParathreadClaim',
        retries: 'u32'
    },
    PolkadotPrimitivesV1ParathreadClaim: '(u32,PolkadotPrimitivesV0CollatorAppPublic)',
    PolkadotPrimitivesV1CoreOccupied: {
        _enum: {
            Parathread: 'PolkadotPrimitivesV1ParathreadEntry',
            Parachain: 'Null'
        }
    },
    PolkadotRuntimeParachainsSchedulerCoreAssignment: {
        core: 'u32',
        paraId: 'u32',
        kind: 'PolkadotRuntimeParachainsSchedulerAssignmentKind',
        groupIdx: 'u32'
    },
    PolkadotRuntimeParachainsSchedulerAssignmentKind: {
        _enum: {
            Parachain: 'Null',
            Parathread: '(PolkadotPrimitivesV0CollatorAppPublic,u32)'
        }
    },
    PolkadotRuntimeParachainsParasParaLifecycle: {
        _enum: ['Onboarding', 'Parathread', 'Parachain', 'UpgradingParathread', 'DowngradingParachain', 'OffboardingParathread', 'OffboardingParachain']
    },
    PolkadotRuntimeParachainsParasParaPastCodeMeta: {
        upgradeTimes: 'Vec<PolkadotRuntimeParachainsParasReplacementTimes>',
        lastPruned: 'Option<u32>'
    },
    PolkadotRuntimeParachainsParasReplacementTimes: {
        expectedAt: 'u32',
        activatedAt: 'u32'
    },
    PolkadotPrimitivesV1UpgradeGoAhead: {
        _enum: ['Abort', 'GoAhead']
    },
    PolkadotPrimitivesV1UpgradeRestriction: {
        _enum: ['Present']
    },
    PolkadotRuntimeParachainsParasParaGenesisArgs: {
        genesisHead: 'Bytes',
        validationCode: 'Bytes',
        parachain: 'bool'
    },
    PolkadotRuntimeParachainsParasPalletCall: {
        _enum: {
            force_set_current_code: {
                para: 'u32',
                newCode: 'Bytes',
            },
            force_set_current_head: {
                para: 'u32',
                newHead: 'Bytes',
            },
            force_schedule_code_upgrade: {
                para: 'u32',
                newCode: 'Bytes',
                relayParentNumber: 'u32',
            },
            force_note_new_head: {
                para: 'u32',
                newHead: 'Bytes',
            },
            force_queue_action: {
                para: 'u32'
            }
        }
    },
    PolkadotRuntimeParachainsParasPalletError: {
        _enum: ['NotRegistered', 'CannotOnboard', 'CannotOffboard', 'CannotUpgrade', 'CannotDowngrade']
    },
    PolkadotRuntimeParachainsInitializerBufferedSessionChange: {
        validators: 'Vec<PolkadotPrimitivesV0ValidatorAppPublic>',
        queued: 'Vec<PolkadotPrimitivesV0ValidatorAppPublic>',
        sessionIndex: 'u32'
    },
    PolkadotRuntimeParachainsInitializerPalletCall: {
        _enum: {
            force_approve: {
                upTo: 'u32'
            }
        }
    },
    PolkadotCorePrimitivesInboundDownwardMessage: {
        sentAt: 'u32',
        msg: 'Bytes'
    },
    PolkadotRuntimeParachainsDmpPalletCall: 'Null',
    PolkadotRuntimeParachainsUmpPalletCall: {
        _enum: {
            service_overweight: {
                index: 'u64',
                weightLimit: 'u64'
            }
        }
    },
    PolkadotRuntimeParachainsUmpPalletError: {
        _enum: ['UnknownMessageIndex', 'WeightOverLimit']
    },
    PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest: {
        confirmed: 'bool',
        age: 'u32',
        senderDeposit: 'u128',
        maxMessageSize: 'u32',
        maxCapacity: 'u32',
        maxTotalSize: 'u32'
    },
    PolkadotRuntimeParachainsHrmpHrmpChannel: {
        maxCapacity: 'u32',
        maxTotalSize: 'u32',
        maxMessageSize: 'u32',
        msgCount: 'u32',
        totalSize: 'u32',
        mqcHead: 'Option<H256>',
        senderDeposit: 'u128',
        recipientDeposit: 'u128'
    },
    PolkadotCorePrimitivesInboundHrmpMessage: {
        sentAt: 'u32',
        data: 'Bytes'
    },
    PolkadotRuntimeParachainsHrmpPalletCall: {
        _enum: {
            hrmp_init_open_channel: {
                recipient: 'u32',
                proposedMaxCapacity: 'u32',
                proposedMaxMessageSize: 'u32',
            },
            hrmp_accept_open_channel: {
                sender: 'u32',
            },
            hrmp_close_channel: {
                channelId: 'PolkadotParachainPrimitivesHrmpChannelId',
            },
            force_clean_hrmp: {
                para: 'u32',
            },
            force_process_hrmp_open: 'Null',
            force_process_hrmp_close: 'Null',
            hrmp_cancel_open_request: {
                channelId: 'PolkadotParachainPrimitivesHrmpChannelId'
            }
        }
    },
    PolkadotRuntimeParachainsHrmpPalletError: {
        _enum: ['OpenHrmpChannelToSelf', 'OpenHrmpChannelInvalidRecipient', 'OpenHrmpChannelZeroCapacity', 'OpenHrmpChannelCapacityExceedsLimit', 'OpenHrmpChannelZeroMessageSize', 'OpenHrmpChannelMessageSizeExceedsLimit', 'OpenHrmpChannelAlreadyExists', 'OpenHrmpChannelAlreadyRequested', 'OpenHrmpChannelLimitExceeded', 'AcceptHrmpChannelDoesntExist', 'AcceptHrmpChannelAlreadyConfirmed', 'AcceptHrmpChannelLimitExceeded', 'CloseHrmpChannelUnauthorized', 'CloseHrmpChannelDoesntExist', 'CloseHrmpChannelAlreadyUnderway', 'CancelHrmpOpenChannelUnauthorized', 'OpenHrmpChannelDoesntExist', 'OpenHrmpChannelAlreadyConfirmed']
    },
    PolkadotPrimitivesV1SessionInfo: {
        validators: 'Vec<PolkadotPrimitivesV0ValidatorAppPublic>',
        discoveryKeys: 'Vec<SpAuthorityDiscoveryAppPublic>',
        assignmentKeys: 'Vec<PolkadotPrimitivesV1AssignmentAppPublic>',
        validatorGroups: 'Vec<Vec<u32>>',
        nCores: 'u32',
        zerothDelayTrancheWidth: 'u32',
        relayVrfModuloSamples: 'u32',
        nDelayTranches: 'u32',
        noShowSlots: 'u32',
        neededApprovals: 'u32'
    },
    PolkadotPrimitivesV1DisputeState: {
        validatorsFor: 'BitVec',
        validatorsAgainst: 'BitVec',
        start: 'u32',
        concludedAt: 'Option<u32>'
    },
    PolkadotRuntimeParachainsDisputesPalletCall: {
        _enum: ['force_unfreeze']
    },
    PolkadotRuntimeParachainsDisputesPalletError: {
        _enum: ['DuplicateDisputeStatementSets', 'AncientDisputeStatement', 'ValidatorIndexOutOfBounds', 'InvalidSignature', 'DuplicateStatement', 'PotentialSpam', 'SingleSidedDispute']
    },
    PolkadotRuntimeCommonParasRegistrarParaInfo: {
        manager: 'AccountId32',
        deposit: 'u128',
        locked: 'bool'
    },
    PolkadotRuntimeCommonParasRegistrarPalletCall: {
        _enum: {
            register: {
                id: 'u32',
                genesisHead: 'Bytes',
                validationCode: 'Bytes',
            },
            force_register: {
                who: 'AccountId32',
                deposit: 'u128',
                id: 'u32',
                genesisHead: 'Bytes',
                validationCode: 'Bytes',
            },
            deregister: {
                id: 'u32',
            },
            swap: {
                id: 'u32',
                other: 'u32',
            },
            force_remove_lock: {
                para: 'u32',
            },
            reserve: 'Null'
        }
    },
    PolkadotRuntimeCommonParasRegistrarPalletError: {
        _enum: ['NotRegistered', 'AlreadyRegistered', 'NotOwner', 'CodeTooLarge', 'HeadDataTooLarge', 'NotParachain', 'NotParathread', 'CannotDeregister', 'CannotDowngrade', 'CannotUpgrade', 'ParaLocked', 'NotReserved']
    },
    PolkadotRuntimeCommonAuctionsPalletCall: {
        _enum: {
            new_auction: {
                duration: 'Compact<u32>',
                leasePeriodIndex: 'Compact<u32>',
            },
            bid: {
                para: 'Compact<u32>',
                auctionIndex: 'Compact<u32>',
                firstSlot: 'Compact<u32>',
                lastSlot: 'Compact<u32>',
                amount: 'Compact<u128>',
            },
            cancel_auction: 'Null'
        }
    },
    PolkadotRuntimeCommonAuctionsPalletError: {
        _enum: ['AuctionInProgress', 'LeasePeriodInPast', 'ParaNotRegistered', 'NotCurrentAuction', 'NotAuction', 'AuctionEnded', 'AlreadyLeasedOut']
    },
    PolkadotRuntimeCommonCrowdloanFundInfo: {
        depositor: 'AccountId32',
        verifier: 'Option<SpRuntimeMultiSigner>',
        deposit: 'u128',
        raised: 'u128',
        end: 'u32',
        cap: 'u128',
        lastContribution: 'PolkadotRuntimeCommonCrowdloanLastContribution',
        firstPeriod: 'u32',
        lastPeriod: 'u32',
        trieIndex: 'u32'
    },
    SpRuntimeMultiSigner: {
        _enum: {
            Ed25519: 'SpCoreEd25519Public',
            Sr25519: 'SpCoreSr25519Public',
            Ecdsa: 'SpCoreEcdsaPublic'
        }
    },
    PolkadotRuntimeCommonCrowdloanLastContribution: {
        _enum: {
            Never: 'Null',
            PreEnding: 'u32',
            Ending: 'u32'
        }
    },
    PolkadotRuntimeCommonCrowdloanPalletCall: {
        _enum: {
            create: {
                index: 'Compact<u32>',
                cap: 'Compact<u128>',
                firstPeriod: 'Compact<u32>',
                lastPeriod: 'Compact<u32>',
                end: 'Compact<u32>',
                verifier: 'Option<SpRuntimeMultiSigner>',
            },
            contribute: {
                index: 'Compact<u32>',
                value: 'Compact<u128>',
                signature: 'Option<SpRuntimeMultiSignature>',
            },
            withdraw: {
                who: 'AccountId32',
                index: 'Compact<u32>',
            },
            refund: {
                index: 'Compact<u32>',
            },
            dissolve: {
                index: 'Compact<u32>',
            },
            edit: {
                index: 'Compact<u32>',
                cap: 'Compact<u128>',
                firstPeriod: 'Compact<u32>',
                lastPeriod: 'Compact<u32>',
                end: 'Compact<u32>',
                verifier: 'Option<SpRuntimeMultiSigner>',
            },
            add_memo: {
                index: 'u32',
                memo: 'Bytes',
            },
            poke: {
                index: 'u32'
            }
        }
    },
    SpRuntimeMultiSignature: {
        _enum: {
            Ed25519: 'SpCoreEd25519Signature',
            Sr25519: 'SpCoreSr25519Signature',
            Ecdsa: 'SpCoreEcdsaSignature'
        }
    },
    SpCoreEcdsaSignature: '[u8;65]',
    FrameSupportPalletId: '[u8;8]',
    PolkadotRuntimeCommonCrowdloanPalletError: {
        _enum: ['FirstPeriodInPast', 'FirstPeriodTooFarInFuture', 'LastPeriodBeforeFirstPeriod', 'LastPeriodTooFarInFuture', 'CannotEndInPast', 'EndTooFarInFuture', 'Overflow', 'ContributionTooSmall', 'InvalidParaId', 'CapExceeded', 'ContributionPeriodOver', 'InvalidOrigin', 'NotParachain', 'LeaseActive', 'BidOrLeaseActive', 'FundNotEnded', 'NoContributions', 'NotReadyToDissolve', 'InvalidSignature', 'MemoTooLarge', 'AlreadyInNewRaise', 'VrfDelayInProgress', 'NoLeasePeriod']
    },
    PolkadotRuntimeCommonSlotsPalletCall: {
        _enum: {
            force_lease: {
                para: 'u32',
                leaser: 'AccountId32',
                amount: 'u128',
                periodBegin: 'u32',
                periodCount: 'u32',
            },
            clear_all_leases: {
                para: 'u32',
            },
            trigger_onboard: {
                para: 'u32'
            }
        }
    },
    PolkadotRuntimeCommonSlotsPalletError: {
        _enum: ['ParaNotOnboarding', 'LeaseError']
    },
    PolkadotRuntimeCommonParasSudoWrapperPalletCall: {
        _enum: {
            sudo_schedule_para_initialize: {
                id: 'u32',
                genesis: 'PolkadotRuntimeParachainsParasParaGenesisArgs',
            },
            sudo_schedule_para_cleanup: {
                id: 'u32',
            },
            sudo_schedule_parathread_upgrade: {
                id: 'u32',
            },
            sudo_schedule_parachain_downgrade: {
                id: 'u32',
            },
            sudo_queue_downward_xcm: {
                id: 'u32',
                xcm: 'XcmVersionedXcm',
            },
            sudo_establish_hrmp_channel: {
                sender: 'u32',
                recipient: 'u32',
                maxCapacity: 'u32',
                maxMessageSize: 'u32'
            }
        }
    },
    XcmVersionedXcm: {
        _enum: {
            V0: 'XcmV0Xcm',
            V1: 'XcmV1Xcm',
            V2: 'XcmV2Xcm'
        }
    },
    XcmV0Xcm: {
        _enum: {
            WithdrawAsset: {
                assets: 'Vec<XcmV0MultiAsset>',
                effects: 'Vec<XcmV0Order>',
            },
            ReserveAssetDeposit: {
                assets: 'Vec<XcmV0MultiAsset>',
                effects: 'Vec<XcmV0Order>',
            },
            TeleportAsset: {
                assets: 'Vec<XcmV0MultiAsset>',
                effects: 'Vec<XcmV0Order>',
            },
            QueryResponse: {
                queryId: 'Compact<u64>',
                response: 'XcmV0Response',
            },
            TransferAsset: {
                assets: 'Vec<XcmV0MultiAsset>',
                dest: 'XcmV0MultiLocation',
            },
            TransferReserveAsset: {
                assets: 'Vec<XcmV0MultiAsset>',
                dest: 'XcmV0MultiLocation',
                effects: 'Vec<XcmV0Order>',
            },
            Transact: {
                originType: 'XcmV0OriginKind',
                requireWeightAtMost: 'u64',
                call: 'XcmDoubleEncoded',
            },
            HrmpNewChannelOpenRequest: {
                sender: 'Compact<u32>',
                maxMessageSize: 'Compact<u32>',
                maxCapacity: 'Compact<u32>',
            },
            HrmpChannelAccepted: {
                recipient: 'Compact<u32>',
            },
            HrmpChannelClosing: {
                initiator: 'Compact<u32>',
                sender: 'Compact<u32>',
                recipient: 'Compact<u32>',
            },
            RelayedFrom: {
                who: 'XcmV0MultiLocation',
                message: 'XcmV0Xcm'
            }
        }
    },
    XcmV0Order: {
        _enum: {
            Null: 'Null',
            DepositAsset: {
                assets: 'Vec<XcmV0MultiAsset>',
                dest: 'XcmV0MultiLocation',
            },
            DepositReserveAsset: {
                assets: 'Vec<XcmV0MultiAsset>',
                dest: 'XcmV0MultiLocation',
                effects: 'Vec<XcmV0Order>',
            },
            ExchangeAsset: {
                give: 'Vec<XcmV0MultiAsset>',
                receive: 'Vec<XcmV0MultiAsset>',
            },
            InitiateReserveWithdraw: {
                assets: 'Vec<XcmV0MultiAsset>',
                reserve: 'XcmV0MultiLocation',
                effects: 'Vec<XcmV0Order>',
            },
            InitiateTeleport: {
                assets: 'Vec<XcmV0MultiAsset>',
                dest: 'XcmV0MultiLocation',
                effects: 'Vec<XcmV0Order>',
            },
            QueryHolding: {
                queryId: 'Compact<u64>',
                dest: 'XcmV0MultiLocation',
                assets: 'Vec<XcmV0MultiAsset>',
            },
            BuyExecution: {
                fees: 'XcmV0MultiAsset',
                weight: 'u64',
                debt: 'u64',
                haltOnError: 'bool',
                xcm: 'Vec<XcmV0Xcm>'
            }
        }
    },
    XcmV0Response: {
        _enum: {
            Assets: 'Vec<XcmV0MultiAsset>'
        }
    },
    XcmV1Xcm: {
        _enum: {
            WithdrawAsset: {
                assets: 'XcmV1MultiassetMultiAssets',
                effects: 'Vec<XcmV1Order>',
            },
            ReserveAssetDeposited: {
                assets: 'XcmV1MultiassetMultiAssets',
                effects: 'Vec<XcmV1Order>',
            },
            ReceiveTeleportedAsset: {
                assets: 'XcmV1MultiassetMultiAssets',
                effects: 'Vec<XcmV1Order>',
            },
            QueryResponse: {
                queryId: 'Compact<u64>',
                response: 'XcmV1Response',
            },
            TransferAsset: {
                assets: 'XcmV1MultiassetMultiAssets',
                beneficiary: 'XcmV1MultiLocation',
            },
            TransferReserveAsset: {
                assets: 'XcmV1MultiassetMultiAssets',
                dest: 'XcmV1MultiLocation',
                effects: 'Vec<XcmV1Order>',
            },
            Transact: {
                originType: 'XcmV0OriginKind',
                requireWeightAtMost: 'u64',
                call: 'XcmDoubleEncoded',
            },
            HrmpNewChannelOpenRequest: {
                sender: 'Compact<u32>',
                maxMessageSize: 'Compact<u32>',
                maxCapacity: 'Compact<u32>',
            },
            HrmpChannelAccepted: {
                recipient: 'Compact<u32>',
            },
            HrmpChannelClosing: {
                initiator: 'Compact<u32>',
                sender: 'Compact<u32>',
                recipient: 'Compact<u32>',
            },
            RelayedFrom: {
                who: 'XcmV1MultilocationJunctions',
                message: 'XcmV1Xcm',
            },
            SubscribeVersion: {
                queryId: 'Compact<u64>',
                maxResponseWeight: 'Compact<u64>',
            },
            UnsubscribeVersion: 'Null'
        }
    },
    XcmV1Order: {
        _enum: {
            Noop: 'Null',
            DepositAsset: {
                assets: 'XcmV1MultiassetMultiAssetFilter',
                maxAssets: 'u32',
                beneficiary: 'XcmV1MultiLocation',
            },
            DepositReserveAsset: {
                assets: 'XcmV1MultiassetMultiAssetFilter',
                maxAssets: 'u32',
                dest: 'XcmV1MultiLocation',
                effects: 'Vec<XcmV1Order>',
            },
            ExchangeAsset: {
                give: 'XcmV1MultiassetMultiAssetFilter',
                receive: 'XcmV1MultiassetMultiAssets',
            },
            InitiateReserveWithdraw: {
                assets: 'XcmV1MultiassetMultiAssetFilter',
                reserve: 'XcmV1MultiLocation',
                effects: 'Vec<XcmV1Order>',
            },
            InitiateTeleport: {
                assets: 'XcmV1MultiassetMultiAssetFilter',
                dest: 'XcmV1MultiLocation',
                effects: 'Vec<XcmV1Order>',
            },
            QueryHolding: {
                queryId: 'Compact<u64>',
                dest: 'XcmV1MultiLocation',
                assets: 'XcmV1MultiassetMultiAssetFilter',
            },
            BuyExecution: {
                fees: 'XcmV1MultiAsset',
                weight: 'u64',
                debt: 'u64',
                haltOnError: 'bool',
                instructions: 'Vec<XcmV1Xcm>'
            }
        }
    },
    XcmV1Response: {
        _enum: {
            Assets: 'XcmV1MultiassetMultiAssets',
            Version: 'u32'
        }
    },
    PolkadotRuntimeCommonParasSudoWrapperPalletError: {
        _enum: ['ParaDoesntExist', 'ParaAlreadyExists', 'ExceedsMaxMessageSize', 'CouldntCleanup', 'NotParathread', 'NotParachain', 'CannotUpgrade', 'CannotDowngrade']
    },
    PalletSudoCall: {
        _enum: {
            sudo: {
                call: 'Call',
            },
            sudo_unchecked_weight: {
                call: 'Call',
                weight: 'u64',
            },
            set_key: {
                _alias: {
                    new_: 'new',
                },
                new_: 'MultiAddress',
            },
            sudo_as: {
                who: 'MultiAddress',
                call: 'Call'
            }
        }
    },
    RococoRuntimeValidatorManagerCall: {
        _enum: {
            register_validators: {
                validators: 'Vec<AccountId32>',
            },
            deregister_validators: {
                validators: 'Vec<AccountId32>'
            }
        }
    },
    PalletCollectiveCall: {
        _enum: {
            set_members: {
                newMembers: 'Vec<AccountId32>',
                prime: 'Option<AccountId32>',
                oldCount: 'u32',
            },
            execute: {
                proposal: 'Call',
                lengthBound: 'Compact<u32>',
            },
            propose: {
                threshold: 'Compact<u32>',
                proposal: 'Call',
                lengthBound: 'Compact<u32>',
            },
            vote: {
                proposal: 'H256',
                index: 'Compact<u32>',
                approve: 'bool',
            },
            close: {
                proposalHash: 'H256',
                index: 'Compact<u32>',
                proposalWeightBound: 'Compact<u64>',
                lengthBound: 'Compact<u32>',
            },
            disapprove_proposal: {
                proposalHash: 'H256'
            }
        }
    },
    PalletMembershipCall: {
        _enum: {
            add_member: {
                who: 'AccountId32',
            },
            remove_member: {
                who: 'AccountId32',
            },
            swap_member: {
                remove: 'AccountId32',
                add: 'AccountId32',
            },
            reset_members: {
                members: 'Vec<AccountId32>',
            },
            change_key: {
                _alias: {
                    new_: 'new',
                },
                new_: 'AccountId32',
            },
            set_prime: {
                who: 'AccountId32',
            },
            clear_prime: 'Null'
        }
    },
    PalletUtilityCall: {
        _enum: {
            batch: {
                calls: 'Vec<Call>',
            },
            as_derivative: {
                index: 'u16',
                call: 'Call',
            },
            batch_all: {
                calls: 'Vec<Call>',
            },
            dispatch_as: {
                asOrigin: 'RococoRuntimeOriginCaller',
                call: 'Call'
            }
        }
    },
    RococoRuntimeOriginCaller: {
        _enum: {
            system: 'FrameSystemRawOrigin',
            __Unused1: 'Null',
            __Unused2: 'Null',
            __Unused3: 'Null',
            Void: 'SpCoreVoid',
            __Unused5: 'Null',
            __Unused6: 'Null',
            __Unused7: 'Null',
            __Unused8: 'Null',
            __Unused9: 'Null',
            __Unused10: 'Null',
            __Unused11: 'Null',
            __Unused12: 'Null',
            ParachainsOrigin: 'PolkadotRuntimeParachainsOriginPalletOrigin',
            __Unused14: 'Null',
            __Unused15: 'Null',
            __Unused16: 'Null',
            __Unused17: 'Null',
            __Unused18: 'Null',
            __Unused19: 'Null',
            __Unused20: 'Null',
            __Unused21: 'Null',
            __Unused22: 'Null',
            __Unused23: 'Null',
            __Unused24: 'Null',
            __Unused25: 'Null',
            __Unused26: 'Null',
            __Unused27: 'Null',
            __Unused28: 'Null',
            __Unused29: 'Null',
            __Unused30: 'Null',
            __Unused31: 'Null',
            __Unused32: 'Null',
            __Unused33: 'Null',
            __Unused34: 'Null',
            __Unused35: 'Null',
            __Unused36: 'Null',
            __Unused37: 'Null',
            __Unused38: 'Null',
            __Unused39: 'Null',
            __Unused40: 'Null',
            __Unused41: 'Null',
            __Unused42: 'Null',
            __Unused43: 'Null',
            __Unused44: 'Null',
            __Unused45: 'Null',
            __Unused46: 'Null',
            __Unused47: 'Null',
            __Unused48: 'Null',
            __Unused49: 'Null',
            __Unused50: 'Null',
            __Unused51: 'Null',
            __Unused52: 'Null',
            __Unused53: 'Null',
            __Unused54: 'Null',
            __Unused55: 'Null',
            __Unused56: 'Null',
            __Unused57: 'Null',
            __Unused58: 'Null',
            __Unused59: 'Null',
            __Unused60: 'Null',
            __Unused61: 'Null',
            __Unused62: 'Null',
            __Unused63: 'Null',
            __Unused64: 'Null',
            __Unused65: 'Null',
            __Unused66: 'Null',
            __Unused67: 'Null',
            __Unused68: 'Null',
            __Unused69: 'Null',
            __Unused70: 'Null',
            __Unused71: 'Null',
            __Unused72: 'Null',
            __Unused73: 'Null',
            __Unused74: 'Null',
            __Unused75: 'Null',
            __Unused76: 'Null',
            __Unused77: 'Null',
            __Unused78: 'Null',
            __Unused79: 'Null',
            Collective: 'PalletCollectiveRawOrigin',
            __Unused81: 'Null',
            __Unused82: 'Null',
            __Unused83: 'Null',
            __Unused84: 'Null',
            __Unused85: 'Null',
            __Unused86: 'Null',
            __Unused87: 'Null',
            __Unused88: 'Null',
            __Unused89: 'Null',
            __Unused90: 'Null',
            __Unused91: 'Null',
            __Unused92: 'Null',
            __Unused93: 'Null',
            __Unused94: 'Null',
            __Unused95: 'Null',
            __Unused96: 'Null',
            __Unused97: 'Null',
            __Unused98: 'Null',
            XcmPallet: 'PalletXcmOrigin'
        }
    },
    FrameSystemRawOrigin: {
        _enum: {
            Root: 'Null',
            Signed: 'AccountId32',
            None: 'Null'
        }
    },
    PolkadotRuntimeParachainsOriginPalletOrigin: {
        _enum: {
            Parachain: 'u32'
        }
    },
    PalletCollectiveRawOrigin: {
        _enum: {
            Members: '(u32,u32)',
            Member: 'AccountId32',
            _Phantom: 'Null'
        }
    },
    PalletXcmOrigin: {
        _enum: {
            Xcm: 'XcmV1MultiLocation',
            Response: 'XcmV1MultiLocation'
        }
    },
    SpCoreVoid: 'Null',
    PalletProxyCall: {
        _enum: {
            proxy: {
                real: 'AccountId32',
                forceProxyType: 'Option<RococoRuntimeProxyType>',
                call: 'Call',
            },
            add_proxy: {
                delegate: 'AccountId32',
                proxyType: 'RococoRuntimeProxyType',
                delay: 'u32',
            },
            remove_proxy: {
                delegate: 'AccountId32',
                proxyType: 'RococoRuntimeProxyType',
                delay: 'u32',
            },
            remove_proxies: 'Null',
            anonymous: {
                proxyType: 'RococoRuntimeProxyType',
                delay: 'u32',
                index: 'u16',
            },
            kill_anonymous: {
                spawner: 'AccountId32',
                proxyType: 'RococoRuntimeProxyType',
                index: 'u16',
                height: 'Compact<u32>',
                extIndex: 'Compact<u32>',
            },
            announce: {
                real: 'AccountId32',
                callHash: 'H256',
            },
            remove_announcement: {
                real: 'AccountId32',
                callHash: 'H256',
            },
            reject_announcement: {
                delegate: 'AccountId32',
                callHash: 'H256',
            },
            proxy_announced: {
                delegate: 'AccountId32',
                real: 'AccountId32',
                forceProxyType: 'Option<RococoRuntimeProxyType>',
                call: 'Call'
            }
        }
    },
    PalletMultisigCall: {
        _enum: {
            as_multi_threshold_1: {
                otherSignatories: 'Vec<AccountId32>',
                call: 'Call',
            },
            as_multi: {
                threshold: 'u16',
                otherSignatories: 'Vec<AccountId32>',
                maybeTimepoint: 'Option<PalletMultisigTimepoint>',
                call: 'WrapperKeepOpaque<Call>',
                storeCall: 'bool',
                maxWeight: 'u64',
            },
            approve_as_multi: {
                threshold: 'u16',
                otherSignatories: 'Vec<AccountId32>',
                maybeTimepoint: 'Option<PalletMultisigTimepoint>',
                callHash: '[u8;32]',
                maxWeight: 'u64',
            },
            cancel_as_multi: {
                threshold: 'u16',
                otherSignatories: 'Vec<AccountId32>',
                timepoint: 'PalletMultisigTimepoint',
                callHash: '[u8;32]'
            }
        }
    },
    PalletXcmCall: {
        _enum: {
            send: {
                dest: 'XcmVersionedMultiLocation',
                message: 'XcmVersionedXcm',
            },
            teleport_assets: {
                dest: 'XcmVersionedMultiLocation',
                beneficiary: 'XcmVersionedMultiLocation',
                assets: 'XcmVersionedMultiAssets',
                feeAssetItem: 'u32',
            },
            reserve_transfer_assets: {
                dest: 'XcmVersionedMultiLocation',
                beneficiary: 'XcmVersionedMultiLocation',
                assets: 'XcmVersionedMultiAssets',
                feeAssetItem: 'u32',
            },
            execute: {
                message: 'XcmVersionedXcm',
                maxWeight: 'u64',
            },
            force_xcm_version: {
                location: 'XcmV1MultiLocation',
                xcmVersion: 'u32',
            },
            force_default_xcm_version: {
                maybeXcmVersion: 'Option<u32>',
            },
            force_subscribe_version_notify: {
                location: 'XcmVersionedMultiLocation',
            },
            force_unsubscribe_version_notify: {
                location: 'XcmVersionedMultiLocation',
            },
            limited_reserve_transfer_assets: {
                dest: 'XcmVersionedMultiLocation',
                beneficiary: 'XcmVersionedMultiLocation',
                assets: 'XcmVersionedMultiAssets',
                feeAssetItem: 'u32',
                weightLimit: 'XcmV2WeightLimit',
            },
            limited_teleport_assets: {
                dest: 'XcmVersionedMultiLocation',
                beneficiary: 'XcmVersionedMultiLocation',
                assets: 'XcmVersionedMultiAssets',
                feeAssetItem: 'u32',
                weightLimit: 'XcmV2WeightLimit'
            }
        }
    },
    PalletSudoError: {
        _enum: ['RequireSudo']
    },
    BeefyPrimitivesMmrBeefyNextAuthoritySet: {
        id: 'u64',
        len: 'u32',
        root: 'H256'
    },
    RococoRuntimeValidatorManagerError: 'Null',
    PalletCollectiveVotes: {
        index: 'u32',
        threshold: 'u32',
        ayes: 'Vec<AccountId32>',
        nays: 'Vec<AccountId32>',
        end: 'u32'
    },
    PalletCollectiveError: {
        _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength']
    },
    PalletMembershipError: {
        _enum: ['AlreadyMember', 'NotMember']
    },
    PalletUtilityError: {
        _enum: ['TooManyCalls']
    },
    PalletProxyProxyDefinition: {
        delegate: 'AccountId32',
        proxyType: 'RococoRuntimeProxyType',
        delay: 'u32'
    },
    PalletProxyAnnouncement: {
        real: 'AccountId32',
        callHash: 'H256',
        height: 'u32'
    },
    PalletProxyError: {
        _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
    },
    PalletMultisigMultisig: {
        when: 'PalletMultisigTimepoint',
        deposit: 'u128',
        depositor: 'AccountId32',
        approvals: 'Vec<AccountId32>'
    },
    PalletMultisigError: {
        _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
    },
    PalletXcmQueryStatus: {
        _enum: {
            Pending: {
                responder: 'XcmVersionedMultiLocation',
                maybeNotify: 'Option<(u8,u8)>',
                timeout: 'u32',
            },
            VersionNotifier: {
                origin: 'XcmVersionedMultiLocation',
                isActive: 'bool',
            },
            Ready: {
                response: 'XcmVersionedResponse',
                at: 'u32'
            }
        }
    },
    XcmVersionedResponse: {
        _enum: {
            V0: 'XcmV0Response',
            V1: 'XcmV1Response',
            V2: 'XcmV2Response'
        }
    },
    PalletXcmVersionMigrationStage: {
        _enum: {
            MigrateSupportedVersion: 'Null',
            MigrateVersionNotifiers: 'Null',
            NotifyCurrentTargets: 'Option<Bytes>',
            MigrateAndNotifyOldTargets: 'Null'
        }
    },
    PalletXcmError: {
        _enum: ['Unreachable', 'SendFailure', 'Filtered', 'UnweighableMessage', 'DestinationNotInvertible', 'Empty', 'CannotReanchor', 'TooManyAssets', 'InvalidOrigin', 'BadVersion', 'BadLocation', 'NoSubscription', 'AlreadySubscribed']
    },
    FrameSystemExtensionsCheckSpecVersion: 'Null',
    FrameSystemExtensionsCheckTxVersion: 'Null',
    FrameSystemExtensionsCheckGenesis: 'Null',
    FrameSystemExtensionsCheckNonce: 'Compact<u32>',
    FrameSystemExtensionsCheckWeight: 'Null',
    PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
    RococoRuntimeRuntime: 'Null'
};
