import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { VehicleScroll } from "@/components/VehicleScroll/VehicleScroll";
import {
  VehicleRange,
  TravellerCatalogue,
  Solutions,
  WhyIaw,
  VehicleFinder,
} from "@/components/Sections";
import {
  Finance,
  ServiceParts,
  BuyingGuide,
  FaqSection,
  Location,
  FinalCta,
  Footer,
  FloatingWhatsApp,
} from "@/components/Sections2";
import { Preloader } from "@/components/Preloader";
import { site } from "@/config/site";

const title = "IAW Force | Authorized Force Motors Dealership in Gorakhpur & Eastern UP";
const description =
  "Official IAW Force Motors Dealership in Gorakhpur. Explore Force Traveller N, Urbania DX, Trax Cruiser, Monobus 33, Gurkha 4x4 and Ambulances. Get instant on-road price quotations, easy commercial finance, test drives, and certified service support across Eastern Uttar Pradesh.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Force Motors Gorakhpur, IAW Force, Force Traveller Gorakhpur, Force Urbania price Gorakhpur, Force Trax Cruiser, Force Monobus school bus, Force Gurkha 4x4 Gorakhpur, Force Ambulance dealer UP, Force commercial vehicle finance, Force Motors showroom Eastern UP, Traveller on road price Gorakhpur",
      },
      // Open Graph Metadata
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://iawforce.com/" },
      { property: "og:site_name", content: "IAW FORCE" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: "https://iawforce.com/hero-vehicle.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "IAW Force Motors Dealership Gorakhpur" },

      // Twitter Card Metadata
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://iawforce.com/hero-vehicle.jpg" },

      // Geographic Meta Tags (GEO SEO for Gorakhpur & Eastern UP)
      { name: "geo.region", content: "IN-UP" },
      { name: "geo.placename", content: "Gorakhpur, Uttar Pradesh, India" },
      { name: "geo.position", content: "26.7606;83.3732" },
      { name: "ICBM", content: "26.7606, 83.3732" },
      { name: "target", content: "all" },
      { name: "audience", content: "all" },
      { name: "coverage", content: "Worldwide" },
      { name: "rating", content: "General" },
      { name: "revisit-after", content: "3 days" },
      { name: "author", content: "Shine Infosolutions (https://www.shineinfosolutions.in/)" },
    ],
    links: [
      { rel: "canonical", href: "https://iawforce.com/" },
      { rel: "alternate", hrefLang: "en-IN", href: "https://iawforce.com/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://iawforce.com/" },
    ],
    scripts: [
      // 1. AutoDealer & LocalBusiness Schema (Google Rich Results)
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["AutoDealer", "LocalBusiness"],
          "@id": "https://iawforce.com/#dealership",
          name: site.name,
          legalName: site.legalName,
          url: "https://iawforce.com",
          logo: "https://iawforce.com/favicon.ico",
          image: "https://iawforce.com/hero-vehicle.jpg",
          description,
          telephone: site.phone,
          email: site.email,
          priceRange: "₹₹₹",
          currenciesAccepted: "INR",
          paymentAccepted: "Cash, Credit Card, Bank Transfer, Commercial Vehicle Loan Finance",
          address: {
            "@type": "PostalAddress",
            streetAddress: site.addressLine,
            addressLocality: site.city,
            addressRegion: site.state,
            postalCode: "273209",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 26.7606,
            longitude: 83.3732,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:30",
              closes: "19:30",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Sunday"],
              opens: "10:00",
              closes: "17:00",
            },
          ],
          areaServed: [
            { "@type": "City", name: "Gorakhpur" },
            { "@type": "AdministrativeArea", name: "Eastern Uttar Pradesh" },
            { "@type": "AdministrativeArea", name: "Deoria" },
            { "@type": "AdministrativeArea", name: "Kushinagar" },
            { "@type": "AdministrativeArea", name: "Maharajganj" },
            { "@type": "AdministrativeArea", name: "Basti" },
            { "@type": "AdministrativeArea", name: "Sant Kabir Nagar" },
            { "@type": "AdministrativeArea", name: "Azamgarh" },
          ],
          brand: {
            "@type": "Brand",
            name: "Force Motors",
            url: "https://www.forcemotors.com/",
          },
          sameAs: [
            "https://iawforce.com/",
            "https://www.facebook.com/",
            "https://www.instagram.com/",
          ],
        }),
      },
      // 2. AEO / FAQPage Schema (Answer Engine Optimization for ChatGPT, Perplexity, Gemini & Google AI Overviews)
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which Force vehicle is suitable for my business?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The right choice depends on your application, route, passenger capacity, operating conditions, and budget. Popular choices include Traveller N (9-26 seats) for passenger and school routes, Urbania DX (10-17 seats) for executive and luxury travel, Trax Cruiser for rugged rural roads, and Monobus for high-capacity school and staff transit. IAW Force in Gorakhpur provides personalized requirement consultations.",
              },
            },
            {
              "@type": "Question",
              name: "Can I request an on-road price quotation for Force vehicles in Gorakhpur?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. On-road pricing depends on the selected model, seating variant, AC options, registration location, and applicable taxes. You can submit an enquiry online or message on WhatsApp at +91 84295 40902 for an immediate quotation from IAW Force Gorakhpur.",
              },
            },
            {
              "@type": "Question",
              name: "Do you assist with commercial vehicle finance and bank loans?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. IAW Force coordinates directly with nationalized banks and leading private financiers to offer commercial vehicle loans with competitive interest rates, low down payment options, and flexible repayment tenures up to 7 years.",
              },
            },
            {
              "@type": "Question",
              name: "Can I book a test drive for Force Traveller, Urbania, or Gurkha?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. You can book a test drive by contacting IAW Force at 1800-889-6927 (Toll-free) or WhatsApp +91 84295 40902. Our team will schedule the vehicle demonstration at our Gorakhpur showroom or your premises.",
              },
            },
            {
              "@type": "Question",
              name: "What models of Force Motors vehicles are available at IAW Force Gorakhpur?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "IAW Force offers the complete Force Motors lineup including Force Traveller N (Passenger, School, Ambulance, Delivery Van), Force Urbania DX (10/13/17-seater executive van), Force Monobus (28-33 seater bus), Force Trax Cruiser & Toofan (9-13 seater multi-utility), Force Gurkha 4x4 (3-door & 5-door off-roaders), and upcoming Force EV commercial vehicles.",
              },
            },
          ],
        }),
      },
      // 3. Product Catalog Schema (ItemList)
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Force Traveller N",
              description: "The benchmark of commercial mobility for passenger, school, and ambulance applications.",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Force Urbania DX",
              description: "World-class luxury executive van with Mercedes-derived 115 HP engine and independent front suspension.",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Force Monobus",
              description: "Efficient high-capacity 28 to 33-seater transit bus for schools, colleges, and staff routes.",
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Force Trax Cruiser & Toofan",
              description: "Heavy duty rugged reliability for rural transport, shared mobility, and fleet operations.",
            },
            {
              "@type": "ListItem",
              position: 5,
              name: "Force Gurkha 4x4",
              description: "Extreme exploration 4x4 off-roader with front & rear differential locks and 700mm water wading.",
            },
            {
              "@type": "ListItem",
              position: 6,
              name: "Force Traveller Ambulance",
              description: "Purpose-built life-saving transit for Type B, C & D (BLS & ALS ICU) medical emergency operations.",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <VehicleScroll />
        <VehicleRange />
        <TravellerCatalogue />
        <Solutions />
        <WhyIaw />
        <VehicleFinder />
        <BuyingGuide />
        <Finance />
        <ServiceParts />
        <FaqSection />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
