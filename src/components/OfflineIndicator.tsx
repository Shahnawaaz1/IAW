import { useState, useEffect } from "react";

export function OfflineIndicator() {
  const [isOffline, setIsOffline] = useState(false);
  const [showOnlineToast, setShowOnlineToast] = useState(false);

  useEffect(() => {
    // 1. Service Worker Registration
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
          console.log("IAW Force PWA Service Worker Registered:", reg.scope);
        })
        .catch((err) => {
          console.warn("Service Worker Registration failed:", err);
        });
    }

    // 2. Network Status Monitoring
    const handleOnline = () => {
      setIsOffline(false);
      setShowOnlineToast(true);
      setTimeout(() => setShowOnlineToast(false), 4000);
    };

    const handleOffline = () => {
      setIsOffline(true);
    };

    setIsOffline(!navigator.onLine);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
      {/* Persistent Offline Mode Banner when disconnected */}
      {isOffline && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2 rounded-full border border-amber-400/80 bg-slate-900/95 px-5 py-2.5 text-xs font-bold text-white shadow-2xl backdrop-blur-md transition-all animate-bounce"
        >
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            <span className="text-amber-400">⚡ OFFLINE MODE ACTIVE</span>
            <span className="hidden text-slate-300 sm:inline">
              — All Vehicle Specs & EMI Calculator are fully accessible offline.
            </span>
          </div>
        </div>
      )}

      {/* Temporary Toast when connection is restored */}
      {showOnlineToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2 rounded-full border border-emerald-400/80 bg-slate-900/95 px-5 py-2.5 text-xs font-bold text-white shadow-2xl backdrop-blur-md transition-all"
        >
          <div className="flex items-center gap-2 text-emerald-400">
            <span>✓</span>
            <span>BACK ONLINE — Connected to IAW Force Live Network</span>
          </div>
        </div>
      )}
    </>
  );
}
