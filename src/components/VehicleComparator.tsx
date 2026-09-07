import { useState } from "react";
import travellerImg from "@/assets/traveller.png";
import urbaniaImg from "@/assets/urbania.png";
import traxImg from "@/assets/trax.png";
import monobusImg from "@/assets/monobus.png";

interface CompareVehicle {
  id: string;
  name: string;
  category: string;
  price: string;
  power: number; // HP
  torque: number; // Nm
  seating: string;
  maxSeats: number;
  engine: string;
  mileageRating: number; // out of 100
  comfortRating: number; // out of 100
  durabilityRating: number; // out of 100
  warranty: string;
  image: string;
}

const compareVehicles: CompareVehicle[] = [
  {
    id: "traveller",
    name: "Force Traveller N",
    category: "Commercial Benchmark",
    price: "₹17.20 Lakh*",
    power: 115,
    torque: 350,
    seating: "9 to 26 Seats",
    maxSeats: 26,
    engine: "FM 2.6 CR ED Diesel",
    mileageRating: 92,
    comfortRating: 84,
    durabilityRating: 98,
    warranty: "3 Years / 3,00,000 KM",
    image: travellerImg,
  },
  {
    id: "urbania",
    name: "Force Urbania DX",
    category: "Luxury Executive",
    price: "₹28.50 Lakh*",
    power: 115,
    torque: 350,
    seating: "10 to 17 Seats",
    maxSeats: 17,
    engine: "Mercedes-Derived FM 2.6L",
    mileageRating: 88,
    comfortRating: 98,
    durabilityRating: 95,
    warranty: "3 Years / 3,00,000 KM",
    image: urbaniaImg,
  },
  {
    id: "trax",
    name: "Force Trax Cruiser",
    category: "Rugged Multi-Utility",
    price: "₹13.80 Lakh*",
    power: 90,
    torque: 250,
    seating: "9 to 13 Seats",
    maxSeats: 13,
    engine: "Proven FM 2.6L Diesel",
    mileageRating: 95,
    comfortRating: 78,
    durabilityRating: 99,
    warranty: "3 Years / 3,00,000 KM",
    image: traxImg,
  },
  {
    id: "monobus",
    name: "Force Monobus 33",
    category: "High Capacity Bus",
    price: "₹24.50 Lakh*",
    power: 115,
    torque: 350,
    seating: "28 to 33 Seats",
    maxSeats: 33,
    engine: "High Torque CRDe Turbo",
    mileageRating: 85,
    comfortRating: 88,
    durabilityRating: 96,
    warranty: "3 Years / 3,00,000 KM",
    image: monobusImg,
  },
];

export function VehicleComparator() {
  const [v1Idx, setV1Idx] = useState(0);
  const [v2Idx, setV2Idx] = useState(1);

  const v1 = compareVehicles[v1Idx] || compareVehicles[0]!;
  const v2 = compareVehicles[v2Idx] || compareVehicles[1]!;

  return (
    <section id="compare" className="relative bg-[#F8FAFC] py-20 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-[0.25em] text-[#006CB5] uppercase">
            FLEET DECISION MATRIX
          </span>
          <h2 className="mt-2 font-display text-3xl font-black sm:text-5xl text-[#0F172A]">
            SIDE-BY-SIDE COMPARATOR
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600">
            Compare engine power, seating configurations, fuel economy index, and warranties between models.
          </p>
        </div>

        {/* Dual Vehicle Comparison Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Vehicle Card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#006CB5] uppercase tracking-wider">
                VEHICLE 1
              </span>
              <select
                value={v1Idx}
                onChange={(e) => setV1Idx(Number(e.target.value))}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {compareVehicles.map((v, i) => (
                  <option key={v.id} value={i} disabled={i === v2Idx}>
                    {v.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6 flex flex-col items-center">
              <img
                src={v1.image}
                alt={v1.name}
                className="h-44 w-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)]"
              />
              <h3 className="mt-4 font-display text-2xl font-black text-[#0F172A]">
                {v1.name}
              </h3>
              <span className="text-xs font-bold text-slate-500">{v1.category}</span>
              <span className="mt-1 font-display text-xl font-black text-[#006CB5]">
                {v1.price}
              </span>
            </div>

            {/* Spec Meters */}
            <div className="mt-6 space-y-4 border-t border-slate-100 pt-4">
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>Engine Torque:</span>
                  <span>{v1.torque} Nm</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#006CB5] transition-all duration-500"
                    style={{ width: `${(v1.torque / 350) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>Seating Capacity:</span>
                  <span>{v1.seating}</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-blue-600 transition-all duration-500"
                    style={{ width: `${(v1.maxSeats / 33) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>Ride Comfort Score:</span>
                  <span>{v1.comfortRating}%</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                    style={{ width: `${v1.comfortRating}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>Durability & Longevity:</span>
                  <span>{v1.durabilityRating}%</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-amber-500 transition-all duration-500"
                    style={{ width: `${v1.durabilityRating}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Vehicle Card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#006CB5] uppercase tracking-wider">
                VEHICLE 2
              </span>
              <select
                value={v2Idx}
                onChange={(e) => setV2Idx(Number(e.target.value))}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {compareVehicles.map((v, i) => (
                  <option key={v.id} value={i} disabled={i === v1Idx}>
                    {v.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6 flex flex-col items-center">
              <img
                src={v2.image}
                alt={v2.name}
                className="h-44 w-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)]"
              />
              <h3 className="mt-4 font-display text-2xl font-black text-[#0F172A]">
                {v2.name}
              </h3>
              <span className="text-xs font-bold text-slate-500">{v2.category}</span>
              <span className="mt-1 font-display text-xl font-black text-[#006CB5]">
                {v2.price}
              </span>
            </div>

            {/* Spec Meters */}
            <div className="mt-6 space-y-4 border-t border-slate-100 pt-4">
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>Engine Torque:</span>
                  <span>{v2.torque} Nm</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#006CB5] transition-all duration-500"
                    style={{ width: `${(v2.torque / 350) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>Seating Capacity:</span>
                  <span>{v2.seating}</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-blue-600 transition-all duration-500"
                    style={{ width: `${(v2.maxSeats / 33) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>Ride Comfort Score:</span>
                  <span>{v2.comfortRating}%</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                    style={{ width: `${v2.comfortRating}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>Durability & Longevity:</span>
                  <span>{v2.durabilityRating}%</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-amber-500 transition-all duration-500"
                    style={{ width: `${v2.durabilityRating}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
