import { useWallet } from "../hooks/useWallet";

export default function WalletConnectButton() {
  const { address, connect, disconnect } = useWallet();

  if (!address) {
    return (
      <button
        onClick={connect}
        className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold shadow-md"
      >
        Connect Wallet
      </button>
    );
  }

  const short = `${address.slice(0,6)}...${address.slice(-4)}`;
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-300">{short}</span>
      <button onClick={disconnect} className="px-3 py-1 border rounded text-sm border-gray-600 text-gray-200">Disconnect</button>
    </div>
  );
}
