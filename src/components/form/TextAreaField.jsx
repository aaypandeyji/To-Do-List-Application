export default function TextAreaField({ label, placeholder, value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <textarea
        rows={4}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#4D6BFE] focus:ring-2 focus:ring-[#4D6BFE]/20"/>
    </div>
  );
}
