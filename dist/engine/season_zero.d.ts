import { PumpThePoolState, TraderSeasonProfile, SocialQuestItem } from '../types.js';
export declare const OFFICIAL_SOCIAL_QUESTS: SocialQuestItem[];
export declare class SwapioSeasonZeroEngine {
    private competitionState;
    constructor(initialVolumeUSD?: number);
    getCompetitionState(): PumpThePoolState;
    /**
     * Calculates the dynamic prize pool growth:
     * Starts at $1,000, every $1M in total volume adds another $100, capped at $10,000.
     */
    recalculatePrizePool(): number;
    /**
     * Initializes a new trader profile with optional referral 5,000 XP bonus.
     */
    registerTrader(traderAddress: string, hasReferral?: boolean): TraderSeasonProfile;
    /**
     * Simulates trade volume and awards Season Zero XP (10 XP per $1 traded).
     */
    recordTrade(profile: TraderSeasonProfile, volumeUSD: number): TraderSeasonProfile;
    /**
     * Completes a social quest and adds XP.
     */
    completeQuest(profile: TraderSeasonProfile, questId: string): TraderSeasonProfile;
}
