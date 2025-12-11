import { type PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full py-4">
        <div className="container-max flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-safepurple to-naira flex items-center justify-center text-xl font-bold">SB</div>
            <h1 className="text-xl font-semibold">SafeBridge</h1>
          </div>
          <nav className="flex items-center gap-4 text-sm opacity-90">
            <button className="px-3 py-2 rounded-lg hover:bg-white/3">Dashboard</button>
            <button className="px-3 py-2 rounded-lg hover:bg-white/3">DeFi</button>
            <button className="px-3 py-2 rounded-lg hover:bg-white/3">Compliance</button>
          </nav>
        </div>
      </header>

      <main className="flex-1 container-max">{children}</main>

      <footer className="py-6">
        <div className="container-max text-sm text-muted-foreground opacity-70">
          © {new Date().getFullYear()} SafeBridge Labs
        </div>
      </footer>
    </div>
  );
}
