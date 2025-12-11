import type { Token, Tx } from "../types";

export function fetchMockTokens(): Promise<Token[]> {
  return Promise.resolve([
    { symbol: "BTC", balance: "0.5 BTC", fiat: "₦42,500,000", color: "orange" },
    { symbol: "ETH", balance: "2.3 ETH", fiat: "₦5,430,000", color: "blue" },
    { symbol: "USDT", balance: "$5,000", fiat: "₦3,250,000", color: "green" },
  ]);
}

export function fetchMockTxs(): Promise<Tx[]> {
  return Promise.resolve([
    { id: "tx1", title: "Salary Payment", tagColor: "bg-green-400", amount: "+₦500,000", time: "2 hours ago", positive: true },
    { id: "tx2", title: "ETH → USDT Swap", tagColor: "bg-blue-400", amount: "-0.5 ETH", time: "Yesterday", positive: false },
    { id: "tx3", title: "P2P Transfer", tagColor: "bg-yellow-400", amount: "+₦50,000", time: "3 days ago", positive: true },
  ]);
}

export function fetchMockCompliance() {
  return Promise.resolve({
    score: 100,
    taxDue: "₦245,000",
    taxProgress: 85,
  });
}
