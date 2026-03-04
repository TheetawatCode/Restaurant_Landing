import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=80";

export function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Our story"
              title="Italian comfort food with a business-class standard."
              description="We focus on consistency, hospitality, and details — from ingredient selection to the final plate."
            />

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-600">
              <p>
                Luna Trattoria is built on modern craftsmanship: handmade pasta,
                balanced sauces, and disciplined service.
              </p>
              <p>
                Whether you’re hosting clients or celebrating with friends, our
                space is designed to feel premium — without being pretentious.
              </p>
              <p className="font-semibold text-zinc-900">
                Fresh-made pasta daily · Calm ambiance · Reliable execution
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100">
            <div className="aspect-[4/3] w-full">
              <Image
                src={ABOUT_IMG}
                alt="Chef and kitchen plating a dish"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}