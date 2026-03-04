import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MENU } from "@/data/menu";
import { Badge } from "@/components/ui/Badge";

export function MenuPreview() {
  return (
    <section id="menu" className="bg-cream py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Signature menu"
            title="Highlights that guests come back for."
            description="A preview of our classics — refined with modern technique."
          />

          <p className="text-sm text-zinc-600 md:max-w-sm md:text-right">
            Vegetarian and gluten-friendly options available. Ask our staff for
            pairing recommendations.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {MENU.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold text-zinc-900">
                      {m.name}
                    </h3>
                    {m.tag ? <Badge>{m.tag}</Badge> : null}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {m.description}
                  </p>
                </div>
                <p className="text-sm font-semibold text-zinc-900">{m.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}