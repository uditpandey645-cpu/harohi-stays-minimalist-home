import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BOOKING_URL } from "@/lib/photos";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#stay", label: "Stay" },
  { href: "#amenities", label: "Amenities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:flex lg:justify-between"
      >
        <a href="#home" className="min-w-0 truncate font-serif text-xl tracking-wide">
          Harohi <span className="text-muted-foreground">Stays</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-sm bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-85 sm:inline-block"
          >
            Book Now
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-sm p-2 text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-block rounded-sm bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-primary-foreground"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
