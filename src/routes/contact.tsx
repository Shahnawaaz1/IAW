import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Location, FinalCta, Footer, FloatingWhatsApp } from "@/components/Sections2";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Us | IAW Force" },
      { name: "description", content: "Get in touch with IAW Force Dealership in Gorakhpur. Visit our showroom or call us for enquiries." },
    ],
  }),
});

function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground pt-16 md:pt-20">
      <Navbar />
      <main>
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
