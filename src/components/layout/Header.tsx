"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent transition",
        scrolled ? "bg-white/85 backdrop-blur border-zinc-200" : "bg-white"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-zinc-50 font-bold">
            LT
          </span>
          <span className="font-display text-lg text-zinc-900">
            Luna Trattoria
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
            >
              {n.label}
            </a>
          ))}
          <Button href="#reserve" className="ml-2">
            Reserve
          </Button>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-zinc-100"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open ? (
        <div className="md:hidden border-t border-zinc-200 bg-white">
          <Container className="py-4">
            <div className="flex flex-col gap-3">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
                >
                  {n.label}
                </a>
              ))}
              <Button href="#reserve" onClick={() => setOpen(false)}>
                Reserve
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}