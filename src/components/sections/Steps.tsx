import Image from "next/image";
import { steps } from "@/data/content";
import type { Step } from "@/types";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

function StepItem({ step, showLine }: { step: Step; showLine: boolean }) {
  return (
    <li className="relative">
      {/* Line from this icon to the next one (desktop only). The last step has none. */}
      {showLine && (
        <span className="absolute left-0 top-6 hidden h-px w-[calc(100%+2.5rem)] bg-black/10 md:block" aria-hidden />
      )}
      <div className="relative z-10 h-12 w-12">
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
        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <StepItem key={s.title} step={s} showLine={i < steps.length - 1} />
          ))}
        </ol>
      </Container>
    </section>
  );
}