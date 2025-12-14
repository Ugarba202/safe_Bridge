import { type PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* Header */}
      <header className="w-100 py-4">
        <div className="container-max d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <div className="logo-badge">SB</div>
            <h1 className="fs-4 fw-semibold mb-0">SafeBridge</h1>
          </div>

          <nav className="d-flex align-items-center gap-3 small opacity-90">
            <button className="nav-btn">Dashboard</button>
            <button className="nav-btn">DeFi</button>
            <button className="nav-btn">Compliance</button>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow-1 container-max">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-4">
        <div className="container-max small text-secondary opacity-75">
          © {new Date().getFullYear()} SafeBridge Labs
        </div>
      </footer>
    </div>
  );
}
