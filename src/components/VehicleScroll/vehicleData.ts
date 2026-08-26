import traveller from "@/assets/traveller.png";
import urbania from "@/assets/urbania.png";
import trax from "@/assets/trax.png";
import monobus from "@/assets/monobus.png";

export type VehiclePace = "standard" | "premium" | "energetic" | "wide";

export type Vehicle = {
  id: string;
  index: string;
  categoryTag: string;
  title: string;
  subtitle: string;
  description: string;
  seating: string;
  engine: string;
  application: string;
  points: string[];
  cta: string;
  image: string;
  model?: string;
  pace: VehiclePace;
};

export const vehicles: Vehicle[] = [
  {
    id: "traveller",
    index: "01",
    categoryTag: "PASSENGER · SCHOOL · AMBULANCE",
    title: "TRAVELLER N",
    subtitle: "THE UNMATCHED LEADER IN COMMERCIAL MOBILITY.",
    description:
      "A versatile mobility platform for passenger transport, schools, ambulances and delivery operations. Known for unmatched durability and low operating cost.",
    seating: "9 to 26 Seater Options",
    engine: "FM 2.6 CR ED Diesel",
    application: "School Bus, Route, Staff, Ambulance & Delivery",
    points: [
      "Passenger & Staff Transport",
      "School Bus & Safety Compliant",
      "Type B/C/D Ambulance Conversions",
      "Delivery & Cargo Van Options",
    ],
    cta: "ENQUIRE FOR TRAVELLER",
    image: traveller,
    model: "/models/traveller.glb",
    pace: "standard",
  },
  {
    id: "urbania",
    index: "02",
    categoryTag: "PREMIUM PASSENGER MOBILITY",
    title: "URBANIA DX",
    subtitle: "CONTEMPORARY DESIGN, REFINED COMFORT.",
    description:
      "A world-class, aerodynamic passenger vehicle engineered for modern premium business, hotel fleets, executive tour operators and luxury travel.",
    seating: "10 to 17 Seater Monocoque",
    engine: "Mercedes-Derived FM 2.6 CR ED",
    application: "Luxury Tourism, Executive Travel & Hotel Fleet",
    points: [
      "Monocoque Body with Independent Suspension",
      "Dual Airbags, ESP, ABS & EBD Safety",
      "Individual AC Vents & USB Ports per Seat",
      "Best-in-Class NVH & Supreme Ride Comfort",
    ],
    cta: "ENQUIRE FOR URBANIA",
    image: urbania,
    model: "/models/urbania.glb",
    pace: "premium",
  },
  {
    id: "trax",
    index: "03",
    categoryTag: "RUGGED MULTI-UTILITY RANGE",
    title: "TRAX CRUISER & TOOFAN",
    subtitle: "RUGGED, PRACTICAL MOBILITY FOR TOUGH TERRAINS.",
    description:
      "Engineered for high seating capacity and unbeatable reliability on rural, semi-urban, and rough road conditions.",
    seating: "9 to 13 Seater Capacity",
    engine: "Powerful & Reliable Mercedes-Derived Diesel",
    application: "Rural & Suburban Routes, Fleet, Commercial Crew",
    points: [
      "High Ground Clearance & Heavy-Duty Chassis",
      "Spacious Cabin with Dual AC Option",
      "Maximized Revenue per Trip for Operators",
      "Minimal Maintenance & Proven Longevity",
    ],
    cta: "ENQUIRE FOR TRAX",
    image: trax,
    model: "/models/trax.glb",
    pace: "energetic",
  },
  {
    id: "monobus",
    index: "04",
    categoryTag: "PASSENGER · SCHOOL TRANSPORT",
    title: "MONOBUS",
    subtitle: "DEPENDABLE PASSENGER & SCHOOL CONFIGURATIONS.",
    description:
      "A monocoque passenger bus providing superior safety, comfort, and economy for larger groups, schools, colleges, and staff transportation.",
    seating: "28 to 33 Seater Configurations",
    engine: "High Torque Turbo Diesel Engine",
    application: "School Bus, Staff Shuttles & Inter-City Routes",
    points: [
      "Rigid Monocoque Structure with Low Floor Height",
      "Air Suspension / High Comfort Seating Options",
      "Full Government & School Bus Code Compliant",
      "Low Operational Cost & High Fuel Efficiency",
    ],
    cta: "ENQUIRE FOR MONOBUS",
    image: monobus,
    model: "/models/monobus.glb",
    pace: "wide",
  },
];
