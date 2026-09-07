import travellerImg from "@/assets/traveller.png";
import urbaniaImg from "@/assets/urbania.png";
import traxImg from "@/assets/trax.png";
import monobusImg from "@/assets/monobus.png";

export interface Specification {
  label: string;
  value: string;
}

export type VehiclePace = "standard" | "premium" | "energetic" | "wide";

export interface VehicleData {
  id: string; 
  slug: string;
  name: string;
  brand: string;
  category: "traveller" | "urbania" | "monobus" | "trax" | "gurkha" | "special" | "ev" | "all";
  categoryBadge: string;
  tagline: string;
  description: string;
  price?: string;
  image: string;
  gallery: string[];
  colors?: { name: string; hex: string }[];
  specifications: {
    engine?: string;
    engineCapacity?: string;
    power?: string;
    torque?: string;
    fuelType?: string;
    transmission?: string;
    seatingCapacity?: string;
    dimensions?: string;
    wheelbase?: string;
    groundClearance?: string;
    gvw?: string;
    suspension?: string;
    brakes?: string;
    tyres?: string;
    battery?: string;
    range?: string;
  };
  features: {
    category: "Safety" | "Comfort" | "Performance" | "Utility" | "Technology" | "Interior" | "Exterior";
    items: string[];
  }[];
  similarVehicles: string[];
  officialUrl?: string;
  pace?: VehiclePace;
  cta?: string;
}

export const allVehicles: VehicleData[] = [
  // ==========================================
  // TRAVELLER N
  // ==========================================
  {
    id: "traveller-n",
    slug: "traveller-n-3050wb",
    name: "Traveller N 3050WB",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "PASSENGER",
    tagline: "The Benchmark of Commercial Mobility.",
    description: "A versatile mobility platform for passenger transport, delivering unmatched durability, comfort, and low operating costs for operators.",
    image: travellerImg,
    gallery: [travellerImg],
    colors: [{ name: "Superior White", hex: "#FFFFFF" }],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-3050wb/",
    pace: "standard",
    cta: "ENQUIRE FOR TRAVELLER",
    specifications: {
      engine: "FM 2.6 CR ED Diesel",
      engineCapacity: "2596 cc",
      power: "115 HP @ 2950 rpm",
      torque: "350 Nm @ 1400-2200 rpm",
      fuelType: "Diesel",
      transmission: "5-Speed Manual (Synchromesh)",
      seatingCapacity: "9+D / 12+D",
      dimensions: "5135 mm x 1900 mm x 2550 mm",
      wheelbase: "3050 mm",
      groundClearance: "200 mm",
      gvw: "3510 kg",
      suspension: "Front: Independent / Rear: Parabolic leaf springs",
      brakes: "Hydraulic ABS with EBD",
      tyres: "215/75 R 15",
    },
    features: [
      { category: "Safety", items: ["ABS with EBD", "Monocoque body structure", "High-strength steel construction"] },
      { category: "Comfort", items: ["Dual AC options with individual louvres", "Reclining seats with armrests", "Spacious headroom"] },
      { category: "Performance", items: ["High torque at low rpm", "Fuel-efficient CRDi engine", "Smooth synchromesh gearbox"] }
    ],
    similarVehicles: ["traveller-n-3350wb", "traveller-n-school-bus-3050wb", "urbania"],
  },
  {
    id: "traveller-n",
    slug: "traveller-n-3350wb",
    name: "Traveller N 3350WB",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "PASSENGER",
    tagline: "Optimized for Route and Staff Transport.",
    description: "The preferred choice for mid-size group travel, offering a perfect balance of capacity, comfort, and unmatched reliability.",
    image: travellerImg,
    gallery: [travellerImg],
    colors: [{ name: "Superior White", hex: "#FFFFFF" }],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-3350wb/",
    pace: "standard",
    cta: "ENQUIRE FOR TRAVELLER",
    specifications: {
      engine: "FM 2.6 CR ED Diesel",
      engineCapacity: "2596 cc",
      power: "115 HP @ 2950 rpm",
      torque: "350 Nm @ 1400-2200 rpm",
      fuelType: "Diesel",
      transmission: "5-Speed Manual",
      seatingCapacity: "13+D / 14+D",
      dimensions: "5415 mm x 1900 mm x 2550 mm",
      wheelbase: "3350 mm",
      groundClearance: "200 mm",
      gvw: "3920 kg",
      suspension: "Front: Independent / Rear: Parabolic leaf springs",
      brakes: "Hydraulic ABS with EBD",
    },
    features: [
      { category: "Safety", items: ["ABS with EBD", "Robust monocoque chassis"] },
      { category: "Comfort", items: ["High roof design", "Plush seating", "Excellent NVH insulation"] },
    ],
    similarVehicles: ["traveller-n-3050wb", "traveller-n-4020wb", "traveller-n-wider-body-3350wb"],
  },
  {
    id: "traveller-n",
    slug: "traveller-n-4020wb",
    name: "Traveller N 4020WB",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "PASSENGER",
    tagline: "Maximum Capacity, Maximum Earnings.",
    description: "The extended wheelbase version designed to maximize passenger capacity without compromising on safety and comfort.",
    image: travellerImg,
    gallery: [travellerImg],
    colors: [{ name: "Superior White", hex: "#FFFFFF" }],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-4020wb/",
    pace: "standard",
    cta: "ENQUIRE FOR TRAVELLER",
    specifications: {
      engine: "FM 2.6 CR ED Diesel",
      engineCapacity: "2596 cc",
      power: "115 HP @ 2950 rpm",
      torque: "350 Nm @ 1400-2200 rpm",
      fuelType: "Diesel",
      transmission: "5-Speed Manual",
      seatingCapacity: "17+D / 19+D",
      dimensions: "6770 mm x 1900 mm x 2550 mm",
      wheelbase: "4020 mm",
      groundClearance: "200 mm",
      gvw: "4675 kg",
      suspension: "Front: Independent / Rear: Parabolic leaf springs",
      brakes: "Hydraulic ABS with EBD",
    },
    features: [
      { category: "Utility", items: ["High seating capacity", "Maximized revenue per trip", "Durable driveline"] },
      { category: "Comfort", items: ["Roof mounted AC", "Wide gangway", "Large windows"] },
    ],
    similarVehicles: ["traveller-n-3350wb", "traveller-n-wider-body-4020wb", "monobus"],
  },
  {
    id: "traveller-n",
    slug: "traveller-n-wider-body-3350wb",
    name: "Traveller N Wider Body 3350WB",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "PASSENGER",
    tagline: "Extra Width for Extra Comfort.",
    description: "Featuring a wider cabin design, this variant offers 2x2 seating layouts resulting in superior shoulder room and aisle space.",
    image: travellerImg,
    gallery: [travellerImg],
    colors: [{ name: "Superior White", hex: "#FFFFFF" }],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-wider-body-3350wb/",
    pace: "standard",
    cta: "ENQUIRE FOR TRAVELLER",
    specifications: {
      engine: "FM 2.6 CR ED Diesel",
      power: "115 HP",
      fuelType: "Diesel",
      seatingCapacity: "15+D / 16+D",
      wheelbase: "3350 mm",
      dimensions: "5615 mm x 2225 mm x 2670 mm",
    },
    features: [
      { category: "Comfort", items: ["Wider cabin structure", "2x2 seating layout", "Enhanced legroom and shoulder room"] },
    ],
    similarVehicles: ["traveller-n-3350wb", "traveller-n-wider-body-4020wb", "urbania"],
  },
  {
    id: "traveller-n",
    slug: "traveller-n-wider-body-4020wb",
    name: "Traveller N Wider Body 4020WB",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "PASSENGER",
    tagline: "The Ultimate High-Capacity Wide Transporter.",
    description: "Combining the long 4020mm wheelbase with the wider body for maximum seating and exceptional passenger space.",
    image: travellerImg,
    gallery: [travellerImg],
    colors: [{ name: "Superior White", hex: "#FFFFFF" }],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-wider-body-4020wb/",
    pace: "standard",
    cta: "ENQUIRE FOR TRAVELLER",
    specifications: {
      engine: "FM 2.6 CR ED Diesel",
      power: "115 HP",
      fuelType: "Diesel",
      seatingCapacity: "21+D / 26+D",
      wheelbase: "4020 mm",
      dimensions: "6970 mm x 2225 mm x 2670 mm",
    },
    features: [
      { category: "Utility", items: ["21 to 26 seating capacity", "2x2 configuration", "Ideal for long routes and staff transport"] },
    ],
    similarVehicles: ["traveller-n-wider-body-3350wb", "traveller-n-4020wb", "monobus"],
  },
  {
    id: "traveller-n",
    slug: "traveller-n-4020wb-cng",
    name: "Traveller N 4020WB CNG",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "CNG PASSENGER",
    tagline: "Eco-Friendly Operations. Maximum Earnings.",
    description: "The proven Traveller 4020WB platform powered by a clean, economical CNG engine for low running costs.",
    image: travellerImg,
    gallery: [travellerImg],
    colors: [{ name: "Superior White", hex: "#FFFFFF" }],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-4020wb-cng/",
    pace: "standard",
    cta: "ENQUIRE FOR TRAVELLER",
    specifications: {
      engine: "FM 2.6 CR CNG",
      power: "105 HP @ 3200 rpm",
      fuelType: "CNG",
      seatingCapacity: "19+D",
      wheelbase: "4020 mm",
    },
    features: [
      { category: "Performance", items: ["Factory fitted CNG kit", "Ultra-low running cost", "Eco-friendly emissions"] },
    ],
    similarVehicles: ["traveller-n-4020wb", "traveller-n-wider-body-4020wb-cng"],
  },
  {
    id: "traveller-n",
    slug: "traveller-n-wider-body-4020wb-cng",
    name: "Traveller N Wider Body 4020WB CNG",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "CNG PASSENGER",
    tagline: "Spacious Travel, Sustainable Fuel.",
    description: "The wider body 4020WB variant equipped with a dedicated CNG powertrain for green, spacious transit.",
    image: travellerImg,
    gallery: [travellerImg],
    colors: [{ name: "Superior White", hex: "#FFFFFF" }],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-wider-body-4020wb-cng/",
    pace: "standard",
    cta: "ENQUIRE FOR TRAVELLER",
    specifications: {
      engine: "FM 2.6 CR CNG",
      power: "105 HP",
      fuelType: "CNG",
      seatingCapacity: "26+D",
      wheelbase: "4020 mm",
    },
    features: [
      { category: "Utility", items: ["Wider body for 2x2 seating", "Green CNG technology", "High profitability"] },
    ],
    similarVehicles: ["traveller-n-wider-body-4020wb", "traveller-n-4020wb-cng"],
  },

  // ==========================================
  // TRAVELLER N SCHOOL BUS
  // ==========================================
  {
    id: "traveller-n",
    slug: "traveller-n-school-bus-3050wb",
    name: "Traveller N School Bus 3050WB",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "SCHOOL BUS",
    tagline: "Safety First for Young Travelers.",
    description: "Fully compliant school bus equipped with essential safety features, ideal for narrow city routes and small batches.",
    image: travellerImg,
    gallery: [travellerImg],
    colors: [{ name: "School Bus Yellow", hex: "#FACC15" }],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-school-bus-3050wb/",
    pace: "standard",
    cta: "ENQUIRE FOR TRAVELLER",
    specifications: {
      engine: "FM 2.6 CR ED Diesel",
      power: "115 HP",
      fuelType: "Diesel",
      seatingCapacity: "13+D",
      wheelbase: "3050 mm",
    },
    features: [
      { category: "Safety", items: ["Child-safe interiors", "Stop sign arm", "Emergency exit door", "Fire extinguisher"] },
    ],
    similarVehicles: ["traveller-n-school-bus-3350wb", "traveller-n-3050wb"],
  },
  {
    id: "traveller-n",
    slug: "traveller-n-school-bus-3350wb",
    name: "Traveller N School Bus 3350WB",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "SCHOOL BUS",
    tagline: "Dependable Daily School Commute.",
    description: "The trusted 3350WB platform customized with government-mandated school bus safety codes.",
    image: travellerImg,
    gallery: [travellerImg],
    colors: [{ name: "School Bus Yellow", hex: "#FACC15" }],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-school-bus-3350wb/",
    pace: "standard",
    cta: "ENQUIRE FOR TRAVELLER",
    specifications: {
      engine: "FM 2.6 CR ED Diesel",
      power: "115 HP",
      fuelType: "Diesel",
      seatingCapacity: "16+D",
      wheelbase: "3350 mm",
    },
    features: [
      { category: "Safety", items: ["First aid kit", "Tooth-guard padded seats", "CCTV provisions"] },
    ],
    similarVehicles: ["traveller-n-school-bus-3050wb", "traveller-n-school-bus-3700wb"],
  },
  {
    id: "traveller-n",
    slug: "traveller-n-school-bus-3700wb",
    name: "Traveller N School Bus 3700WB",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "SCHOOL BUS",
    tagline: "Optimized Balance of Size and Capacity.",
    description: "A perfect mid-range school bus offering higher capacity while retaining excellent maneuverability.",
    image: travellerImg,
    gallery: [travellerImg],
    colors: [{ name: "School Bus Yellow", hex: "#FACC15" }],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-school-bus-3700wb/",
    pace: "standard",
    cta: "ENQUIRE FOR TRAVELLER",
    specifications: {
      engine: "FM 2.6 CR ED Diesel",
      power: "115 HP",
      fuelType: "Diesel",
      seatingCapacity: "20+D",
      wheelbase: "3700 mm",
    },
    features: [
      { category: "Utility", items: ["Optimized 20-seat layout", "Low footboard height", "Grab rails for children"] },
    ],
    similarVehicles: ["traveller-n-school-bus-3350wb", "traveller-n-school-bus-4020wb"],
  },
  {
    id: "traveller-n",
    slug: "traveller-n-school-bus-4020wb",
    name: "Traveller N School Bus 4020WB",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "SCHOOL BUS",
    tagline: "Maximum Student Capacity.",
    description: "Long wheelbase school bus designed for larger student groups, ensuring high efficiency for schools.",
    image: travellerImg,
    gallery: [travellerImg],
    colors: [{ name: "School Bus Yellow", hex: "#FACC15" }],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-school-bus-4020wb/",
    pace: "standard",
    cta: "ENQUIRE FOR TRAVELLER",
    specifications: {
      engine: "FM 2.6 CR ED Diesel",
      power: "115 HP",
      fuelType: "Diesel",
      seatingCapacity: "22+D",
      wheelbase: "4020 mm",
    },
    features: [
      { category: "Safety", items: ["ABS with EBD", "Speed limiter", "Emergency exits on sides and roof"] },
    ],
    similarVehicles: ["traveller-n-school-bus-3700wb", "traveller-n-wider-body-school-bus-4020wb", "monobus"],
  },
  {
    id: "traveller-n",
    slug: "traveller-n-wider-body-school-bus-4020wb",
    name: "Traveller N Wider Body School Bus 4020WB",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "SCHOOL BUS",
    tagline: "Spacious Seating for Growing Students.",
    description: "The wider body accommodates 3x2 seating configurations, ideal for larger student capacities per trip.",
    image: travellerImg,
    gallery: [travellerImg],
    colors: [{ name: "School Bus Yellow", hex: "#FACC15" }],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-wider-body-school-bus-4020wb/",
    pace: "standard",
    cta: "ENQUIRE FOR TRAVELLER",
    specifications: {
      engine: "FM 2.6 CR ED Diesel",
      power: "115 HP",
      fuelType: "Diesel",
      seatingCapacity: "27+D",
      wheelbase: "4020 mm",
    },
    features: [
      { category: "Comfort", items: ["Wider aisle space", "Comfortable bench seats", "Excellent ventilation"] },
    ],
    similarVehicles: ["traveller-n-school-bus-4020wb", "monobus"],
  },
  {
    id: "traveller-n",
    slug: "traveller-n-school-bus-3700wb-cng",
    name: "Traveller N School Bus 3700WB CNG",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "CNG SCHOOL BUS",
    tagline: "Green Transport for Schools.",
    description: "An eco-friendly CNG-powered school bus that reduces the carbon footprint and running costs for institutions.",
    image: travellerImg,
    gallery: [travellerImg],
    colors: [{ name: "School Bus Yellow", hex: "#FACC15" }],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-school-bus-3700wb-cng/",
    pace: "standard",
    cta: "ENQUIRE FOR TRAVELLER",
    specifications: {
      engine: "FM 2.6 CR CNG",
      power: "105 HP",
      fuelType: "CNG",
      seatingCapacity: "20+D",
      wheelbase: "3700 mm",
    },
    features: [
      { category: "Performance", items: ["Dedicated CNG engine", "Low emissions", "Cost-effective operation"] },
    ],
    similarVehicles: ["traveller-n-school-bus-3700wb", "traveller-n-4020wb-cng"],
  },

  // ==========================================
  // URBANIA
  // ==========================================
  {
    id: "urbania-dx",
    slug: "urbania",
    name: "Force Urbania",
    brand: "Force Motors",
    category: "urbania",
    categoryBadge: "PREMIUM MOBILITY",
    tagline: "Contemporary Design, Refined Comfort.",
    description: "A world-class, aerodynamic passenger vehicle engineered for modern premium business, hotel fleets, executive tour operators, and luxury travel.",
    image: urbaniaImg,
    gallery: [urbaniaImg],
    colors: [{ name: "Pearl White", hex: "#F5F5F5" }, { name: "Premium Silver", hex: "#C0C0C0" }, { name: "Black", hex: "#1A1A1A" }],
    officialUrl: "https://forceurbania.co.in/",
    pace: "premium",
    cta: "ENQUIRE FOR URBANIA",
    specifications: {
      engine: "Mercedes-Derived FM 2.6 CR ED Diesel",
      engineCapacity: "2596 cc",
      power: "115 HP @ 2950 rpm",
      torque: "350 Nm @ 1400-2200 rpm",
      fuelType: "Diesel",
      transmission: "5-Speed Manual",
      seatingCapacity: "10+D / 13+D / 17+D",
      wheelbase: "3350 mm / 3615 mm / 4400 mm",
      groundClearance: "200 mm",
      suspension: "Front: Independent Double Wishbone / Rear: Parabolic Leaf Springs",
      brakes: "All-wheel disc brakes with ABS, EBD, and ESP",
    },
    features: [
      { category: "Safety", items: ["Dual Airbags", "ESP (Electronic Stability Program)", "Hill Hold Assist", "Rollover Mitigation"] },
      { category: "Comfort", items: ["Independent front suspension", "Individual AC vents", "USB charging ports per seat", "Sealed panoramic windows"] },
      { category: "Technology", items: ["Touchscreen infotainment", "Steering mounted controls", "Projector headlamps with DRLs"] }
    ],
    similarVehicles: ["traveller-n-wider-body-3350wb", "traveller-n-3350wb"],
  },

  // ==========================================
  // MONOBUS
  // ==========================================
  {
    id: "monobus-33",
    slug: "monobus",
    name: "Force Monobus",
    brand: "Force Motors",
    category: "monobus",
    categoryBadge: "HIGH CAPACITY",
    tagline: "Efficient High-Capacity Transit.",
    description: "A monocoque passenger bus providing superior safety, comfort, and economy for larger groups, schools, colleges, and staff transportation.",
    image: monobusImg,
    gallery: [monobusImg],
    colors: [{ name: "White", hex: "#FFFFFF" }, { name: "School Bus Yellow", hex: "#FACC15" }],
    officialUrl: "https://www.forcemotors.com/vehicles-category/monobus/",
    pace: "wide",
    cta: "ENQUIRE FOR MONOBUS",
    specifications: {
      engine: "FM 2.6 CR ED Diesel",
      power: "115 HP",
      fuelType: "Diesel",
      transmission: "5-Speed Manual",
      seatingCapacity: "28 to 33 Seats",
      suspension: "Optional Air Suspension",
      brakes: "Air brakes with ABS",
    },
    features: [
      { category: "Utility", items: ["Lightweight monocoque design", "Wide passenger aisle", "Low boarding step"] },
      { category: "Safety", items: ["Large panoramic windows", "Emergency exits", "Government compliant safety"] },
    ],
    similarVehicles: ["traveller-n-wider-body-4020wb", "traveller-n-school-bus-4020wb"],
  },

  // ==========================================
  // TRAX RANGE
  // ==========================================
  {
    id: "trax-cruiser",
    slug: "trax-cruiser",
    name: "Trax Cruiser",
    brand: "Force Motors",
    category: "trax",
    categoryBadge: "MULTI-UTILITY",
    tagline: "Rugged, Practical Mobility for Tough Terrains.",
    description: "Engineered for high seating capacity and unbeatable reliability on rural, semi-urban, and rough road conditions.",
    image: traxImg,
    gallery: [traxImg],
    colors: [{ name: "White", hex: "#FFFFFF" }],
    officialUrl: "https://www.forcemotors.com/vehicles/trax-cruiser/",
    pace: "energetic",
    cta: "ENQUIRE FOR TRAX",
    specifications: {
      engine: "FM 2.6 CR ED Diesel",
      power: "90 HP",
      torque: "250 Nm",
      fuelType: "Diesel",
      transmission: "5-Speed Manual",
      seatingCapacity: "9+D / 12+D",
      wheelbase: "3050 mm",
      groundClearance: "191 mm",
      suspension: "Independent front suspension / Rigid rear axle with leaf springs",
    },
    features: [
      { category: "Utility", items: ["High ground clearance", "Heavy-duty chassis", "Maximum revenue per trip"] },
      { category: "Comfort", items: ["Spacious cabin", "Dual AC option", "Power steering"] },
    ],
    similarVehicles: ["trax-toofan", "gurkha"],
  },
  {
    id: "trax-cruiser", 
    slug: "trax-toofan",
    name: "Trax Toofan",
    brand: "Force Motors",
    category: "trax",
    categoryBadge: "MULTI-UTILITY",
    tagline: "The Unstoppable People Carrier.",
    description: "A legendary MUV designed specifically for shared mobility and large family transport across diverse Indian terrains.",
    image: traxImg,
    gallery: [traxImg],
    colors: [{ name: "White", hex: "#FFFFFF" }],
    officialUrl: "https://www.forcemotors.com/vehicles/trax-toofan/",
    pace: "energetic",
    cta: "ENQUIRE FOR TRAX",
    specifications: {
      engine: "FM 2.6 CR ED Diesel",
      power: "90 HP",
      torque: "250 Nm",
      fuelType: "Diesel",
      transmission: "5-Speed Manual",
      seatingCapacity: "11+D",
      wheelbase: "3050 mm",
      groundClearance: "191 mm",
    },
    features: [
      { category: "Performance", items: ["Proven longevity", "Minimal maintenance", "Robust driveline"] },
    ],
    similarVehicles: ["trax-cruiser", "gurkha"],
  },

  // ==========================================
  // SPECIAL APPLICATIONS
  // ==========================================
  {
    id: "traveller-ambulance",
    slug: "special-applications",
    name: "Special Applications",
    brand: "Force Motors",
    category: "special",
    categoryBadge: "PURPOSE-BUILT",
    tagline: "Customized for Critical Needs.",
    description: "Configured solutions for emergency, police, medical, institutional and specialized operations including advanced Type B, C & D ambulances.",
    image: travellerImg,
    gallery: [travellerImg],
    colors: [{ name: "White", hex: "#FFFFFF" }],
    officialUrl: "https://www.forcemotors.com/vehicles-category/special-applications/",
    pace: "standard",
    cta: "ENQUIRE",
    specifications: {
      engine: "FM 2.6 CR ED Diesel",
      power: "115 HP",
      fuelType: "Diesel",
      seatingCapacity: "Customizable (ICU / ALS / BLS)",
    },
    features: [
      { category: "Utility", items: ["Pre-wired for life-saving equipment", "Oxygen delivery system ready", "Seamless anti-bacterial washable interiors"] },
      { category: "Safety", items: ["Emergency warning lights", "Siren and PA system", "Reinforced safety structure"] },
    ],
    similarVehicles: ["traveller-n-3050wb"],
  },

  // ==========================================
  // GURKHA
  // ==========================================
  {
    id: "force-gurkha",
    slug: "gurkha",
    name: "Force Gurkha",
    brand: "Force Motors",
    category: "gurkha",
    categoryBadge: "4X4 OFF-ROAD",
    tagline: "Engineered for Extreme Exploration.",
    description: "A highly capable 4x4 off-roader designed for adventure enthusiasts, challenging terrain, and confident exploration anywhere.",
    image: traxImg,
    gallery: [traxImg],
    colors: [
      { name: "Red", hex: "#DC2626" },
      { name: "Green", hex: "#166534" },
      { name: "White", hex: "#FFFFFF" }
    ],
    officialUrl: "https://forcegurkha.co.in/",
    pace: "energetic",
    cta: "ENQUIRE FOR GURKHA",
    specifications: {
      engine: "Mercedes-Derived 2.6L Turbo Diesel",
      power: "140 HP",
      torque: "320 Nm",
      fuelType: "Diesel",
      transmission: "5-Speed Manual with 4x4 Low Range",
      seatingCapacity: "4-Seater (3-Door) / 7-Seater (5-Door)",
      groundClearance: "233 mm",
      suspension: "Independent front with coil spring / Multi-link rear with coil spring",
      brakes: "Front Disc, Rear Drum with ABS",
    },
    features: [
      { category: "Performance", items: ["Front and rear mechanical differential locks", "700mm water wading with factory snorkel", "High approach and departure angles"] },
      { category: "Comfort", items: ["Captain seats", "Touchscreen infotainment with Apple CarPlay/Android Auto", "Powerful AC"] },
    ],
    similarVehicles: ["trax-cruiser"],
  },

  // ==========================================
  // ELECTRIC (EV)
  // ==========================================
  {
    id: "force-ev",
    slug: "e-traveller-smart-citibus-ev",
    name: "e-Traveller Smart Citibus EV",
    brand: "Force Motors",
    category: "ev",
    categoryBadge: "ELECTRIC MOBILITY",
    tagline: "Zero-Emission Commercial Fleet.",
    description: "Future-ready electric mobility solutions designed for efficient urban movement, city shuttles, and green logistics.",
    image: urbaniaImg,
    gallery: [urbaniaImg],
    colors: [{ name: "White", hex: "#FFFFFF" }],
    officialUrl: "https://www.forcemotors.com/vehicles/e-traveller-smart-citibus-ev/",
    pace: "premium",
    cta: "ENQUIRE FOR EV",
    specifications: {
      engine: "High-Efficiency Permanent Magnet Synchronous Motor",
      power: "120 kW (Peak)",
      torque: "450 Nm",
      fuelType: "Electric",
      transmission: "Automatic / Direct Drive",
      battery: "High Capacity Li-Ion Battery Pack",
      range: "150-200 km per charge (estimated)",
    },
    features: [
      { category: "Performance", items: ["Fast charging capability", "Regenerative braking system", "Zero tailpipe emissions"] },
      { category: "Technology", items: ["Smart battery telemetry", "Digital instrument cluster", "Ultra-low NVH"] },
    ],
    similarVehicles: ["urbania", "traveller-n-3350wb"],
  },
];
