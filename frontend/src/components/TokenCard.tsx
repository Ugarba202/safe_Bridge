import type { Token } from "../types";

export default function TokenCard({ token }: { token: Token }) {
  const glow = token.color === "orange" ? "shadow-[0_10px_30px_rgba(255,165,0,0.12)]" : token.color === "blue" ? "shadow-[0_10px_30px_rgba(0,120,255,0.12)]" : "shadow-[0_10px_30px_rgba(0,255,150,0.08)]";
  return (
    <div className={`glass p-4 rounded-lg ${glow}`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-gray-300">{token.symbol}</div>
          <div className="text-lg font-semibold">{token.balance}</div>
        </div>
        <div className="text-sm text-gray-400">{token.fiat}</div>
      </div>
    </div>
  );
}
