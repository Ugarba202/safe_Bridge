import { Routes, Route } from "react-router-dom";
import AppShell from "./components/AppShell";
import Dashboard from "./pages/Dashboard";
import IntentSwap from "./pages/IntentSwap";
import Compliance from "./pages/Compliance";
import Transactions from "./pages/Transaction";
import Settings from "./pages/settings";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<AppShell />}>
        <Route index element={<Dashboard />} />
        <Route path="intent" element={<IntentSwap />} />
        <Route path="compliance" element={<Compliance />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
