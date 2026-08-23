"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Services", link: "/services" },
  { name: "Client receipts", link: "/work" },
  { name: "About", link: "/about" },
];

export default function NavbarWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="relative z-20 flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden text-sm font-medium text-ink/70 transition-colors hover:text-ink md:block"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-transform duration-200 hover:-translate-y-0.5"
          >
            Free audit
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-ink px-4 py-2 text-xs font-semibold text-paper sm:text-sm"
            >
              Free audit
            </Link>
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {[...navItems, { name: "Contact", link: "/contact" }].map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="font-display text-2xl text-ink transition-colors hover:text-stamp"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
