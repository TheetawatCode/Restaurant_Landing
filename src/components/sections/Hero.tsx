import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Italian restaurant hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/40 to-black/70" />
      </div>

      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="max-w-2xl">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-white/15 text-white border border-white/20">
              <Sparkles size={14} />
              Modern Italian Dining
            </Badge>
            <Badge className="bg-white/15 text-white border border-white/20">
              <MapPin size={14} />
              City Center
            </Badge>
          </div>

          <h1 className="mt-6 font-display text-4xl leading-tight text-white sm:text-5xl">
            Handcrafted Italian classics —{" "}
            <span className="text-gold">elevated</span> for modern dining.
          </h1>

          <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
            Fresh ingredients, handmade pasta, and a curated wine list. A
            refined atmosphere for business dinners, celebrations, and date
            nights.
          </p>

          <div id="reserve" className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#location" className="rounded-2xl px-5 py-3 text-base">
              Reserve a Table
            </Button>
            <Button
              href="#menu"
              variant="secondary"
              className="rounded-2xl px-5 py-3 text-base bg-white/90 hover:bg-white"
            >
              View Menu
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <p className="text-sm font-semibold text-white">4.8/5</p>
              <p className="mt-1 text-xs text-white/75">Avg. guest rating</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <p className="text-sm font-semibold text-white">12+ Wines</p>
              <p className="mt-1 text-xs text-white/75">Curated selection</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <p className="text-sm font-semibold text-white">Daily</p>
              <p className="mt-1 text-xs text-white/75">Fresh-made pasta</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}