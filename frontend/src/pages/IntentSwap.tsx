import { useState } from "react";
import IntentInput from "../components/IntentInput";

export default function IntentSwap() {
  const [result, setResult] = useState<any | null>(null);
  const handle = (_text: string) => {
    // Simple regex-based "intent parsing" mock
    // We'll simulate a route result
    const simulated = {
      route: ["ETH", "DEX", "USDT", "P2P", "Bank"],
      receive: "₦49,850",
      eta: "By 2 PM Tomorrow",
      fees: { network: "₦50", exchange: "₦100" },
    };
    setResult(simulated);
  };

  return (
    <div className="space-y-4">
      <IntentInput onSubmit={handle} />
      {result && (
        <div className="glass p-4 rounded-lg">
          <div className="text-sm text-gray-300">Best Route Found 🎯</div>
          <div className="flex items-center gap-2 my-3">
            {result.route.map((r: string, i: number) => (
              <div key={i} className="px-3 py-1 bg-gray-900 rounded">{r}{i < result.route.length - 1 && " →"}</div>
            ))}
          </div>
          <div className="text-2xl font-bold">{result.receive}</div>
          <div className="text-sm text-gray-400 mt-1">{result.eta}</div>
          <div className="mt-3 text-xs text-gray-300">Fees: Network: {result.fees.network} • Exchange: {result.fees.exchange}</div>
          <div className="mt-4">
            <button className="px-6 py-3 rounded bg-gradient-to-r from-cyan-400 to-purple-600 text-black font-semibold">Execute Swap</button>
          </div>
        </div>
      )}
    </div>
  );
}
