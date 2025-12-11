import { useEffect, useState } from "react";
import { fetchMockTxs } from "../hooks/useMockApi";
import TransactionList from "../components/TransactionList";

export default function Transactions() {
  const [txs, setTxs] = useState([]);
  useEffect(() => {
    fetchMockTxs().then(setTxs);
  }, []);
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">All Transactions</h2>
      <TransactionList items={txs} />
    </div>
  );
}
