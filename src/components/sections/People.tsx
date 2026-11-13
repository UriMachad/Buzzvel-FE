import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";

interface GalleryPhoto {
  id: number; // número do arquivo: people-<id>.jpg
  alt: string;
  tint: string;
  ratio: number; // largura / altura
  narrow?: boolean;
}

interface GalleryColumn {
  left: number; // % da largura do conjunto
  top: number; // % da altura do conjunto
  width: number; // % da largura do conjunto
  photos: GalleryPhoto[];
}

const columns: GalleryColumn[] = [
  {
    left: 8, top: 22.4, width: 24.2,
    photos: [
      { id: 5, alt: "Child raising a hand in a classroom", tint: "#c5a27a", ratio: 0.67, narrow: true },
      { id: 6, alt: "Students studying together at a table", tint: "#8aa68c", ratio: 0.665 },
    ],
  },
  {
    left: 35, top: 8.1, width: 18,
    photos: [
      { id: 1, alt: "Student reading a book in a hooded sweatshirt", tint: "#6e7f9a", ratio: 0.6 },
      { id: 7, alt: "Two people practicing music near a window", tint: "#b9b9b9", ratio: 0.6 },
      { id: 10, alt: "Student reading with a laptop and a mug", tint: "#7e6a5a", ratio: 0.79 },
    ],
  },
  {
    left: 55.8, top: 9.7, width: 17.9,
    photos: [
      { id: 2, alt: "Graduate in cap and gown holding a red folder", tint: "#9aa7c9", ratio: 0.75 },
      { id: 3, alt: "Woman working at a desk with a laptop", tint: "#c9c3b5", ratio: 0.74 },
      { id: 4, alt: "Teacher on a video call on a computer screen", tint: "#d6a1a1", ratio: 0.66 },
    ],
  },
  {
    left: 76.5, top: 18.8, width: 22.3,
    photos: [
      { id: 8, alt: "Woman in a yellow shirt holding books", tint: "#d9c08a", ratio: 0.62 },
      { id: 9, alt: "Woman in a hijab holding a coffee cup", tint: "#92a9b8", ratio: 0.97 },
    ],
  },
];

export default function People() {
  return (
    <section id="people" className="py-16 lg:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="The people" title="Meet international students & teachers" />
          <p className="mt-5 max-w-md text-ink/60">
            Morbi et egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
          </p>
          <Button href="#" variant="outline" className="mt-7">
            Explore teachers and students
          </Button>
        </div>

        <div className="relative mx-auto aspect-[600/590] w-full max-w-xl [container-type:inline-size]">
          <div className="absolute left-[10.8%] top-[5.9%] aspect-square w-[87%] rounded-full bg-mist" aria-hidden />
          <ul className="contents">
            {columns.map((col) => (
              <li
                key={col.left}
                className="absolute flex flex-col gap-[2.2cqw]"
                style={{ left: `${col.left}%`, top: `${col.top}%`, width: `${col.width}%` }}
              >
                {col.photos.map((p) => (
                  <div key={p.id} className={p.narrow ? "w-[74.5%] self-end" : "w-full"} style={{ aspectRatio: p.ratio }}>
                    <Photo
                      src={`people-${p.id}.jpg`}
                      alt={p.alt}
                      tint={p.tint}
                      sizes="(min-width:1024px) 150px, 25vw"
                      imageClassName="scale-[9"
                      className="h-full w-full rounded shadow-sm"
                    />
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}