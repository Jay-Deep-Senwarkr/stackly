"use client";

import { type FormEvent, type ReactNode, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MessageSquareText,
  Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
  "Restaurant / Cafe",
  "Fitness / Wellness",
  "Retail / Ecommerce",
  "Professional Services",
  "Education",
  "Real Estate",
  "Healthcare",
  "Other",
];

const budgets = [
  "Under $1,000",
  "$1,000 - $3,000",
  "$3,000 - $7,500",
  "$7,500+",
  "Not sure yet",
];

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
    <main className="min-h-screen bg-[#0d1b2a] pt-28 text-[#f5f0e8]">
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 px-4 py-2 text-sm font-medium text-[#c9a84c]">
            <MessageSquareText className="h-4 w-4" />
            Contact Stackly
          </span>

          <h1 className="mt-8 max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
            Tell us what your business needs next.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#aab6c3] md:text-lg">
            Share the basics and we will help shape the right website, app, or
            digital system for your next move.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-lg border border-[#8899aa]/20 bg-[#1e2a38]/70 p-5">
              <Clock className="h-6 w-6 text-[#c9a84c]" />
              <h2 className="mt-4 text-lg font-semibold">Quick response</h2>
              <p className="mt-2 text-sm leading-6 text-[#aab6c3]">
                We review every project request and reply with clear next steps.
              </p>
            </div>

            <div className="rounded-lg border border-[#8899aa]/20 bg-[#1e2a38]/70 p-5">
              <Mail className="h-6 w-6 text-[#c9a84c]" />
              <h2 className="mt-4 text-lg font-semibold">Project fit first</h2>
              <p className="mt-2 text-sm leading-6 text-[#aab6c3]">
                No pressure. We start by understanding the goal, scope, and
                timeline.
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-[#8899aa]/20 bg-[#111f30] p-5 shadow-2xl shadow-black/20 md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name" htmlFor="name" required>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                autoComplete="name"
                placeholder="Your name"
                required
              />
            </Field>

            <Field label="Business name" htmlFor="businessName" required>
              <Input
                id="businessName"
                name="businessName"
                value={form.businessName}
                onChange={(event) =>
                  updateField("businessName", event.target.value)
                }
                autoComplete="organization"
                placeholder="Company or brand"
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
                placeholder="you@example.com"
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
              />
            </Field>

            <Field label="Industry" htmlFor="industry" required>
              <Select
                id="industry"
                name="industry"
                value={form.industry}
                onChange={(value) => updateField("industry", value)}
                required
              >
                <option value="">Choose an industry</option>
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

          <Field label="Project details" htmlFor="message" required className="mt-5">
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="min-h-36 w-full resize-y rounded-md border border-[#8899aa]/20 bg-gray-50 px-3 py-3 text-sm text-black shadow-input placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c] dark:bg-zinc-800 dark:text-white"
              placeholder="What are you building, fixing, or improving?"
              required
            />
          </Field>

          {feedback ? (
            <div
              className={`mt-5 flex items-start gap-3 rounded-lg border px-4 py-3 text-sm ${
                status === "success"
                  ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
                  : "border-red-400/30 bg-red-400/10 text-red-100"
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
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c9a84c] px-6 py-4 font-semibold text-[#0d1b2a] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 sm:w-auto"
          >
            {isSending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            {isSending ? "Sending..." : "Send message"}
            {!isSending ? <ArrowRight className="h-4 w-4" /> : null}
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
      <Label htmlFor={htmlFor} className="mb-2 block text-[#f5f0e8]">
        {label}
        {required ? <span className="text-[#c9a84c]"> *</span> : null}
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
      className="h-10 w-full rounded-md border border-[#8899aa]/20 bg-gray-50 px-3 py-2 text-sm text-black shadow-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c] dark:bg-zinc-800 dark:text-white"
    >
      {children}
    </select>
  );
}
