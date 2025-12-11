
import type { Tx } from "../types";

export default function TransactionList({ items }: { items: Tx[] }) {
  return (
    <div className="glass p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-3">Recent Transactions</h3>
      <ul className="flex flex-col gap-3">
        {items.map((t) => (
          <li key={t.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className={`w-3 h-3 rounded-full ${t.tagColor}`} />
              <div>
                <div className="text-sm">{t.title}</div>
                <div className="text-xs text-gray-400">{t.time}</div>
              </div>
            </div>
            <div className={`${t.positive ? "text-green-400" : "text-red-400"} font-medium`}>{t.amount}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
