import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AvatarStack from "@/components/ui/AvatarStack";

export default function Cta() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-sun py-20 text-center lg:py-28">
      <Image src="/images/cta-decor.svg" alt="" fill sizes="100vw" className="object-cover object-center" aria-hidden />
      <Container className="relative">
        <div className="flex justify-center">
          <AvatarStack count={4} ringClass="ring-[#ffee7e]" sizeClass="h-10 w-10" />
        </div>
        <h2 id="cta-title" className="mt-6 text-4xl font-extrabold tracking-tight lg:text-6xl">What will you learn next?</h2>
        <p className="mt-4 text-ink/60">Start with one course. Build from there.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="#courses">Explore all courses</Button>
          <Button href="#" variant="outline">Join Luma</Button>
        </div>
      </Container>
    </section>
  );
}