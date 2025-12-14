import { useEffect, useState } from "react";
import { fetchMockTxs } from "../hooks/useMockApi";
import TransactionList from "../components/TransactionList";
import type { Tx } from "../types";

export default function Transactions() {
  const [txs, setTxs] = useState<Tx[]>([]); // explicitly typed

  useEffect(() => {
    fetchMockTxs().then(setTxs);
  }, []);

  return (
    <div>
      <h2 className="h4 fw-semibold mb-3">All Transactions</h2>
      <TransactionList items={txs} />
    </div>
  );
}
