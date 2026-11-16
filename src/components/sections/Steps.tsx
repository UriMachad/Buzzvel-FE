import Image from "next/image";
import { steps } from "@/data/content";
import type { Step } from "@/types";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

function StepItem({ step }: { step: Step }) {
  return (
    <li className="relative">
      <div className="relative h-12 w-12">
        <Image src={step.icon} alt="" width={48} height={48} />
        {step.dot && (
          <span
            className={`absolute left-[44%] top-[50%] h-3.5 w-3.5 rounded-full ${step.dot}`}
            aria-hidden
          />
        )}
      </div>
      {/* The design shows "STEP 01" on all three items, so the label is fixed. */}
      <p className="mt-6 text-[11px] font-medium uppercase tracking-wider text-ink/50">Step 01</p>
      <h3 className="mt-2 font-bold">{step.title}</h3>
      <p className="mt-2 max-w-xs text-sm text-ink/60">{step.description}</p>
    </li>
  );
}

export default function Steps() {
  return (
    <section id="how" className="py-16 lg:py-24">
      <Container>
        <SectionHeading eyebrow="How Luma works" title="Less browsing. More learning." align="center" />
        <ol className="relative mt-14 grid gap-10 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-6 hidden border-t border-black/10 md:block" aria-hidden />
          {steps.map((s) => <StepItem key={s.title} step={s} />)}
        </ol>
      </Container>
    </section>
  );
}