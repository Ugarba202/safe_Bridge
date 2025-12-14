import { useEffect, useState } from "react";
import { fetchMockCompliance } from "../hooks/useMockApi";

export default function Compliance() {
  const [c, setC] = useState<any>({});
  useEffect(() => {
    fetchMockCompliance().then(setC);
  }, []);

  return (
    <div className="mb-4">
      <h2 className="h4 fw-semibold mb-3">Compliance Dashboard</h2>

      <div className="row g-3">
        <div className="col-md-6">
          <div className="glass-card p-3 rounded">
            <div className="small text-secondary">Compliance Score</div>
            <div className="h2 fw-bold mt-2">{c.score}%</div>
            <div className="small text-muted mt-1">
              All recent transactions classified and proofed
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="glass-card p-3 rounded">
            <div className="small text-secondary">Next Tax Report</div>
            <div className="fw-semibold mt-2">{c.taxDue}</div>
            <div className="small text-muted mt-1">
              Ready to download (FIRS-ready PDF)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
