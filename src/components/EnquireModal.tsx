import { useState, useEffect } from "react";
import { submitLeadToGoogleSheet } from "@/lib/leadService";

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultVehicle?: string;
}

export function EnquireModal({
  isOpen,
  onClose,
  defaultVehicle = "Force Traveller N",
}: EnquireModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    model: defaultVehicle,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultVehicle) {
      setFormData((prev) => ({ ...prev, model: defaultVehicle }));
    }
  }, [defaultVehicle]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 1. Submit lead to Google Sheet in real-time
    await submitLeadToGoogleSheet({
      name: formData.name,
      phone: formData.phone,
      model: formData.model,
      message: formData.message || "Requesting instant on-road price quotation",
      source: "Quick Enquire Modal",
    });

    setLoading(false);
    setSubmitted(true);

    // 2. Open WhatsApp for instant dealership connect
    const waText = encodeURIComponent(
      `*NEW ENQUIRY - IAW FORCE*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Vehicle Model:* ${formData.model}\n` +
        `*Message:* ${formData.message || "Requesting quotation and test drive schedule."}`
    );
    window.open(`https://wa.me/918429540902?text=${waText}`, "_blank");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg rounded-3xl border border-slate-700 bg-[#0F172A] p-6 sm:p-8 text-white shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-400 hover:border-red-500 hover:text-white transition-colors"
        >
          ✕
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-3xl text-emerald-400">
              ✓
            </span>
            <h3 className="mt-4 font-display text-2xl font-black text-white">
              Enquiry Submitted!
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Thank you, <strong>{formData.name}</strong>. Your details have been logged in our system. Our Force Motors specialist will contact you shortly on <strong>{formData.phone}</strong>.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 rounded-full bg-[#DC2626] px-8 py-3 text-xs font-bold tracking-wider text-white hover:bg-red-600 shadow-lg shadow-red-600/30"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#EF4444] uppercase">
                IAW FORCE GORAKHPUR
              </span>
              <h3 className="mt-1 font-display text-2xl font-black text-white">
                ENQUIRE NOW
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Get an instant on-road price quotation, brochure & finance calculation.
              </p>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                Phone Number (WhatsApp) *
              </label>
              <input
                type="tel"
                required
                placeholder="Enter 10-digit mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                Select Vehicle Model
              </label>
              <select
                value={formData.model}
                onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-xs text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
              >
                <option value="Force Traveller N (Passenger/School/Ambulance)">Force Traveller N</option>
                <option value="Force Urbania DX (Luxury 10/13/17 Seater)">Force Urbania DX</option>
                <option value="Force Trax Cruiser & Toofan (9-13 Seater)">Force Trax Cruiser & Toofan</option>
                <option value="Force Monobus 33 (28-33 Seater)">Force Monobus 33</option>
                <option value="Force Gurkha 4x4 (3-Door / 5-Door)">Force Gurkha 4x4</option>
                <option value="Force Traveller Ambulance (BLS/ALS Type B/C/D)">Force Traveller Ambulance</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                Specific Requirement / Message (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="E.g. Seating requirement, loan tenure, delivery timeline"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#DC2626] text-xs font-bold tracking-wider text-white shadow-lg shadow-red-600/40 hover:bg-red-600 transition-all duration-300 disabled:opacity-50"
            >
              {loading ? (
                <span>SAVING TO GOOGLE SHEET...</span>
              ) : (
                <span>SUBMIT & GET INSTANT QUOTATION</span>
              )}
            </button>
            <p className="text-center text-[10px] text-slate-400">
              🔒 Your contact information is 100% confidential and logged directly with IAW Force.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
