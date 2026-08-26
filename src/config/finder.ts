import travellerImg from "@/assets/traveller.png";
import urbaniaImg from "@/assets/urbania.png";
import traxImg from "@/assets/trax.png";
import monobusImg from "@/assets/monobus.png";

export const usageOptions = [
  "PASSENGER TRANSPORT",
  "SCHOOL TRANSPORT",
  "STAFF & CORPORATE",
  "LUXURY TOURISM",
  "EMERGENCY / AMBULANCE",
  "RURAL & HEAVY DUTY",
] as const;

export const capacityOptions = [
  "UP TO 9 SEATS",
  "10 TO 17 SEATS",
  "18 TO 26 SEATS",
  "28 TO 33+ SEATS",
] as const;

export const terrainOptions = [
  "CITY & HIGHWAY",
  "ROUGH ROADS & RURAL",
  "ALL-TERRAIN 4X4",
] as const;

export type Usage = (typeof usageOptions)[number];
export type Capacity = (typeof capacityOptions)[number];
export type Terrain = (typeof terrainOptions)[number];

export interface DetailedRecommendation {
  vehicle: string;
  vehicleId: string;
  badge: string;
  matchScore: number;
  tagline: string;
  image: string;
  priceEstimate: string;
  seating: string;
  engine: string;
  mileageNote: string;
  variants: string[];
  whyRecommended: string;
  keyBenefits: string[];
}

/**
 * Intelligent recommendation matrix evaluating all 3 dimensions:
 * Usage Case × Passenger Capacity × Operating Terrain.
 */
export function recommendVehicle(
  usage: Usage = "PASSENGER TRANSPORT",
  capacity: Capacity = "10 TO 17 SEATS",
  terrain: Terrain = "CITY & HIGHWAY",
): DetailedRecommendation {
  // 1. EMERGENCY / AMBULANCE (Always matches Purpose-Built Traveller Ambulance)
  if (usage === "EMERGENCY / AMBULANCE") {
    return {
      vehicle: "Force Traveller Ambulance (Type B / C / D)",
      vehicleId: "traveller-ambulance",
      badge: "PURPOSE-BUILT MEDICAL CARE",
      matchScore: 99,
      tagline: "Pre-Engineered Life-Saving Emergency ICU & BLS Platform",
      image: travellerImg,
      priceEstimate: "₹ 16.8 Lakh – ₹ 28.5 Lakh",
      seating: "Patient Stretcher + Doctor + 3 Paramedic Attendants",
      engine: "FM 2.6 CR ED Turbo Diesel (115 HP / 350 Nm)",
      mileageNote: "Heavy-duty dual alternator for medical equipment power",
      variants: [
        "Type B (Basic Life Support / Patient Transport)",
        "Type C (Advanced Life Support ICU Ambulance)",
        "Type D (Mobile Medical Healthcare Clinic)",
      ],
      whyRecommended:
        "India's gold standard ambulance platform with factory-fitted seamless anti-bacterial washable interiors, integrated oxygen pipeline, and emergency LED warning beacons for hospital fleets in Eastern UP.",
      keyBenefits: [
        "Government MOHFW Ambulance Code compliant",
        "Pre-wired for ventilator, defibrillator & cardiac monitors",
        "Auto-loading stretcher base and emergency siren PA system",
      ],
    };
  }

  // 2. ALL-TERRAIN 4X4 (Off-Road / Extreme Mountain / Defense)
  if (terrain === "ALL-TERRAIN 4X4") {
    if (capacity === "UP TO 9 SEATS") {
      return {
        vehicle: "Force Gurkha 4x4 (3-Door / 5-Door)",
        vehicleId: "gurkha",
        badge: "EXTREME OFF-ROAD 4X4",
        matchScore: 98,
        tagline: "Unstoppable All-Terrain 4x4 with Mechanical Differential Locks",
        image: traxImg,
        priceEstimate: "₹ 16.75 Lakh – ₹ 18.00 Lakh",
        seating: "4 Seater (3-Door) / 7 Seater (5-Door) Configurations",
        engine: "Mercedes-Derived 2.6L Turbo Diesel (140 HP / 320 Nm)",
        mileageNote: "Low-end crawler torque with low-range transfer case",
        variants: [
          "Gurkha 3-Door 4x4 Compact Expedition",
          "Gurkha 5-Door 4x4 Family & Crew Explorer",
        ],
        whyRecommended:
          "Engineered for extreme off-road terrains, construction sites, and challenging routes with front & rear manual locking differentials and 700mm water wading capacity.",
        keyBenefits: [
          "Manual front & rear mechanical locking differentials",
          "Factory-fitted air snorkel with 700mm water wading depth",
          "Heavy-duty ladder frame chassis with 4x4 low ratio gearbox",
        ],
      };
    }
  }

  // 3. HIGH CAPACITY (28 TO 33+ SEATS) OR SCHOOL BUS (28+)
  if (capacity === "28 TO 33+ SEATS") {
    const isSchool = usage === "SCHOOL TRANSPORT";
    return {
      vehicle: isSchool ? "Force Monobus School Edition" : "Force Monobus 33 / 28 Seater",
      vehicleId: "monobus",
      badge: isSchool ? "CERTIFIED SCHOOL SAFETY BUS" : "HIGH-CAPACITY GROUP TRANSIT",
      matchScore: 98,
      tagline: isSchool
        ? "Safe, Certified High-Capacity Transport for Schools & Institutions"
        : "Ultra-Reliable High-Capacity Monocoque Passenger Bus",
      image: monobusImg,
      priceEstimate: "₹ 24.5 Lakh – ₹ 32.8 Lakh",
      seating: "28 to 33 Seater Options (+ Driver)",
      engine: "High-Torque Common Rail Turbo Diesel (CRDe)",
      mileageNote: "Lightweight monocoque design delivers 15% better fuel economy",
      variants: isSchool
        ? [
            "Monobus 28 Seater School Bus",
            "Monobus 33 Seater School Bus",
            "Monobus 41 Seater Junior School Configuration",
          ]
        : [
            "Monobus 28 Seater Standard",
            "Monobus 33 Seater Deluxe Route",
            "Monobus AC Intercity Pushback",
          ],
      whyRecommended:
        "Lightweight pressed-steel monocoque body lowers center of gravity for safety, while low boarding step ensures safe boarding for students and passengers across Gorakhpur routes.",
      keyBenefits: [
        "Government School Bus Code compliant (AIS-063)",
        "Low step height with anti-skid wide passenger aisle",
        "Large panoramic windows, emergency exit door, and fire suppression systems",
      ],
    };
  }

  // 4. LUXURY TOURISM & EXECUTIVE VIP TRAVEL
  if (usage === "LUXURY TOURISM" || (usage === "STAFF & CORPORATE" && terrain === "CITY & HIGHWAY" && capacity === "10 TO 17 SEATS")) {
    const isLong = capacity === "18 TO 26 SEATS";
    return {
      vehicle: isLong ? "Force Traveller Luxury Royale" : "Force Urbania DX",
      vehicleId: isLong ? "traveller" : "urbania",
      badge: "PREMIUM EXECUTIVE MOBILITY",
      matchScore: 99,
      tagline: "World-Class Aerodynamic Design, Car-Like Ride & Reclining Comfort",
      image: isLong ? travellerImg : urbaniaImg,
      priceEstimate: isLong ? "₹ 22.5 Lakh – ₹ 27.8 Lakh" : "₹ 28.9 Lakh – ₹ 36.5 Lakh",
      seating: isLong ? "17 to 20 Luxury Pushback Seats" : "10, 13, or 17 Seater Monocoque Options",
      engine: "Mercedes-Derived FM 2.6 CR ED (115 HP / 350 Nm)",
      mileageNote: "Ultra-quiet NVH levels with best-in-class aerodynamics",
      variants: [
        "Urbania Short Wheelbase (10+D Executive)",
        "Urbania Medium Wheelbase (13+D Luxury Tour)",
        "Urbania Long Wheelbase (17+D Corporate Fleet)",
      ],
      whyRecommended:
        "Segment-first independent front suspension, dual airbags with ESP, individual reclining seats, and sealed double-glazed windows provide unmatched ride comfort for VIPs and tour groups.",
      keyBenefits: [
        "Independent front suspension for sedan-like bump absorption",
        "Individual AC vents, USB fast chargers & reading lamps at every seat",
        "Dual front airbags, ESP, ABS, EBD & Hill Hold Assist standard",
      ],
    };
  }

  // 5. RURAL & HEAVY DUTY / ROUGH ROADS (Trax Cruiser & Toofan)
  if (usage === "RURAL & HEAVY DUTY" || terrain === "ROUGH ROADS & RURAL") {
    const isLargeTrax = capacity === "10 TO 17 SEATS" || capacity === "UP TO 9 SEATS";
    return {
      vehicle: "Force Trax Cruiser & Toofan",
      vehicleId: "trax",
      badge: "MAXIMUM EARNING POWER",
      matchScore: 98,
      tagline: "Heavy-Duty Multi-Utility Vehicle Built for Tough Roads & Big Payloads",
      image: traxImg,
      priceEstimate: "₹ 13.8 Lakh – ₹ 17.5 Lakh",
      seating: capacity === "UP TO 9 SEATS" ? "9 Seater Configuration" : "11 to 13 Seater Capacity",
      engine: "Proven FM 2.6L Turbo Diesel Engine (90 HP / 250 Nm)",
      mileageNote: "Lowest operating cost per passenger-kilometer in India",
      variants: [
        "Trax Cruiser (9+D / 12+D Family & Route)",
        "Trax Toofan (11+D / 13+D High Capacity)",
        "Trax Delivery Van (High Volumetric Cargo)",
      ],
      whyRecommended:
        "High ground clearance with heavy-duty rigid leaf spring suspension, making it virtually indestructible on broken rural roads and maximizing per-trip revenue for Eastern UP operators.",
      keyBenefits: [
        "High 210mm ground clearance for traversing potholes and muddy roads",
        "Spacious cabin with dual AC option and flexible foldable jump seats",
        "High market resale value and lowest spare part maintenance cost",
      ],
    };
  }

  // 6. SCHOOL TRANSPORT (10 to 26 Seats)
  if (usage === "SCHOOL TRANSPORT") {
    const isBig = capacity === "18 TO 26 SEATS";
    return {
      vehicle: isBig ? "Force Traveller School Bus (26 Seater)" : "Force Traveller School Bus (15-18 Seater)",
      vehicleId: "traveller",
      badge: "CERTIFIED SCHOOL SAFETY",
      matchScore: 99,
      tagline: "India's Most Trusted & Safest School Bus Platform",
      image: travellerImg,
      priceEstimate: isBig ? "₹ 19.5 Lakh – ₹ 24.2 Lakh" : "₹ 16.2 Lakh – ₹ 19.8 Lakh",
      seating: isBig ? "26 Student Seats + Attendant + Driver" : "15 to 18 Student Seats + Driver",
      engine: "FM 2.6 CR ED Diesel with Synchromesh Overdrive",
      mileageNote: "Unmatched fuel efficiency with proven low maintenance",
      variants: [
        "Traveller 3050 School (15 Seater)",
        "Traveller 3350 School (18 Seater)",
        "Traveller 4020 Super School (26 Seater)",
      ],
      whyRecommended:
        "Full compliance with government school bus safety norms including speed governors, low first step for children, emergency doors, stop arms, and school-bag rack under seats.",
      keyBenefits: [
        "Specially designed child-safe seats with grab handles & seatbelts",
        "Low footstep height for effortless boarding for primary students",
        "Monocoque pressed-steel construction providing rollover structural safety",
      ],
    };
  }

  // 7. STAFF & CORPORATE (18 to 26 Seats) OR PASSENGER TRANSPORT (18 to 26 Seats)
  if (capacity === "18 TO 26 SEATS") {
    return {
      vehicle: "Force Traveller 4020 Super (26 Seater)",
      vehicleId: "traveller",
      badge: "HIGH CAPACITY ROUTE LEADER",
      matchScore: 99,
      tagline: "The Unrivalled 26-Seater Benchmark for Daily Route & Staff Transit",
      image: travellerImg,
      priceEstimate: "₹ 19.8 Lakh – ₹ 24.9 Lakh",
      seating: "20 to 26 Seater Configurations",
      engine: "FM 2.6 CR ED Diesel (115 HP / 350 Nm)",
      mileageNote: "Best fuel economy in the 26-seater segment",
      variants: [
        "Traveller 3700 (19+D / 20+D Passenger)",
        "Traveller 4020 Super (26 Seater High Roof)",
        "Traveller 4020 Deluxe AC Pushback",
      ],
      whyRecommended:
        "Spacious high-roof cabin allows full standing height, making long-distance route travel and daily staff commutes comfortable while ensuring maximum operator profit per route.",
      keyBenefits: [
        "High roof with 6-foot standing headroom",
        "Synchromesh 5-speed gearbox with overdrive for relaxed highway cruising",
        "Dual AC with individual passenger air louvres and luggage rack",
      ],
    };
  }

  // 8. DEFAULT / PASSENGER TRANSPORT (10 to 17 Seats) OR (Up to 9 Seats)
  return {
    vehicle: capacity === "UP TO 9 SEATS" ? "Force Traveller 3050 (9-12 Seater)" : "Force Traveller 3350 (14-17 Seater)",
    vehicleId: "traveller",
    badge: "INDIA'S #1 MOBILITY PLATFORM",
    matchScore: 99,
    tagline: "The Benchmark of Reliability, Low Maintenance & High Profitability",
    image: travellerImg,
    priceEstimate: capacity === "UP TO 9 SEATS" ? "₹ 15.2 Lakh – ₹ 17.8 Lakh" : "₹ 16.8 Lakh – ₹ 21.5 Lakh",
    seating: capacity === "UP TO 9 SEATS" ? "9 to 12 Seater Options" : "14 to 17 Seater Options (+ Driver)",
    engine: "FM 2.6 CR ED Diesel (115 HP / 350 Nm)",
    mileageNote: "Industry-leading mileage and long 20,000 km service intervals",
    variants: [
      "Traveller 3050 (9+D / 12+D Passenger)",
      "Traveller 3350 (14+D / 17+D Passenger High Roof)",
      "Traveller Deluxe AC Edition",
    ],
    whyRecommended:
      "India's most trusted commercial passenger platform. Monocoque pressed-steel body ensures low center of gravity, high fuel economy, and unmatched passenger safety across Gorakhpur and Eastern UP.",
    keyBenefits: [
      "High roof with full standing headroom for passenger comfort",
      "Factory-fitted dual AC with individual louvres",
      "100% genuine parts availability and dedicated servicing at IAW Force",
    ],
  };
}
