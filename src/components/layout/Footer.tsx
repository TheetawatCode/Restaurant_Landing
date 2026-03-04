import React from "react";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <Container className="py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg text-zinc-900">Luna Trattoria</p>
            <p className="mt-1 text-sm text-zinc-600">
              Fresh Italian classics · Handmade pasta · Curated wine
            </p>
          </div>

          <div className="text-sm text-zinc-600">
            <p>123 Roma Street, City Center</p>
            <p className="mt-1">Call: (000) 123-4567</p>
          </div>
        </div>

        <p className="mt-8 text-xs text-zinc-500">
          © {new Date().getFullYear()} Luna Trattoria. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}