export default function Settings() {
  return (
    <div>
      <h2 className="h4 fw-semibold">Settings</h2>
      <div className="mt-3 d-flex flex-column gap-3">
        <div className="glass-card p-3 rounded">Profile & security settings (biometric mock)</div>
        <div className="glass-card p-3 rounded">Guardian management (UI only)</div>
        <div className="glass-card p-3 rounded">Network selection (BlockDAG testnet)</div>
      </div>
    </div>
  );
}
