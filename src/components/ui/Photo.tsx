"use client";
import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  imageClassName?: string;
  tint?: string;
  priority?: boolean;
}

/** Local image from /public/images with a tinted fallback if the file is missing. */
export default function Photo({
  src,
  alt,
  sizes,
  className = "",
  imageClassName = "",
  tint = "#cfd6ee",
  priority = false,
}: Props) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: tint }}
      role={failed ? "img" : undefined}
      aria-label={failed ? alt : undefined}
    >
      {!failed && (
        <Image
          src={`/images/${src}`}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          className={`object-cover ${imageClassName}`}
        />
      )}
    </div>
  );
}