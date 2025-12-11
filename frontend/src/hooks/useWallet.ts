import { useState } from "react";

export function useWallet() {
  const [address, setAddress] = useState<string | null>(null);
  const connect = async () => {
    // For now, quick mock: use window.ethereum if available, otherwise mock address
    try {
      if ((window as any).ethereum) {
        const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" });
        setAddress(accounts[0]);
      } else {
        setAddress("0xDEMO_ADDRESS_0x123");
      }
    } catch (e) {
      console.error(e);
    }
  };
  const disconnect = () => setAddress(null);
  return { address, connect, disconnect };
}
