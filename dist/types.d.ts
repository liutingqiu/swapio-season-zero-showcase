export interface PumpThePoolState {
    basePrizePoolUSD: number;
    maxPrizePoolUSD: number;
    currentVolumeUSD: number;
    incrementPerMillionUSD: number;
    effectivePrizePoolUSD: number;
    eligibleTopTradersCount: 20;
}
export interface TraderSeasonProfile {
    traderAddress: string;
    referralCodeUsed: boolean;
    baseXp: number;
    questXp: number;
    tradingVolumeUSD: number;
    totalXp: number;
    referralRebatePct: number;
}
export interface SocialQuestItem {
    questId: string;
    name: string;
    platform: 'X_TWITTER' | 'TELEGRAM' | 'DISCORD';
    rewardXp: number;
    isCompleted: boolean;
}
