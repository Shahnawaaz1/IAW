import { useState } from "react";
import { VehicleData } from "@/data/vehicles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicle: VehicleData;
}

export function EnquireModal({ isOpen, onClose, vehicle }: ModalProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Mock network request
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <h3 className="font-display font-bold text-xl text-slate-900">Enquire Now</h3>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {status === "success" ? (
          <div className="p-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h4 className="font-display text-2xl font-bold text-slate-900 mb-2">Enquiry Sent!</h4>
            <p className="text-slate-600 mb-8">Thank you for your interest in the {vehicle.name}. Our executive will contact you shortly.</p>
            <button onClick={onClose} className="rounded-full bg-[#006CB5] text-white px-8 py-3 font-bold tracking-wider text-sm hover:bg-blue-700 transition-colors">DONE</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">SELECTED VEHICLE</label>
                <input type="text" readOnly value={vehicle.name} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 font-medium focus:outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">FULL NAME *</label>
                  <input type="text" required className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-[#006CB5] focus:ring-1 focus:ring-[#006CB5]" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">MOBILE NUMBER *</label>
                  <input type="tel" required pattern="[0-9]{10}" className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-[#006CB5] focus:ring-1 focus:ring-[#006CB5]" placeholder="10-digit number" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">EMAIL ADDRESS</label>
                <input type="email" className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-[#006CB5] focus:ring-1 focus:ring-[#006CB5]" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">CITY / LOCATION *</label>
                <input type="text" required className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-[#006CB5] focus:ring-1 focus:ring-[#006CB5]" placeholder="Gorakhpur" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">MESSAGE (OPTIONAL)</label>
                <textarea rows={3} className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-[#006CB5] focus:ring-1 focus:ring-[#006CB5]" placeholder="Any specific requirements?"></textarea>
              </div>
            </div>
            
            <div className="mt-8 flex justify-end gap-3">
              <button type="button" onClick={onClose} className="px-6 py-3 font-bold text-slate-600 hover:bg-slate-100 rounded-full transition-colors text-sm">CANCEL</button>
              <button type="submit" disabled={status === "loading"} className="flex items-center justify-center bg-[#006CB5] text-white px-8 py-3 rounded-full font-bold tracking-wider text-sm shadow-md hover:bg-blue-700 transition-colors min-w-[140px] disabled:opacity-70">
                {status === "loading" ? "SENDING..." : "SUBMIT"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export function TestDriveModal({ isOpen, onClose, vehicle }: ModalProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Mock network request
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <h3 className="font-display font-bold text-xl text-slate-900">Book a Test Drive</h3>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {status === "success" ? (
          <div className="p-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h4 className="font-display text-2xl font-bold text-slate-900 mb-2">Booking Confirmed!</h4>
            <p className="text-slate-600 mb-8">Your test drive request for the {vehicle.name} has been received. We will call you to confirm the timing.</p>
            <button onClick={onClose} className="rounded-full bg-[#006CB5] text-white px-8 py-3 font-bold tracking-wider text-sm hover:bg-blue-700 transition-colors">DONE</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">VEHICLE TO TEST DRIVE</label>
                <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-lg p-3">
                  <div className="w-16 h-10 bg-white rounded flex items-center justify-center border border-slate-200">
                    <img src={vehicle.image} alt={vehicle.name} className="h-full object-contain" />
                  </div>
                  <span className="text-slate-800 font-bold">{vehicle.name}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">FULL NAME *</label>
                  <input type="text" required className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-[#006CB5] focus:ring-1 focus:ring-[#006CB5]" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">MOBILE NUMBER *</label>
                  <input type="tel" required pattern="[0-9]{10}" className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-[#006CB5] focus:ring-1 focus:ring-[#006CB5]" placeholder="10-digit number" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">PREFERRED DATE *</label>
                  <input type="date" required className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-[#006CB5] focus:ring-1 focus:ring-[#006CB5]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">PREFERRED TIME *</label>
                  <input type="time" required className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-[#006CB5] focus:ring-1 focus:ring-[#006CB5]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">CITY / LOCATION *</label>
                <input type="text" required className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-[#006CB5] focus:ring-1 focus:ring-[#006CB5]" placeholder="Where would you like the test drive?" />
              </div>
            </div>
            
            <div className="mt-8 flex justify-end gap-3">
              <button type="button" onClick={onClose} className="px-6 py-3 font-bold text-slate-600 hover:bg-slate-100 rounded-full transition-colors text-sm">CANCEL</button>
              <button type="submit" disabled={status === "loading"} className="flex items-center justify-center bg-[#006CB5] text-white px-8 py-3 rounded-full font-bold tracking-wider text-sm shadow-md hover:bg-blue-700 transition-colors min-w-[140px] disabled:opacity-70">
                {status === "loading" ? "PROCESSING..." : "CONFIRM BOOKING"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
