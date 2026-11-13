"use client";
import { useState } from "react";
import FormField from "@/components/ui/FormField";
type Values = { name: string; email: string; question: string };
type Errors = Partial<Record<keyof Values, string>>;
export function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Enter your full name.";
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Enter a valid email address.";
  if (!v.question.trim()) e.question = "Tell us how we can help.";
  return e;
}
export default function ContactForm() {
  const [values, setValues] = useState<Values>({ name: "", email: "", question: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const set = (k: keyof Values) => (val: string) => setValues((p) => ({ ...p, [k]: val }));
  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    setSent(false);
    if (Object.keys(e).length === 0) { setSent(true); setValues({ name: "", email: "", question: "" }); } // mock submit
  }
  return (
    <form noValidate onSubmit={onSubmit} aria-labelledby="contact-form-title" className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:p-8">
      <h3 id="contact-form-title" className="text-lg font-bold">Contact us</h3>
      <p className="mt-1 text-xs text-ink/50">Fill out the fields and we will get in touch.</p>
      <FormField id="name" label="Full name" placeholder="Your name" value={values.name} error={errors.name} onChange={set("name")} />
      <FormField id="email" label="Email" type="email" placeholder="youremail@example.com" value={values.email} error={errors.email} onChange={set("email")} />
      <FormField id="question" label="Your question" placeholder="Tell us how we can help..." value={values.question} error={errors.question} multiline onChange={set("question")} />
      <button type="submit" className="btn mt-6 w-full bg-brand text-white">Send message</button>
      <p role="status" className="mt-3 min-h-4 text-center text-xs text-brand">{sent ? "Thanks! We'll reply within 24 hours." : ""}</p>
    </form>
  );
}
