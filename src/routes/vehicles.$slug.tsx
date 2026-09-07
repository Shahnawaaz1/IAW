import { useState, useEffect } from "react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer, FloatingWhatsApp } from "@/components/Sections2";
import { allVehicles } from "@/data/vehicles";
import { HeroSection, SpecificationsSection, FeaturesSection, SimilarVehiclesSection } from "@/components/VehicleDetails";
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
  const similarVehiclesData = allVehicles.filter(v => vehicle.similarVehicles.includes(v.slug));

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow flex flex-col pt-24">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-slate-200 py-3">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <a href="/" className="hover:text-[#006CB5] transition-colors">Home</a>
              <span>/</span>
              <span className="text-slate-400">Vehicles</span>
              <span>/</span>
              <span className="text-slate-400 capitalize">{vehicle.category.replace('-', ' ')}</span>
              <span>/</span>
              <span className="text-[#006CB5] font-bold">{vehicle.name}</span>
            </div>
          </div>
        </div>

        <HeroSection 
          vehicle={vehicle} 
          onEnquire={() => setIsEnquireOpen(true)} 
          onTestDrive={() => setIsTestDriveOpen(true)} 
        />
        
        <SpecificationsSection specs={vehicle.specifications} />
        
        <FeaturesSection features={vehicle.features} />
        
        {similarVehiclesData.length > 0 && (
          <SimilarVehiclesSection vehicles={similarVehiclesData} />
        )}
      </main>
      
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
