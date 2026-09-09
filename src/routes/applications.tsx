import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Solutions } from "@/components/Sections";
import { Footer, FloatingWhatsApp } from "@/components/Sections2";

export const Route = createFileRoute("/applications")({
  component: Applications,
  head: () => ({
    meta: [
      { title: "Mobility Applications | IAW Force" },
      { name: "description", content: "Discover Force Motors mobility solutions for School, Tour, Medical, and Cargo applications." },
    ],
  }),
});

function Applications() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground pt-16 md:pt-20">
      <Navbar />
      <main>
        <Solutions />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
