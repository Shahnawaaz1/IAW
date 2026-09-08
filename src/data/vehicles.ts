import travellerImg from "@/assets/showcase/traveller-hero.png";
import urbaniaImg from "@/assets/showcase/urbania-hero.png";
import traxImg from "@/assets/showcase/trax-hero.png";
import monobusImg from "@/assets/showcase/monobus-hero.png";
import gurkhaImg from "@/assets/showcase/gurkha-hero.png";
import specialImg from "@/assets/showcase/special-hero.png";
import evImg from "@/assets/showcase/ev-hero.png";

// Official Force Motors vehicle detail banners and features
import traxJungleSafariBanner from "@/assets/vehicle-details/trax-jungle-safari-banner.jpg";
import traxJungleSafariFeatures from "@/assets/vehicle-details/trax-jungle-safari-features.png";
import traxCashVanBanner from "@/assets/vehicle-details/trax-cash-van-banner.jpg";
import traxCashVanFeatures from "@/assets/vehicle-details/trax-cash-van-features.png";
import travellerTroopCarrierBanner from "@/assets/vehicle-details/traveller-troop-carrier-banner.png";
import travellerMedicalUnitBanner from "@/assets/vehicle-details/traveller-medical-unit-banner.png";
import travellerMedicalUnitFeatures from "@/assets/vehicle-details/traveller-medical-unit-features.png";
import travellerForensicVanBanner from "@/assets/vehicle-details/traveller-forensic-van-banner.png";
import traxFirstResponderBanner from "@/assets/vehicle-details/trax-first-responder-banner.jpg";
import traxPoliceVanBanner from "@/assets/vehicle-details/trax-police-van-banner.png";
import citilineBanner from "@/assets/vehicle-details/citiline-banner.jpg";
import citilineFeatures from "@/assets/vehicle-details/citiline-features.png";
import traxGamaBanner from "@/assets/vehicle-details/trax-gama-banner.webp";
import traxGamaFeatures from "@/assets/vehicle-details/trax-gama-features.png";
import traxCrewVanBanner from "@/assets/vehicle-details/trax-crew-van-banner.png";
import traxCrewVanFeatures from "@/assets/vehicle-details/trax-crew-van-features.png";
import traxDvBanner from "@/assets/vehicle-details/trax-dv-banner.jpg";
import monobusBanner from "@/assets/vehicle-details/monobus-banner.jpg";
import travellerPrisonVanFeatures from "@/assets/vehicle-details/traveller-prison-van-features.png";
import travellerBanner from "@/assets/vehicle-details/traveller-banner.webp";
import travellerCallout from "@/assets/vehicle-details/traveller-callout.webp";

// Menu cutouts for thumbnails
import traxJungleSafariMenu from "@/assets/menu/trax-jungle-safari.png";
import traxCashVanMenu from "@/assets/menu/trax-cash-van.png";
import traxPoliceVanMenu from "@/assets/menu/trax-police-van.png";
import traxFirstResponderMenu from "@/assets/menu/trax-first-responder.png";
import travellerPrisonVanMenu from "@/assets/menu/traveller-prison-van.png";
import travellerTroopCarrierMenu from "@/assets/menu/traveller-troop-carrier.png";
import travellerMedicalUnitMenu from "@/assets/menu/traveller-mobile-medical-unit.png";
import travellerForensicVanMenu from "@/assets/menu/traveller-forensic-van.png";
import traxCitilineMenu from "@/assets/menu/trax-citiline.png";
import traxGamaMenu from "@/assets/menu/trax-gama.webp";
import traxSchoolVanMenu from "@/assets/menu/trax-school-van.png";
import traxAmbulanceMenu from "@/assets/menu/trax-ambulance.png";
import traxDvMenu from "@/assets/menu/trax-dv.png";
import traxCrewVanMenu from "@/assets/menu/trax-crew-van.png";
import travellerAmbulanceBMenu from "@/assets/menu/traveller-ambulance-b.webp";
import travellerAmbulanceCMenu from "@/assets/menu/traveller-ambulance-c.webp";
import travellerDvMenu from "@/assets/menu/traveller-dv.webp";
import monobus4020wbLxMenu from "@/assets/menu/monobus-4020wb-lx.png";
import monobus5200wbLxMenu from "@/assets/menu/monobus-5200wb-lx.png";
import monobus4020wbMenu from "@/assets/menu/monobus-4020wb.png";
import monobusSchool4020wbMenu from "@/assets/menu/monobus-school-4020wb.png";
import monobusSchool5200wbMenu from "@/assets/menu/monobus-school-5200wb.png";
import gurkhaMenu from "@/assets/menu/gurkha-menu.png";
import urbaniaMenu from "@/assets/menu/urbania-menu.png";
import traveller3050wbMenu from "@/assets/menu/traveller-3050wb.webp";
import traveller3350wbMenu from "@/assets/menu/traveller-3350wb.webp";
import traveller3700wbMenu from "@/assets/menu/traveller-3700wb.webp";
import traveller4020wbMenu from "@/assets/menu/traveller-4020wb.webp";
import travellerWb3350wbMenu from "@/assets/menu/traveller-wb-3350wb.webp";
import travellerWb4020wbMenu from "@/assets/menu/traveller-wb-4020wb.webp";
import traveller4020wbCngMenu from "@/assets/menu/traveller-4020wb-cng.png";
import travellerWb4020wbCngMenu from "@/assets/menu/traveller-wb-4020wb-cng.webp";
import travellerSchoolBusMenu from "@/assets/menu/traveller-school-bus.webp";
import travellerWbSchoolBusMenu from "@/assets/menu/traveller-wb-school-bus.webp";

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
  bannerImage?: string;
  calloutImage?: string;
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
  // 1. SPECIAL APPLICATIONS (Dedicated Models)
  // ==========================================

  // Trax Jungle Safari (Matching User Screenshot 2)
  {
    id: "trax-jungle-safari",
    slug: "trax-jungle-safari",
    name: "Trax Jungle Safari",
    brand: "Force Motors",
    category: "special",
    categoryBadge: "SAFARI & TOURISM",
    tagline: "Explore Wildlife In Utmost Safety & Comfort.",
    description: "The Trax Jungle Safari enables tourists to explore wildlife sanctuaries in a safe and convenient vehicle with superior panoramic views, elevated seating, and robust roll-cage construction.",
    price: "₹ 14.80 Lakh*",
    image: traxJungleSafariMenu,
    bannerImage: traxJungleSafariBanner,
    calloutImage: traxJungleSafariFeatures,
    gallery: [traxJungleSafariBanner, traxJungleSafariFeatures, traxJungleSafariMenu],
    colors: [
      { name: "Forest Green", hex: "#2E5A36" },
      { name: "Khaki Brown", hex: "#8A795D" },
      { name: "Superior White", hex: "#FFFFFF" }
    ],
    specifications: {
      engine: "Mercedes-Derived FM 2.6 CR CD BS-VI Stage 2",
      engineCapacity: "2596 cc",
      power: "90 hp (67 kW) @ 3200 rpm",
      torque: "250 Nm @ 1400 - 2400 rpm",
      fuelType: "Diesel",
      transmission: "5-Speed Synchromesh Manual",
      seatingCapacity: "6 Tourist + 1 Guide + Driver (Tiered Seating)",
      dimensions: "4832 x 1820 x 2050 mm",
      wheelbase: "3050 mm",
      groundClearance: "210 mm",
      gvw: "3140 kg",
      suspension: "Front: Independent Double Wishbone with Torsion Bar; Rear: Parabolic Leaf Spring with Hydraulic Shock Absorbers",
      brakes: "Dual Circuit Hydraulic with Vacuum Assist, ABS & EBD, Front Disc, Rear Drum",
      tyres: "215/75 R15 LT All-Terrain Radial"
    },
    features: [
      {
        category: "Safety",
        items: [
          "Heavy-duty tubular full roll-over protection cage",
          "ARAI certified passenger safety seat belts for all rows",
          "Advanced ABS with Electronic Brakeforce Distribution (EBD)",
          "High-tensile steel bull guard with tow hook"
        ]
      },
      {
        category: "Comfort",
        items: [
          "Tiered stadium seating for uninterrupted wildlife viewing",
          "Ergonomically contoured weather-resistant cushioned seats",
          "Convenient wide footstep for easy boarding and de-boarding",
          "Grab rails and safari handles across all tourist positions"
        ]
      },
      {
        category: "Utility",
        items: [
          "Open-top safari canopy with roll-down weather curtains",
          "Dedicated guide/naturalist microphone & PA system slot",
          "Luggage and field gear storage behind the last row",
          "High approach and departure angles for jungle track navigation"
        ]
      }
    ],
    similarVehicles: ["trax-cruiser", "trax-toofan", "trax-first-responder"],
    officialUrl: "https://www.forcemotors.com/vehicle/special-application/trax-jungle-safari/"
  },

  // Trax Cruiser Cash Van
  {
    id: "trax-cash-van",
    slug: "trax-cash-van",
    name: "Trax Cruiser Cash Van",
    brand: "Force Motors",
    category: "special",
    categoryBadge: "SECURE LOGISTICS",
    tagline: "Uncompromised Protection for Cash in Transit.",
    description: "The ARAI-approved Trax Cruiser Cash Van is purpose-built for secure cash logistics across banks and financial institutions, featuring compartmentalized security partitions, CCTV surveillance provision, and fire suppression.",
    price: "₹ 15.20 Lakh*",
    image: traxCashVanMenu,
    bannerImage: traxCashVanBanner,
    calloutImage: traxCashVanFeatures,
    gallery: [traxCashVanBanner, traxCashVanFeatures, traxCashVanMenu],
    specifications: {
      engine: "FM 2.6 CR CD BS-VI Stage 2",
      engineCapacity: "2596 cc",
      power: "90 hp @ 3200 rpm",
      torque: "250 Nm @ 1400 - 2400 rpm",
      fuelType: "Diesel",
      transmission: "5-Speed Manual",
      seatingCapacity: "Driver + Co-Driver + 2 Armed Guards",
      wheelbase: "3050 mm",
      gvw: "3140 kg",
      groundClearance: "200 mm",
      brakes: "Hydraulic Dual Circuit with ABS & EBD"
    },
    features: [
      {
        category: "Safety",
        items: [
          "Steel-reinforced cash vault compartment with multi-point locking",
          "Bullet-resistant glass & gun ports in security cabin",
          "GPS vehicle tracking & remote immobilizer provision",
          "Emergency alarm system with audio-visual sirens"
        ]
      },
      {
        category: "Utility",
        items: [
          "Dedicated cash vault area with heavy anchor locks",
          "Separate air-conditioned guard compartment",
          "Dual CCTV camera provision for vault and exterior monitoring",
          "Automatic engine fire suppression system"
        ]
      }
    ],
    similarVehicles: ["trax-police-van", "trax-first-responder", "trax-cruiser"],
    officialUrl: "https://www.forcemotors.com/vehicles/trax-cash-van/"
  },

  // Trax Police Van
  {
    id: "trax-police-van",
    slug: "trax-police-van",
    name: "Trax Police Van",
    brand: "Force Motors",
    category: "special",
    categoryBadge: "LAW ENFORCEMENT",
    tagline: "Rapid Patrol & Law Enforcement Response.",
    description: "A fully equipped police patrol and interrogation transport van designed for rapid deployment, high-speed interception, and 24/7 law enforcement duty across urban and rural beats.",
    price: "₹ 14.50 Lakh*",
    image: traxPoliceVanMenu,
    bannerImage: traxPoliceVanBanner,
    calloutImage: traxPoliceVanMenu,
    gallery: [traxPoliceVanBanner, traxPoliceVanMenu],
    specifications: {
      engine: "FM 2.6 CR CD BS-VI Stage 2",
      power: "90 hp @ 3200 rpm",
      torque: "250 Nm @ 1400 - 2400 rpm",
      transmission: "5-Speed Manual",
      seatingCapacity: "8-10 Personnel",
      wheelbase: "3050 mm",
      gvw: "3140 kg",
      brakes: "Hydraulic with ABS & EBD"
    },
    features: [
      {
        category: "Safety",
        items: [
          "Reinforced front bull bar with police wire mesh windshield guard",
          "High-intensity LED lightbar with multi-tone PA siren",
          "C-in-C rectangular chassis with high torsional strength",
          "ABS and EBD for safe high-speed tactical handling"
        ]
      }
    ],
    similarVehicles: ["trax-first-responder", "traveller-prison-van", "trax-cruiser"],
    officialUrl: "https://www.forcemotors.com/vehicles/trax-police-van/"
  },

  // Trax First Responder Vehicle
  {
    id: "trax-first-responder",
    slug: "trax-first-responder",
    name: "Trax First Responder Vehicle",
    brand: "Force Motors",
    category: "special",
    categoryBadge: "EMERGENCY SERVICES",
    tagline: "Instant First Response for Disaster & Emergency.",
    description: "ARAI-approved multipurpose First Responder Police and Disaster Management vehicle, fully equipped with emergency medical supplies, fire extinguisher brackets, searchlights, and communication kit.",
    price: "₹ 15.10 Lakh*",
    image: traxFirstResponderMenu,
    bannerImage: traxFirstResponderBanner,
    calloutImage: traxFirstResponderMenu,
    gallery: [traxFirstResponderBanner, traxFirstResponderMenu],
    specifications: {
      engine: "FM 2.6 CR CD BS-VI",
      power: "90 hp @ 3200 rpm",
      torque: "250 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "Driver + 5 Personnel + Rescue Gear",
      wheelbase: "3050 mm",
      groundClearance: "205 mm"
    },
    features: [
      {
        category: "Safety",
        items: [
          "Heavy-duty rescue winch and rooftop 360-degree searchlight",
          "Integrated high-decibel electronic siren and public address",
          "First-aid triage station with oxygen cylinder cradle",
          "All-weather rugged terrain navigation capability"
        ]
      }
    ],
    similarVehicles: ["trax-police-van", "trax-ambulance", "trax-jungle-safari"],
    officialUrl: "https://www.forcemotors.com/vehicle/trax-first-responder-vehicle/"
  },

  // Traveller Prison Van
  {
    id: "traveller-prison-van",
    slug: "traveller-prison-van",
    name: "Traveller Prison Van",
    brand: "Force Motors",
    category: "special",
    categoryBadge: "CORRECTIONAL SERVICES",
    tagline: "Secure, ARAI-Certified Prisoner Escort.",
    description: "The Traveller Prison Van is an ARAI-certified vehicle that transports prisoners safely from one area to another under the close observation of security personnel, featuring isolated security cubicles and heavy-duty wire-mesh windows.",
    price: "₹ 18.50 Lakh*",
    image: travellerPrisonVanMenu,
    bannerImage: travellerBanner,
    calloutImage: travellerPrisonVanFeatures,
    gallery: [travellerBanner, travellerPrisonVanFeatures, travellerPrisonVanMenu],
    specifications: {
      engine: "Mercedes-Derived FM 2.6 CR ED BS-VI",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      transmission: "5-Speed Manual G-28",
      seatingCapacity: "12 Inmates + 4 Armed Escorts + Driver",
      wheelbase: "3700 mm / 4020 mm",
      gvw: "4475 kg",
      brakes: "Hydraulic Dual Circuit with ABS & EBD"
    },
    features: [
      {
        category: "Safety",
        items: [
          "Heavy gauge steel mesh partition separating guard & prisoner bays",
          "Reinforced vandal-resistant interior with recessed bolts",
          "Emergency escape hatches with external security deadbolts",
          "High security electronic deadlocking system"
        ]
      }
    ],
    similarVehicles: ["traveller-troop-carrier", "trax-police-van", "traveller-n-4020wb"],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-prison-van/"
  },

  // Traveller Troop Carrier
  {
    id: "traveller-troop-carrier",
    slug: "traveller-troop-carrier",
    name: "Traveller Troop Carrier",
    brand: "Force Motors",
    category: "special",
    categoryBadge: "DEFENSE & PARAMILITARY",
    tagline: "Long-Range Rapid Deployment for Forces.",
    description: "The Traveller Troop Carrier is an ARAI-certified vehicle that carries police personnel and paramilitary troops comfortably over long distances with dedicated weapon racks, riot gear stowage, and tactical communications.",
    price: "₹ 19.20 Lakh*",
    image: travellerTroopCarrierMenu,
    bannerImage: travellerTroopCarrierBanner,
    calloutImage: travellerTroopCarrierMenu,
    gallery: [travellerTroopCarrierBanner, travellerTroopCarrierMenu],
    specifications: {
      engine: "FM 2.6 CR ED BS-VI",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      transmission: "5-Speed Synchromesh",
      seatingCapacity: "16-20 Armed Personnel + Driver",
      wheelbase: "4020 mm",
      gvw: "4675 kg"
    },
    features: [
      {
        category: "Utility",
        items: [
          "Individual weapon racks behind every squad row",
          "High capacity under-seat riot shield and kit storage",
          "Full standing interior height with flat floor layout",
          "Heavy-duty auxiliary dual AC for extreme field climates"
        ]
      }
    ],
    similarVehicles: ["traveller-prison-van", "traveller-n-4020wb", "trax-police-van"],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-troop-carrier/"
  },

  // Traveller Mobile Medical Unit
  {
    id: "traveller-mobile-medical-unit",
    slug: "traveller-mobile-medical-unit",
    name: "Traveller Mobile Medical Unit",
    brand: "Force Motors",
    category: "special",
    categoryBadge: "HEALTHCARE OUTREACH",
    tagline: "Clinical Grade Healthcare to Remote Communities.",
    description: "A fully equipped, ARAI-approved Mobile Medical Unit providing on-site OPD consultations, diagnostics, pathology testing, and maternal health screening directly to remote rural districts.",
    price: "₹ 21.50 Lakh*",
    image: travellerMedicalUnitMenu,
    bannerImage: travellerMedicalUnitBanner,
    calloutImage: travellerMedicalUnitFeatures,
    gallery: [travellerMedicalUnitBanner, travellerMedicalUnitFeatures, travellerMedicalUnitMenu],
    specifications: {
      engine: "FM 2.6 CR ED BS-VI",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "Doctor Desk + Examination Bed + Lab Area",
      wheelbase: "4020 mm Wider Body",
      gvw: "4875 kg"
    },
    features: [
      {
        category: "Technology",
        items: [
          "Integrated onboard generator & uninterrupted inverter battery bank",
          "Built-in examination couch with retractable privacy curtain",
          "Refrigerated medicine storage and centrifuge blood test setup",
          "Clean water storage with stainless steel surgical wash basin"
        ]
      }
    ],
    similarVehicles: ["traveller-n-ambulance-3350wb-b-type", "traveller-forensic-van", "traveller-n-4020wb"],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-mobile-medical-unit/"
  },

  // Traveller Forensic Van
  {
    id: "traveller-forensic-van",
    slug: "traveller-forensic-van",
    name: "Traveller Forensic Van",
    brand: "Force Motors",
    category: "special",
    categoryBadge: "FORENSIC SCIENCE",
    tagline: "Preserving Evidence Integrity at the Crime Scene.",
    description: "A specialized forensic crime scene investigation mobile laboratory equipped for on-site fingerprint analysis, DNA sample preservation, digital forensics, and ballistics examination without evidence contamination.",
    price: "₹ 22.00 Lakh*",
    image: travellerForensicVanMenu,
    bannerImage: travellerForensicVanBanner,
    calloutImage: travellerForensicVanMenu,
    gallery: [travellerForensicVanBanner, travellerForensicVanMenu],
    specifications: {
      engine: "FM 2.6 CR ED BS-VI",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      wheelbase: "4020 mm",
      gvw: "4675 kg"
    },
    features: [
      {
        category: "Utility",
        items: [
          "Sealed chemical fume hood with HEPA filtration",
          "Deep freezer unit for bio-sample chain-of-custody storage",
          "Crime scene floodlight mast with 360-degree rotation",
          "Dust-proof mobile workstation with digital microscopy"
        ]
      }
    ],
    similarVehicles: ["traveller-mobile-medical-unit", "traveller-police-van", "traveller-troop-carrier"],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-forensic-van/"
  },

  // Traveller N Ambulance B-Type
  {
    id: "traveller-ambulance-b",
    slug: "traveller-n-ambulance-3350wb-b-type",
    name: "Traveller N Ambulance 3350WB B-Type",
    brand: "Force Motors",
    category: "special",
    categoryBadge: "PATIENT TRANSPORT",
    tagline: "Basic Life Support Ambulance for Urgent Transfer.",
    description: "Type-B Patient Transport Ambulance compliant with National Ambulance Code AIS:125, engineered with a monocoque crash-safe body, auto-loading stretcher, oxygen delivery station, and emergency warning lightbar.",
    price: "₹ 16.80 Lakh*",
    image: travellerAmbulanceBMenu,
    bannerImage: travellerBanner,
    calloutImage: travellerCallout,
    gallery: [travellerBanner, travellerAmbulanceBMenu],
    specifications: {
      engine: "FM 2.6 CR ED BS-VI",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      wheelbase: "3350 mm",
      seatingCapacity: "Patient Stretcher + 4 Paramedics/Attendants",
      gvw: "3965 kg",
      brakes: "Hydraulic with 4-wheel ABS & EBD"
    },
    features: [
      {
        category: "Safety",
        items: [
          "AIS:125 certified Type-B patient transport layout",
          "High quality auto-loading multi-position stretcher with roll-in mechanism",
          "Twin oxygen cylinder manifold with calibrated flowmeters",
          "Seamless anti-bacterial washable vinyl flooring with cove molding"
        ]
      }
    ],
    similarVehicles: ["traveller-n-ambulance-3350wb-c-type", "trax-ambulance", "traveller-medical-unit"],
    officialUrl: "https://www.forcemotors.com/vehicles-category/special-applications/"
  },

  // Traveller N Ambulance C-Type
  {
    id: "traveller-ambulance-c",
    slug: "traveller-n-ambulance-3350wb-c-type",
    name: "Traveller N Ambulance 3350WB C-Type",
    brand: "Force Motors",
    category: "special",
    categoryBadge: "ADVANCED LIFE SUPPORT",
    tagline: "ICU On Wheels for Critical Patient Resuscitation.",
    description: "Advanced Life Support (ALS) Type-C Ambulance equipped with vital parameter monitors, defibrillator mount, transport ventilator, medical gas pipeline, and dedicated doctor resuscitation chair.",
    price: "₹ 19.40 Lakh*",
    image: travellerAmbulanceCMenu,
    bannerImage: travellerBanner,
    calloutImage: travellerCallout,
    gallery: [travellerBanner, travellerAmbulanceCMenu],
    specifications: {
      engine: "FM 2.6 CR ED BS-VI",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      wheelbase: "3350 mm",
      seatingCapacity: "Patient + Doctor + 2 Paramedics",
      gvw: "3965 kg"
    },
    features: [
      {
        category: "Technology",
        items: [
          "Pre-wired ICU defibrillator and transport ventilator brackets",
          "Dual circuit AC/DC inverter system with external shore power plug",
          "Centralized medical gas pipeline system with vacuum outlets",
          "High intensity LED surgical examination spotlight"
        ]
      }
    ],
    similarVehicles: ["traveller-n-ambulance-3350wb-b-type", "traveller-mobile-medical-unit", "trax-ambulance"],
    officialUrl: "https://www.forcemotors.com/vehicles-category/special-applications/"
  },

  // Traveller N DV AC 3050WB
  {
    id: "traveller-dv-ac-3050wb",
    slug: "traveller-n-dv-ac-3050wb",
    name: "Traveller N DV AC 3050WB",
    brand: "Force Motors",
    category: "special",
    categoryBadge: "CARGO LOGISTICS",
    tagline: "Climate-Controlled Secure Delivery Van.",
    description: "The Traveller N Delivery Van (DV) AC offers an expansive, fully enclosed cargo bay with factory-installed climate control, high payload capacity, and rear 270-degree swing doors for effortless forklift and pallet loading.",
    price: "₹ 15.60 Lakh*",
    image: travellerDvMenu,
    bannerImage: travellerBanner,
    calloutImage: travellerCallout,
    gallery: [travellerBanner, travellerDvMenu],
    specifications: {
      engine: "FM 2.6 CR ED BS-VI",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      wheelbase: "3050 mm",
      seatingCapacity: "Driver + Co-Driver (Cargo Compartment)",
      gvw: "3675 kg"
    },
    features: [
      {
        category: "Utility",
        items: [
          "Fully enclosed cargo volume exceeding 350 cu. ft.",
          "Factory air-conditioned cargo bay for pharmaceutical transport",
          "Flat anti-slip chequered aluminum floor with cargo tie-down hooks",
          "270-degree opening rear twin doors for easy bay docking"
        ]
      }
    ],
    similarVehicles: ["trax-dv", "trax-crew-van", "traveller-n-3050wb"],
    officialUrl: "https://www.forcemotors.com/vehicles-category/special-applications/"
  },

  // Generic Special Applications Fallback
  {
    id: "traveller-ambulance",
    slug: "special-applications",
    name: "Special Applications",
    brand: "Force Motors",
    category: "special",
    categoryBadge: "PURPOSE-BUILT",
    tagline: "Customized for Critical Public & Institutional Needs.",
    description: "Configured solutions for emergency medical response, police tactical operations, mobile healthcare outreach, money transit, and wildlife safari. Engineered on Force Motors proven vehicle architectures.",
    price: "₹ 14.50 Lakh*",
    image: specialImg,
    bannerImage: traxJungleSafariBanner,
    calloutImage: traxJungleSafariFeatures,
    gallery: [traxJungleSafariBanner, traxCashVanBanner, specialImg],
    specifications: {
      engine: "FM 2.6 CR CD / ED Common Rail BS-VI",
      power: "90 hp – 115 hp",
      torque: "250 Nm – 350 Nm",
      fuelType: "Diesel / CNG",
      transmission: "5-Speed Manual",
      seatingCapacity: "Customized to Specification",
      brakes: "Hydraulic Dual Circuit with ABS & EBD"
    },
    features: [
      {
        category: "Safety",
        items: [
          "Certified ARAI compliance for all structural conversions",
          "Crash-tested monocoque body shell and tubular roll structures",
          "Factory-backed full manufacturer warranty on aggregates",
          "Standard electronic ABS with EBD across all variants"
        ]
      }
    ],
    similarVehicles: ["trax-jungle-safari", "trax-cash-van", "traveller-prison-van"],
    officialUrl: "https://www.forcemotors.com/vehicles-category/special-applications/"
  },

  // ==========================================
  // 2. TRAX LINEUP (Dedicated Models)
  // ==========================================

  // Citiline
  {
    id: "citiline",
    slug: "citiline",
    name: "Citiline",
    brand: "Force Motors",
    category: "trax",
    categoryBadge: "9+D PASSENGER",
    tagline: "Move Together in Total Comfort.",
    description: "Force Citiline is the ultimate modern multi-seater utility vehicle, featuring forward-facing 10-seater (9+D) configuration, roof-mounted dual air conditioning, power steering, and a high-strength chassis for large families and corporate mobility.",
    price: "₹ 15.90 Lakh*",
    image: traxCitilineMenu,
    bannerImage: citilineBanner,
    calloutImage: citilineFeatures,
    gallery: [citilineBanner, citilineFeatures, traxCitilineMenu],
    specifications: {
      engine: "Mercedes-Derived FM 2.6 CR CD BS-VI Stage 2",
      engineCapacity: "2596 cc",
      power: "90 hp @ 3200 rpm",
      torque: "250 Nm @ 1400 - 2400 rpm",
      fuelType: "Diesel",
      transmission: "5-Speed Synchromesh Manual",
      seatingCapacity: "9+D (All Forward Facing)",
      wheelbase: "3050 mm",
      dimensions: "5120 x 1818 x 2027 mm",
      groundClearance: "191 mm",
      gvw: "3140 kg",
      suspension: "Front: Independent Double Wishbone with Torsion Bar; Rear: Parabolic Leaf Spring with Anti-Roll Bar",
      brakes: "Hydraulic Dual Circuit with ABS & EBD, Front Disc, Rear Drum",
      tyres: "215/75 R15 Radial Tubeless"
    },
    features: [
      {
        category: "Comfort",
        items: [
          "All 10 occupants face forward with premium high-back bucket seats",
          "Roof-mounted dual air conditioning vents for second & third rows",
          "Power steering with tilt & telescopic adjustment",
          "Central locking with power windows on front & middle doors"
        ]
      },
      {
        category: "Safety",
        items: [
          "Anti-Lock Braking System (ABS) with Electronic Brakeforce Distribution (EBD)",
          "Monocoque-inspired rigid body structure with side-impact beams",
          "3-point ELR seatbelts for front passengers and 2-point belts for all rear seats",
          "Front disc brakes with twin-pot calipers"
        ]
      }
    ],
    similarVehicles: ["trax-cruiser", "trax-toofan", "trax-gama"],
    officialUrl: "https://www.forcemotors.com/vehicles/citiline/"
  },

  // Trax Gama
  {
    id: "trax-gama",
    slug: "trax-gama",
    name: "Trax Gama",
    brand: "Force Motors",
    category: "trax",
    categoryBadge: "9+D RUGGED MPV",
    tagline: "Tough Outside, Spacious Inside.",
    description: "Built for grueling terrain with high ground clearance, heavy-duty suspension, and spacious 10-seater accommodation, the Trax Gama combines rugged durability with everyday practicality.",
    price: "₹ 14.20 Lakh*",
    image: traxGamaMenu,
    bannerImage: traxGamaBanner,
    calloutImage: traxGamaFeatures,
    gallery: [traxGamaBanner, traxGamaFeatures, traxGamaMenu],
    specifications: {
      engine: "FM 2.6 CR CD BS-VI",
      power: "90 hp @ 3200 rpm",
      torque: "250 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "9+D",
      wheelbase: "3050 mm",
      groundClearance: "210 mm",
      gvw: "3140 kg"
    },
    features: [
      {
        category: "Performance",
        items: [
          "Independent front suspension for commanding rough road stability",
          "High ground clearance to clear rural ruts and waterlogged patches",
          "Heavy-duty tubular ladder frame chassis with high torsional strength",
          "Fuel efficient 2.6L Common Rail engine with broad torque curve"
        ]
      }
    ],
    similarVehicles: ["trax-cruiser", "citiline", "trax-toofan"],
    officialUrl: "https://www.forcemotors.com/vehicle/trax-gama/"
  },

  // Trax Cruiser School Van
  {
    id: "trax-school-van",
    slug: "trax-cruiser-school-van",
    name: "Trax Cruiser School Van",
    brand: "Force Motors",
    category: "trax",
    categoryBadge: "SCHOOL TRANSPORT",
    tagline: "Safe & Dependable Daily School Commute.",
    description: "The Trax Cruiser School Van is specifically engineered to comply with strict school bus safety regulations, featuring low first steps for children, padded safety guard rails, bag racks under seats, and emergency exit windows.",
    price: "₹ 14.10 Lakh*",
    image: traxSchoolVanMenu,
    bannerImage: citilineBanner,
    calloutImage: traxSchoolVanMenu,
    gallery: [citilineBanner, traxSchoolVanMenu],
    specifications: {
      engine: "FM 2.6 CR CD BS-VI",
      power: "90 hp @ 3200 rpm",
      torque: "250 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "12 - 14 School Children + Driver",
      wheelbase: "3050 mm",
      gvw: "3140 kg"
    },
    features: [
      {
        category: "Safety",
        items: [
          "Strict compliance with AIS:063 School Bus Code",
          "Low first step height designed for easy boarding by small children",
          "Safety window grills preventing limbs from sticking outside",
          "Fire extinguisher and comprehensive first-aid box standard"
        ]
      }
    ],
    similarVehicles: ["trax-cruiser", "traveller-n-school-bus-3050wb", "trax-toofan"],
    officialUrl: "https://www.forcemotors.com/vehicles/trax-cruiser-school-van/"
  },

  // Trax Ambulance
  {
    id: "trax-ambulance",
    slug: "trax-ambulance",
    name: "Trax Ambulance",
    brand: "Force Motors",
    category: "trax",
    categoryBadge: "RURAL AMBULANCE",
    tagline: "Rugged All-Terrain Patient Transport.",
    description: "Designed to conquer rough rural roads where standard vans cannot reach, the Trax Ambulance provides dependable emergency patient transfer with high ground clearance, patient stretcher, and oxygen manifold.",
    price: "₹ 14.30 Lakh*",
    image: traxAmbulanceMenu,
    bannerImage: citilineBanner,
    calloutImage: traxAmbulanceMenu,
    gallery: [citilineBanner, traxAmbulanceMenu],
    specifications: {
      engine: "FM 2.6 CR CD BS-VI",
      power: "90 hp @ 3200 rpm",
      torque: "250 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "Patient + Doctor + Attendant",
      wheelbase: "3050 mm",
      groundClearance: "210 mm"
    },
    features: [
      {
        category: "Safety",
        items: [
          "All-terrain high clearance chassis reaching remote villages",
          "Foldable roll-in patient stretcher with secure floor anchor locks",
          "Twin oxygen bottle cradle with high-pressure reduction valves",
          "Roof-mounted LED flashers with dual tone electronic siren"
        ]
      }
    ],
    similarVehicles: ["traveller-n-ambulance-3350wb-b-type", "trax-first-responder", "trax-cruiser"],
    officialUrl: "https://www.forcemotors.com/vehicles/trax-ambulance/"
  },

  // Trax Crew Van
  {
    id: "trax-crew-van",
    slug: "trax-crew-van",
    name: "Trax Crew Van",
    brand: "Force Motors",
    category: "trax",
    categoryBadge: "CREW & CARGO",
    tagline: "Transport Your Team and Tools in One Trip.",
    description: "The Trax Crew Van provides dedicated seating for a work team along with a secure, enclosed cargo bay for tools and machinery, making it the ideal utility choice for telecommunications, mining, and highway maintenance squads.",
    price: "₹ 13.90 Lakh*",
    image: traxCrewVanMenu,
    bannerImage: traxCrewVanBanner,
    calloutImage: traxCrewVanFeatures,
    gallery: [traxCrewVanBanner, traxCrewVanFeatures, traxCrewVanMenu],
    specifications: {
      engine: "FM 2.6 CR CD BS-VI",
      power: "90 hp @ 3200 rpm",
      torque: "250 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "5 Personnel + 800 kg Cargo Payload",
      wheelbase: "3050 mm",
      gvw: "3140 kg"
    },
    features: [
      {
        category: "Utility",
        items: [
          "Dedicated passenger cabin isolated from the rear cargo bay",
          "Steel partition wall protecting crew from loose cargo",
          "Heavy-duty rear leaf spring suspension engineered for heavy payloads",
          "All-weather durable washable interior flooring"
        ]
      }
    ],
    similarVehicles: ["trax-dv", "trax-cruiser", "trax-toofan"],
    officialUrl: "https://www.forcemotors.com/vehicles/trax-crew-van/"
  },

  // Trax DV
  {
    id: "trax-dv",
    slug: "trax-dv",
    name: "Trax DV",
    brand: "Force Motors",
    category: "trax",
    categoryBadge: "CARGO LOGISTICS",
    tagline: "Heavy-Duty Cargo Van with 1025 kg Payload.",
    description: "Force Trax DV (Delivery Van) is engineered for last-mile and regional goods transport, offering 1025 kg payload capacity, a flat cargo floor, and a rugged ladder frame chassis for commercial freight operators.",
    price: "₹ 13.40 Lakh*",
    image: traxDvMenu,
    bannerImage: traxDvBanner,
    calloutImage: traxDvMenu,
    gallery: [traxDvBanner, traxDvMenu],
    specifications: {
      engine: "FM 2.6 CR CD BS-VI Stage 2",
      power: "90 hp @ 3200 rpm",
      torque: "250 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "2+D",
      wheelbase: "3050 mm",
      dimensions: "5120 x 1818 x 2027 mm",
      gvw: "2990 kg",
      brakes: "ABS with EBD"
    },
    features: [
      {
        category: "Utility",
        items: [
          "Spacious enclosed cargo area with 1025 kg rated payload",
          "All-new C-in-C rectangular chassis for high torsional rigidity",
          "Fuel efficient FM 2.6 CR engine keeping cost-per-kilometer low",
          "Wide rear loading doors accommodating standard pallet sizes"
        ]
      }
    ],
    similarVehicles: ["trax-crew-van", "traveller-n-dv-ac-3050wb", "trax-cruiser"],
    officialUrl: "https://www.forcemotors.com/vehicles/trax-dv/"
  },

  // Trax Cruiser
  {
    id: "trax-cruiser",
    slug: "trax-cruiser",
    name: "Trax Cruiser",
    brand: "Force Motors",
    category: "trax",
    categoryBadge: "MULTI-SEATER",
    tagline: "India's Most Trusted Passenger Carrier.",
    description: "The benchmark of rural and semi-urban mass transport, delivering high seating capacity (up to 12+D), low maintenance expenses, and indestructible durability on demanding Indian roads.",
    price: "₹ 13.84 Lakh*",
    image: traxImg,
    bannerImage: citilineBanner,
    calloutImage: traxImg,
    gallery: [citilineBanner, traxImg],
    specifications: {
      engine: "FM 2.6 CR CD BS-VI Stage 2",
      power: "90 hp @ 3200 rpm",
      torque: "250 Nm @ 1400 - 2400 rpm",
      fuelType: "Diesel",
      transmission: "5-Speed Manual",
      seatingCapacity: "9+D / 12+D",
      wheelbase: "3050 mm",
      groundClearance: "191 mm",
      gvw: "3140 kg"
    },
    features: [
      {
        category: "Comfort",
        items: [
          "Best-in-class passenger legroom across all seat rows",
          "High roofline offering airy headroom and visibility",
          "Power steering and smooth gear shifting mechanism"
        ]
      }
    ],
    similarVehicles: ["trax-toofan", "citiline", "trax-gama"],
    officialUrl: "https://www.forcemotors.com/vehicles/trax-cruiser/"
  },

  // Trax Toofan
  {
    id: "trax-toofan",
    slug: "trax-toofan",
    name: "Trax Toofan",
    brand: "Force Motors",
    category: "trax",
    categoryBadge: "RURAL MOBILITY",
    tagline: "The Unstoppable Workhorse.",
    description: "Engineered specifically for heavy passenger loads and harsh operating conditions, the Trax Toofan delivers maximum seating capability with rock-solid mechanical reliability.",
    price: "₹ 13.50 Lakh*",
    image: traxImg,
    bannerImage: citilineBanner,
    calloutImage: traxImg,
    gallery: [citilineBanner, traxImg],
    specifications: {
      engine: "FM 2.6 CR CD BS-VI",
      power: "90 hp @ 3200 rpm",
      torque: "250 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "11+D",
      wheelbase: "3050 mm"
    },
    features: [
      {
        category: "Performance",
        items: [
          "Rugged mechanical aggregates designed for zero-breakdown reliability",
          "Exceptional fuel mileage on fully loaded highway trips",
          "Low cost spare parts and widespread service network"
        ]
      }
    ],
    similarVehicles: ["trax-cruiser", "citiline", "trax-gama"],
    officialUrl: "https://www.forcemotors.com/vehicles/trax-toofan/"
  },

  // ==========================================
  // 3. URBANIA LINEUP (Dedicated Models)
  // ==========================================
  {
    id: "urbania",
    slug: "urbania",
    name: "Urbania DX",
    brand: "Force Motors",
    category: "urbania",
    categoryBadge: "NEXT-GEN VAN",
    tagline: "Next-Gen Global Van Platform.",
    description: "A world-class aerodynamic monocoque van with European styling, independent front suspension, dual airbags, hill hold assist, and executive airline-style individual reclining seats.",
    price: "₹ 30.50 Lakh*",
    image: urbaniaImg,
    bannerImage: urbaniaImg,
    calloutImage: urbaniaImg,
    gallery: [urbaniaImg, urbaniaMenu],
    specifications: {
      engine: "Mercedes-Derived FM 2.6 CR ED BS-VI",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      fuelType: "Diesel",
      transmission: "5-Speed Manual G-32",
      seatingCapacity: "10+D / 13+D / 17+D",
      wheelbase: "3350 mm / 3615 mm / 4400 mm",
      suspension: "Front: Independent Transverse Leaf Spring; Rear: Parabolic Leaf Spring"
    },
    features: [
      {
        category: "Safety",
        items: [
          "Driver and co-driver front airbags standard",
          "All 4 wheel ventilated disc brakes with ESP, ABS, EBD & Hill Hold Assist",
          "Crash-compliant European monocoque passenger cell structure",
          "Reverse parking camera with dynamic guidelines"
        ]
      },
      {
        category: "Comfort",
        items: [
          "Executive airline-style wide reclining seats with armrests",
          "Sealed acoustic cabin insulation for whisper-quiet travel",
          "Individual USB charging ports and reading lamps for each passenger",
          "Triple-zone powerful dual air conditioning system"
        ]
      }
    ],
    similarVehicles: ["urbania-dx-3350wb", "urbania-dx-3615wb", "urbania-dx-4400wb"],
    officialUrl: "https://forceurbania.co.in/"
  },
  {
    id: "urbania-dx-3350wb",
    slug: "urbania-dx-3350wb",
    name: "Urbania DX 3350WB",
    brand: "Force Motors",
    category: "urbania",
    categoryBadge: "10+D EXECUTIVE",
    tagline: "Short Wheelbase Luxury Van.",
    description: "Compact luxury passenger van configuration offering unmatched maneuverability in city streets with executive 10+D seating, independent front suspension, and premium NVH insulation.",
    price: "₹ 29.80 Lakh*",
    image: urbaniaMenu,
    bannerImage: urbaniaImg,
    calloutImage: urbaniaImg,
    gallery: [urbaniaImg, urbaniaMenu],
    specifications: {
      engine: "FM 2.6 CR ED BS-VI",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "10+D",
      wheelbase: "3350 mm",
      gvw: "3625 kg"
    },
    features: [
      {
        category: "Comfort",
        items: [
          "Individual executive reclining seats with dedicated armrests",
          "Compact turning radius suited for urban luxury fleet operation",
          "Modern touch-screen infotainment system with Bluetooth"
        ]
      }
    ],
    similarVehicles: ["urbania", "urbania-dx-3615wb", "traveller-n-3350wb"],
    officialUrl: "https://forceurbania.co.in/"
  },
  {
    id: "urbania-dx-3615wb",
    slug: "urbania-dx-3615wb",
    name: "Urbania DX 3615WB",
    brand: "Force Motors",
    category: "urbania",
    categoryBadge: "13+D EXECUTIVE",
    tagline: "Medium Wheelbase Luxury Transporter.",
    description: "The ideal balance of seating capacity and luggage volume, seating 13 passengers plus driver with plush individual airline-style seating and expansive panoramic passenger windows.",
    price: "₹ 31.20 Lakh*",
    image: urbaniaMenu,
    bannerImage: urbaniaImg,
    calloutImage: urbaniaImg,
    gallery: [urbaniaImg, urbaniaMenu],
    specifications: {
      engine: "FM 2.6 CR ED BS-VI",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "13+D",
      wheelbase: "3615 mm",
      gvw: "4125 kg"
    },
    features: [
      {
        category: "Safety",
        items: [
          "Electronic Stability Program (ESP) with rollover mitigation",
          "Dual front airbags for driver and co-driver",
          "All-wheel disc brakes with ABS and EBD"
        ]
      }
    ],
    similarVehicles: ["urbania-dx-3350wb", "urbania-dx-4400wb", "traveller-n-3700wb"],
    officialUrl: "https://forceurbania.co.in/"
  },
  {
    id: "urbania-dx-4400wb",
    slug: "urbania-dx-4400wb",
    name: "Urbania DX 4400WB",
    brand: "Force Motors",
    category: "urbania",
    categoryBadge: "17+D FLAGSHIP",
    tagline: "Long Wheelbase Luxury Flagship.",
    description: "The flagship long-wheelbase Urbania comfortably accommodating 17 passengers plus driver with ample boot luggage space, standing interior height, and international luxury styling.",
    price: "₹ 33.50 Lakh*",
    image: urbaniaMenu,
    bannerImage: urbaniaImg,
    calloutImage: urbaniaImg,
    gallery: [urbaniaImg, urbaniaMenu],
    specifications: {
      engine: "FM 2.6 CR ED BS-VI",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "17+D",
      wheelbase: "4400 mm",
      gvw: "4610 kg"
    },
    features: [
      {
        category: "Interior",
        items: [
          "Full stand-up aisle height for effortless movement inside",
          "Generous boot luggage compartment for airport transfers",
          "Individual AC louvers and personal reading lamps"
        ]
      }
    ],
    similarVehicles: ["urbania-dx-3615wb", "traveller-n-4020wb", "monobus-lx-4020wb"],
    officialUrl: "https://forceurbania.co.in/"
  },

  // ==========================================
  // 4. MONOBUS LINEUP (Dedicated Models)
  // ==========================================
  {
    id: "monobus",
    slug: "monobus",
    name: "Monobus",
    brand: "Force Motors",
    category: "monobus",
    categoryBadge: "MONOCOQUE BUS",
    tagline: "India's Only Indigenously Developed Monocoque Bus.",
    description: "The Force Monobus redefines passenger mobility with an advanced lightweight monocoque chassis, Mercedes-derived 2.6L engine, independent front suspension, and seating for 33 to 41 passengers.",
    price: "₹ 32.50 Lakh*",
    image: monobusImg,
    bannerImage: monobusBanner,
    calloutImage: monobusImg,
    gallery: [monobusBanner, monobusImg],
    specifications: {
      engine: "Mercedes-Derived FM 2.6 CR ED BS-VI",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "33-41 Passengers",
      wheelbase: "4020 mm / 5200 mm",
      gvw: "7200 kg",
      suspension: "Parabolic Leaf Springs with Anti-Roll Bar",
      brakes: "Air Brakes with ABS"
    },
    features: [
      {
        category: "Performance",
        items: [
          "Monocoque structure is 800 kg lighter than conventional chassis buses",
          "Significantly higher fuel economy and lower tyre wear",
          "Low floor height for effortless passenger boarding"
        ]
      }
    ],
    similarVehicles: ["monobus-lx-4020wb", "monobus-5200wb", "traveller-n-4020wb"],
    officialUrl: "https://www.forcemotors.com/vehicles-category/monobus/"
  },
  {
    id: "monobus-lx-4020wb",
    slug: "monobus-lx-4020wb",
    name: "Monobus LX 4020WB",
    brand: "Force Motors",
    category: "monobus",
    categoryBadge: "33-SEATER LUXURY",
    tagline: "Premium Intercity & Staff Mobility.",
    description: "33-seater monocoque midibus offering passenger car-like ride comfort, wide gangway, panoramic safety glass windows, and superior fuel efficiency.",
    price: "₹ 31.80 Lakh*",
    image: monobus4020wbLxMenu,
    bannerImage: monobusBanner,
    calloutImage: monobusImg,
    gallery: [monobusBanner, monobus4020wbLxMenu],
    specifications: {
      engine: "FM 2.6 CR ED BS-VI",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "33+D",
      wheelbase: "4020 mm"
    },
    features: [
      {
        category: "Comfort",
        items: [
          "High back contoured ergonomic passenger seating",
          "Low noise and vibration levels thanks to integral monocoque body",
          "Powerful saloon air conditioning with individual louvers"
        ]
      }
    ],
    similarVehicles: ["monobus-5200wb", "monobus-school-bus-4020wb", "urbania-dx-4400wb"],
    officialUrl: "https://www.forcemotors.com/vehicles-category/monobus/"
  },
  {
    id: "monobus-5200wb",
    slug: "monobus-5200wb",
    name: "Monobus 5200WB",
    brand: "Force Motors",
    category: "monobus",
    categoryBadge: "41-SEATER CAPACITY",
    tagline: "High Capacity Monocoque Midibus.",
    description: "41-seater long-wheelbase monocoque bus engineered for maximum seating efficiency on intercity routes, college transport, and corporate employee transfers.",
    price: "₹ 34.20 Lakh*",
    image: monobus5200wbLxMenu,
    bannerImage: monobusBanner,
    calloutImage: monobusImg,
    gallery: [monobusBanner, monobus5200wbLxMenu],
    specifications: {
      engine: "FM 2.6 CR ED BS-VI",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "41+D",
      wheelbase: "5200 mm"
    },
    features: [
      {
        category: "Utility",
        items: [
          "High capacity 41 passenger seating layout with 2x2 or 3x2 options",
          "Expansive under-floor luggage lockers",
          "Pneumatic full air brakes with multi-channel ABS"
        ]
      }
    ],
    similarVehicles: ["monobus-lx-4020wb", "monobus-school-bus-5200wb", "traveller-n-4020wb"],
    officialUrl: "https://www.forcemotors.com/vehicles/monobus-5200wb/"
  },
  {
    id: "monobus-4020wb",
    slug: "monobus-4020wb",
    name: "Monobus 4020WB",
    brand: "Force Motors",
    category: "monobus",
    categoryBadge: "PASSENGER BUS",
    tagline: "Economical 33-Seater Staff Transport.",
    description: "Standard non-AC/AC monocoque bus delivering optimal cost-per-seat-kilometer for staff fleets, educational institutions, and public route operators.",
    price: "₹ 29.50 Lakh*",
    image: monobus4020wbMenu,
    bannerImage: monobusBanner,
    calloutImage: monobusImg,
    gallery: [monobusBanner, monobus4020wbMenu],
    specifications: {
      engine: "FM 2.6 CR ED BS-VI",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "33+D",
      wheelbase: "4020 mm"
    },
    features: [
      {
        category: "Performance",
        items: [
          "Integral monocoque structure eliminating body rattles",
          "Class-leading fuel mileage in staff commute operations"
        ]
      }
    ],
    similarVehicles: ["monobus-lx-4020wb", "monobus-school-bus-4020wb"],
    officialUrl: "https://www.forcemotors.com/vehicles/monobus-4020wb/"
  },
  {
    id: "monobus-school-bus-4020wb",
    slug: "monobus-school-bus-4020wb",
    name: "Monobus School Bus 4020WB",
    brand: "Force Motors",
    category: "monobus",
    categoryBadge: "SCHOOL TRANSPORT",
    tagline: "Safe & Dependable Monocoque School Bus.",
    description: "Compliant with AIS:063 bus code with low ingress steps, safety handrails, bag racks, stop-arm, and CCTV camera provisions for educational transport.",
    price: "₹ 30.20 Lakh*",
    image: monobusSchool4020wbMenu,
    bannerImage: monobusBanner,
    calloutImage: monobusImg,
    gallery: [monobusBanner, monobusSchool4020wbMenu],
    specifications: {
      engine: "FM 2.6 CR ED BS-VI",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "40-45 School Children",
      wheelbase: "4020 mm"
    },
    features: [
      {
        category: "Safety",
        items: [
          "AIS:063 School Bus Code compliant yellow exterior & safety graphics",
          "Child-friendly low boarding step with anti-slip tread",
          "Rooftop emergency escape hatches and dual emergency exits"
        ]
      }
    ],
    similarVehicles: ["monobus-school-bus-5200wb", "traveller-n-school-bus-4020wb"],
    officialUrl: "https://www.forcemotors.com/vehicles/monobus-school-bus-4020wb/"
  },
  {
    id: "monobus-school-bus-5200wb",
    slug: "monobus-school-bus-5200wb",
    name: "Monobus School Bus 5200WB",
    brand: "Force Motors",
    category: "monobus",
    categoryBadge: "SCHOOL TRANSPORT",
    tagline: "High Capacity 50+ Student Bus.",
    description: "Maximum capacity monocoque school transport bus engineered to safely transport over 50 students per trip with roll-over crash protection.",
    price: "₹ 33.50 Lakh*",
    image: monobusSchool5200wbMenu,
    bannerImage: monobusBanner,
    calloutImage: monobusImg,
    gallery: [monobusBanner, monobusSchool5200wbMenu],
    specifications: {
      engine: "FM 2.6 CR ED BS-VI",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "50-55 School Children",
      wheelbase: "5200 mm"
    },
    features: [
      {
        category: "Safety",
        items: [
          "Crash-compliant monocoque cage with reinforced rollover strength",
          "Wide under-seat school bag storage compartments"
        ]
      }
    ],
    similarVehicles: ["monobus-school-bus-4020wb", "traveller-n-wider-body-school-bus-4020wb"],
    officialUrl: "https://www.forcemotors.com/vehicles/monobus-school-bus-5200wb/"
  },

  // ==========================================
  // 5. GURKHA LINEUP (Dedicated Models)
  // ==========================================
  {
    id: "gurkha",
    slug: "gurkha",
    name: "Gurkha 3-Door",
    brand: "Force Motors",
    category: "gurkha",
    categoryBadge: "4x4 OFF-ROAD",
    tagline: "The Ultimate All-Terrain Adventure Machine.",
    description: "Built for pure off-road dominance with front and rear mechanical differential locks, 700mm water wading capacity, snorkel intake, and a heavy-duty Mercedes-derived 2.6L turbodiesel.",
    price: "₹ 16.75 Lakh*",
    image: gurkhaImg,
    bannerImage: gurkhaImg,
    calloutImage: gurkhaImg,
    gallery: [gurkhaImg, gurkhaMenu],
    specifications: {
      engine: "FM 2.6 CR CD BS-VI Stage 2",
      power: "90 hp @ 3200 rpm",
      torque: "250 Nm @ 1400 - 2400 rpm",
      fuelType: "Diesel",
      transmission: "5-Speed Manual 4x4 with High/Low Range",
      seatingCapacity: "4-Seater (Captain Seats)",
      wheelbase: "2400 mm",
      groundClearance: "205 mm",
      suspension: "Front & Rear: Coil Springs with Gas Shock Absorbers"
    },
    features: [
      {
        category: "Performance",
        items: [
          "Front and rear mechanically locking differentials standard",
          "Factory-fitted air intake snorkel with 700 mm water wading capability",
          "Low-range 4x4 transfer case for crawling over extreme obstacles"
        ]
      },
      {
        category: "Safety",
        items: [
          "Dual front airbags standard",
          "ABS with EBD and cornering stability",
          "Heavy-duty tubular chassis with high tensile side impact protection"
        ]
      }
    ],
    similarVehicles: ["gurkha-5-door", "trax-jungle-safari", "trax-cruiser"],
    officialUrl: "https://forcegurkha.co.in/"
  },
  {
    id: "gurkha-3-door",
    slug: "gurkha-3-door",
    name: "Gurkha 3-Door",
    brand: "Force Motors",
    category: "gurkha",
    categoryBadge: "3-DOOR 4x4",
    tagline: "Agile 4x4 Off-Roader.",
    description: "Compact 3-door layout with short wheelbase for tight trail maneuvering, mechanical diff locks, and commanding ground clearance.",
    price: "₹ 16.75 Lakh*",
    image: gurkhaMenu,
    bannerImage: gurkhaImg,
    calloutImage: gurkhaImg,
    gallery: [gurkhaImg, gurkhaMenu],
    specifications: {
      engine: "FM 2.6 CR CD BS-VI",
      power: "90 hp @ 3200 rpm",
      torque: "250 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "4 Captain Seats",
      wheelbase: "2400 mm",
      groundClearance: "205 mm"
    },
    features: [
      {
        category: "Performance",
        items: [
          "Independent manual diff locks on both front and rear axles",
          "Short front and rear overhangs for 35-degree departure angle"
        ]
      }
    ],
    similarVehicles: ["gurkha-5-door", "gurkha", "trax-jungle-safari"],
    officialUrl: "https://forcegurkha.co.in/"
  },
  {
    id: "gurkha-5-door",
    slug: "gurkha-5-door",
    name: "Gurkha 5-Door",
    brand: "Force Motors",
    category: "gurkha",
    categoryBadge: "5-DOOR 4x4",
    tagline: "Family Sized 4x4 Expedition Vehicle.",
    description: "Extended 5-door Gurkha seating 7 passengers with full family comfort, 140 hp upgraded engine output, electronic shift-on-the-fly 4x4, and immense road presence.",
    price: "₹ 18.00 Lakh*",
    image: gurkhaMenu,
    bannerImage: gurkhaImg,
    calloutImage: gurkhaImg,
    gallery: [gurkhaImg, gurkhaMenu],
    specifications: {
      engine: "FM 2.6 CR BS-VI Stage 2",
      power: "140 hp @ 3200 rpm",
      torque: "320 Nm @ 1400 - 2600 rpm",
      seatingCapacity: "7-Seater (3-Rows)",
      wheelbase: "2825 mm",
      groundClearance: "233 mm"
    },
    features: [
      {
        category: "Performance",
        items: [
          "Uprated 140 hp engine with 320 Nm torque",
          "Electronic shift-on-the-fly 4x4 dial on center console",
          "Class-leading 233 mm ground clearance on 18-inch all-terrain alloys"
        ]
      },
      {
        category: "Comfort",
        items: [
          "7 full-size seats with comfortable third-row access",
          "9-inch touchscreen infotainment with Apple CarPlay & Android Auto",
          "Digital instrument cluster with tyre pressure monitoring system (TPMS)"
        ]
      }
    ],
    similarVehicles: ["gurkha-3-door", "gurkha", "citiline"],
    officialUrl: "https://forcegurkha.co.in/"
  },

  // ==========================================
  // 6. TRAVELLER N LINEUP
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
    price: "₹ 15.21 Lakh*",
    image: traveller3050wbMenu,
    bannerImage: travellerBanner,
    calloutImage: travellerCallout,
    gallery: [travellerBanner, traveller3050wbMenu],
    specifications: {
      engine: "Mercedes-Derived FM 2.6 CR ED",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      fuelType: "Diesel",
      transmission: "5-Speed Manual",
      seatingCapacity: "9+D / 12+D",
      wheelbase: "3050 mm",
      gvw: "3675 kg"
    },
    features: [
      {
        category: "Performance",
        items: [
          "Mercedes-derived engine delivering high torque at low RPMs",
          "Low total cost of ownership with long service intervals"
        ]
      }
    ],
    similarVehicles: ["traveller-n-3350wb", "traveller-n-4020wb"],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-3050wb/"
  },
  {
    id: "traveller-n-3350wb",
    slug: "traveller-n-3350wb",
    name: "Traveller N 3350WB",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "PASSENGER",
    tagline: "Superior Comfort for Medium Groups.",
    description: "Offers optimal legroom, wider seating arrangements, and proven reliability for tour operators and intercity shuttle services.",
    price: "₹ 16.45 Lakh*",
    image: traveller3350wbMenu,
    bannerImage: travellerBanner,
    calloutImage: travellerCallout,
    gallery: [travellerBanner, traveller3350wbMenu],
    specifications: {
      engine: "FM 2.6 CR ED",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "12+D / 13+D",
      wheelbase: "3350 mm",
      gvw: "3965 kg"
    },
    features: [
      {
        category: "Comfort",
        items: ["Generous seat pitch", "Powerful roof AC options"]
      }
    ],
    similarVehicles: ["traveller-n-3050wb", "traveller-n-3700wb", "traveller-n-4020wb"],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-3350wb/"
  },
  {
    id: "traveller-n-3700wb",
    slug: "traveller-n-3700wb",
    name: "Traveller N 3700WB",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "PASSENGER",
    tagline: "Extended Wheelbase Tourism Shuttle.",
    description: "Mid-to-long wheelbase variant seating up to 17 passengers comfortably with dedicated luggage room for pilgrimage and tourist travel.",
    price: "₹ 17.80 Lakh*",
    image: traveller3700wbMenu,
    bannerImage: travellerBanner,
    calloutImage: travellerCallout,
    gallery: [travellerBanner, traveller3700wbMenu],
    specifications: {
      engine: "FM 2.6 CR ED",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "16+D / 17+D",
      wheelbase: "3700 mm",
      gvw: "4200 kg"
    },
    features: [
      {
        category: "Comfort",
        items: ["High-back luxury seats", "Quiet cabin acoustics"]
      }
    ],
    similarVehicles: ["traveller-n-3350wb", "traveller-n-4020wb"],
    officialUrl: "https://www.forcemotors.com/vehicles-category/traveller/"
  },
  {
    id: "traveller-n-4020wb",
    slug: "traveller-n-4020wb",
    name: "Traveller N 4020WB",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "HIGH CAPACITY",
    tagline: "Maximum Capacity Passenger Carrier.",
    description: "Designed for high-density routes, tourist fleets, and staff transport with seating configurations up to 20 passengers plus driver.",
    price: "₹ 18.90 Lakh*",
    image: traveller4020wbMenu,
    bannerImage: travellerBanner,
    calloutImage: travellerCallout,
    gallery: [travellerBanner, traveller4020wbMenu],
    specifications: {
      engine: "FM 2.6 CR ED",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "19+D / 20+D",
      wheelbase: "4020 mm",
      gvw: "4675 kg"
    },
    features: [
      {
        category: "Utility",
        items: ["Maximum passenger capacity", "Dual air conditioning"]
      }
    ],
    similarVehicles: ["traveller-n-wider-body-4020wb", "monobus"],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-4020wb/"
  },
  {
    id: "traveller-n-wider-body-3350wb",
    slug: "traveller-n-wider-body-3350wb",
    name: "Traveller N Wider Body 3350WB",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "WIDE BODY",
    tagline: "Wider Aisle & Supreme Passenger Room.",
    description: "Provides an expanded body width for 2x1 luxury seating, wider central aisle, and executive passenger travel.",
    price: "₹ 17.50 Lakh*",
    image: travellerWb3350wbMenu,
    bannerImage: travellerBanner,
    calloutImage: travellerCallout,
    gallery: [travellerBanner, travellerWb3350wbMenu],
    specifications: {
      engine: "FM 2.6 CR ED",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "12+D",
      wheelbase: "3350 mm"
    },
    features: [
      {
        category: "Interior",
        items: ["Expanded 2.22m overall width", "Wider passenger gangway"]
      }
    ],
    similarVehicles: ["traveller-n-3350wb", "traveller-n-wider-body-4020wb"],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-wider-body-3350wb/"
  },
  {
    id: "traveller-n-wider-body-4020wb",
    slug: "traveller-n-wider-body-4020wb",
    name: "Traveller N Wider Body 4020WB",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "WIDE BODY",
    tagline: "The Grand Wide-Body Carrier.",
    description: "Combines 4020mm long wheelbase with extra body width for supreme intercity luxury transport seating up to 26 passengers.",
    price: "₹ 20.10 Lakh*",
    image: travellerWb4020wbMenu,
    bannerImage: travellerBanner,
    calloutImage: travellerCallout,
    gallery: [travellerBanner, travellerWb4020wbMenu],
    specifications: {
      engine: "FM 2.6 CR ED",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "26+D",
      wheelbase: "4020 mm"
    },
    features: [
      {
        category: "Utility",
        items: ["Massive cabin capacity", "High stability wide track"]
      }
    ],
    similarVehicles: ["traveller-n-4020wb", "monobus"],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-wider-body-4020wb/"
  },
  {
    id: "traveller-n-4020wb-cng",
    slug: "traveller-n-4020wb-cng",
    name: "Traveller N 4020WB CNG",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "ECO-FRIENDLY CNG",
    tagline: "Green & Clean Commercial Transport.",
    description: "Factory-fitted CNG engine delivering low emissions, minimal operating costs, and smooth city bus compliance.",
    price: "₹ 19.80 Lakh*",
    image: traveller4020wbCngMenu,
    bannerImage: travellerBanner,
    calloutImage: travellerCallout,
    gallery: [travellerBanner, traveller4020wbCngMenu],
    specifications: {
      engine: "FM 2.6 CNG BS-VI",
      power: "85 hp @ 2800 rpm",
      torque: "225 Nm @ 1400 - 2400 rpm",
      fuelType: "CNG",
      wheelbase: "4020 mm"
    },
    features: [
      {
        category: "Performance",
        items: ["Factory safety tested CNG cylinder cascade", "Ultra-low fuel expense per km"]
      }
    ],
    similarVehicles: ["traveller-n-wider-body-4020wb-cng", "traveller-n-4020wb"],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-4020wb-cng/"
  },
  {
    id: "traveller-n-wider-body-4020wb-cng",
    slug: "traveller-n-wider-body-4020wb-cng",
    name: "Traveller N Wider Body 4020WB CNG",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "WIDE BODY CNG",
    tagline: "Extra Width with Eco-Friendly CNG Economy.",
    description: "The ultimate green passenger transporter with extra cabin width and factory-engineered CNG reliability.",
    price: "₹ 20.90 Lakh*",
    image: travellerWb4020wbCngMenu,
    bannerImage: travellerBanner,
    calloutImage: travellerCallout,
    gallery: [travellerBanner, travellerWb4020wbCngMenu],
    specifications: {
      engine: "FM 2.6 CNG BS-VI",
      power: "85 hp @ 2800 rpm",
      torque: "225 Nm @ 1400 - 2400 rpm",
      fuelType: "CNG",
      wheelbase: "4020 mm"
    },
    features: [
      {
        category: "Utility",
        items: ["Eco-friendly green mobility", "Wide aisle for urban shuttle routes"]
      }
    ],
    similarVehicles: ["traveller-n-4020wb-cng", "traveller-n-wider-body-4020wb"],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-wider-body-4020wb-cng/"
  },
  {
    id: "traveller-n-school-bus-3050wb",
    slug: "traveller-n-school-bus-3050wb",
    name: "Traveller N School Bus 3050WB",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "SCHOOL BUS",
    tagline: "Safe & Dependable Compact School Bus.",
    description: "Compact school bus engineered for safety with low ingress steps, safety handrails, and emergency exits.",
    price: "₹ 15.80 Lakh*",
    image: travellerSchoolBusMenu,
    bannerImage: travellerBanner,
    calloutImage: travellerCallout,
    gallery: [travellerBanner, travellerSchoolBusMenu],
    specifications: {
      engine: "FM 2.6 CR ED",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "14-16 Children",
      wheelbase: "3050 mm"
    },
    features: [
      {
        category: "Safety",
        items: ["AIS:063 compliant school bus layout", "Window protection bars"]
      }
    ],
    similarVehicles: ["traveller-n-school-bus-3350wb", "trax-cruiser-school-van"],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-school-bus-3050wb/"
  },
  {
    id: "traveller-n-school-bus-3350wb",
    slug: "traveller-n-school-bus-3350wb",
    name: "Traveller N School Bus 3350WB",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "SCHOOL BUS",
    tagline: "Medium Capacity Certified School Bus.",
    description: "AIS:063 compliant school bus seating 19 to 20 students with emergency stop alarms and anti-skid flooring.",
    price: "₹ 16.90 Lakh*",
    image: travellerSchoolBusMenu,
    bannerImage: travellerBanner,
    calloutImage: travellerCallout,
    gallery: [travellerBanner, travellerSchoolBusMenu],
    specifications: {
      engine: "FM 2.6 CR ED",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "19-20 Children",
      wheelbase: "3350 mm"
    },
    features: [
      {
        category: "Safety",
        items: ["First aid box and fire extinguisher", "Speed governor limited to 40 km/h"]
      }
    ],
    similarVehicles: ["traveller-n-school-bus-3700wb", "traveller-n-school-bus-3050wb"],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-school-bus-3350wb/"
  },
  {
    id: "traveller-n-school-bus-3700wb",
    slug: "traveller-n-school-bus-3700wb",
    name: "Traveller N School Bus 3700WB",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "SCHOOL BUS",
    tagline: "Extended Capacity School Transport.",
    description: "Seats up to 26 students with under-seat bag storage, wide entrance door, and high roof interior.",
    price: "₹ 18.20 Lakh*",
    image: travellerSchoolBusMenu,
    bannerImage: travellerBanner,
    calloutImage: travellerCallout,
    gallery: [travellerBanner, travellerSchoolBusMenu],
    specifications: {
      engine: "FM 2.6 CR ED",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "26 Children",
      wheelbase: "3700 mm"
    },
    features: [
      {
        category: "Safety",
        items: ["Low boarding step for young children", "Emergency exit door with warning buzzer"]
      }
    ],
    similarVehicles: ["traveller-n-school-bus-4020wb", "traveller-n-school-bus-3350wb"],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-school-bus-3700wb/"
  },
  {
    id: "traveller-n-school-bus-4020wb",
    slug: "traveller-n-school-bus-4020wb",
    name: "Traveller N School Bus 4020WB",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "HIGH CAPACITY SCHOOL",
    tagline: "Maximum Student Fleet Capacity.",
    description: "Transports up to 33 school children with maximum stability, disc brakes with ABS, and durable school-grade upholstery.",
    price: "₹ 19.50 Lakh*",
    image: travellerSchoolBusMenu,
    bannerImage: travellerBanner,
    calloutImage: travellerCallout,
    gallery: [travellerBanner, travellerSchoolBusMenu],
    specifications: {
      engine: "FM 2.6 CR ED",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "33 Children",
      wheelbase: "4020 mm"
    },
    features: [
      {
        category: "Safety",
        items: ["4-wheel ABS with EBD", "Full standing height with overhead bag racks"]
      }
    ],
    similarVehicles: ["traveller-n-wider-body-school-bus-4020wb", "monobus-school-bus-4020wb"],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-school-bus-4020wb/"
  },
  {
    id: "traveller-n-wider-body-school-bus-4020wb",
    slug: "traveller-n-wider-body-school-bus-4020wb",
    name: "Traveller N Wider Body School Bus 4020WB",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "WIDE BODY SCHOOL",
    tagline: "Wide-Body Maximum Comfort School Bus.",
    description: "Accommodates up to 37 students in 3x2 seat configuration with wide gangway and crash-tested monocoque body.",
    price: "₹ 20.80 Lakh*",
    image: travellerWbSchoolBusMenu,
    bannerImage: travellerBanner,
    calloutImage: travellerCallout,
    gallery: [travellerBanner, travellerWbSchoolBusMenu],
    specifications: {
      engine: "FM 2.6 CR ED",
      power: "115 hp @ 2800 rpm",
      torque: "350 Nm @ 1400 - 2400 rpm",
      seatingCapacity: "37 Children",
      wheelbase: "4020 mm"
    },
    features: [
      {
        category: "Comfort",
        items: ["Extra wide central aisle for teacher movement", "Padded grab handles on every seat"]
      }
    ],
    similarVehicles: ["traveller-n-school-bus-4020wb", "monobus-school-bus-4020wb"],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-wider-body-school-bus-4020wb/"
  },
  {
    id: "traveller-n-school-bus-3700wb-cng",
    slug: "traveller-n-school-bus-3700wb-cng",
    name: "Traveller N School Bus 3700WB CNG",
    brand: "Force Motors",
    category: "traveller",
    categoryBadge: "CNG SCHOOL BUS",
    tagline: "Eco-Friendly Safe School Transport.",
    description: "Clean CNG school bus engineered for city green compliance and student safety with low running cost.",
    price: "₹ 19.20 Lakh*",
    image: travellerSchoolBusMenu,
    bannerImage: travellerBanner,
    calloutImage: travellerCallout,
    gallery: [travellerBanner, travellerSchoolBusMenu],
    specifications: {
      engine: "FM 2.6 CNG BS-VI",
      power: "85 hp @ 2800 rpm",
      torque: "225 Nm @ 1400 - 2400 rpm",
      fuelType: "CNG",
      seatingCapacity: "26 Children",
      wheelbase: "3700 mm"
    },
    features: [
      {
        category: "Safety",
        items: ["Certified CNG fuel safety cutoff valve", "Emergency buzzer and fire detection"]
      }
    ],
    similarVehicles: ["traveller-n-school-bus-3700wb", "traveller-n-4020wb-cng"],
    officialUrl: "https://www.forcemotors.com/vehicles/traveller-school-bus-3700wb-cng/"
  },

  // ==========================================
  // 7. ELECTRIC MOBILITY (EV)
  // ==========================================
  {
    id: "e-traveller",
    slug: "e-traveller-smart-citibus-ev",
    name: "e-Traveller Smart Citibus EV",
    brand: "Force Motors",
    category: "ev",
    categoryBadge: "100% ELECTRIC",
    tagline: "Zero Emissions. Unmatched Urban Efficiency.",
    description: "India's cutting-edge zero-emission electric passenger van, delivering whisper-quiet travel, rapid DC charging, modern telematics, and drastically reduced running cost per kilometer.",
    price: "₹ 26.50 Lakh*",
    image: evImg,
    bannerImage: evImg,
    calloutImage: evImg,
    gallery: [evImg],
    specifications: {
      engine: "High-Efficiency Permanent Magnet Synchronous Motor (PMSM)",
      power: "135 kW Peak Power",
      torque: "400 Nm Instant Torque",
      fuelType: "100% Electric (EV)",
      transmission: "Single Speed Automatic Direct Drive",
      seatingCapacity: "14+D / 17+D",
      wheelbase: "3700 mm",
      battery: "High Energy Density Lithium Iron Phosphate (LFP)",
      range: "Up to 250 km on Single Charge",
      brakes: "Regenerative Braking System with 4-Wheel ABS"
    },
    features: [
      {
        category: "Technology",
        items: [
          "Dual CCS2 DC Fast Charging: 20% to 80% in 45 minutes",
          "Multi-level regenerative braking for extended battery range",
          "Advanced Battery Management System (BMS) with liquid cooling",
          "Connected vehicle telematics for fleet tracking and charge monitoring"
        ]
      },
      {
        category: "Comfort",
        items: [
          "Whisper-quiet cabin with zero engine noise or vibration",
          "Full electric climate control keeping cabin pre-cooled",
          "Smooth clutchless single-speed automatic transmission"
        ]
      }
    ],
    similarVehicles: ["traveller-n-3700wb", "urbania-dx-3615wb", "monobus"],
    officialUrl: "https://www.forcemotors.com/vehicles/e-traveller-smart-citibus-ev/"
  }
];
