export default function Dashboard() {
  return (
    <section className="py-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card">
          <h3 className="text-sm text-slate-300">Total Balance</h3>
          <div className="mt-3 text-3xl font-bold">₦2,450,000</div>
          <div className="mt-2 text-xs text-green-300 inline-flex items-center gap-2">✅ Compliance: 100%</div>
        </div>

        <div className="glass-card md:col-span-2">
          <h3 className="text-sm text-slate-300">Portfolio</h3>
          <div className="mt-4 flex gap-4">
            <div className="flex-1 bg-gradient-to-br from-orange-600/20 to-transparent rounded-xl p-4">
              <div className="text-sm text-slate-300">Bitcoin</div>
              <div className="mt-2 font-semibold text-lg">0.5 BTC</div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-blue-600/20 to-transparent rounded-xl p-4">
              <div className="text-sm text-slate-300">Ethereum</div>
              <div className="mt-2 font-semibold text-lg">2.3 ETH</div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-green-600/20 to-transparent rounded-xl p-4">
              <div className="text-sm text-slate-300">USDT</div>
              <div className="mt-2 font-semibold text-lg">$5,000</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass-card lg:col-span-2">
          <h3 className="text-sm text-slate-300">Transaction Volume</h3>
          <div className="h-64 mt-4 bg-gradient-to-b from-white/2 to-transparent rounded-xl flex items-center justify-center text-slate-500">[Chart placeholder]</div>
        </div>

        <aside className="glass-card">
          <h3 className="text-sm text-slate-300">Quick Actions</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button className="px-3 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20">Send</button>
            <button className="px-3 py-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20">Swap</button>
            <button className="px-3 py-2 rounded-lg bg-green-500/10 hover:bg-green-500/20">Receive</button>
            <button className="px-3 py-2 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20">Stake</button>
          </div>
        </aside>
      </div>
    </section>
  );
}
