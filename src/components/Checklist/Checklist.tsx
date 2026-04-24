"use client";

import { useState } from "react";
import { CheckSquare, Square, Download, Printer, FileCheck } from "lucide-react";
import { jsPDF } from "jspdf";
import { cn } from "@/lib/utils";

const CHECKLIST_ITEMS = [
  { id: 1, text: "Check your name in the Electoral Roll (voters.eci.gov.in)", category: "Preparation" },
  { id: 2, text: "Keep your Voter ID (EPIC) card handy", category: "Documents" },
  { id: 3, text: "Locate your Polling Booth details", category: "Preparation" },
  { id: 4, text: "Carry a valid ID proof (Aadhaar/Driving License) if Voter ID is missing", category: "Documents" },
  { id: 5, text: "Check the list of candidates in your constituency", category: "Awareness" },
  { id: 6, text: "Follow the 'Dry Day' and No-Campaigning rules (48 hours before)", category: "Rules" },
  { id: 7, text: "Mark your finger with indelible ink after voting", category: "Polling Day" },
  { id: 8, text: "Collect your 'Voter Slip' from the booth representative", category: "Polling Day" }
];

export default function Checklist() {
  const [checked, setChecked] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setChecked(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFillColor(255, 153, 51); // Saffron
    doc.rect(0, 0, 210, 40, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.text("VoterVani AI - My Election Checklist", 20, 25);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text(`Generated on: ${new Date().toLocaleDateString('en-IN')}`, 20, 50);
    
    let y = 65;
    CHECKLIST_ITEMS.forEach((item, index) => {
      const isChecked = checked.includes(item.id);
      doc.setFont("helvetica", isChecked ? "bold" : "normal");
      doc.text(`${isChecked ? "[X]" : "[ ]"} ${item.text}`, 20, y);
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      doc.text(`Category: ${item.category}`, 30, y + 5);
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      y += 15;
    });

    doc.setFillColor(19, 136, 8); // Green
    doc.rect(0, 280, 210, 17, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text("Every Vote Counts! | Verified at eci.gov.in", 70, 290);

    doc.save("VoterVani_Checklist.pdf");
  };

  return (
    <section className="glass p-8 rounded-3xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FileCheck className="text-ashoka w-8 h-8" />
            My Election Checklist
          </h2>
          <p className="text-muted-foreground mt-1">Check off items as you prepare for polling day.</p>
        </div>
        <button 
          onClick={exportPDF}
          className="flex items-center justify-center gap-2 bg-ashoka text-white px-6 py-2.5 rounded-xl font-bold hover:shadow-lg transition-all text-sm"
        >
          <Download className="w-4 h-4" /> Export as PDF
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        {CHECKLIST_ITEMS.map((item) => (
          <div 
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={cn(
              "flex items-start gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all",
              checked.includes(item.id) 
                ? "border-green-india/30 bg-green-india/5" 
                : "border-transparent bg-white dark:bg-slate-900 hover:border-slate-100"
            )}
          >
            <div className="mt-1">
              {checked.includes(item.id) 
                ? <CheckSquare className="w-6 h-6 text-green-india" /> 
                : <Square className="w-6 h-6 text-muted-foreground" />
              }
            </div>
            <div>
              <p className={cn("font-medium", checked.includes(item.id) && "line-through text-muted-foreground")}>
                {item.text}
              </p>
              <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
