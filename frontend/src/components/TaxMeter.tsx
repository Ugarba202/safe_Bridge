
export default function TaxMeter({ progress = 85, taxDue = "₦245,000" }: { progress?: number; taxDue?: string }) {
  return (
    <div className="glass p-4 rounded-lg flex items-center gap-6">
      <div className="w-24 h-24 relative">
        <svg className="w-24 h-24">
          <circle cx="48" cy="48" r="36" stroke="#1f2937" strokeWidth="8" fill="none" />
          <circle
            cx="48"
            cy="48"
            r="36"
            stroke="#00fff5"
            strokeWidth="8"
            strokeDasharray={`${(progress/100)*2*Math.PI*36} ${2*Math.PI*36}`}
            strokeLinecap="round"
            transform="rotate(-90 48 48)"
            fill="none"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-sm text-gray-300">Tax Due</div>
          <div className="font-semibold">{taxDue}</div>
        </div>
      </div>
      <div>
        <div className="text-sm text-gray-300">Monthly tax progress</div>
        <div className="text-xs text-gray-400">You are {progress}% towards monthly obligation</div>
      </div>
    </div>
  );
}
