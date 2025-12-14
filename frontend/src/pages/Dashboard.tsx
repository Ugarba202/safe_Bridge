export default function Dashboard() {
  return (
    <section className="py-4">
      {/* Top Section */}
      <div className="row g-3">
        {/* Total Balance */}
        <div className="col-12 col-md-4">
          <div className="glass-card p-3 rounded">
            <h3 className="small text-secondary">Total Balance</h3>
            <div className="h2 fw-bold mt-2">₦2,450,000</div>
            <div className="small text-success mt-1 d-inline-flex align-items-center gap-1">
              ✅ Compliance: 100%
            </div>
          </div>
        </div>

        {/* Portfolio */}
        <div className="col-12 col-md-8">
          <div className="glass-card p-3 rounded">
            <h3 className="small text-secondary">Portfolio</h3>
            <div className="d-flex gap-3 mt-3">
              <div className="flex-fill p-3 rounded" style={{ background: "linear-gradient(135deg, rgba(255,165,0,0.2), transparent)" }}>
                <div className="small text-secondary">Bitcoin</div>
                <div className="fw-semibold fs-5 mt-2">0.5 BTC</div>
              </div>
              <div className="flex-fill p-3 rounded" style={{ background: "linear-gradient(135deg, rgba(0,120,255,0.2), transparent)" }}>
                <div className="small text-secondary">Ethereum</div>
                <div className="fw-semibold fs-5 mt-2">2.3 ETH</div>
              </div>
              <div className="flex-fill p-3 rounded" style={{ background: "linear-gradient(135deg, rgba(0,255,150,0.2), transparent)" }}>
                <div className="small text-secondary">USDT</div>
                <div className="fw-semibold fs-5 mt-2">$5,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="row g-3 mt-3">
        {/* Transaction Volume */}
        <div className="col-12 col-lg-8">
          <div className="glass-card p-3 rounded">
            <h3 className="small text-secondary">Transaction Volume</h3>
            <div className="d-flex align-items-center justify-content-center mt-3" style={{ height: "16rem", background: "rgba(255,255,255,0.02)", borderRadius: ".5rem", color: "#6c757d" }}>
              [Chart placeholder]
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-12 col-lg-4">
          <div className="glass-card p-3 rounded">
            <h3 className="small text-secondary">Quick Actions</h3>
            <div className="row g-2 mt-2">
              <div className="col-6">
                <button className="btn w-100" style={{ background: "rgba(14,211,233,0.1)" }}>Send</button>
              </div>
              <div className="col-6">
                <button className="btn w-100" style={{ background: "rgba(139,92,246,0.1)" }}>Swap</button>
              </div>
              <div className="col-6">
                <button className="btn w-100" style={{ background: "rgba(16,185,129,0.1)" }}>Receive</button>
              </div>
              <div className="col-6">
                <button className="btn w-100" style={{ background: "rgba(253,224,71,0.1)" }}>Stake</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
