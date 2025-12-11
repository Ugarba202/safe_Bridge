import { useState } from "react";

export default function IntentInput({ onSubmit }: { onSubmit: (text: string) => void }) {
  const [value, setValue] = useState("");
  return (
    <div className="glass p-4 rounded-lg">
      <div className="text-sm text-gray-300 mb-2">What do you need?</div>
      <div className="flex gap-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='e.g. "I need ₦50,000 by tomorrow"'
          className="flex-1 bg-transparent border border-gray-700 rounded px-3 py-2 text-white outline-none"
        />
        <button
          onClick={() => {
            onSubmit(value);
            setValue("");
          }}
          className="px-4 py-2 rounded bg-gradient-to-r from-cyan-400 to-purple-600 text-black font-semibold"
        >
          Go
        </button>
      </div>
    </div>
  );
}
