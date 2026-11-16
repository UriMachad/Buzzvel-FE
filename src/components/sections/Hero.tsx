import Container from "@/components/ui/Container";
import AvatarStack from "@/components/ui/AvatarStack";
import Button from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
export default function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <Container className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-20">
        <div className="order-2 lg:order-1">
          <p className="eyebrow">Learn at your own pace</p>
          <h1 id="hero-title" className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight lg:text-6xl">Build skills that actually move you forward.</h1>
          <p className="mt-5 max-w-md text-ink/60">Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="#courses">Explore courses</Button>
            <Button href="#how" variant="outline">See how it works</Button>
          </div>
          <div className="mt-7 flex items-center gap-3 text-xs text-ink/60">
               <AvatarStack count={3} />
            <span><b className="text-ink">Trusted by 24,000+</b> learners</span>
          </div>
        </div>
        <div className="relative order-1 mx-auto w-full max-w-xl lg:order-2 lg:max-w-none">
          <div className="absolute -right-4 bottom-4 top-3 w-full rounded-3xl bg-peach" aria-hidden />
          <div className="absolute -bottom-3 -left-3 h-12 w-12 rounded-full bg-mist lg:-left-6" aria-hidden />
          <Photo src="hero.jpg" alt="Smiling learner working on a laptop" sizes="(min-width:1024px) 560px, 100vw" tint="#4b6a7d" priority className="relative aspect-[4/3] rounded-3xl lg:aspect-[4/4.6]" />
          <span className="absolute left-3 top-3 rounded-lg bg-white px-3 py-2 text-xs shadow lg:-left-6 lg:top-4"><b className="mr-2 rounded bg-mist px-1.5 py-0.5 text-brand">120+</b>expert-led courses</span>
          <span className="absolute bottom-4 right-3 rounded-lg bg-white px-3 py-2 text-xs shadow lg:-right-4"><span className="mr-2 text-amber-400" aria-hidden>★★★★★</span>4.9 avg rating</span>
        </div>
      </Container>
    </section>
  );
}
