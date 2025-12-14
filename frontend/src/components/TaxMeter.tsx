export default function TaxMeter({
  progress = 85,
  taxDue = "₦245,000",
}: {
  progress?: number;
  taxDue?: string;
}) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const dash = (progress / 100) * circumference;

  return (
    <div className="glass-card p-4 rounded d-flex align-items-center gap-4">
      {/* Circular Meter */}
      <div className="position-relative" style={{ width: 96, height: 96 }}>
        <svg width="96" height="96">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="#1f2937"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="#00fff5"
            strokeWidth="8"
            strokeDasharray={`${dash} ${circumference}`}
            strokeLinecap="round"
            transform="rotate(-90 48 48)"
            fill="none"
          />
        </svg>

        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <div className="small text-secondary">Tax Due</div>
          <div className="fw-semibold">{taxDue}</div>
        </div>
      </div>

      {/* Text */}
      <div>
        <div className="small text-secondary">Monthly tax progress</div>
        <div className="small text-muted">
          You are {progress}% towards monthly obligation
        </div>
      </div>
    </div>
  );
}
