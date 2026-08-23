import Link from "next/link";

const links = [
  { name: "Services", href: "/services" },
  { name: "Client receipts", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Free audit", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t-2 border-dashed border-ink/20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <p className="font-display text-2xl font-semibold">
            Stackly <span className="italic font-normal">&amp; Co.</span>
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-graphite">
            Ecommerce design, cart recovery, and marketing campaigns for stores
            that are serious about growth.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2 md:text-right">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="w-fit font-mono text-xs font-bold tracking-[0.2em] uppercase text-graphite transition-colors hover:text-stamp md:self-end"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-dashed border-ink/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 sm:flex-row">
          <p className="font-mono text-[10px] tracking-[0.25em] text-graphite uppercase">
            © {new Date().getFullYear()} Stackly &amp; Co. · SLY-2026-0001
          </p>
          <p className="font-mono text-[10px] tracking-[0.25em] text-graphite uppercase">
            Printed in the browser · Thank you for scrolling
          </p>
        </div>
      </div>
    </footer>
  );
}
