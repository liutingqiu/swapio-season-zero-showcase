# Swap.io Season Zero & Pump the Pool 3 Simulator 💎⚡

> **Submitted to Superteam Earn • Swap.io Season Zero, Pump the Pool 3 and Social Quests Bounty ($500 USDC Prize Pool)**  
> **Platform:** Swap.io Multi-DEX Aggregator on Solana ([swap.io](https://swap.io))  
> **Referral Dashboard:** [https://swap.io/referrals/dashboard](https://swap.io/referrals/dashboard) (5,000 XP Headstart & 25% Fee Rebate)  
> **Live Interactive Simulator:** [https://liutingqiu.github.io/swapio-season-zero-showcase/](https://liutingqiu.github.io/swapio-season-zero-showcase/)  
> **Open Source GitHub Repository:** [https://github.com/liutingqiu/swapio-season-zero-showcase](https://github.com/liutingqiu/swapio-season-zero-showcase)  
> **Author & Lead Engineer:** Tingqiu Liu (`@liutingqiu`, `tianqi689@gmail.com`)

---

## 🎯 Executive Summary & The Problem

Solana traders frequently leave significant returns on the table by swapping through standalone DEXs or single aggregators:
1. **Hidden Price Discrepancies:** No single routing algorithm wins 100% of the time across volatile pools and long-tail meme tokens.
2. **Missing Out on Ecosystem Rewards:** Users often trade without realizing they can earn XP, climb trading leaderboards, and unlock fee share rebates.
3. **Complex Competition Mechanics:** Understanding how trading volume dynamically expands the **Pump the Pool 3** prize pot while accumulating Season Zero XP.

---

## 💡 The Solution: Swap.io Ecosystem Architecture

Swap.io redefines Solana trading by combining multi-aggregator routing with a rewarding community campaign:

### 1. Multi-Aggregator Price Superiority
- Compares **5+ aggregators** simultaneously on every transaction.
- Automatically routes splits through the cheapest execution path, ensuring traders never overpay on slippage or priority fees.

### 2. Pump the Pool 3: Dynamic Growing Prize Pool
- Starts at a guaranteed **$1,000 USDC** base prize pool.
- **Dynamic Scale Formula:** For every **$1,000,000 USD** in cumulative community volume, **$100 USDC** is added to the pot, scaling all the way to **$10,000 USDC**.
- The top 20 traders by volume split the entire prize pool!

### 3. Season Zero XP & 5,000 XP Referral Headstart
- Every swap earns Season Zero XP (10 XP per $1 traded).
- Onboarding through a referral link grants a **5,000 XP head start**, while the referrer receives a **25% lifetime share** of trading fees.

### 4. Social Quests Booster
- Instant XP boosts for engaging with official community quests (following on X, reposting updates, and executing first swaps).

---

## 🛠️ Architecture & Tech Stack

```text
swapio-season-zero-showcase/
├── src/
│   ├── types.ts                   # Competition state, trader profiles, social quest schemas
│   ├── engine/
│   │   └── season_zero.ts         # Dynamic prize pool scaler & XP calculation engine
│   └── index.ts                   # Public library exports
├── tests/
│   └── season_zero.test.js        # 4 automated unit tests (scaling, cap, referrals, quests)
├── index.html                     # Live interactive web simulator on GitHub Pages
├── PITCH_DECK.md                  # Hackathon pitch deck & video script
└── README.md                      # Developer documentation & quickstart
```

- **Runtime:** Node.js (ESM), TypeScript 5.6
- **Test Suite:** `node:test` + `node:assert/strict` (4/4 passed, 100% green)
- **Frontend:** Pure HTML5/CSS/JS (Swap.io Cyan & Solana Green aesthetic, deployed on GitHub Pages)
- **Ecosystem:** Solana Mainnet, Multi-DEX Aggregators, Swap.io Protocol

---

## 🔬 Test Suite Verification

```text
✔ 1. SwapioSeasonZeroEngine calculates dynamic prize pool scaling accurately (1.1ms)
✔ 2. Prize pool strictly respects $10,000 cap at extreme trading volumes (0.7ms)
✔ 3. registerTrader grants 5,000 XP referral bonus and records trading volume (0.6ms)
✔ 4. completeQuest awards quest XP and increments total XP balance (0.3ms)

ℹ pass 4
ℹ fail 0
```

---

## 🏆 Project Deliverables & Links

- **Live Interactive Simulator:** [https://liutingqiu.github.io/swapio-season-zero-showcase/](https://liutingqiu.github.io/swapio-season-zero-showcase/)
- **GitHub Repository:** [https://github.com/liutingqiu/swapio-season-zero-showcase](https://github.com/liutingqiu/swapio-season-zero-showcase)
- **Author Contact:** Tingqiu Liu (`tianqi689@gmail.com`) / GitHub: `liutingqiu`

---
*Built with ❤️ for Swap.io, Superteam Earn, and the Global Solana Community.*
