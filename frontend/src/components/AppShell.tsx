import { Link, Outlet } from "react-router-dom";
import WalletConnectButton from "./WalletConnectButton";

export default function AppShell() {
  return (
    <div className="app-bg text-white min-vh-100">
      <div className="container-xl py-4">
        {/* Header */}
        <header className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center gap-3">
            <div className="fs-3 fw-bold">SafeBridge</div>
            <div className="small text-secondary">AA · Compliance · DeFi</div>
          </div>

          <WalletConnectButton />
        </header>

        {/* Layout */}
        <div className="row g-4">
          {/* Sidebar */}
          <aside className="col-md-3">
            <div className="glass-card p-4 rounded-3">
              <nav className="d-flex flex-column gap-3">
                <Link className="nav-link text-light p-0" to="/">Dashboard</Link>
                <Link className="nav-link text-light p-0" to="/intent">Intent Swap</Link>
                <Link className="nav-link text-light p-0" to="/compliance">Compliance</Link>
                <Link className="nav-link text-light p-0" to="/transactions">Transactions</Link>
                <Link className="nav-link text-light p-0" to="/settings">Settings</Link>
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="col-md-9">
            <div className="glass-card p-4 rounded-3 min-content-height">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
