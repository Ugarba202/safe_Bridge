import { useWallet } from "../hooks/useWallet";

export default function WalletConnectButton() {
  const { address, connect, disconnect } = useWallet();

  if (!address) {
    return (
      <button
        onClick={connect}
        className="btn fw-semibold text-dark shadow"
        style={{
          background: "linear-gradient(90deg, #06b6d4 0%, #a855f7 100%)",
        }}
      >
        Connect Wallet
      </button>
    );
  }

  const short = `${address.slice(0, 6)}...${address.slice(-4)}`;
  return (
    <div className="d-flex align-items-center gap-2">
      <span className="small text-muted">{short}</span>
      <button
        onClick={disconnect}
        className="btn btn-outline-secondary btn-sm"
      >
        Disconnect
      </button>
    </div>
  );
}
