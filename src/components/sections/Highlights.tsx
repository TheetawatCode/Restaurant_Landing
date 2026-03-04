import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Leaf, ChefHat, Wine } from "lucide-react";

const items = [
  {
    icon: Leaf,
    title: "Fresh ingredients",
    desc: "Seasonal produce and premium Italian staples — prepared daily.",
  },
  {
    icon: ChefHat,
    title: "Chef-led kitchen",
    desc: "Thoughtful techniques and consistent execution across every dish.",
  },
  {
    icon: Wine,
    title: "Curated wine list",
    desc: "Balanced selections that pair beautifully with classic Italian flavors.",
  },
];

export function Highlights() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Why us"
          title="A modern trattoria built for quality, comfort, and consistency."
          description="Designed like a premium brand — and delivered like one."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900 text-white">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {it.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}