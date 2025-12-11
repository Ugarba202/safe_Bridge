# 🌉 SafeBridge Wallet

**The First Account Abstraction Wallet on BlockDAG with Built-In Compliance Intelligence**

---

## 🎯 Overview

SafeBridge is a revolutionary DeFi wallet that solves the biggest barrier to crypto adoption in emerging markets: **regulatory compliance**. Built natively on BlockDAG, SafeBridge combines Account Abstraction (ERC-4337), intent-based DeFi routing, and on-chain compliance to make following crypto regulations easier than breaking them.

**Target Market:** 32M+ crypto users in Nigeria facing bank freezures and new FIRS tax regulations (effective January 2026).

**Category:** DeFi Speedway - Amazing Chain Race Wave 3

---

## 🔥 Problem Statement

### The Compliance Crisis in Emerging Markets

In Nigeria alone, 32 million crypto users face three critical problems:

1. **Bank Account Freezures**
   - Banks freeze accounts suspected of crypto activity
   - No way to prove legitimacy of transactions
   - Users lose access to funds for weeks/months

2. **Tax Reporting Nightmare**
   - New FIRS regulations require detailed transaction reporting (Jan 2026)
   - No tools exist to track and categorize crypto transactions
   - Manual reporting is error-prone and time-consuming

3. **DeFi Accessibility Gap**
   - Traditional DeFi requires technical expertise (gas, slippage, DEX mechanics)
   - Average users want simple outcomes: "I need ₦50,000 by tomorrow"
   - Current wallets don't understand local banking realities

### What's Missing?

Existing solutions are either:
- ✗ Wallets without compliance features
- ✗ Compliance software without wallets
- ✗ Both but not built for BlockDAG's speed and efficiency
- ✗ External tools that can be easily bypassed

---

## 💡 Solution

SafeBridge is the **only solution** that combines:

1. **Account Abstraction (ERC-4337)**
   - Gasless transactions
   - Social recovery (guardian system)
   - Multi-signature security
   - Session keys for recurring payments

2. **On-Chain Compliance Module** ⭐ *Our Innovation*
   - Automatic transaction categorization
   - Real-time tax calculation (CGT, VAT, Income Tax)
   - Cryptographic proof generation
   - FIRS-compatible report export
   - **Built into smart contracts** (can't be bypassed!)

3. **Intent-Based DeFi Router** ⭐ *Our Innovation*
   - Natural language processing: "I need ₦50,000 by tomorrow"
   - Smart route optimization across BlockDAG DEXs
   - P2P marketplace integration
   - Understands Nigerian banking ecosystem

4. **Guardian Compliance System** ⭐ *Novel Feature*
   - Social recovery guardians also verify compliance
   - Multi-sig approval for high-risk operations
   - Community-based security meets regulatory prudence

---

## ✨ Key Features

### For Users

- 🎯 **Intent-Based DeFi**: Just say what you need - "Send $100", "I need ₦50k tomorrow"
- 🛡️ **Automatic Compliance**: Every transaction auto-categorized and tax calculated
- ⚡ **Sub-2 Second Finality**: Leverages BlockDAG's fast transaction speed
- 🔐 **Gasless Transactions**: No need to hold native tokens for gas
- 👥 **Social Recovery**: Never lose your wallet - guardians can help recover
- 📊 **Live Tax Dashboard**: See tax obligations in real-time before you trade
- 📄 **One-Click FIRS Reports**: Generate tax-ready reports instantly

### For Developers

- 🔌 **Open Source**: MIT licensed, fully auditable
- 🧪 **Comprehensive Tests**: 80%+ code coverage
- 📚 **Complete Documentation**: API docs, architecture diagrams, guides
- 🛠️ **Developer SDK**: Easy integration for other dApps
- 🔗 **BlockDAG Native**: Built specifically for BlockDAG's capabilities

### For Nigeria

- 🇳🇬 **FIRS-Compatible**: Reports match Nigerian tax authority requirements
- 💱 **Naira Integration**: Direct NGN on/off ramps via P2P
- 🏦 **Bank-Friendly**: Cryptographic proofs prevent account freezures
- 📱 **Mobile-First**: Designed for Nigerian internet speeds

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     USER INTERFACE                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │ Web App      │  │ Mobile App   │  │ Browser Ext  │    │
│  │ (React)      │  │ (React Native)│  │ (Future)     │    │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘    │
└─────────┼──────────────────┼──────────────────┼───────────┘
          │                  │                  │
          └──────────────────┼──────────────────┘
                             │
┌─────────────────────────────┼─────────────────────────────┐
│                      BACKEND API                           │
│  ┌────────────────────────────────────────────────────┐   │
│  │ Express.js Server (Node.js)                        │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌─────────┐ │   │
│  │  │ Intent Parser│  │ Route        │  │ Tax     │ │   │
│  │  │ (NLP)        │  │ Optimizer    │  │ Calc    │ │   │
│  │  └──────────────┘  └──────────────┘  └─────────┘ │   │
│  └────────────────────────────────────────────────────┘   │
│                             │                              │
│  ┌────────────────────────────────────────────────────┐   │
│  │ MongoDB Database                                   │   │
│  │  ├─ Users                                          │   │
│  │  ├─ Transactions                                   │   │
│  │  └─ Intents                                        │   │
│  └────────────────────────────────────────────────────┘   │
└─────────────────────────────┼─────────────────────────────┘
                              │
┌─────────────────────────────┼─────────────────────────────┐
│                    BLOCKDAG BLOCKCHAIN                     │
│  ┌────────────────────────────────────────────────────┐   │
│  │ Smart Contracts                                    │   │
│  │  ├─ SafeBridgeWallet.sol (ERC-4337)               │   │
│  │  ├─ ComplianceModule.sol (Tax Tracking)           │   │
│  │  ├─ DEXRouter.sol (Token Swaps)                   │   │
│  │  ├─ StakingPool.sol (Earn Rewards)                │   │
│  │  └─ SimpleLending.sol (Borrow/Lend)               │   │
│  └────────────────────────────────────────────────────┘   │
└───────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

### Smart Contracts
- **Language**: Solidity ^0.8.20
- **Framework**: Hardhat
- **Standards**: ERC-4337 (Account Abstraction), ERC-20
- **Testing**: Chai, Waffle
- **Blockchain**: BlockDAG Testnet

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: MongoDB
- **Web3**: Ethers.js v6
- **NLP**: Custom Intent Parser (Pattern Matching + ML-ready)

### Frontend
- **Web**: React + Vite
- **Mobile**: React Native (Expo)
- **Styling**: TailwindCSS + Custom CSS (Glassmorphism)
- **Web3**: Wagmi + Viem
- **State**: Zustand

### DevOps
- **Hosting**: Vercel (Frontend), Railway (Backend)
- **CI/CD**: GitHub Actions
- **Monitoring**: Sentry
- **Analytics**: Mixpanel

---

## 🚀 Getting Started

### Prerequisites

```bash
- Node.js 18+ 
- npm or yarn
- MongoDB (local or Atlas)
- MetaMask or compatible wallet
- Git
```

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/Ugrba202/safebridge-wallet.git
cd safebridge-wallet
```

#### 2. Install Smart Contracts

```bash
cd contracts
npm install

# Compile contracts
npx hardhat compile

# Run tests
npx hardhat test

# Deploy to BlockDAG testnet
npx hardhat run scripts/deploy.js --network blockdag_testnet
```

#### 3. Setup Backend

```bash
cd ../backend
npm install

# Create .env file
cp .env.example .env
# Edit .env with your configuration

# Start MongoDB (if local)
mongod --dbpath=/path/to/data

# Run backend
npm run dev
```

#### 4. Setup Frontend

```bash
cd ../frontend
npm install

# Create .env file
cp .env.example .env
# Add your contract addresses

# Run development server
npm run dev
```

### Environment Variables

**Backend (.env)**
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/safebridge
BLOCKDAG_RPC_URL=https://rpc-testnet.blockdag.network
BLOCKDAG_CHAIN_ID=12345

# Contract Addresses
WALLET_CONTRACT=0x...
COMPLIANCE_CONTRACT=0x...
DEX_CONTRACT=0x...
STAKING_CONTRACT=0x...
LENDING_CONTRACT=0x...
```

**Frontend (.env)**
```env
VITE_API_URL=http://localhost:3000/api
VITE_BLOCKDAG_RPC=https://rpc-testnet.blockdag.network
VITE_CHAIN_ID=12345
```

---

## 📝 Smart Contracts

### SafeBridgeWallet.sol (ERC-4337 AA Wallet)

**Main Functions:**
- `execute(address to, uint256 value, bytes data)` - Execute transactions
- `initiateRecovery(address newOwner)` - Guardian recovery
- `addGuardian(address guardian)` - Add new guardian

**Contract Address (Testnet):** `0x...` 

### ComplianceModule.sol (Tax Tracking)

**Main Functions:**
- `recordTransaction(...)` - Log new transaction with category
- `getTotalTaxOwed(address user)` - Get user's total tax
- `calculateTax(uint256 amount, uint8 category)` - Calculate tax owed

**Contract Address (Testnet):** `0x...`

### DEXRouter.sol (Token Swaps)

**Main Functions:**
- `swap(address tokenIn, address tokenOut, uint256 amountIn, uint256 minAmountOut)` - Execute swap
- `getAmountOut(...)` - Preview swap output
- `createPool(...)` - Create new liquidity pool

**Contract Address (Testnet):** `0x...`

### StakingPool.sol (Earn Rewards)

**Main Functions:**
- `stake(uint256 amount)` - Stake tokens
- `unstake(uint256 amount)` - Withdraw staked tokens
- `claimRewards()` - Claim earned rewards
- `pendingRewards(address user)` - Check pending rewards

**Contract Address (Testnet):** `0x...`

### SimpleLending.sol (Borrow/Lend)

**Main Functions:**
- `depositCollateral(uint256 amount)` - Deposit collateral
- `borrow(uint256 amount)` - Borrow against collateral
- `repay(uint256 amount)` - Repay loan
- `getLoanInfo(address user)` - Check loan status

**Contract Address (Testnet):** `0x...`

---

## 🔌 API Documentation

### Base URL
```
Development: http://localhost:3000/api
Production: https://api.safebridge.app/api
```

### Authentication
All endpoints requiring authentication expect the user's wallet address in the request body or URL parameters.

### Endpoints



### Demo Flow

1. **Connect Wallet** → MetaMask pops up
2. **View Dashboard** → See balance, compliance score, tax owed
3. **Intent Swap** → Type "I need ₦50,000 by tomorrow"
4. **AI Routes** → Shows best DEX + P2P route
5. **Execute** → Transaction completes in <2 seconds
6. **Auto-Categorize** → Transaction tagged as "Capital Gains"
7. **Tax Calculated** → Shows ₦5,000 tax owed
8. **Generate Report** → One-click FIRS-ready PDF

---




---

## 📞 Contact

- **Website**: https://bridge-compliance.vercel.app/
- **Email**: hello@safebridge.app
- **Twitter**: [@SafeBridgeApp](https://twitter.com/SafeBridgeApp)
- **Discord**: [Join our community](https://discord.gg/safebridge)
- **Telegram**: [SafeBridge Official](https://t.me/safebridge)

---



---

**Built with ❤️ in Nigeria for the world** 🇳🇬 → 🌍