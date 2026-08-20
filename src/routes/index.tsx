import { createFileRoute } from "@tanstack/react-router";
import {
  Bath,
  Bed,
  Users,
  Home,
  Sparkles,
  Tv,
  Snowflake,
  Flame,
  Wifi,
  Laptop,
  CookingPot,
  UtensilsCrossed,
  Beef,
  Car,
  PawPrint,
  Cigarette,
  Droplets,
  Accessibility,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Gallery } from "@/components/Gallery";
import { InquiryForm } from "@/components/InquiryForm";
import { BOOKING_URL, heroImage } from "@/lib/photos";

const TITLE = "Harohi Stays — 1BHK Penthouse in Mahalaxmi Nagar, Indore";
const DESC =
  "A stylish, fully furnished 1BHK penthouse in Mahalaxmi Nagar, Indore. Entire rental unit for 4 guests, designed around comfort, privacy and convenient living.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const highlights = [
  { icon: Users, label: "4 Guests" },
  { icon: Bed, label: "1 Bedroom" },
  { icon: Bed, label: "1 Bed" },
  { icon: Bath, label: "1 Bathroom" },
  { icon: Home, label: "Entire Rental Unit" },
];

const amenities = [
  {
    group: "Bathroom",
    items: [
      { icon: Sparkles, label: "Cleaning products" },
      { icon: Droplets, label: "Shampoo" },
      { icon: Droplets, label: "Conditioner" },
      { icon: Droplets, label: "Body soap" },
      { icon: Bath, label: "Bidet" },
      { icon: Flame, label: "Hot water" },
      { icon: Droplets, label: "Shower gel" },
    ],
  },
  { group: "Entertainment", items: [{ icon: Tv, label: "TV" }] },
  {
    group: "Heating & Cooling",
    items: [
      { icon: Snowflake, label: "Air conditioning" },
      { icon: Flame, label: "Heating" },
    ],
  },
  {
    group: "Internet & Workspace",
    items: [
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Laptop, label: "Dedicated workspace" },
    ],
  },
  {
    group: "Kitchen & Dining",
    items: [
      { icon: CookingPot, label: "Kitchen" },
      { icon: UtensilsCrossed, label: "Outdoor dining area" },
    ],
  },
  { group: "Outdoor", items: [{ icon: Beef, label: "BBQ grill" }] },
  { group: "Parking", items: [{ icon: Car, label: "Free parking on premises" }] },
  {
    group: "Services",
    items: [
      { icon: PawPrint, label: "Pets allowed" },
      { icon: Accessibility, label: "Assistance animals allowed" },
      { icon: Cigarette, label: "Smoking allowed" },
    ],
  },
];

const thingsToKnow = [
  { label: "Check-in", value: "After 2:00 PM" },
  { label: "Checkout", value: "Before 11:00 AM" },
  { label: "Maximum guests", value: "4" },
  { label: "Pets", value: "Allowed" },
  { label: "Smoking", value: "Allowed" },
];

function BookButton({ children, className = "" }: { children: string; className?: string }) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-sm px-7 py-3.5 text-xs uppercase tracking-[0.18em] transition-opacity hover:opacity-85 ${className}`}
    >
      {children}
    </a>
  );
}

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-4 text-xs uppercase tracking-[0.28em] text-muted-foreground">{children}</p>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero */}
        <section id="home" className="relative">
          <div className="relative min-h-[80vh] overflow-hidden">
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/55" />
            <div className="relative mx-auto flex min-h-[80vh] max-w-4xl flex-col justify-center px-5 py-24 text-center">
              <div className="fade-up">
                <p className="text-xs uppercase tracking-[0.3em] text-background/80">
                  Mahalaxmi Nagar · Indore
                </p>
                <h1 className="mt-6 text-4xl leading-tight text-background sm:text-5xl md:text-6xl">
                  Your Private Stay in the Heart of Indore.
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-background/85">
                  A stylish, fully furnished 1BHK penthouse in Mahalaxmi Nagar, designed around
                  comfort, privacy and convenient living.
                </p>
                <p className="mt-8 text-xs tracking-[0.15em] text-background/80 sm:text-sm">
                  Entire rental unit · 4 guests · 1 bedroom · 1 bed · 1 bathroom
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                  <BookButton className="bg-background text-foreground">Book Your Stay</BookButton>
                  <a
                    href="#stay"
                    className="inline-block rounded-sm border border-background/70 px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-background transition-colors hover:bg-background/10"
                  >
                    Explore the Stay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-4xl px-5 py-24 text-center">
          <Eyebrow>About</Eyebrow>
          <h2 className="text-3xl sm:text-4xl">More Than Just a Place to Stay.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Welcome to your perfect home away from home in the heart of Mahalaxmi Nagar. This
            stylish and fully furnished 1BHK penthouse offers comfort, convenience and privacy for
            business travellers, couples, families and long-term guests.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Harohi Stays is a fully furnished modern 1BHK penthouse — an entire rental unit kept
            private and comfortable, and designed for easy, convenient living whether you are here
            for a few nights or a longer season.
          </p>
        </section>

        {/* Stay / highlights */}
        <section id="stay" className="border-y border-border bg-card">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="text-center">
              <Eyebrow>The Stay</Eyebrow>
              <h2 className="text-3xl sm:text-4xl">Modern 1BHK Penthouse</h2>
            </div>
            <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
              {highlights.map((h) => (
                <li
                  key={h.label}
                  className="rounded-sm border border-border bg-background p-6 text-center transition-colors hover:border-accent"
                >
                  <h.icon className="mx-auto size-5 text-accent" aria-hidden="true" />
                  <p className="mt-3 text-sm">{h.label}</p>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-center text-sm text-muted-foreground">
              Suitable for business travellers, couples, families and long-term guests.
            </p>
          </div>
        </section>

        {/* Amenities */}
        <section id="amenities" className="mx-auto max-w-6xl px-5 py-24">
          <div className="text-center">
            <Eyebrow>Amenities</Eyebrow>
            <h2 className="text-3xl sm:text-4xl">Thoughtfully Equipped.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a) => (
              <div
                key={a.group}
                className="rounded-sm border border-border bg-card p-6 transition-colors hover:border-accent"
              >
                <h3 className="text-lg">{a.group}</h3>
                <ul className="mt-4 space-y-2.5">
                  {a.items.map((item) => (
                    <li key={item.label} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <item.icon className="size-4 shrink-0 text-accent" aria-hidden="true" />
                      <span className="min-w-0">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="border-y border-border bg-card">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <div className="text-center">
              <Eyebrow>Gallery</Eyebrow>
              <h2 className="text-3xl sm:text-4xl">A Look Inside.</h2>
            </div>
            <div className="mt-12">
              <Gallery />
            </div>
          </div>
        </section>

        {/* Location */}
        <section id="location" className="mx-auto max-w-4xl px-5 py-24 text-center">
          <Eyebrow>Location</Eyebrow>
          <h2 className="text-3xl sm:text-4xl">Located in Mahalaxmi Nagar, Indore.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            The property offers convenient access to major IT parks, business hubs, shopping
            destinations, clubs and cafés — a calm, private base in a well-connected part of the
            city.
          </p>
        </section>

        {/* Things to know */}
        <section className="border-y border-border bg-card">
          <div className="mx-auto max-w-4xl px-5 py-20">
            <div className="text-center">
              <Eyebrow>Things to Know</Eyebrow>
              <h2 className="text-3xl sm:text-4xl">House Essentials.</h2>
            </div>
            <dl className="mt-10 divide-y divide-border border-y border-border">
              {thingsToKnow.map((t) => (
                <div
                  key={t.label}
                  className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-4 text-sm"
                >
                  <dt className="min-w-0 text-muted-foreground">{t.label}</dt>
                  <dd>{t.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
          <div className="text-center">
            <Eyebrow>Contact</Eyebrow>
            <h2 className="text-3xl sm:text-4xl">Get in Touch.</h2>
          </div>
          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Have a question about the stay or want to plan a longer visit? Reach out and we
                will get back to you.
              </p>
              <div className="mt-8 space-y-4 text-sm">
                <p>
                  <span className="block text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Phone
                  </span>
                  <a href="tel:+918225998300" className="mt-1 inline-block hover:text-accent">
                    +91 82259 98300
                  </a>
                </p>
                <p>
                  <span className="block text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Email
                  </span>
                  <a
                    href="mailto:harohistays9133@gmail.com"
                    className="mt-1 inline-block break-all hover:text-accent"
                  >
                    harohistays9133@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="rounded-sm border border-border bg-card p-6 sm:p-8">
              <InquiryForm />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-border bg-secondary">
          <div className="mx-auto max-w-3xl px-5 py-24 text-center">
            <h2 className="text-3xl sm:text-4xl">Make Yourself at Home.</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Discover a comfortable, private and thoughtfully furnished stay in Mahalaxmi Nagar,
              Indore.
            </p>
            <div className="mt-9">
              <BookButton className="bg-primary text-primary-foreground">Book Your Stay</BookButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-xl">Harohi Stays</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A modern, comfortable 1BHK penthouse in Mahalaxmi Nagar, Indore.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Navigation</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["Home", "About", "Stay", "Amenities", "Gallery", "Location", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-muted-foreground hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="tel:+918225998300" className="text-muted-foreground hover:text-foreground">
                  +91 82259 98300
                </a>
              </li>
              <li>
                <a
                  href="mailto:harohistays9133@gmail.com"
                  className="break-all text-muted-foreground hover:text-foreground"
                >
                  harohistays9133@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <BookButton className="border border-foreground text-foreground">
              Book Your Stay →
            </BookButton>
          </div>
        </div>
        <div className="border-t border-border">
          <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-muted-foreground">
            © 2026 Harohi Stays. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
