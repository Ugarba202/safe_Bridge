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
    <div className="mb-4">
      <IntentInput onSubmit={handle} />

      {result && (
        <div className="glass-card p-4 rounded mt-3">
          <div className="small text-secondary">Best Route Found 🎯</div>

          {/* Route */}
          <div className="d-flex flex-wrap gap-2 my-3">
            {result.route.map((r: string, i: number) => (
              <div
                key={i}
                className="px-3 py-1 rounded text-white"
                style={{ backgroundColor: "#1a1a1a" }}
              >
                {r}
                {i < result.route.length - 1 && " →"}
              </div>
            ))}
          </div>

          {/* Receive Amount */}
          <div className="h2 fw-bold">{result.receive}</div>
          <div className="small text-muted mt-1">{result.eta}</div>

          {/* Fees */}
          <div className="mt-3 small text-secondary">
            Fees: Network: {result.fees.network} • Exchange: {result.fees.exchange}
          </div>

          {/* Execute Button */}
          <div className="mt-4">
            <button
              className="btn fw-semibold text-black"
              style={{ 
                background: "linear-gradient(90deg, #06b6d4, #8b5cf6)",
                width: "100%"
              }}
            >
              Execute Swap
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
