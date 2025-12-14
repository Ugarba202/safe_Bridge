import { useState } from "react";

export default function IntentInput({
  onSubmit,
}: {
  onSubmit: (text: string) => void;
}) {
  const [value, setValue] = useState("");

  return (
    <div className="glass-card p-4 rounded">
      <div className="small text-secondary mb-2">What do you need?</div>

      <div className="d-flex gap-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='e.g. "I need ₦50,000 by tomorrow"'
          className="form-control bg-transparent text-light border-secondary"
        />

        <button
          className="btn intent-btn fw-semibold"
          onClick={() => {
            onSubmit(value);
            setValue("");
          }}
        >
          Go
        </button>
      </div>
    </div>
  );
}
