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

const DEFAULT_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, (max-width: 1280px) 50vw, 640px";

export function ContentImage({
  src,
  alt,
  className,
  sizes = DEFAULT_SIZES,
  priority,
  loading,
  ...props
}: ContentImageProps) {
  return (
    <Image
      src={withBasePath(src)}
      alt={alt}
      unoptimized
      className={className}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : loading ?? "lazy"}
      {...props}
    />
  );
}
