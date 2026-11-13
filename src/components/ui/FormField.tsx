interface Props { id: string; label: string; placeholder: string; value: string; error?: string; type?: string; multiline?: boolean; onChange: (v: string) => void }
const base = "mt-2 w-full rounded-lg border bg-cream px-4 py-3 text-sm placeholder:text-ink/40";
export default function FormField({ id, label, placeholder, value, error, type = "text", multiline, onChange }: Props) {
  const common = {
    id, name: id, placeholder, value, "aria-invalid": !!error, "aria-describedby": error ? `${id}-err` : undefined,
    className: `${base} ${error ? "border-red-600" : "border-black/10"}`,
  };
  return (
    <div className="mt-5">
      <label htmlFor={id} className="text-xs font-bold">{label}</label>
      {multiline
        ? <textarea {...common} rows={4} className={`${common.className} resize-none`} onChange={(e) => onChange(e.target.value)} />
        : <input {...common} type={type} onChange={(e) => onChange(e.target.value)} />}
      {error && <p id={`${id}-err`} className="mt-1 text-xs text-red-700">{error}</p>}
    </div>
  );
}
