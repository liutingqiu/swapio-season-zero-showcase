// SPDX-License-Identifier: MIT

export interface PumpThePoolState {
  basePrizePoolUSD: number;    // Starts at $1,000 USD
  maxPrizePoolUSD: number;     // Hard cap at $10,000 USD
  currentVolumeUSD: number;    // Cumulative trading volume in competition
  incrementPerMillionUSD: number; // +$100 per $1M volume
  effectivePrizePoolUSD: number;
  eligibleTopTradersCount: 20; // Top 20 traders split the pool
}

export interface TraderSeasonProfile {
  traderAddress: string;
  referralCodeUsed: boolean;
  baseXp: number;
  questXp: number;
  tradingVolumeUSD: number;
  totalXp: number;
  referralRebatePct: number;   // 25% fee rebate to referrer
}

export interface SocialQuestItem {
  questId: string;
  name: string;
  platform: 'X_TWITTER' | 'TELEGRAM' | 'DISCORD';
  rewardXp: number;
  isCompleted: boolean;
}
