import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { MapPin, Clock, Phone } from "lucide-react";

export function LocationHours() {
  return (
    <section id="location" className="bg-cream py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionTitle
              eyebrow="Visit us"
              title="A calm, premium space in the city center."
              description="Perfect for business dinners, celebrations, and date nights."
            />

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <MapPin className="mt-0.5" size={18} />
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Address</p>
                  <p className="text-sm text-zinc-600">
                    123 Roma Street, City Center
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <Clock className="mt-0.5" size={18} />
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Hours</p>
                  <p className="text-sm text-zinc-600">
                    Mon–Thu: 11:00–22:00 <br />
                    Fri–Sun: 11:00–23:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <Phone className="mt-0.5" size={18} />
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Contact</p>
                  <p className="text-sm text-zinc-600">(000) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button href="#reserve">Reserve</Button>
                <Button variant="secondary" href="#">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>

          {/* Map placeholder (ดูโปรแบบไม่ต้องใช้ API) */}
          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-zinc-200 p-4">
              <p className="text-sm font-semibold text-zinc-900">
                Map Preview (Placeholder)
              </p>
              <p className="text-xs text-zinc-500">Replace with Google Map</p>
            </div>
            <div className="aspect-16/10 w-full bg-[linear-gradient(135deg,rgba(0,0,0,0.06),rgba(0,0,0,0.02))] p-6">
              <div className="h-full w-full rounded-2xl border border-zinc-200 bg-white/60 backdrop-blur flex items-center justify-center">
                <p className="text-sm text-zinc-600">
                  Drop your embedded map here
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}