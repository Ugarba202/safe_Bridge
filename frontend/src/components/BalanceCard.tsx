
export default function BalanceCard({ total }: { total: string }) {
  return (
    <div className="glass p-5 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-300">Total Balance</div>
          <div className="text-2xl font-bold mt-1">{total}</div>
        </div>
        <div className="text-sm bg-green-600 px-3 py-1 rounded-full text-black">Compliance: 100% ✓</div>
      </div>
    </div>
  );
}
