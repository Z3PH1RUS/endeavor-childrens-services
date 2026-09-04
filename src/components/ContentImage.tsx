import Image, { type ImageProps } from "next/image";

type ContentImageProps = Omit<ImageProps, "unoptimized" | "src" | "alt"> & {
  src: string;
  alt: string;
};

function withBasePath(src: string): string {
  if (!src.startsWith("/")) return src;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${src}`;
}

export function ContentImage({ src, alt, className, ...props }: ContentImageProps) {
  return (
    <Image
      src={withBasePath(src)}
      alt={alt}
      unoptimized
      className={className}
      {...props}
    />
  );
}
