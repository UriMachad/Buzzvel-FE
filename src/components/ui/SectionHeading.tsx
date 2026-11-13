interface Props { eyebrow: string; title: string; description?: string; align?: "left" | "center"; level?: 1 | 2 }
export default function SectionHeading({ eyebrow, title, description, align = "left", level = 2 }: Props) {
  const H = `h${level}` as "h1" | "h2";
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="eyebrow">{eyebrow}</p>
      <H className="h2 mt-3 max-w-md [text-wrap:balance] data-[c=true]:mx-auto" data-c={align === "center"}>{title}</H>
      {description && <p className="mt-4 max-w-md text-ink/60">{description}</p>}
    </div>
  );
}
