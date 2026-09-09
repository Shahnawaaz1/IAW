import { useState, useEffect } from "react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer, FloatingWhatsApp } from "@/components/Sections2";
import { allVehicles } from "@/data/vehicles";
import {
  HeroSection,
  SalientFeaturesSection,
  SpecificationsSection,
  FeaturesSection,
  DealershipSection,
  SimilarVehiclesSection,
} from "@/components/VehicleDetails";
import { EnquireModal, TestDriveModal } from "@/components/EnquiryForms";

export const Route = createFileRoute("/vehicles/$slug")({
  loader: ({ params }) => {
    const vehicle = allVehicles.find((v) => v.slug === params.slug);
    if (!vehicle) {
      throw notFound();
    }
    return { vehicle };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.vehicle?.name ?? "Vehicle Details"} | IAW Force` },
      { name: "description", content: loaderData?.vehicle?.description ?? "" },
    ],
  }),
  component: VehiclePage,
});

function VehiclePage() {
  const { vehicle } = Route.useLoaderData();
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);

  // Auto-scroll to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [vehicle.slug]);

  // Find similar vehicles data
  const similarVehiclesData = allVehicles.filter((v) =>
    vehicle.similarVehicles.includes(v.slug)
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
      <Navbar />

      <main className="flex-grow flex flex-col pt-16 md:pt-20">
        <HeroSection
          vehicle={vehicle}
          onEnquire={() => setIsEnquireOpen(true)}
          onTestDrive={() => setIsTestDriveOpen(true)}
        />

        <SalientFeaturesSection key={`features-${vehicle.slug}`} vehicle={vehicle} />

        <SpecificationsSection specs={vehicle.specifications} />

        <FeaturesSection features={vehicle.features} />

        <DealershipSection
          vehicle={vehicle}
          onEnquire={() => setIsEnquireOpen(true)}
          onTestDrive={() => setIsTestDriveOpen(true)}
        />

        {similarVehiclesData.length > 0 && (
          <SimilarVehiclesSection vehicles={similarVehiclesData} />
        )}
      </main>

      {/* Sticky Mobile CTA Bar for quick enquiry and test drive */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 sm:hidden flex items-center gap-3">
        <button
          type="button"
          onClick={() => setIsEnquireOpen(true)}
          className="flex-1 bg-[#006CB5] text-white py-3 rounded-full text-xs font-bold tracking-wider text-center shadow-md"
        >
          ENQUIRE NOW
        </button>
        <button
          type="button"
          onClick={() => setIsTestDriveOpen(true)}
          className="flex-1 border-2 border-[#006CB5] text-[#006CB5] py-3 rounded-full text-xs font-bold tracking-wider text-center"
        >
          BOOK TEST DRIVE
        </button>
      </div>
      
      <Footer />
      <FloatingWhatsApp />
      
      {/* Modals */}
      <EnquireModal 
        isOpen={isEnquireOpen} 
        onClose={() => setIsEnquireOpen(false)} 
        vehicle={vehicle} 
      />
      <TestDriveModal 
        isOpen={isTestDriveOpen} 
        onClose={() => setIsTestDriveOpen(false)} 
        vehicle={vehicle} 
      />
    </div>
  );
}
