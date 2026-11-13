type Variant = "primary" | "outline" | "yellow";
interface Props { href: string; variant?: Variant; children: React.ReactNode; className?: string }
const styles: Record<Variant, string> = {
  primary: "bg-brand text-white",
  outline: "border border-black/10 bg-white text-ink",
  yellow: "bg-sunbtn text-ink",
};
export default function Button({ href, variant = "primary", children, className = "" }: Props) {
  return <a href={href} className={`btn ${styles[variant]} ${className}`}>{children}</a>;
}
