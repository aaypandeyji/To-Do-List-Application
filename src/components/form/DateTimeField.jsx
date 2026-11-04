export default function DateTimeField({ label, type, value, onChange, placeholder, min }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <input
        type={type}
        min={min}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#4D6BFE] focus:ring-2 focus:ring-[#4D6BFE]/20"/>
    </div>
  );
}
