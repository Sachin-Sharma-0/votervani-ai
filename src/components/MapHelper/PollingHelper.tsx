"use client";

import { useState } from "react";
import { MapPin, Search, Info, ShieldCheck, Map as MapIcon } from "lucide-react";

export default function PollingHelper() {
  const [pincode, setPincode] = useState("");
  const [showMap, setShowMap] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.length === 6) {
      setShowMap(true);
    }
  };

  return (
    <section className="glass p-8 rounded-3xl space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <MapIcon className="text-green-india w-8 h-8" />
            Polling Day Helper
          </h2>
          <p className="text-muted-foreground mt-2">
            Enter your pincode to find approximate polling booth locations in your area and learn about polling day rules.
          </p>
        </div>
        
        <form onSubmit={handleSearch} className="flex gap-2 w-full md:w-auto">
          <input 
            type="text" 
            maxLength={6}
            value={pincode}
            onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))}
            placeholder="Enter 6-digit Pincode"
            className="flex-1 md:w-48 bg-background border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-india"
          />
          <button 
            type="submit"
            className="bg-green-india text-white p-3 rounded-xl hover:shadow-lg transition-all"
          >
            <Search className="w-6 h-6" />
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {showMap ? (
            <>
              <div className="w-full h-[400px] rounded-3xl overflow-hidden border-4 border-white shadow-xl relative">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://www.google.com/maps?q=${encodeURIComponent(pincode + ', India')}&output=embed`}
                ></iframe>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border text-xs font-bold text-ashoka shadow-lg">
                  Showing results for {pincode}
                </div>
              </div>
              <p className="mt-3 text-[10px] text-muted-foreground italic flex items-start gap-1">
                <Info className="w-3 h-3 shrink-0 mt-0.5" />
                Note: Polling booth locations are decided by the Election Commission of India and are subject to change. Please verify the exact location on your official Voter Information Slip or at voters.eci.gov.in.
              </p>
            </>
          ) : (
            <div className="w-full h-[400px] rounded-3xl bg-slate-100 dark:bg-slate-900 border-2 border-dashed flex flex-col items-center justify-center text-muted-foreground p-8 text-center">
              <MapPin className="w-16 h-16 mb-4 opacity-20" />
              <p className="text-lg font-medium">Enter your pincode to see the map</p>
              <p className="text-sm">We'll show you approximate polling booth locations in your vicinity.</p>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-saffron/5 p-6 rounded-2xl border border-saffron/10">
            <h3 className="font-bold flex items-center gap-2 mb-3">
              <ShieldCheck className="text-saffron w-5 h-5" />
              What to carry?
            </h3>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-saffron font-bold">•</span>
                Voter ID Card (EPIC)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-saffron font-bold">•</span>
                Voter Information Slip
              </li>
              <li className="flex items-start gap-2">
                <span className="text-saffron font-bold">•</span>
                Any valid photo ID (Aadhaar, PAN, etc.)
              </li>
            </ul>
          </div>

          <div className="bg-ashoka/5 p-6 rounded-2xl border border-ashoka/10">
            <h3 className="font-bold flex items-center gap-2 mb-3">
              <Info className="text-ashoka w-5 h-5" />
              Important Rules
            </h3>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-ashoka font-bold">•</span>
                No mobile phones inside the booth.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ashoka font-bold">•</span>
                Voting hours: Usually 7 AM to 6 PM.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ashoka font-bold">•</span>
                No campaigning within 100m of booth.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
