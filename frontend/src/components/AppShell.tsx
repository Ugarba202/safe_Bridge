import { Link, Outlet } from "react-router-dom";
import WalletConnectButton from "./WalletConnectButton";

export default function AppShell() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0118] to-[#14002b] text-white">
      <div className="max-w-[1200px] mx-auto p-6">
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold">SafeBridge</div>
            <div className="text-xs text-gray-400">AA · Compliance · DeFi</div>
          </div>
          <div className="flex items-center gap-4">
            <WalletConnectButton />
          </div>
        </header>

        <div className="grid grid-cols-12 gap-6">
          <aside className="col-span-3">
            <div className="glass p-4 rounded-lg">
              <nav className="flex flex-col gap-3">
                <Link to="/" className="text-sm text-gray-200 hover:text-white">Dashboard</Link>
                <Link to="/intent" className="text-sm text-gray-200 hover:text-white">Intent Swap</Link>
                <Link to="/compliance" className="text-sm text-gray-200 hover:text-white">Compliance</Link>
                <Link to="/transactions" className="text-sm text-gray-200 hover:text-white">Transactions</Link>
                <Link to="/settings" className="text-sm text-gray-200 hover:text-white">Settings</Link>
              </nav>
            </div>
          </aside>

          <main className="col-span-9">
            <div className="glass p-6 rounded-lg min-h-[70vh]">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
