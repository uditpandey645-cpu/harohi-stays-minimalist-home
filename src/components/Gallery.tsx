import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { photos } from "@/lib/photos";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i + photos.length - 1) % photos.length)),
    [],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Open image ${i + 1}: ${p.alt}`}
            className="group relative aspect-4/3 overflow-hidden rounded-sm bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="size-full object-cover transition-transform duration-700 md:group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-100 flex flex-col bg-foreground/95 p-4"
        >
          <div className="flex items-center justify-between text-background">
            <span className="text-sm tracking-widest">
              {(index ?? 0) + 1} / {photos.length}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Close viewer"
              className="rounded-sm p-2 transition-opacity hover:opacity-70"
            >
              <X className="size-6" />
            </button>
          </div>

          <div className="flex min-h-0 flex-1 items-center justify-center gap-2 sm:gap-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="shrink-0 rounded-full p-3 text-background transition-opacity hover:opacity-70"
            >
              <ChevronLeft className="size-7" />
            </button>
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-full max-w-full rounded-sm object-contain"
            />
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="shrink-0 rounded-full p-3 text-background transition-opacity hover:opacity-70"
            >
              <ChevronRight className="size-7" />
            </button>
          </div>
          <p className="pt-3 text-center text-xs text-background/70">{current.alt}</p>
        </div>
      )}
    </>
  );
}
