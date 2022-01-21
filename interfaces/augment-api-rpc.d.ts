import type { AugmentedRpc } from '@polkadot/rpc-core/types';
import type { Metadata, StorageKey } from '@polkadot/types';
import type { Bytes, HashMap, Json, Null, Option, Text, U256, U64, Vec, bool, u32, u64 } from '@polkadot/types-codec';
import type { AnyNumber, Codec } from '@polkadot/types-codec/types';
import type { ExtrinsicOrHash, ExtrinsicStatus } from '@polkadot/types/interfaces/author';
import type { EpochAuthorship } from '@polkadot/types/interfaces/babe';
import type { BeefySignedCommitment } from '@polkadot/types/interfaces/beefy';
import type { BlockHash } from '@polkadot/types/interfaces/chain';
import type { PrefixedStorageKey } from '@polkadot/types/interfaces/childstate';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { ContractCallRequest, ContractExecResult, ContractInstantiateResult, InstantiateRequest } from '@polkadot/types/interfaces/contracts';
import type { CreatedBlock } from '@polkadot/types/interfaces/engine';
import type { EthAccount, EthCallRequest, EthFilter, EthFilterChanges, EthLog, EthReceipt, EthRichBlock, EthSubKind, EthSubParams, EthSyncStatus, EthTransaction, EthTransactionRequest, EthWork } from '@polkadot/types/interfaces/eth';
import type { Extrinsic } from '@polkadot/types/interfaces/extrinsics';
import type { EncodedFinalityProofs, JustificationNotification, ReportedRoundStates } from '@polkadot/types/interfaces/grandpa';
import type { MmrLeafProof } from '@polkadot/types/interfaces/mmr';
import type { StorageKind } from '@polkadot/types/interfaces/offchain';
import type { FeeDetails, RuntimeDispatchInfo } from '@polkadot/types/interfaces/payment';
import type { RpcMethods } from '@polkadot/types/interfaces/rpc';
import type { AccountId, BlockNumber, H160, H256, H64, Hash, Header, Index, Justification, KeyValue, SignedBlock, StorageData } from '@polkadot/types/interfaces/runtime';
import type { ReadProof, RuntimeVersion, TraceBlockResponse } from '@polkadot/types/interfaces/state';
import type { ApplyExtrinsicResult, ChainProperties, ChainType, Health, NetworkState, NodeRole, PeerInfo, SyncState } from '@polkadot/types/interfaces/system';
import type { IExtrinsic, Observable } from '@polkadot/types/types';
declare module '@polkadot/rpc-core/types/jsonrpc' {
    interface RpcInterface {
        author: {
            hasKey: AugmentedRpc<(publicKey: Bytes | string | Uint8Array, keyType: Text | string) => Observable<bool>>;
            hasSessionKeys: AugmentedRpc<(sessionKeys: Bytes | string | Uint8Array) => Observable<bool>>;
            insertKey: AugmentedRpc<(keyType: Text | string, suri: Text | string, publicKey: Bytes | string | Uint8Array) => Observable<Bytes>>;
            pendingExtrinsics: AugmentedRpc<() => Observable<Vec<Extrinsic>>>;
            removeExtrinsic: AugmentedRpc<(bytesOrHash: Vec<ExtrinsicOrHash> | (ExtrinsicOrHash | {
                Hash: any;
            } | {
                Extrinsic: any;
            } | string | Uint8Array)[]) => Observable<Vec<Hash>>>;
            rotateKeys: AugmentedRpc<() => Observable<Bytes>>;
            submitAndWatchExtrinsic: AugmentedRpc<(extrinsic: IExtrinsic) => Observable<ExtrinsicStatus>>;
            submitExtrinsic: AugmentedRpc<(extrinsic: IExtrinsic) => Observable<Hash>>;
        };
        babe: {
            epochAuthorship: AugmentedRpc<() => Observable<HashMap<AuthorityId, EpochAuthorship>>>;
        };
        beefy: {
            subscribeJustifications: AugmentedRpc<() => Observable<BeefySignedCommitment>>;
        };
        chain: {
            getBlock: AugmentedRpc<(hash?: BlockHash | string | Uint8Array) => Observable<SignedBlock>>;
            getBlockHash: AugmentedRpc<(blockNumber?: BlockNumber | AnyNumber | Uint8Array) => Observable<BlockHash>>;
            getFinalizedHead: AugmentedRpc<() => Observable<BlockHash>>;
            getHeader: AugmentedRpc<(hash?: BlockHash | string | Uint8Array) => Observable<Header>>;
            subscribeAllHeads: AugmentedRpc<() => Observable<Header>>;
            subscribeFinalizedHeads: AugmentedRpc<() => Observable<Header>>;
            subscribeNewHeads: AugmentedRpc<() => Observable<Header>>;
        };
        childstate: {
            getKeys: AugmentedRpc<(childKey: PrefixedStorageKey | string | Uint8Array, prefix: StorageKey | string | Uint8Array | any, at?: Hash | string | Uint8Array) => Observable<Vec<StorageKey>>>;
            getKeysPaged: AugmentedRpc<(childKey: PrefixedStorageKey | string | Uint8Array, prefix: StorageKey | string | Uint8Array | any, count: u32 | AnyNumber | Uint8Array, startKey?: StorageKey | string | Uint8Array | any, at?: Hash | string | Uint8Array) => Observable<Vec<StorageKey>>>;
            getStorage: AugmentedRpc<(childKey: PrefixedStorageKey | string | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: Hash | string | Uint8Array) => Observable<Option<StorageData>>>;
            getStorageEntries: AugmentedRpc<(childKey: PrefixedStorageKey | string | Uint8Array, keys: Vec<StorageKey> | (StorageKey | string | Uint8Array | any)[], at?: Hash | string | Uint8Array) => Observable<Vec<Option<StorageData>>>>;
            getStorageHash: AugmentedRpc<(childKey: PrefixedStorageKey | string | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: Hash | string | Uint8Array) => Observable<Option<Hash>>>;
            getStorageSize: AugmentedRpc<(childKey: PrefixedStorageKey | string | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: Hash | string | Uint8Array) => Observable<Option<u64>>>;
        };
        contracts: {
            call: AugmentedRpc<(callRequest: ContractCallRequest | {
                origin?: any;
                dest?: any;
                value?: any;
                gasLimit?: any;
                storageDepositLimit?: any;
                inputData?: any;
            } | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<ContractExecResult>>;
            getStorage: AugmentedRpc<(address: AccountId | string | Uint8Array, key: H256 | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<Option<Bytes>>>;
            instantiate: AugmentedRpc<(request: InstantiateRequest | {
                origin?: any;
                value?: any;
                gasLimit?: any;
                storageDepositLimit?: any;
                code?: any;
                data?: any;
                salt?: any;
            } | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<ContractInstantiateResult>>;
            rentProjection: AugmentedRpc<(address: AccountId | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<Option<BlockNumber>>>;
        };
        engine: {
            createBlock: AugmentedRpc<(createEmpty: bool | boolean | Uint8Array, finalize: bool | boolean | Uint8Array, parentHash?: BlockHash | string | Uint8Array) => Observable<CreatedBlock>>;
            finalizeBlock: AugmentedRpc<(hash: BlockHash | string | Uint8Array, justification?: Justification) => Observable<bool>>;
        };
        eth: {
            accounts: AugmentedRpc<() => Observable<Vec<H160>>>;
            blockNumber: AugmentedRpc<() => Observable<U256>>;
            call: AugmentedRpc<(request: EthCallRequest | {
                from?: any;
                to?: any;
                gasPrice?: any;
                gas?: any;
                value?: any;
                data?: any;
                nonce?: any;
            } | string | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<Bytes>>;
            chainId: AugmentedRpc<() => Observable<U64>>;
            coinbase: AugmentedRpc<() => Observable<H160>>;
            estimateGas: AugmentedRpc<(request: EthCallRequest | {
                from?: any;
                to?: any;
                gasPrice?: any;
                gas?: any;
                value?: any;
                data?: any;
                nonce?: any;
            } | string | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<U256>>;
            gasPrice: AugmentedRpc<() => Observable<U256>>;
            getBalance: AugmentedRpc<(address: H160 | string | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<U256>>;
            getBlockByHash: AugmentedRpc<(hash: H256 | string | Uint8Array, full: bool | boolean | Uint8Array) => Observable<Option<EthRichBlock>>>;
            getBlockByNumber: AugmentedRpc<(block: BlockNumber | AnyNumber | Uint8Array, full: bool | boolean | Uint8Array) => Observable<Option<EthRichBlock>>>;
            getBlockTransactionCountByHash: AugmentedRpc<(hash: H256 | string | Uint8Array) => Observable<U256>>;
            getBlockTransactionCountByNumber: AugmentedRpc<(block: BlockNumber | AnyNumber | Uint8Array) => Observable<U256>>;
            getCode: AugmentedRpc<(address: H160 | string | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<Bytes>>;
            getFilterChanges: AugmentedRpc<(index: U256 | AnyNumber | Uint8Array) => Observable<EthFilterChanges>>;
            getFilterLogs: AugmentedRpc<(index: U256 | AnyNumber | Uint8Array) => Observable<Vec<EthLog>>>;
            getLogs: AugmentedRpc<(filter: EthFilter | {
                fromBlock?: any;
                toBlock?: any;
                blockHash?: any;
                address?: any;
                topics?: any;
            } | string | Uint8Array) => Observable<Vec<EthLog>>>;
            getProof: AugmentedRpc<(address: H160 | string | Uint8Array, storageKeys: Vec<H256> | (H256 | string | Uint8Array)[], number: BlockNumber | AnyNumber | Uint8Array) => Observable<EthAccount>>;
            getStorageAt: AugmentedRpc<(address: H160 | string | Uint8Array, index: U256 | AnyNumber | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<H256>>;
            getTransactionByBlockHashAndIndex: AugmentedRpc<(hash: H256 | string | Uint8Array, index: U256 | AnyNumber | Uint8Array) => Observable<EthTransaction>>;
            getTransactionByBlockNumberAndIndex: AugmentedRpc<(number: BlockNumber | AnyNumber | Uint8Array, index: U256 | AnyNumber | Uint8Array) => Observable<EthTransaction>>;
            getTransactionByHash: AugmentedRpc<(hash: H256 | string | Uint8Array) => Observable<EthTransaction>>;
            getTransactionCount: AugmentedRpc<(hash: H256 | string | Uint8Array, number?: BlockNumber | AnyNumber | Uint8Array) => Observable<U256>>;
            getTransactionReceipt: AugmentedRpc<(hash: H256 | string | Uint8Array) => Observable<EthReceipt>>;
            getUncleByBlockHashAndIndex: AugmentedRpc<(hash: H256 | string | Uint8Array, index: U256 | AnyNumber | Uint8Array) => Observable<EthRichBlock>>;
            getUncleByBlockNumberAndIndex: AugmentedRpc<(number: BlockNumber | AnyNumber | Uint8Array, index: U256 | AnyNumber | Uint8Array) => Observable<EthRichBlock>>;
            getUncleCountByBlockHash: AugmentedRpc<(hash: H256 | string | Uint8Array) => Observable<U256>>;
            getUncleCountByBlockNumber: AugmentedRpc<(number: BlockNumber | AnyNumber | Uint8Array) => Observable<U256>>;
            getWork: AugmentedRpc<() => Observable<EthWork>>;
            hashrate: AugmentedRpc<() => Observable<U256>>;
            mining: AugmentedRpc<() => Observable<bool>>;
            newBlockFilter: AugmentedRpc<() => Observable<U256>>;
            newFilter: AugmentedRpc<(filter: EthFilter | {
                fromBlock?: any;
                toBlock?: any;
                blockHash?: any;
                address?: any;
                topics?: any;
            } | string | Uint8Array) => Observable<U256>>;
            newPendingTransactionFilter: AugmentedRpc<() => Observable<U256>>;
            protocolVersion: AugmentedRpc<() => Observable<u64>>;
            sendRawTransaction: AugmentedRpc<(bytes: Bytes | string | Uint8Array) => Observable<H256>>;
            sendTransaction: AugmentedRpc<(tx: EthTransactionRequest | {
                from?: any;
                to?: any;
                gasPrice?: any;
                gas?: any;
                value?: any;
                data?: any;
                nonce?: any;
            } | string | Uint8Array) => Observable<H256>>;
            submitHashrate: AugmentedRpc<(index: U256 | AnyNumber | Uint8Array, hash: H256 | string | Uint8Array) => Observable<bool>>;
            submitWork: AugmentedRpc<(nonce: H64 | string | Uint8Array, headerHash: H256 | string | Uint8Array, mixDigest: H256 | string | Uint8Array) => Observable<bool>>;
            subscribe: AugmentedRpc<(kind: EthSubKind | 'newHeads' | 'logs' | 'newPendingTransactions' | 'syncing' | number | Uint8Array, params?: EthSubParams | {
                None: any;
            } | {
                Logs: any;
            } | string | Uint8Array) => Observable<Null>>;
            syncing: AugmentedRpc<() => Observable<EthSyncStatus>>;
            uninstallFilter: AugmentedRpc<(index: U256 | AnyNumber | Uint8Array) => Observable<bool>>;
        };
        grandpa: {
            proveFinality: AugmentedRpc<(begin: BlockHash | string | Uint8Array, end: BlockHash | string | Uint8Array, authoritiesSetId?: u64 | AnyNumber | Uint8Array) => Observable<Option<EncodedFinalityProofs>>>;
            roundState: AugmentedRpc<() => Observable<ReportedRoundStates>>;
            subscribeJustifications: AugmentedRpc<() => Observable<JustificationNotification>>;
        };
        mmr: {
            generateProof: AugmentedRpc<(leafIndex: u64 | AnyNumber | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<MmrLeafProof>>;
        };
        net: {
            listening: AugmentedRpc<() => Observable<bool>>;
            peerCount: AugmentedRpc<() => Observable<Text>>;
            version: AugmentedRpc<() => Observable<Text>>;
        };
        offchain: {
            localStorageGet: AugmentedRpc<(kind: StorageKind | 'PERSISTENT' | 'LOCAL' | number | Uint8Array, key: Bytes | string | Uint8Array) => Observable<Option<Bytes>>>;
            localStorageSet: AugmentedRpc<(kind: StorageKind | 'PERSISTENT' | 'LOCAL' | number | Uint8Array, key: Bytes | string | Uint8Array, value: Bytes | string | Uint8Array) => Observable<Null>>;
        };
        payment: {
            queryFeeDetails: AugmentedRpc<(extrinsic: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<FeeDetails>>;
            queryInfo: AugmentedRpc<(extrinsic: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<RuntimeDispatchInfo>>;
        };
        rpc: {
            methods: AugmentedRpc<() => Observable<RpcMethods>>;
        };
        state: {
            call: AugmentedRpc<(method: Text | string, data: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<Bytes>>;
            getChildKeys: AugmentedRpc<(childStorageKey: StorageKey | string | Uint8Array | any, childDefinition: StorageKey | string | Uint8Array | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Vec<StorageKey>>>;
            getChildReadProof: AugmentedRpc<(childStorageKey: PrefixedStorageKey | string | Uint8Array, keys: Vec<StorageKey> | (StorageKey | string | Uint8Array | any)[], at?: BlockHash | string | Uint8Array) => Observable<ReadProof>>;
            getChildStorage: AugmentedRpc<(childStorageKey: StorageKey | string | Uint8Array | any, childDefinition: StorageKey | string | Uint8Array | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<StorageData>>;
            getChildStorageHash: AugmentedRpc<(childStorageKey: StorageKey | string | Uint8Array | any, childDefinition: StorageKey | string | Uint8Array | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Hash>>;
            getChildStorageSize: AugmentedRpc<(childStorageKey: StorageKey | string | Uint8Array | any, childDefinition: StorageKey | string | Uint8Array | any, childType: u32 | AnyNumber | Uint8Array, key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<u64>>;
            getKeys: AugmentedRpc<(key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Vec<StorageKey>>>;
            getKeysPaged: AugmentedRpc<(key: StorageKey | string | Uint8Array | any, count: u32 | AnyNumber | Uint8Array, startKey?: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Vec<StorageKey>>>;
            getMetadata: AugmentedRpc<(at?: BlockHash | string | Uint8Array) => Observable<Metadata>>;
            getPairs: AugmentedRpc<(prefix: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Vec<KeyValue>>>;
            getReadProof: AugmentedRpc<(keys: Vec<StorageKey> | (StorageKey | string | Uint8Array | any)[], at?: BlockHash | string | Uint8Array) => Observable<ReadProof>>;
            getRuntimeVersion: AugmentedRpc<(at?: BlockHash | string | Uint8Array) => Observable<RuntimeVersion>>;
            getStorage: AugmentedRpc<(<T = Codec>(key: StorageKey | string | Uint8Array | any, block?: Hash | Uint8Array | string) => Observable<T>)>;
            getStorageHash: AugmentedRpc<(key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<Hash>>;
            getStorageSize: AugmentedRpc<(key: StorageKey | string | Uint8Array | any, at?: BlockHash | string | Uint8Array) => Observable<u64>>;
            queryStorage: AugmentedRpc<(<T = Codec[]>(keys: Vec<StorageKey> | (StorageKey | string | Uint8Array | any)[], fromBlock?: Hash | Uint8Array | string, toBlock?: Hash | Uint8Array | string) => Observable<[Hash, T][]>)>;
            queryStorageAt: AugmentedRpc<(<T = Codec[]>(keys: Vec<StorageKey> | (StorageKey | string | Uint8Array | any)[], at?: Hash | Uint8Array | string) => Observable<T>)>;
            subscribeRuntimeVersion: AugmentedRpc<() => Observable<RuntimeVersion>>;
            subscribeStorage: AugmentedRpc<(<T = Codec[]>(keys?: Vec<StorageKey> | (StorageKey | string | Uint8Array | any)[]) => Observable<T>)>;
            traceBlock: AugmentedRpc<(block: Hash | string | Uint8Array, targets: Option<Text> | null | object | string | Uint8Array, storageKeys: Option<Text> | null | object | string | Uint8Array, methods: Option<Text> | null | object | string | Uint8Array) => Observable<TraceBlockResponse>>;
        };
        syncstate: {
            genSyncSpec: AugmentedRpc<(raw: bool | boolean | Uint8Array) => Observable<Json>>;
        };
        system: {
            accountNextIndex: AugmentedRpc<(accountId: AccountId | string | Uint8Array) => Observable<Index>>;
            addLogFilter: AugmentedRpc<(directives: Text | string) => Observable<Null>>;
            addReservedPeer: AugmentedRpc<(peer: Text | string) => Observable<Text>>;
            chain: AugmentedRpc<() => Observable<Text>>;
            chainType: AugmentedRpc<() => Observable<ChainType>>;
            dryRun: AugmentedRpc<(extrinsic: Bytes | string | Uint8Array, at?: BlockHash | string | Uint8Array) => Observable<ApplyExtrinsicResult>>;
            health: AugmentedRpc<() => Observable<Health>>;
            localListenAddresses: AugmentedRpc<() => Observable<Vec<Text>>>;
            localPeerId: AugmentedRpc<() => Observable<Text>>;
            name: AugmentedRpc<() => Observable<Text>>;
            networkState: AugmentedRpc<() => Observable<NetworkState>>;
            nodeRoles: AugmentedRpc<() => Observable<Vec<NodeRole>>>;
            peers: AugmentedRpc<() => Observable<Vec<PeerInfo>>>;
            properties: AugmentedRpc<() => Observable<ChainProperties>>;
            removeReservedPeer: AugmentedRpc<(peerId: Text | string) => Observable<Text>>;
            reservedPeers: AugmentedRpc<() => Observable<Vec<Text>>>;
            resetLogFilter: AugmentedRpc<() => Observable<Null>>;
            syncState: AugmentedRpc<() => Observable<SyncState>>;
            version: AugmentedRpc<() => Observable<Text>>;
        };
        web3: {
            clientVersion: AugmentedRpc<() => Observable<Text>>;
            sha3: AugmentedRpc<(data: Bytes | string | Uint8Array) => Observable<H256>>;
        };
    }
}
