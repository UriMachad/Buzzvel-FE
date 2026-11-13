import Container from "@/components/ui/Container";
   import AvatarStack from "@/components/ui/AvatarStack";
import Button from "@/components/ui/Button";
export default function Cta() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-sun py-20 text-center lg:py-28">
      <i className="absolute -left-10 bottom-10 h-20 w-20 rounded-full bg-peach lg:left-24" aria-hidden />
      <i className="absolute right-10 top-8 h-24 w-24 rotate-12 rounded-2xl bg-peach/70" aria-hidden />
      <Container className="relative">
           <div className="flex justify-center">
     <AvatarStack count={4} ringClass="ring-sunbtn" sizeClass="h-10 w-10" />
   </div>
        <h2 id="cta-title" className="mt-5 text-4xl font-extrabold tracking-tight lg:text-5xl">What will you learn next?</h2>
        <p className="mt-3 text-ink/60">Start with one course. Build from there.</p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="#courses">Explore all courses</Button>
          <Button href="#" variant="outline">Join Luma</Button>
        </div>
      </Container>
    </section>
  );
}
