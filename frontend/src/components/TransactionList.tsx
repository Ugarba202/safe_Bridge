import type { Tx } from "../types";

export default function TransactionList({ items }: { items: Tx[] }) {
  return (
    <div className="glass-card p-3 rounded">
      <h3 className="fs-5 fw-semibold mb-3">Recent Transactions</h3>
      <ul className="list-unstyled d-flex flex-column gap-2">
        {items.map((t) => (
          <li key={t.id} className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <span
                className="rounded-circle"
                style={{ width: "0.75rem", height: "0.75rem", backgroundColor: t.tagColor }}
              />
              <div>
                <div className="small">{t.title}</div>
                <div className="text-muted small">{t.time}</div>
              </div>
            </div>
            <div
              className={`fw-medium ${t.positive ? "text-success" : "text-danger"}`}
            >
              {t.amount}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
