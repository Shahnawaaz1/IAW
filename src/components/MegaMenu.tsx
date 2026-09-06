import { useState } from "react";
import travellerImg from "@/assets/traveller.png";
import urbaniaImg from "@/assets/urbania.png";
import monobusImg from "@/assets/monobus.png";
import traxImg from "@/assets/trax.png";

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
            { name: "Traveller N 3050WB", image: travellerImg, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N 3350WB", image: travellerImg, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N 3700WB", image: travellerImg, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N 4020WB", image: travellerImg, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N Wider Body 3350WB", image: travellerImg, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N Wider Body 4020WB", image: travellerImg, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N 4020WB", badge: "CNG", image: travellerImg, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N Wider Body 4020WB", badge: "CNG", image: travellerImg, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
          ],
        },
        {
          title: "School Buses",
          vehicles: [
            { name: "Traveller N School Bus 3050WB", image: travellerImg, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N School Bus 3350WB", image: travellerImg, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N School Bus 3700WB", image: travellerImg, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N School Bus 4020WB", image: travellerImg, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N Wider Body School Bus 4020WB", image: travellerImg, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
            { name: "Traveller N School Bus 3700WB", badge: "CNG", image: travellerImg, url: "https://www.forcemotors.com/vehicles-category/traveller/" },
          ],
        },
      ],
    },
    {
      id: "urbania",
      name: "Urbania DX",
      groups: [
        {
          title: "Executive Vans",
          vehicles: [
            { name: "Urbania DX 3200WB", image: urbaniaImg, url: "https://forceurbania.co.in/" },
            { name: "Urbania DX 3615WB", image: urbaniaImg, url: "https://forceurbania.co.in/" },
            { name: "Urbania DX 4400WB", image: urbaniaImg, url: "https://forceurbania.co.in/" },
          ],
        },
      ],
    },
    {
      id: "monobus",
      name: "Monobus",
      groups: [
        {
          title: "Staff & School Transit",
          vehicles: [
            { name: "Monobus 33 Seater", image: monobusImg, url: "https://www.forcemotors.com/vehicles-category/monobus/" },
            { name: "Monobus 28 Seater", image: monobusImg, url: "https://www.forcemotors.com/vehicles-category/monobus/" },
          ],
        },
      ],
    },
    {
      id: "trax",
      name: "Trax",
      groups: [
        {
          title: "Multi Utility",
          vehicles: [
            { name: "Trax Cruiser", image: traxImg, url: "https://www.forcemotors.com/vehicles-category/trax/" },
            { name: "Trax Toofan", image: traxImg, url: "https://www.forcemotors.com/vehicles-category/trax/" },
          ],
        },
      ],
    },
    {
      id: "special",
      name: "Special Applications",
      groups: [
        {
          title: "Ambulance & Delivery",
          vehicles: [
            { name: "Traveller Ambulance Type B", image: travellerImg, url: "https://www.forcemotors.com/vehicles-category/special-applications/" },
            { name: "Traveller Delivery Van", image: travellerImg, url: "https://www.forcemotors.com/vehicles-category/special-applications/" },
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
          title: "4x4 Off-Roaders",
          vehicles: [
            { name: "Gurkha 3-Door", image: traxImg, url: "https://www.forcemotors.com/vehicles-category/gurkha/" },
            { name: "Gurkha 5-Door", image: traxImg, url: "https://www.forcemotors.com/vehicles-category/gurkha/" },
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
          title: "Commercial EV",
          vehicles: [
            { name: "Upcoming Traveller EV", image: travellerImg, url: "https://www.forcemotors.com/vehicles/e-traveller-smart-citibus-ev/" },
          ],
        },
      ],
    },
  ],
};

export function MegaMenu({ isOpen, onMouseEnter, onMouseLeave }: { isOpen: boolean; onMouseEnter: () => void; onMouseLeave: () => void }) {
  const [activeCategory, setActiveCategory] = useState<string>("traveller-n");

  const getActiveCategoryData = () => {
    for (const mainGroup in megaMenuData) {
      for (const cat of megaMenuData[mainGroup]) {
        if (cat.id === activeCategory) {
          return cat;
        }
      }
    }
    return megaMenuData["Commercial Vehicles"][0];
  };

  const activeData = getActiveCategoryData();

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute left-0 right-0 top-full bg-slate-50 border-t border-slate-200 shadow-2xl transition-all duration-300 origin-top ${
        isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible"
      }`}
    >
      <div className="mx-auto flex max-w-7xl">
        {/* Left Sidebar */}
        <div className="w-72 shrink-0 border-r border-slate-200 bg-white py-6">
          {Object.entries(megaMenuData).map(([sectionTitle, categories]) => (
            <div key={sectionTitle} className="mb-6 last:mb-0 px-6">
              <h4 className="mb-3 text-sm font-bold text-slate-900">{sectionTitle}</h4>
              <ul className="space-y-1">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onMouseEnter={() => setActiveCategory(cat.id)}
                      className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition-colors ${
                        activeCategory === cat.id
                          ? "bg-slate-50 font-bold text-[#0B57D0]"
                          : "text-slate-600 hover:bg-slate-50 hover:text-[#0B57D0]"
                      }`}
                    >
                      {cat.name}
                      <svg
                        viewBox="0 0 24 24"
                        className={`h-4 w-4 transition-transform ${activeCategory === cat.id ? "translate-x-1 text-[#0B57D0]" : "text-transparent"}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
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
        <div className="flex-1 bg-slate-50/50 p-8">
          <div className="max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
            {activeData.groups.map((group, groupIdx) => (
              <div key={group.title} className={groupIdx > 0 ? "mt-10" : ""}>
                <h3 className="mb-6 font-display text-lg font-bold text-[#0B57D0] border-b border-blue-200/50 pb-2">
                  {group.title}
                </h3>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                  {group.vehicles.map((vehicle, idx) => (
                    <a
                      key={idx}
                      href={vehicle.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/5 border border-slate-100 hover:border-blue-200"
                    >
                      <div className="relative mb-4 flex h-24 w-full items-center justify-center overflow-hidden">
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h4 className="text-center text-xs font-bold text-slate-800 transition-colors group-hover:text-[#0B57D0]">
                        {vehicle.name}
                      </h4>
                      {vehicle.badge && (
                        <span className="mt-2 rounded bg-emerald-100 px-2 py-0.5 text-[9px] font-bold tracking-wider text-emerald-700">
                          {vehicle.badge}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
