export default function GuardianCard() {
  return (
    <div className="glass-card p-4 rounded">
      <h4 className="fw-semibold mb-1">Guardian Compliance</h4>

      <p className="small text-secondary mb-3">
        Invite trusted guardians to review high-risk actions. Guardians can freeze or approve.
      </p>

      <div className="d-flex gap-2">
        <div className="px-3 py-2 rounded bg-dark text-light small">
          + Invite
        </div>

        <div className="px-3 py-2 rounded bg-dark text-light small">
          Rules: 2-of-3
        </div>
      </div>
    </div>
  );
}
