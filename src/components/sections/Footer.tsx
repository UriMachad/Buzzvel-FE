import { footerColumns } from "@/data/content";
import Container from "@/components/ui/Container";
export default function Footer() {
  return (
    <footer className="bg-ink py-14 text-white">
      <Container>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-extrabold">luma.</p>
            <p className="mt-2 max-w-[14rem] text-xs text-white/60">Practical learning for curious people.</p>
          </div>
          {footerColumns.map((c) => (
            <nav key={c.heading} aria-label={c.heading}>
              <p className="text-[11px] font-semibold uppercase tracking-wider">{c.heading}</p>
              <ul className="mt-4 space-y-3 text-xs text-white/60">{c.links.map((l) => <li key={l.label}><a href={l.href} className="hover:text-white">{l.label}</a></li>)}</ul>
            </nav>
          ))}
        </div>
        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-white/60">© 2026 Luma Learning</p>
      </Container>
    </footer>
  );
}
