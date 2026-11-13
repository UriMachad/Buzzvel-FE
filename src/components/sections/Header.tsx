"use client";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/content";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-cream/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="text-xl font-extrabold tracking-tight">luma.</a>
        <nav aria-label="Main" className="hidden gap-8 text-sm text-ink/60 md:flex">
          {navLinks.map((l) => <a key={l.label} href={l.href} className="hover:text-ink">{l.label}</a>)}
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <a href="#" className="text-sm text-ink/60 hover:text-ink">Log in</a>
          <Button href="#courses">Start learning</Button>
        </div>
        <button className="grid gap-1 p-2 md:hidden" aria-label="Menu" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {[0, 1, 2].map((i) => <span key={i} className="block h-0.5 w-5 bg-ink" />)}
        </button>
      </Container>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 pb-5 text-sm md:hidden">
          {navLinks.map((l) => <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
          <a href="#">Log in</a><Button href="#courses">Start learning</Button>
        </nav>
      )}
    </header>
  );
}
