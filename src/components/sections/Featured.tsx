import { courseMeta } from "@/data/content";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
export default function Featured() {
  return (
    <section aria-labelledby="featured-title" className="on-dark bg-brand py-14 text-white lg:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative">
          <Photo src="featured.jpg" alt="Designer's desk with product prototypes and sketches" sizes="(min-width:1024px) 560px, 100vw" tint="#8a8f6e" className="aspect-[4/3] rounded-2xl" />
          <span className="absolute -left-3 -top-2 z-10 rounded-md bg-sunbtn px-3 py-2 text-[11px] font-bold uppercase text-ink shadow-sm">Featured course</span>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-white/80">Most popular this month</p>
          <h2 id="featured-title" className="h2 mt-3 max-w-md">Designing products people understand.</h2>
          <p className="mt-4 max-w-md text-sm text-white/80">Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.</p>
          <p className="mt-5 text-xs">with Maya Chen · Senior Product Designer</p>
          <ul className="mt-4 flex flex-wrap gap-2 text-xs">{courseMeta.map((x) => <li key={x} className="rounded-md border border-white/40 px-3 py-1.5">{x}</li>)}</ul>
          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#" variant="yellow">View course</Button>
            <a href="#courses" className="inline-flex items-center justify-center gap-2 text-xs font-semibold">Browse all courses <span aria-hidden>→</span></a>
          </div>
        </div>
      </Container>
    </section>
  );
}
