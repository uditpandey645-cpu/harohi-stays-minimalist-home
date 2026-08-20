import { useState, type FormEvent } from "react";

const EMAIL = "harohistays9133@gmail.com";

const fieldClass =
  "w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus-visible:ring-2 focus-visible:ring-ring";

export function InquiryForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "I want to make a booking.",
  });

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Contact Number: ${form.phone}`,
      `Email: ${form.email}`,
      `Address: ${form.address}`,
      "",
      "Message:",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      "Booking inquiry — Harohi Stays",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-muted-foreground">
            Name
          </label>
          <input id="name" required value={form.name} onChange={set("name")} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-muted-foreground">
            Contact Number
          </label>
          <input id="phone" required value={form.phone} onChange={set("phone")} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-muted-foreground">
            Email
          </label>
          <input id="email" type="email" required value={form.email} onChange={set("email")} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="address" className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-muted-foreground">
            Address
          </label>
          <input id="address" value={form.address} onChange={set("address")} className={fieldClass} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-muted-foreground">
          Message
        </label>
        <textarea id="message" rows={4} value={form.message} onChange={set("message")} className={fieldClass} />
      </div>

      <button
        type="submit"
        className="rounded-sm bg-primary px-7 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-85"
      >
        Send Inquiry
      </button>

      {sent && (
        <p role="status" className="rounded-sm border border-accent bg-secondary p-4 text-sm text-foreground">
          Thank you. Your email app should now open with your details pre-filled — please press send to
          complete your inquiry. If nothing opened, write to us directly at {EMAIL}.
        </p>
      )}
    </form>
  );
}
