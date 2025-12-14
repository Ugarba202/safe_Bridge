import type { Token } from "../types";

export default function TokenCard({ token }: { token: Token }) {
  // React style object
  let glowStyle: React.CSSProperties = {};

  if (token.color === "orange") {
    glowStyle = { boxShadow: "0 10px 30px rgba(255,165,0,0.12)" };
  } else if (token.color === "blue") {
    glowStyle = { boxShadow: "0 10px 30px rgba(0,120,255,0.12)" };
  } else {
    glowStyle = { boxShadow: "0 10px 30px rgba(0,255,150,0.08)" };
  }

  return (
    <div className="glass-card p-3 rounded" style={glowStyle}>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <div className="small text-secondary">{token.symbol}</div>
          <div className="fw-semibold fs-5">{token.balance}</div>
        </div>
        <div className="small text-muted">{token.fiat}</div>
      </div>
    </div>
  );
}
