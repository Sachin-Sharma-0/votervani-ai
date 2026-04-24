"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "How do I check if my name is on the voter list?",
    answer: "You can check your name on the Electoral Roll by visiting the official ECI Voter Search portal (electoralsearch.eci.gov.in). You will need your EPIC number or your personal details like name, age, and state."
  },
  {
    question: "What is the EPIC number?",
    answer: "EPIC stands for Electors Photo Identity Card. It is the unique 10-digit alphanumeric number printed on your Voter ID card."
  },
  {
    question: "Can I vote if I don't have my physical Voter ID card?",
    answer: "Yes, you can still vote if your name is in the electoral roll. You will need to carry one of the 12 alternative photo identity documents approved by the ECI, such as Aadhaar Card, PAN Card, Driving License, or Passport."
  },
  {
    question: "How can I apply for a new Voter ID?",
    answer: "You can apply online through the Voters' Service Portal (voters.eci.gov.in) by filling Form 6. You will need a passport-sized photograph, age proof, and address proof."
  },
  {
    question: "What is a VVPAT machine?",
    answer: "VVPAT stands for Voter Verifiable Paper Audit Trail. It is an independent system attached to the EVM that allows you to verify that your vote was cast correctly by showing a paper slip for 7 seconds."
  },
  {
    question: "Is voting mandatory in India?",
    answer: "Voting is a right and a moral responsibility, but it is not legally mandatory in India. However, participating in elections is crucial for a healthy democracy."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-3xl space-y-12 animate-slide-up">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-ashoka/10 text-ashoka px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
          <HelpCircle className="w-4 h-4" /> Got Questions?
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground">Everything you need to know about the voting process in India.</p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, index) => (
          <div 
            key={index} 
            className={cn(
              "glass rounded-2xl overflow-hidden border-2 transition-all",
              openIndex === index ? "border-saffron/30" : "border-transparent"
            )}
          >
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
            >
              <span className="font-bold text-lg">{faq.question}</span>
              {openIndex === index ? <Minus className="text-saffron shrink-0" /> : <Plus className="text-muted-foreground shrink-0" />}
            </button>
            {openIndex === index && (
              <div className="p-6 pt-0 text-muted-foreground leading-relaxed animate-slide-up">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-green-india/5 p-8 rounded-3xl border border-green-india/10 text-center space-y-4">
        <h3 className="text-xl font-bold">Still have questions?</h3>
        <p className="text-muted-foreground">The VoterVani AI chatbot is ready to help you with personalized queries.</p>
        <button 
          onClick={() => window.dispatchEvent(new CustomEvent("openVoterVaniChat"))}
          className="bg-green-india text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
        >
          Ask Chatbot
        </button>
      </div>
    </div>
  );
}
