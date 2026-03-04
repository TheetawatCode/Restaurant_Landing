import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GALLERY } from "@/data/gallery";

export function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-16 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Gallery"
          title="Designed for moments worth sharing."
          description="A clean, premium look — perfect for modern dining."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g) => (
            <div
              key={g.src}
              className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm"
            >
              <div className="aspect-4/3 w-full">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}