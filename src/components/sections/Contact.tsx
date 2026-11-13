import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ContactForm";
const info = [
  { title: "Email", value: "contact@luma.com", icon: "✉", href: "mailto:contact@luma.com" },
  { title: "Response Time", value: "Up to 24 hours on business days", icon: "◷" },
];
export default function Contact() {
  return (
    <section id="contact" className="bg-white py-16 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow="Contact" title="Get in touch" description="Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you." />
          <ul className="mt-8 grid max-w-md gap-4">
            {info.map((i) => (
              <li key={i.title} className="flex items-center gap-4 rounded-xl bg-cream p-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-mist text-brand" aria-hidden>{i.icon}</span>
                <span className="text-xs"><b className="block">{i.title}</b>
                  {i.href ? <a href={i.href} className="text-brand">{i.value}</a> : <span className="text-ink/60">{i.value}</span>}</span>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
