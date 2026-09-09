import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { WhyIaw } from "@/components/Sections";
import { BuyingGuide, Footer, FloatingWhatsApp } from "@/components/Sections2";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Us | IAW Force" },
      { name: "description", content: "Learn more about IAW Force Motors Dealership in Gorakhpur and our commitment to serving Eastern UP." },
    ],
  }),
});

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground pt-16 md:pt-20">
      <Navbar />
      <main>
        <WhyIaw />
        <BuyingGuide />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
