import { useState } from "react";
import travellerImg from "@/assets/traveller.png";
import urbaniaImg from "@/assets/urbania.png";
import traxImg from "@/assets/trax.png";
import monobusImg from "@/assets/monobus.png";
import { submitLeadToGoogleSheet } from "@/lib/leadService";

export interface ConfigColor {
  id: string;
  name: string;
  hex: string;
  glow: string;
  filter: string;
}

const colors: ConfigColor[] = [
  {
    id: "red",
    name: "Force Crimson Red",
    hex: "#0B57D0",
    glow: "rgba(11, 87, 208,0.3)",
    filter: "hue-rotate(0deg) saturate(1.1)",
  },
  {
    id: "black",
    name: "Obsidian Metallic Black",
    hex: "#1E293B",
    glow: "rgba(30,41,59,0.4)",
    filter: "brightness(0.85) contrast(1.15) grayscale(0.5)",
  },
  {
    id: "white",
    name: "Arctic Pearl White",
    hex: "#F8FAFC",
    glow: "rgba(255,255,255,0.4)",
    filter: "brightness(1.1) contrast(1.05)",
  },
  {
    id: "silver",
    name: "Moondust Silver",
    hex: "#94A3B8",
    glow: "rgba(148,163,184,0.35)",
    filter: "grayscale(0.8) brightness(1.02)",
  },
  {
    id: "blue",
    name: "Royal Azure Blue",
    hex: "#2563EB",
    glow: "rgba(37,99,235,0.35)",
    filter: "hue-rotate(180deg) saturate(1.2)",
  },
];

const configuratorModels = [
  {
    id: "urbania",
    name: "Force Urbania DX",
    badge: "PREMIUM LUXURY",
    basePrice: 2850000,
    image: urbaniaImg,
    seatOptions: [
      { label: "10 Seater (Luxury Captain Seats)", priceDelta: 0 },
      { label: "13 Seater (Executive Tourer)", priceDelta: 75000 },
      { label: "17 Seater (Fleet Deluxe)", priceDelta: 140000 },
    ],
    features: ["Mercedes-derived 115 HP", "Dual Airbags & ESP", "Individual USB & AC", "Independent Suspension"],
  },
  {
    id: "traveller",
    name: "Force Traveller N",
    badge: "COMMERCIAL BENCHMARK",
    basePrice: 1720000,
    image: travellerImg,
    seatOptions: [
      { label: "9 Seater (Executive / Family)", priceDelta: 0 },
      { label: "14 Seater (Standard Route)", priceDelta: 60000 },
      { label: "20 Seater (School / Staff)", priceDelta: 120000 },
      { label: "26 Seater (High Capacity)", priceDelta: 210000 },
    ],
    features: ["FM 2.6 CR ED Diesel", "Monocoque High Roof", "Dual AC Options", "High Ground Clearance"],
  },
  {
    id: "trax",
    name: "Force Trax Cruiser & Toofan",
    badge: "RUGGED MULTI-UTILITY",
    basePrice: 1380000,
    image: traxImg,
    seatOptions: [
      { label: "9 Seater (High Payload)", priceDelta: 0 },
      { label: "13 Seater (Rural Transit)", priceDelta: 45000 },
    ],
    features: ["Heavy Duty Chassis", "High Ground Clearance", "Proven 2.6L Engine", "Lowest Maintenance"],
  },
  {
    id: "monobus",
    name: "Force Monobus 33",
    badge: "HIGH CAPACITY TRANSIT",
    basePrice: 2450000,
    image: monobusImg,
    seatOptions: [
      { label: "28 Seater (Air Suspension)", priceDelta: 0 },
      { label: "33 Seater (School / College)", priceDelta: 80000 },
    ],
    features: ["Rigid Monocoque Body", "Low Floor Step", "Panoramic Windows", "School Bus Code Compliant"],
  },
];

export function VehicleConfigurator() {
  const [selectedModelIdx, setSelectedModelIdx] = useState(0);
  const [selectedColor, setSelectedColor] = useState(colors[0] || { id: "red", name: "Force Crimson Red", hex: "#0B57D0", glow: "rgba(11, 87, 208,0.3)", filter: "hue-rotate(0deg)" });
  const [selectedSeatIdx, setSelectedSeatIdx] = useState(0);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTenureYears, setLoanTenureYears] = useState(5);

  const model = configuratorModels[selectedModelIdx] || configuratorModels[0]!;
  const seatOption = model.seatOptions[selectedSeatIdx] || model.seatOptions[0]!;

  const totalPrice = model.basePrice + seatOption.priceDelta;
  const downPayment = Math.round((totalPrice * downPaymentPercent) / 100);
  const loanAmount = totalPrice - downPayment;
  const monthlyRate = 0.085 / 12; // 8.5% p.a.
  const totalMonths = loanTenureYears * 12;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const handleSendCustomConfig = () => {
    // 1. Log configuration directly in Google Sheet
    submitLeadToGoogleSheet({
      name: "3D Studio Customizer User",
      phone: "Via WhatsApp Enquiry",
      model: `${model.name} (${seatOption.label})`,
      message: `Custom Build: Paint: ${selectedColor.name} | Est Price: ₹${(totalPrice / 100000).toFixed(2)} Lakh | EMI: ₹${emi.toLocaleString("en-IN")}/mo`,
      source: "3D Studio Configurator",
    });

    // 2. Open WhatsApp with pre-filled spec sheet
    const whatsappMessage = encodeURIComponent(
      `*CUSTOM 3D BUILD REQUEST - IAW FORCE*\n\n` +
        `*Vehicle:* ${model.name}\n` +
        `*Paint Finish:* ${selectedColor.name}\n` +
        `*Seating:* ${seatOption.label}\n` +
        `*Estimated Ex-Showroom:* ₹${(totalPrice / 100000).toFixed(2)} Lakh\n` +
        `*Down Payment:* ₹${downPayment.toLocaleString("en-IN")} (${downPaymentPercent}%)\n` +
        `*Estimated EMI:* ₹${emi.toLocaleString("en-IN")}/mo (${loanTenureYears} Years)\n\n` +
        `Please send official on-road quotation and delivery schedule for Gorakhpur.`
    );
    window.open(`https://wa.me/918429540902?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section id="configurator" className="relative bg-[#070B14] py-20 border-b border-slate-800 text-white overflow-hidden">
      {/* Dynamic ambient color glow from chosen paint */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25 transition-all duration-700 blur-3xl"
        style={{
          background: `radial-gradient(60% 50% at 50% 40%, ${selectedColor.glow}, transparent 70%)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-[0.25em] text-[#3B82F6] uppercase">
            FLAGSHIP 3D STUDIO
          </span>
          <h2 className="mt-2 font-display text-3xl font-black sm:text-5xl text-white">
            CUSTOMIZE YOUR FORCE
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-300">
            Select your model, paint finish, and seating layout for real-time on-road pricing and custom EMI.
          </p>
        </div>

        {/* Model Selector Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {configuratorModels.map((m, idx) => (
            <button
              key={m.id}
              type="button"
              onClick={() => {
                setSelectedModelIdx(idx);
                setSelectedSeatIdx(0);
              }}
              className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 ${
                selectedModelIdx === idx
                  ? "bg-[#0B57D0] text-white shadow-lg shadow-blue-600/40 scale-105"
                  : "border border-slate-800 bg-slate-900/80 text-slate-300 hover:border-slate-700 hover:bg-slate-800"
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>

        {/* Studio Stage Layout (Vehicle Visual + Customizer Panel) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Vehicle Visual Stage */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[340px] sm:min-h-[420px] rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/40 to-[#0B1120] p-6">
            {/* Model Badge */}
            <div className="absolute top-5 left-5 flex items-center gap-2">
              <span className="rounded-full bg-blue-500/20 border border-blue-500/40 px-3 py-1 text-[10px] font-bold text-blue-500">
                {model.badge}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                PAINT: {selectedColor.name}
              </span>
            </div>

            {/* Vehicle Visual with Color Filter & Scale */}
            <div className="relative w-full max-w-[540px] transition-all duration-500 flex items-center justify-center">
              {/* Ground Shadow & Glow */}
              <div
                className="absolute -bottom-6 h-12 w-4/5 rounded-full blur-xl transition-all duration-500"
                style={{ background: selectedColor.glow }}
              />
              <img
                src={model.image}
                alt={model.name}
                className="relative z-10 max-h-[300px] sm:max-h-[360px] w-full object-contain transition-all duration-500 drop-shadow-[0_25px_40px_rgba(0,0,0,0.8)]"
                style={{
                  filter: selectedColor.filter,
                }}
              />
            </div>

            {/* Paint Color Swatches */}
            <div className="mt-8 flex items-center gap-3 bg-slate-950/80 border border-slate-800 rounded-full px-5 py-2.5 backdrop-blur-md">
              <span className="text-[11px] font-bold text-slate-400 uppercase mr-1">
                Colors:
              </span>
              {colors.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedColor(c)}
                  title={c.name}
                  className={`h-7 w-7 rounded-full border-2 transition-all duration-300 ${
                    selectedColor.id === c.id
                      ? "border-white scale-125 shadow-md shadow-blue-500/50"
                      : "border-slate-700 hover:scale-110 opacity-75"
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>

          {/* Right: Customization Controls & Instant Quotation */}
          <div className="lg:col-span-5 space-y-6">
            {/* Seating Layout Selector */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 backdrop-blur-xl">
              <h3 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                1. SELECT SEATING CONFIGURATION
              </h3>
              <div className="mt-3 space-y-2">
                {model.seatOptions.map((opt, idx) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => setSelectedSeatIdx(idx)}
                    className={`flex w-full items-center justify-between rounded-xl border p-3 text-left transition-all ${
                      selectedSeatIdx === idx
                        ? "border-[#3B82F6] bg-blue-950/30 text-white"
                        : "border-slate-800 bg-slate-950/50 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <span className="text-xs font-bold">{opt.label}</span>
                    <span className="text-xs font-mono text-[#3B82F6]">
                      {opt.priceDelta > 0 ? `+₹${opt.priceDelta.toLocaleString("en-IN")}` : "STANDARD"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Finance & Price Summary Card */}
            <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-slate-900 to-[#070B14] p-6 shadow-xl">
              <div className="flex items-baseline justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                    ESTIMATED EX-SHOWROOM
                  </span>
                  <div className="mt-1 font-display text-3xl font-black text-white">
                    ₹{(totalPrice / 100000).toFixed(2)}{" "}
                    <span className="text-sm font-bold text-[#3B82F6]">Lakh*</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
                    EST. MONTHLY EMI
                  </span>
                  <div className="mt-1 font-display text-2xl font-black text-emerald-400">
                    ₹{emi.toLocaleString("en-IN")}/mo
                  </div>
                </div>
              </div>

              {/* Slider for Down Payment */}
              <div className="mt-4">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Down Payment ({downPaymentPercent}%):</span>
                  <span className="font-bold text-white">₹{downPayment.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="mt-1.5 w-full accent-[#3B82F6] cursor-pointer"
                />
              </div>

              {/* Tenure Tabs */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-300">
                <span>Loan Tenure:</span>
                <div className="flex gap-1.5">
                  {[3, 4, 5, 7].map((yr) => (
                    <button
                      key={yr}
                      type="button"
                      onClick={() => setLoanTenureYears(yr)}
                      className={`rounded px-2.5 py-1 text-[11px] font-bold transition-all ${
                        loanTenureYears === yr
                          ? "bg-[#0B57D0] text-white"
                          : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                      }`}
                    >
                      {yr}Y
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={handleSendCustomConfig}
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#0B57D0] text-xs font-bold tracking-wider text-white shadow-lg shadow-blue-600/40 transition-all hover:bg-[#0B57D0] hover:shadow-blue-600/60 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>💬 SEND CUSTOM CONFIG ON WHATSAPP</span>
                </button>
                <p className="text-center text-[10px] text-slate-400">
                  *Prices indicative Gorakhpur ex-showroom. Taxes & insurance additional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
