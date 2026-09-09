import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { VehicleRange, TravellerCatalogue, VehicleFinder } from "@/components/Sections";
import { VehicleScroll } from "@/components/VehicleScroll/VehicleScroll";
import { Footer, FloatingWhatsApp } from "@/components/Sections2";

export const Route = createFileRoute("/vehicles/")({
  component: VehiclesIndex,
  head: () => ({
    meta: [
      { title: "Vehicles Range | IAW Force" },
      { name: "description", content: "Explore the complete range of Force Motors commercial and passenger vehicles at IAW Force." },
    ],
  }),
});

function VehiclesIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground pt-16 md:pt-20">
      <Navbar />
      <main>
        <VehicleRange />
        <VehicleScroll />
        <TravellerCatalogue />
        <VehicleFinder />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
