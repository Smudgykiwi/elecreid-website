import Image from 'next/image'

type AspectRatio = '1/1' | '4/3' | '3/4' | '16/9' | '4/5' | '3/2'

const aspectClass: Record<AspectRatio, string> = {
  '1/1': 'aspect-square',
  '4/3': 'aspect-[4/3]',
  '3/4': 'aspect-[3/4]',
  '16/9': 'aspect-[16/9]',
  '4/5': 'aspect-[4/5]',
  '3/2': 'aspect-[3/2]',
}

export interface ImagePlaceholderProps {
  /** Slot ID, e.g. IMG-H-A. Doubles as data-img-slot attribute. */
  id: string
  /** Italic descriptive caption. What the final image should show. */
  caption: string
  /** Aspect ratio of the slot. */
  aspect?: AspectRatio
  /** Optional already-uploaded image src. If present, renders the image. */
  src?: string
  /** Alt text for the image when src is present. Defaults to caption. */
  alt?: string
  /** Optional extra classes on the outer slot. */
  className?: string
}

/**
 * Cream image slot with cobalt eyebrow + italic Austin caption.
 * Mirrors the form's IMG-NN-X placeholder pattern from public/design-plan.html.
 * Replace `src` later when Joe drops in real photos.
 */
export default function ImagePlaceholder({
  id,
  caption,
  aspect = '4/3',
  src,
  alt,
  className = '',
}: ImagePlaceholderProps) {
  const hasImage = Boolean(src)

  return (
    <div
      data-img-slot={id}
      className={`relative w-full overflow-hidden ${aspectClass[aspect]} ${
        hasImage
          ? 'bg-[#F8F4F1]'
          : 'bg-[#F8F4F1] border border-[#0134E7] flex flex-col items-center justify-center text-center p-6'
      } ${className}`}
    >
      {hasImage ? (
        <Image
          src={src as string}
          alt={alt ?? caption}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <>
          <span className="absolute top-3 left-4 text-[9px] tracking-[0.22em] uppercase text-[#0134E7] font-bold">
            {id}
          </span>
          <p className="font-austin italic text-[#16253F]/60 text-base lg:text-lg max-w-[80%] leading-snug">
            {caption}
          </p>
          <span className="absolute bottom-0 left-0 right-0 h-px bg-[#0134E7]" aria-hidden />
        </>
      )}
    </div>
  )
}
