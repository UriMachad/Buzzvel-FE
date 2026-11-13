import { categories } from "@/data/content";
import type { Category } from "@/types";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
function CategoryCard({ item, index }: { item: Category; index: number }) {
  return (
    <li className="flex flex-col rounded-2xl border border-black/10 p-6">
      <span className="w-fit rounded bg-mist px-2 py-0.5 text-[11px] font-semibold text-brand">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
      <p className="mt-2 flex-1 text-sm text-ink/60">{item.description}</p>
      <a href={item.href} className="mt-6 inline-flex items-center gap-2 text-xs font-bold">Explore <span aria-hidden>→</span><span className="sr-only"> {item.title} courses</span></a>
    </li>
  );
}
export default function Categories() {
  return (
    <section id="courses" className="bg-white py-16 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Find your next skill" title="Learn something worth knowing." description="Short, practical courses designed around skills you can put to work immediately." />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => <CategoryCard key={c.title} item={c} index={i} />)}
        </ul>
      </Container>
    </section>
  );
}
