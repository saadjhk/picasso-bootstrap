import type { Enum, Null } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { EthereumAccountId } from '@polkadot/types/interfaces/eth';
import type { EcdsaSignature, MultiSignature } from '@polkadot/types/interfaces/extrinsics';
import type { ParachainInherentData, PersistedValidationData } from '@polkadot/types/interfaces/parachains';
import type { AccountId32 } from '@polkadot/types/interfaces/runtime';
export interface ComposableTraitsAssetsXcmAssetLocation extends Null {
}
export interface ComposableTraitsAuctionAuctionStepFunction extends Null {
}
export interface ComposableTraitsBondedFinanceBondOffer extends Null {
}
export interface ComposableTraitsCallFilterCallFilterEntry extends Null {
}
export interface ComposableTraitsDefiSell extends Null {
}
export interface ComposableTraitsDefiTake extends Null {
}
export interface ComposableTraitsGovernanceSignedRawOrigin extends Null {
}
export interface ComposableTraitsVaultVaultConfig extends Null {
}
export interface ComposableTraitsVestingVestingSchedule extends Null {
}
export interface CumulusPalletDmpQueueConfigData extends Null {
}
export interface CumulusPalletDmpQueuePageIndexData extends Null {
}
export interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Null {
}
export interface CumulusPalletXcmpQueueInboundStatus extends Null {
}
export interface CumulusPalletXcmpQueueOutboundStatus extends Null {
}
export interface CumulusPalletXcmpQueueQueueConfigData extends Null {
}
export interface CumulusPrimitivesParachainInherentParachainInherentData extends ParachainInherentData {
}
export interface DaliRuntimeOpaqueSessionKeys extends Null {
}
export interface DaliRuntimeOriginCaller extends Null {
}
export interface OrmlTokensAccountData extends Null {
}
export interface OrmlTokensBalanceLock extends Null {
}
export interface PalletAssetsRegistryCandidateStatus extends Null {
}
export interface PalletCollatorSelectionCandidateInfo extends Null {
}
export interface PalletCrowdloanRewardsModelsProof extends Enum {
    readonly isRelayChain: boolean;
    readonly asRelayChain: ITuple<[AccountId32, MultiSignature]>;
    readonly isEthereum: boolean;
    readonly asEthereum: EcdsaSignature;
    readonly type: 'RelayChain' | 'Ethereum';
}
export interface PalletCrowdloanRewardsModelsRemoteAccount extends Enum {
    readonly isRelayChain: boolean;
    readonly asRelayChain: AccountId32;
    readonly isEthereum: boolean;
    readonly asEthereum: EthereumAccountId;
    readonly type: 'RelayChain' | 'Ethereum';
}
export interface PalletCrowdloanRewardsReward extends Null {
}
export interface PalletDemocracyConviction extends Null {
}
export interface PalletDemocracyPreimageStatus extends Null {
}
export interface PalletDemocracyReferendumInfo extends Null {
}
export interface PalletDemocracyReleases extends Null {
}
export interface PalletDemocracyVoteAccountVote extends Null {
}
export interface PalletDemocracyVoteThreshold extends Null {
}
export interface PalletDemocracyVoteVoting extends Null {
}
export interface PalletDutchAuctionSellOrder extends Null {
}
export interface PalletDutchAuctionTakeOrder extends Null {
}
export interface PalletIdentityBitFlags extends Null {
}
export interface PalletIdentityIdentityInfo extends Null {
}
export interface PalletIdentityJudgement extends Null {
}
export interface PalletIdentityRegistrarInfo extends Null {
}
export interface PalletIdentityRegistration extends Null {
}
export interface PalletOracleAssetInfo extends Null {
}
export interface PalletOraclePrePrice extends Null {
}
export interface PalletOraclePrice extends Null {
}
export interface PalletOracleWithdraw extends Null {
}
export interface PalletSchedulerReleases extends Null {
}
export interface PalletSchedulerScheduledV2 extends Null {
}
export interface PalletTreasuryProposal extends Null {
}
export interface PalletVaultModelsStrategyOverview extends Null {
}
export interface PalletVaultModelsVaultInfo extends Null {
}
export interface PolkadotParachainPrimitivesXcmpMessageFormat extends Null {
}
export interface PolkadotPrimitivesV1AbridgedHostConfiguration extends Null {
}
export interface PolkadotPrimitivesV1PersistedValidationData extends PersistedValidationData {
}
export interface SpConsensusAuraSr25519AppSr25519Public extends Null {
}
export interface XcmVersionedMultiAsset extends Null {
}
export declare type PHANTOM_DEFAULT = 'default';
