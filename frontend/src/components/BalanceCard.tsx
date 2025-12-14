export default function BalanceCard({ total }: { total: string }) {
  return (
    <div className="glass-card p-4 rounded">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <div className="text-secondary small">Total Balance</div>
          <div className="fs-3 fw-bold mt-1">{total}</div>
        </div>

        <span className="badge bg-success text-dark px-3 py-2 rounded-pill">
          Compliance: 100% ✓
        </span>
      </div>
    </div>
  );
}
