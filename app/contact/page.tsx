"use client";

import { type FormEvent, type ReactNode, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Stamp } from "@/components/ui/receipt";

type FormState = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  industry: string;
  budget: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  industry: "",
  budget: "",
  message: "",
};

const industries = [
  "Fashion & Apparel",
  "Beauty & Skincare",
  "Home & Living",
  "Food & Beverage / DTC",
  "Jewelry & Accessories",
  "Electronics & Gadgets",
  "Health & Wellness",
  "Other",
];

const budgets = [
  "Under $2,000",
  "$2,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
  "Not sure yet",
];

const inputClasses =
  "h-11 w-full rounded-sm border border-ink/20 bg-white px-4 text-sm text-ink shadow-input placeholder:text-graphite/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink";

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");

  function updateField(name: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Unable to send your message.");
      }

      setStatus("success");
      setFeedback("Thanks. Your message has been sent, and we will reply soon.");
      setForm(initialFormState);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  const isSending = status === "sending";

  return (
    <main className="min-h-screen pb-28 pt-40">
      <section className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="font-mono text-[11px] font-bold tracking-[0.3em] text-graphite uppercase">
            Free store audit
          </p>

          <h1 className="mt-5 font-display text-5xl leading-[1.04] font-medium tracking-tight text-balance sm:text-6xl">
            Show us your store.{" "}
            <span className="marked">We&apos;ll itemize the upside.</span>
          </h1>

          <p className="mt-7 max-w-md leading-relaxed text-graphite">
            Tell us where you think you&apos;re losing sales — or let us find
            out. We&apos;ll audit your design, cart flow, and campaigns, then
            reply with what each fix is worth.
          </p>

          <div className="mt-10 flex flex-col gap-5 border-t-2 border-ink pt-6">
            <div>
              <Clock className="h-5 w-5 text-stamp" aria-hidden />
              <h2 className="mt-2 font-display text-lg font-semibold">
                Reply within 24 hours
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-graphite">
                Every request gets a real review — with clear next steps.
              </p>
            </div>
            <div>
              <Mail className="h-5 w-5 text-stamp" aria-hidden />
              <h2 className="mt-2 font-display text-lg font-semibold">
                No pressure, ever
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-graphite">
                If we&apos;re not the right fit for your store, we&apos;ll say
                so.
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="relative bg-white p-6 shadow-[0_24px_64px_-28px_rgb(26_24_20/0.35)] ring-1 ring-ink/10 md:p-9"
        >
          <Stamp className="absolute -top-3 right-6 rotate-[3deg] bg-white">
            Audit request
          </Stamp>

          <div className="mb-8 border-b border-dashed border-ink/25 pb-5">
            <h2 className="font-display text-2xl font-medium">
              Project details
            </h2>
            <p className="mt-1 font-mono text-[11px] tracking-wider text-graphite uppercase">
              Takes about two minutes
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name" htmlFor="name" required>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                autoComplete="name"
                placeholder="Your name"
                className={inputClasses}
                required
              />
            </Field>

            <Field label="Store or brand" htmlFor="businessName" required>
              <Input
                id="businessName"
                name="businessName"
                value={form.businessName}
                onChange={(event) =>
                  updateField("businessName", event.target.value)
                }
                autoComplete="organization"
                placeholder="yourstore.com"
                className={inputClasses}
                required
              />
            </Field>

            <Field label="Email" htmlFor="email" required>
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                autoComplete="email"
                placeholder="you@yourbrand.com"
                className={inputClasses}
                required
              />
            </Field>

            <Field label="Phone" htmlFor="phone">
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                autoComplete="tel"
                placeholder="Optional"
                className={inputClasses}
              />
            </Field>

            <Field label="Vertical" htmlFor="industry" required>
              <Select
                id="industry"
                name="industry"
                value={form.industry}
                onChange={(value) => updateField("industry", value)}
                required
              >
                <option value="">Choose your niche</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </Select>
            </Field>

            <Field label="Budget" htmlFor="budget" required>
              <Select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={(value) => updateField("budget", value)}
                required
              >
                <option value="">Choose a range</option>
                {budgets.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </Select>
            </Field>
          </div>

          <Field
            label="What are you building, fixing, or improving?"
            htmlFor="message"
            required
            className="mt-5"
          >
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className={`${inputClasses} h-auto min-h-32 resize-y py-3`}
              placeholder="e.g. Traffic is fine but most carts get abandoned before checkout…"
              required
            />
          </Field>

          {feedback ? (
            <div
              className={`mt-6 flex items-start gap-3 px-4 py-3 text-sm ${
                status === "success"
                  ? "bg-ledger/10 text-ledger ring-1 ring-ledger/30"
                  : "bg-stamp/10 text-stamp ring-1 ring-stamp/30"
              }`}
              role="status"
            >
              {status === "success" ? (
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
              ) : (
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              )}
              <span>{feedback}</span>
            </div>
          ) : null}

          <button
            type="submit"
            disabled={isSending}
            className="group mt-8 inline-flex w-full items-center justify-center gap-2.5 bg-ink px-8 py-4 font-semibold text-paper transition-transform duration-200 hover:-translate-y-0.5 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            {isSending ? "Sending..." : "Request my free audit"}
            {!isSending ? (
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            ) : null}
          </button>
        </form>
      </section>
    </main>
  );
}

function Field({
  label,
  htmlFor,
  required,
  className = "",
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <Label htmlFor={htmlFor} className="mb-2 block font-mono text-xs tracking-wide text-ink">
        {label}
        {required ? <span className="text-stamp"> *</span> : null}
      </Label>
      {children}
    </div>
  );
}

function Select({
  id,
  name,
  value,
  required,
  children,
  onChange,
}: {
  id: string;
  name: string;
  value: string;
  required?: boolean;
  children: ReactNode;
  onChange: (value: string) => void;
}) {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      required={required}
      className={`${inputClasses} appearance-none`}
    >
      {children}
    </select>
  );
}
