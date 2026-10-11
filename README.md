# Swap.io Season Zero & Pump the Pool 3 Simulator 💎⚡

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tests](https://img.shields.io/badge/Tests-4%2F4%20Passed-brightgreen)](tests/season_zero.test.js)
[![Superteam Earn](https://img.shields.io/badge/Superteam-Swap.io%20Bounty%20%24500-cyan)](https://superteam.fun/earn/listing/make-a-video-season-zero-pump-the-pool-3-and-social-quests)
[![Live Simulator](https://img.shields.io/badge/Live%20Simulator-GitHub%20Pages-success)](https://liutingqiu.github.io/swapio-season-zero-showcase/)

**Interactive Volume Scaler, Dynamic Prize Pool Engine, and Social Quests XP Booster for Swap.io on Solana.**

Submitted to the **Superteam Earn • Swap.io Video Campaign Bounty ($500 USDC Prize Pool)**.

---

## 🌟 Overview

[Swap.io](https://swap.io) is Solana's premier DEX aggregator that compares 5+ aggregators on every trade to ensure users always execute at the best price.

**Swap.io Season Zero Showcase** includes:
1. **Pump the Pool 3 Dynamic Scaler:** Starts at $1,000, adding +$100 per $1M in community volume up to $10,000 USDC.
2. **5,000 XP Referral Headstart:** Simulates instant XP bonuses and 25% lifetime fee rebates.
3. **Social Quests XP Tracker:** Completes tasks to boost leaderboard rankings.
4. **Live Interactive Web Studio:** Fully responsive simulator deployed on GitHub Pages.

---

## 🌐 Live Interactive Simulator

Try the live trading calculator and prize pool scaler online:  
👉 **[https://liutingqiu.github.io/swapio-season-zero-showcase/](https://liutingqiu.github.io/swapio-season-zero-showcase/)**

---

## 📦 Quick Start & Usage

```bash
git clone https://github.com/liutingqiu/swapio-season-zero-showcase.git
cd swapio-season-zero-showcase
npm install
npm test
```

### TypeScript / ESM Example

```typescript
import { SwapioSeasonZeroEngine } from 'swapio-season-zero-showcase';

// 1. Initialize engine with current competition volume
const engine = new SwapioSeasonZeroEngine(18_500_000);
console.log('Effective Prize Pool:', engine.getCompetitionState().effectivePrizePoolUSD);

// 2. Register trader with referral code (grants 5,000 XP)
let trader = engine.registerTrader('71bb39189434e9dca9530c14f1959945ff', true);

// 3. Trade $500 -> earn 5,000 XP & pump pool
trader = engine.recordTrade(trader, 500);
console.log(`Total Trader XP: ${trader.totalXp}`);
```

---

## 🧪 Automated Test Suite

```bash
node --test tests/season_zero.test.js
```

Output:
```text
✔ 1. SwapioSeasonZeroEngine calculates dynamic prize pool scaling accurately (1.1ms)
✔ 2. Prize pool strictly respects $10,000 cap at extreme trading volumes (0.7ms)
✔ 3. registerTrader grants 5,000 XP referral bonus and records trading volume (0.6ms)
✔ 4. completeQuest awards quest XP and increments total XP balance (0.3ms)

ℹ pass 4
ℹ fail 0
```

---

## 📖 Competition Documentation

Read the full strategy breakdown and video script:  
👉 **[PITCH_DECK.md](PITCH_DECK.md)**

---

## 📄 License

Released under the [MIT License](LICENSE).
