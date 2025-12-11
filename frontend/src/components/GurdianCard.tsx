
export default function GuardianCard() {
  return (
    <div className="glass p-4 rounded-lg">
      <h4 className="font-semibold">Guardian Compliance</h4>
      <p className="text-xs text-gray-400">Invite trusted guardians to review high-risk actions. Guardians can freeze or approve.</p>
      <div className="mt-3 flex gap-2">
        <div className="p-2 rounded bg-gray-800">+ Invite</div>
        <div className="p-2 rounded bg-gray-800">Rules: 2-of-3</div>
      </div>
    </div>
  );
}
