import { useState } from "react";
import { Link } from "@tanstack/react-router";

// Authentic Force Motors menu vehicle images
import travellerPrisonVan from "@/assets/menu/traveller-prison-van.png";
import travellerTroopCarrier from "@/assets/menu/traveller-troop-carrier.png";
import travellerMedicalUnit from "@/assets/menu/traveller-mobile-medical-unit.png";
import travellerForensicVan from "@/assets/menu/traveller-forensic-van.png";
import traxCashVan from "@/assets/menu/trax-cash-van.png";
import traxFirstResponder from "@/assets/menu/trax-first-responder.png";
import traxJungleSafari from "@/assets/menu/trax-jungle-safari.png";
import traxPoliceVan from "@/assets/menu/trax-police-van.png";

import traveller3050wb from "@/assets/menu/traveller-3050wb.webp";
import traveller3350wb from "@/assets/menu/traveller-3350wb.webp";
import traveller3700wb from "@/assets/menu/traveller-3700wb.webp";
import traveller4020wb from "@/assets/menu/traveller-4020wb.webp";
import travellerWb3350wb from "@/assets/menu/traveller-wb-3350wb.webp";
import travellerWb4020wb from "@/assets/menu/traveller-wb-4020wb.webp";
import traveller4020wbCng from "@/assets/menu/traveller-4020wb-cng.png";
import travellerWb4020wbCng from "@/assets/menu/traveller-wb-4020wb-cng.webp";
import travellerSchoolBus from "@/assets/menu/traveller-school-bus.webp";
import travellerWbSchoolBus from "@/assets/menu/traveller-wb-school-bus.webp";
import travellerAmbulanceB from "@/assets/menu/traveller-ambulance-b.webp";
import travellerAmbulanceC from "@/assets/menu/traveller-ambulance-c.webp";
import travellerDv from "@/assets/menu/traveller-dv.webp";

import urbaniaMenu from "@/assets/menu/urbania-menu.png";

import monobus4020wbLx from "@/assets/menu/monobus-4020wb-lx.png";
import monobus5200wbLx from "@/assets/menu/monobus-5200wb-lx.png";
import monobus4020wb from "@/assets/menu/monobus-4020wb.png";
import monobus5200wb from "@/assets/menu/monobus-5200wb.png";
import monobusSchool4020wb from "@/assets/menu/monobus-school-4020wb.png";
import monobusSchool5200wb from "@/assets/menu/monobus-school-5200wb.png";

import traxCruiser from "@/assets/menu/trax-cruiser.png";
import traxToofan from "@/assets/menu/trax-toofan.png";
import traxCitiline from "@/assets/menu/trax-citiline.png";
import traxGama from "@/assets/menu/trax-gama.webp";
import traxSchoolVan from "@/assets/menu/trax-school-van.png";
import traxAmbulance from "@/assets/menu/trax-ambulance.png";
import traxDv from "@/assets/menu/trax-dv.png";
import traxCrewVan from "@/assets/menu/trax-crew-van.png";

import gurkhaMenu from "@/assets/menu/gurkha-menu.png";
import evMenu from "@/assets/menu/ev-menu.webp";

type Vehicle = {
  name: string;
  badge?: string;
  image: string;
  url: string;
};

type VehicleGroup = {
  title: string;
  vehicles: Vehicle[];
};

type Category = {
  id: string;
  name: string;
  groups: VehicleGroup[];
};

const megaMenuData: Record<string, Category[]> = {
  "Commercial Vehicles": [
    {
      id: "traveller-n",
      name: "Traveller N",
      groups: [
        {
          title: "Passenger Vehicles",
          vehicles: [
            { name: "Traveller N 3050WB", image: traveller3050wb, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N 3350WB", image: traveller3350wb, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N 3700WB", image: traveller3700wb, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N 4020WB", image: traveller4020wb, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N Wider Body 3350WB", image: travellerWb3350wb, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N Wider Body 4020WB", image: travellerWb4020wb, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N 4020WB CNG", badge: "CNG", image: traveller4020wbCng, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N Wider Body 4020WB CNG", badge: "CNG", image: travellerWb4020wbCng, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
          ],
        },
        {
          title: "School Buses",
          vehicles: [
            { name: "Traveller N School Bus 3050WB", image: travellerSchoolBus, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N School Bus 3350WB", image: travellerSchoolBus, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N School Bus 3700WB", image: travellerSchoolBus, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N School Bus 4020WB", image: travellerSchoolBus, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N Wider Body School Bus 4020WB", image: travellerWbSchoolBus, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
          ],
        },
        {
          title: "Ambulances & Delivery",
          vehicles: [
            { name: "Traveller N Ambulance 3350WB B-Type", image: travellerAmbulanceB, url: "https://www.forcemotors.com/vehicles-category/special-applications/" },
            { name: "Traveller N Ambulance 3350WB C-Type", image: travellerAmbulanceC, url: "https://www.forcemotors.com/vehicles-category/special-applications/" },
            { name: "Traveller N DV AC 3050WB", image: travellerDv, url: "https://www.forcemotors.com/vehicles-category/special-applications/" },
          ],
        },
      ],
    },
    {
      id: "urbania",
      name: "Urbania DX",
      groups: [
        {
          title: "Executive Shared Mobility Vans",
          vehicles: [
            { name: "Urbania DX 3350WB", image: urbaniaMenu, url: "https://forceurbania.co.in/" },
            { name: "Urbania DX 3615WB", image: urbaniaMenu, url: "https://forceurbania.co.in/" },
            { name: "Urbania DX 4400WB", image: urbaniaMenu, url: "https://forceurbania.co.in/" },
          ],
        },
      ],
    },
    {
      id: "monobus",
      name: "Monobus",
      groups: [
        {
          title: "Monobus Passenger & School Range",
          vehicles: [
            { name: "Monobus LX 4020WB", image: monobus4020wbLx, url: "https://www.forcemotors.com/vehicles-category/monobus/" },
            { name: "Monobus 5200WB", image: monobus5200wbLx, url: "https://www.forcemotors.com/vehicles-category/monobus/" },
            { name: "Monobus 4020WB", image: monobus4020wb, url: "https://www.forcemotors.com/vehicles-category/monobus/" },
            { name: "Monobus School Bus 4020WB", image: monobusSchool4020wb, url: "https://www.forcemotors.com/vehicles-category/monobus/" },
            { name: "Monobus School Bus 5200WB", image: monobusSchool5200wb, url: "https://www.forcemotors.com/vehicles-category/monobus/" },
          ],
        },
      ],
    },
    {
      id: "trax",
      name: "Trax",
      groups: [
        {
          title: "Multi Utility & Rugged Transit",
          vehicles: [
            { name: "Trax Cruiser", image: traxCruiser, url: "https://www.forcemotors.com/vehicles-category/trax/" },
            { name: "Trax Toofan", image: traxToofan, url: "https://www.forcemotors.com/vehicles-category/trax/" },
            { name: "Citiline", image: traxCitiline, url: "https://www.forcemotors.com/vehicles-category/trax/" },
            { name: "Trax Gama", image: traxGama, url: "https://www.forcemotors.com/vehicles-category/trax/" },
            { name: "Trax Cruiser School Van", image: traxSchoolVan, url: "https://www.forcemotors.com/vehicles-category/trax/" },
            { name: "Trax Ambulance", image: traxAmbulance, url: "https://www.forcemotors.com/vehicles-category/trax/" },
            { name: "Trax DV", image: traxDv, url: "https://www.forcemotors.com/vehicles-category/trax/" },
            { name: "Trax Crew Van", image: traxCrewVan, url: "https://www.forcemotors.com/vehicles-category/trax/" },
          ],
        },
      ],
    },
    {
      id: "special",
      name: "Special Applications",
      groups: [
        {
          title: "Special Application",
          vehicles: [
            { name: "Traveller Prison Van", image: travellerPrisonVan, url: "https://www.forcemotors.com/vehicles-category/special-applications/" },
            { name: "Traveller Troop Carrier", image: travellerTroopCarrier, url: "https://www.forcemotors.com/vehicles-category/special-applications/" },
            { name: "Traveller Mobile Medical Unit", image: travellerMedicalUnit, url: "https://www.forcemotors.com/vehicles-category/special-applications/" },
            { name: "Traveller Forensic Van", image: travellerForensicVan, url: "https://www.forcemotors.com/vehicles-category/special-applications/" },
            { name: "Trax Cruiser Cash Van", image: traxCashVan, url: "https://www.forcemotors.com/vehicles-category/special-applications/" },
            { name: "Trax First Responder Vehicle", image: traxFirstResponder, url: "https://www.forcemotors.com/vehicles-category/special-applications/" },
            { name: "Trax Jungle Safari", image: traxJungleSafari, url: "https://www.forcemotors.com/vehicles-category/special-applications/" },
            { name: "Trax Police Van", image: traxPoliceVan, url: "https://www.forcemotors.com/vehicles-category/special-applications/" },
          ],
        },
      ],
    },
  ],
  "Special Vehicles": [
    {
      id: "gurkha",
      name: "Gurkha",
      groups: [
        {
          title: "4x4 Extreme Off-Roaders",
          vehicles: [
            { name: "Gurkha 3-Door", image: gurkhaMenu, url: "https://www.forcemotors.com/vehicles-category/gurkha/" },
            { name: "Gurkha 5-Door", image: gurkhaMenu, url: "https://www.forcemotors.com/vehicles-category/gurkha/" },
          ],
        },
      ],
    },
  ],
  "Electric Vehicle": [
    {
      id: "ev",
      name: "EV",
      groups: [
        {
          title: "Zero-Emission Electric Commercial Fleet",
          vehicles: [
            { name: "e-Traveller Smart Citibus EV", image: evMenu, url: "https://www.forcemotors.com/vehicles/e-traveller-smart-citibus-ev/" },
          ],
        },
      ],
    },
  ],
};

const megaMenuSlugMap: Record<string, string> = {
  // Traveller N
  "Traveller N 3050WB": "traveller-n-3050wb",
  "Traveller N 3350WB": "traveller-n-3350wb",
  "Traveller N 3700WB": "traveller-n-3700wb",
  "Traveller N 4020WB": "traveller-n-4020wb",
  "Traveller N Wider Body 3350WB": "traveller-n-wider-body-3350wb",
  "Traveller N Wider Body 4020WB": "traveller-n-wider-body-4020wb",
  "Traveller N 4020WB CNG": "traveller-n-4020wb-cng",
  "Traveller N Wider Body 4020WB CNG": "traveller-n-wider-body-4020wb-cng",
  "Traveller N School Bus 3050WB": "traveller-n-school-bus-3050wb",
  "Traveller N School Bus 3350WB": "traveller-n-school-bus-3350wb",
  "Traveller N School Bus 3700WB": "traveller-n-school-bus-3700wb",
  "Traveller N School Bus 4020WB": "traveller-n-school-bus-4020wb",
  "Traveller N Wider Body School Bus 4020WB": "traveller-n-wider-body-school-bus-4020wb",
  "Traveller N Ambulance 3350WB B-Type": "traveller-n-ambulance-3350wb-b-type",
  "Traveller N Ambulance 3350WB C-Type": "traveller-n-ambulance-3350wb-c-type",
  "Traveller N DV AC 3050WB": "traveller-n-dv-ac-3050wb",
  // Urbania
  "Urbania DX 3350WB": "urbania-dx-3350wb",
  "Urbania DX 3615WB": "urbania-dx-3615wb",
  "Urbania DX 4400WB": "urbania-dx-4400wb",
  // Monobus
  "Monobus LX 4020WB": "monobus-lx-4020wb",
  "Monobus 5200WB": "monobus-5200wb",
  "Monobus 4020WB": "monobus-4020wb",
  "Monobus School Bus 4020WB": "monobus-school-bus-4020wb",
  "Monobus School Bus 5200WB": "monobus-school-bus-5200wb",
  // Trax
  "Trax Cruiser": "trax-cruiser",
  "Trax Toofan": "trax-toofan",
  "Citiline": "citiline",
  "Trax Gama": "trax-gama",
  "Trax Cruiser School Van": "trax-cruiser-school-van",
  "Trax Ambulance": "trax-ambulance",
  "Trax DV": "trax-dv",
  "Trax Crew Van": "trax-crew-van",
  // Special Applications
  "Traveller Prison Van": "traveller-prison-van",
  "Traveller Troop Carrier": "traveller-troop-carrier",
  "Traveller Mobile Medical Unit": "traveller-mobile-medical-unit",
  "Traveller Forensic Van": "traveller-forensic-van",
  "Trax Cruiser Cash Van": "trax-cash-van",
  "Trax First Responder Vehicle": "trax-first-responder",
  "Trax Jungle Safari": "trax-jungle-safari",
  "Trax Police Van": "trax-police-van",
  // Gurkha
  "Gurkha 3-Door": "gurkha-3-door",
  "Gurkha 5-Door": "gurkha-5-door",
  // EV
  "e-Traveller Smart Citibus EV": "e-traveller-smart-citibus-ev",
};

export function MegaMenu({
  isOpen,
  onMouseEnter,
  onMouseLeave,
}: {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [activeCategory, setActiveCategory] = useState<string>("traveller-n");

  const getActiveCategoryData = (): Category => {
    for (const mainGroup in megaMenuData) {
      const catList = megaMenuData[mainGroup];
      if (catList) {
        for (const cat of catList) {
          if (cat.id === activeCategory) {
            return cat;
          }
        }
      }
    }
    const defaultGroup = megaMenuData["Commercial Vehicles"];
    return defaultGroup && defaultGroup[0] ? defaultGroup[0] : { id: "traveller-n", name: "Traveller N", groups: [] };
  };

  const activeData = getActiveCategoryData();

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute left-0 right-0 top-full bg-slate-50 border-t border-slate-200 shadow-2xl transition-all duration-300 origin-top ${
        isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible pointer-events-none"
      }`}
    >
      <div className="mx-auto flex flex-col lg:flex-row max-w-7xl max-h-[85vh] overflow-y-auto lg:overflow-visible">
        {/* Left Sidebar */}
        <div className="w-full lg:w-72 shrink-0 border-b lg:border-b-0 lg:border-r border-slate-200 bg-white py-4 lg:py-6">
          {Object.entries(megaMenuData).map(([sectionTitle, categories]) => (
            <div key={sectionTitle} className="mb-6 last:mb-0 px-6">
              <h4 className="mb-3 text-xs font-black tracking-wider uppercase text-slate-400">
                {sectionTitle}
              </h4>
              <ul className="space-y-1">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveCategory(cat.id)}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex w-full items-center justify-between rounded-lg px-3.5 py-2.5 text-left text-sm font-semibold transition-all cursor-pointer ${
                        activeCategory === cat.id
                          ? "bg-blue-50 font-bold text-[#006CB5] shadow-sm border-l-4 border-[#006CB5]"
                          : "text-slate-700 hover:bg-slate-50 hover:text-[#006CB5]"
                      }`}
                    >
                      <span>{cat.name}</span>
                      <svg
                        viewBox="0 0 24 24"
                        className={`h-4 w-4 transition-transform ${
                          activeCategory === cat.id
                            ? "translate-x-1 text-[#006CB5]"
                            : "text-transparent"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Main Content */}
        <div className="flex-1 bg-slate-50/60 p-4 lg:p-8">
          <div className="max-h-none lg:max-h-[65vh] overflow-y-visible lg:overflow-y-auto pr-0 lg:pr-4 custom-scrollbar">
            {activeData.groups.map((group, groupIdx) => (
              <div key={group.title} className={groupIdx > 0 ? "mt-10" : ""}>
                <h3 className="mb-6 font-display text-lg font-bold text-[#006CB5] border-b border-blue-200/60 pb-2">
                  {group.title}
                </h3>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                  {group.vehicles.map((vehicle, idx) => {
                    const slug = megaMenuSlugMap[vehicle.name] || "traveller-n-3050wb";

                    return (
                      <Link
                        key={idx}
                        to="/vehicles/$slug"
                        params={{ slug }}
                        className="group flex flex-col items-center rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10 border border-slate-200/80 hover:border-[#006CB5]"
                      >
                        <div className="relative mb-3 flex h-24 w-full items-center justify-center overflow-hidden">
                          <img
                            src={vehicle.image}
                            alt={vehicle.name}
                            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110 select-none"
                          />
                        </div>
                        <h4 className="text-center text-xs font-bold text-slate-800 transition-colors group-hover:text-[#006CB5] line-clamp-2">
                          {vehicle.name}
                        </h4>
                        {vehicle.badge && (
                          <span className="mt-2 rounded bg-emerald-100 px-2 py-0.5 text-[9px] font-bold tracking-wider text-emerald-700">
                            {vehicle.badge}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
