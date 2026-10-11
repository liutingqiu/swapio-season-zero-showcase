export const OFFICIAL_SOCIAL_QUESTS = [
    {
        questId: 'quest_x_follow',
        name: 'Follow @swapdotio on X',
        platform: 'X_TWITTER',
        rewardXp: 1500,
        isCompleted: false
    },
    {
        questId: 'quest_x_repost',
        name: 'Repost Pump the Pool 3 Announcement',
        platform: 'X_TWITTER',
        rewardXp: 2000,
        isCompleted: false
    },
    {
        questId: 'quest_first_swap',
        name: 'Execute First Multi-DEX Aggregated Swap',
        platform: 'X_TWITTER',
        rewardXp: 3000,
        isCompleted: false
    }
];
export class SwapioSeasonZeroEngine {
    competitionState;
    constructor(initialVolumeUSD = 18_500_000) {
        this.competitionState = {
            basePrizePoolUSD: 1_000,
            maxPrizePoolUSD: 10_000,
            currentVolumeUSD: initialVolumeUSD,
            incrementPerMillionUSD: 100,
            effectivePrizePoolUSD: 0,
            eligibleTopTradersCount: 20
        };
        this.recalculatePrizePool();
    }
    getCompetitionState() {
        this.recalculatePrizePool();
        return { ...this.competitionState };
    }
    /**
     * Calculates the dynamic prize pool growth:
     * Starts at $1,000, every $1M in total volume adds another $100, capped at $10,000.
     */
    recalculatePrizePool() {
        const millionsTraded = Math.floor(this.competitionState.currentVolumeUSD / 1_000_000);
        const bonus = millionsTraded * this.competitionState.incrementPerMillionUSD;
        const pool = Math.min(this.competitionState.maxPrizePoolUSD, this.competitionState.basePrizePoolUSD + bonus);
        this.competitionState.effectivePrizePoolUSD = pool;
        return pool;
    }
    /**
     * Initializes a new trader profile with optional referral 5,000 XP bonus.
     */
    registerTrader(traderAddress, hasReferral = true) {
        const referralBonusXp = hasReferral ? 5_000 : 0;
        return {
            traderAddress,
            referralCodeUsed: hasReferral,
            baseXp: referralBonusXp,
            questXp: 0,
            tradingVolumeUSD: 0,
            totalXp: referralBonusXp,
            referralRebatePct: 25.0
        };
    }
    /**
     * Simulates trade volume and awards Season Zero XP (10 XP per $1 traded).
     */
    recordTrade(profile, volumeUSD) {
        profile.tradingVolumeUSD += volumeUSD;
        this.competitionState.currentVolumeUSD += volumeUSD;
        this.recalculatePrizePool();
        const xpEarned = Math.floor(volumeUSD * 10);
        profile.baseXp += xpEarned;
        profile.totalXp = profile.baseXp + profile.questXp;
        return profile;
    }
    /**
     * Completes a social quest and adds XP.
     */
    completeQuest(profile, questId) {
        const quest = OFFICIAL_SOCIAL_QUESTS.find(q => q.questId === questId);
        if (!quest) {
            throw new Error(`Quest not found: ${questId}`);
        }
        profile.questXp += quest.rewardXp;
        profile.totalXp = profile.baseXp + profile.questXp;
        return profile;
    }
}
