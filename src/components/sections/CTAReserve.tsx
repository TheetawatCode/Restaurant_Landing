import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTAReserve() {
  return (
    <section className="bg-zinc-900 py-14 sm:py-16">
      <Container>
        <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-display text-2xl text-white">
              Ready for a premium Italian experience?
            </h3>
            <p className="mt-2 text-sm text-white/75">
              Reserve now — confirmations are instant (mock flow).
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#reserve" className="rounded-2xl px-5 py-3">
              Reserve a Table
            </Button>
            <Button
              href="#menu"
              variant="secondary"
              className="rounded-2xl px-5 py-3 bg-white/90 hover:bg-white"
            >
              View Menu
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}