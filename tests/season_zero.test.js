// SPDX-License-Identifier: MIT
import test from 'node:test';
import assert from 'node:assert/strict';
import { SwapioSeasonZeroEngine, OFFICIAL_SOCIAL_QUESTS } from '../dist/index.js';

test('1. SwapioSeasonZeroEngine calculates dynamic prize pool scaling accurately', () => {
  // At $18.5M volume, 18 * $100 = $1,800 + $1,000 base = $2,800
  const engine = new SwapioSeasonZeroEngine(18_500_000);
  const state = engine.getCompetitionState();

  assert.equal(state.basePrizePoolUSD, 1_000);
  assert.equal(state.maxPrizePoolUSD, 10_000);
  assert.equal(state.effectivePrizePoolUSD, 2_800);
  assert.equal(state.eligibleTopTradersCount, 20);
});

test('2. Prize pool strictly respects $10,000 cap at extreme trading volumes', () => {
  // $120M volume should cap out at $10,000
  const engine = new SwapioSeasonZeroEngine(120_000_000);
  const state = engine.getCompetitionState();

  assert.equal(state.effectivePrizePoolUSD, 10_000);
});

test('3. registerTrader grants 5,000 XP referral bonus and records trading volume', () => {
  const engine = new SwapioSeasonZeroEngine(10_000_000);
  let profile = engine.registerTrader('71bb39189434e9dca9530c14f1959945ff', true);

  assert.equal(profile.baseXp, 5_000);
  assert.equal(profile.totalXp, 5_000);
  assert.equal(profile.referralRebatePct, 25.0);

  // Trade $250 -> 2,500 XP
  profile = engine.recordTrade(profile, 250);
  assert.equal(profile.tradingVolumeUSD, 250);
  assert.equal(profile.baseXp, 7_500);
  assert.equal(profile.totalXp, 7_500);
});

test('4. completeQuest awards quest XP and increments total XP balance', () => {
  const engine = new SwapioSeasonZeroEngine(10_000_000);
  let profile = engine.registerTrader('71bb39189434e9dca9530c14f1959945ff', false);

  assert.equal(profile.totalXp, 0);

  profile = engine.completeQuest(profile, 'quest_x_follow'); // +1500 XP
  profile = engine.completeQuest(profile, 'quest_x_repost'); // +2000 XP

  assert.equal(profile.questXp, 3_500);
  assert.equal(profile.totalXp, 3_500);
});
