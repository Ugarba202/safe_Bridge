import { useEffect, useState } from "react";
import { fetchMockCompliance } from "../hooks/useMockApi";

export default function Compliance() {
  const [c, setC] = useState<any>({});
  useEffect(() => {
    fetchMockCompliance().then(setC);
  }, []);
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Compliance Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="glass p-4 rounded">
          <div className="text-sm text-gray-300">Compliance Score</div>
          <div className="text-3xl font-bold mt-2">{c.score}%</div>
          <div className="text-xs text-gray-400 mt-1">All recent transactions classified and proofed</div>
        </div>
        <div className="glass p-4 rounded">
          <div className="text-sm text-gray-300">Next Tax Report</div>
          <div className="mt-2 font-semibold">{c.taxDue}</div>
          <div className="text-xs text-gray-400 mt-1">Ready to download (FIRS-ready PDF)</div>
        </div>
      </div>
    </div>
  );
}
