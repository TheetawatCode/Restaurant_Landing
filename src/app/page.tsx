import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { LocationHours } from "@/components/sections/LocationHours";
import { CTAReserve } from "@/components/sections/CTAReserve";

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-white text-zinc-900">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <MenuPreview />
        <About />
        <Gallery />
        <Testimonials />
        <LocationHours />
        <CTAReserve />
      </main>
      <Footer />
    </div>
  );
}