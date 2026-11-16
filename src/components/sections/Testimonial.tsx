import Image from "next/image";
import { stats } from "@/data/content";
import type { Stat } from "@/types";
import Container from "@/components/ui/Container";
   import Photo from "@/components/ui/Photo";
function StatItem({ stat }: { stat: Stat }) {
  return (
    <div className="flex flex-col-reverse">
      <dt className="mt-1 text-xs text-ink/50">{stat.label}</dt>
      <dd className="font-display text-3xl font-extrabold tracking-tight text-brand lg:text-5xl">{stat.value}</dd>
    </div>
  );
}
export default function Testimonial() {
  return (
    <section aria-label="Testimonial and numbers" className="bg-white py-14 lg:py-20">
      <Container className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <figure>
          <Image src="/images/quote.svg" alt="" width={28} height={24} aria-hidden />
          <blockquote className="font-display mt-2 text-2xl font-medium leading-snug tracking-tight lg:text-3xl">The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.</blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
               <Photo src="avatar-alex.jpg" alt="" sizes="48px" tint="#9b1c2e" className="h-12 w-12 shrink-0 rounded-full" />
            <span className="text-sm"><b className="block">Alex Morgan</b><span className="text-ink/50">Product Manager</span></span>
          </figcaption>
        </figure>
        <dl className="font-display flex justify-between gap-4 lg:flex-col lg:gap-8 lg:border-l lg:border-black/10 lg:pl-10">
          {stats.map((s) => <StatItem key={s.value} stat={s} />)}
        </dl>
      </Container>
    </section>
  );
}
