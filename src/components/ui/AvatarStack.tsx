import Photo from "@/components/ui/Photo";

interface Props {
  count: number;
  ringClass?: string;
  sizeClass?: string;
}

const files = ["avatar-1.jpg", "avatar-2.jpg", "avatar-3.jpg", "avatar-4.jpg"];
const tints = ["#e9b8a0", "#8f9bb8", "#c9a37a", "#6b7a99"];

export default function AvatarStack({
  count,
  ringClass = "ring-cream",
  sizeClass = "h-9 w-9",
}: Props) {
  return (
    <span className="flex -space-x-2" aria-hidden>
      {files.slice(0, count).map((file, i) => (
        <Photo
          key={file}
          src={file}
          alt=""
          sizes="40px"
          tint={tints[i]}
          className={`${sizeClass} shrink-0 rounded-full ring-2 ${ringClass}`}
        />
      ))}
    </span>
  );
}