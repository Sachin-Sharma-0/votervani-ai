"use client";

import { UserContext } from "@/lib/constants";
import { Info, UserPlus, CheckCircle, ExternalLink, Calendar, MapPin, FileText } from "lucide-react";
import Link from "next/link";
import Timeline from "../Timeline/Timeline";
import Checklist from "../Checklist/Checklist";

interface VoterJourneyProps {
  userContext: UserContext;
}

export default function VoterJourney({ userContext }: VoterJourneyProps) {
  const { age, voterStatus } = userContext;

  // Branch 1: Under 18
  if (age < 18) {
    return (
      <div className="space-y-12 py-8 animate-slide-up">
        <section className="glass p-8 rounded-3xl border-saffron/20 border-l-8 border-l-saffron">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <span className="bg-saffron/10 text-saffron px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Future Voter</span>
              <h1 className="text-4xl font-extrabold">Not eligible to vote yet, but you can prepare!</h1>
              <p className="text-lg text-muted-foreground">
                In India, the legal voting age is 18. Since you are {age}, you have a head start to learn about the process so you're ready when the time comes.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border flex-1 min-w-[200px]">
                  <Calendar className="text-saffron w-8 h-8 mb-2" />
                  <h3 className="font-bold">Timeline</h3>
                  <p className="text-sm text-muted-foreground">You can register as a voter in advance when you are 17+ years old.</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border flex-1 min-w-[200px]">
                  <Info className="text-ashoka w-8 h-8 mb-2" />
                  <h3 className="font-bold">Education</h3>
                  <p className="text-sm text-muted-foreground">Learn how democracy works and why every vote matters.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48 bg-saffron/10 rounded-full flex items-center justify-center animate-float">
                <UserPlus className="w-24 h-24 text-saffron" />
              </div>
            </div>
          </div>
        </section>
        
        <div id="timeline" className="scroll-mt-24">
          <Timeline />
        </div>
      </div>
    );
  }

  // Branch 2: 18+ but not registered
  if (voterStatus === 'not_registered' || voterStatus === 'unsure') {
    return (
      <div className="space-y-12 py-8 animate-slide-up">
        <section className="glass p-8 rounded-3xl border-ashoka/20 border-l-8 border-l-ashoka">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <span className="bg-ashoka/10 text-ashoka px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Action Required</span>
              <h1 className="text-4xl font-extrabold">Let's get you registered to vote!</h1>
              <p className="text-lg text-muted-foreground">
                You are eligible to vote, but you need to be on the electoral roll. Follow these simple steps to register.
              </p>
              
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border">
                  <div className="bg-ashoka text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                  <div>
                    <h3 className="font-bold">Form 6</h3>
                    <p className="text-sm text-muted-foreground">New voters need to fill Form 6 on the NVSP portal.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border">
                  <div className="bg-ashoka text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                  <div>
                    <h3 className="font-bold">Documents Needed</h3>
                    <p className="text-sm text-muted-foreground">Proof of age (Aadhaar, Birth Cert) and Proof of Residence.</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Link 
                  href="https://voters.eci.gov.in/" 
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-ashoka text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  Apply on Official Portal <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div id="timeline" className="scroll-mt-24">
          <Timeline />
        </div>
      </div>
    );
  }

  // Branch 3: Registered voter
  return (
    <div className="space-y-12 py-8 animate-slide-up">
      <section className="glass p-8 rounded-3xl border-green-india/20 border-l-8 border-l-green-india">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-india w-6 h-6" />
              <span className="bg-green-india/10 text-green-india px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Ready to Vote</span>
            </div>
            <h1 className="text-4xl font-extrabold">Welcome, Voter! You're all set.</h1>
            <p className="text-lg text-muted-foreground">
              Since you're already registered, let's focus on preparing for the upcoming {userContext.electionType === 'lok_sabha' ? 'Lok Sabha' : 'State Assembly'} election.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <Link 
                href="#polling-helper"
                className="p-4 bg-white dark:bg-slate-900 rounded-2xl border flex gap-3 items-center hover:border-green-india transition-all group"
              >
                <MapPin className="text-green-india w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">Find your polling booth</span>
              </Link>
              <Link 
                href="https://voters.eci.gov.in/"
                target="_blank"
                className="p-4 bg-white dark:bg-slate-900 rounded-2xl border flex gap-3 items-center hover:border-green-india transition-all group"
              >
                <FileText className="text-green-india w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">Download your digital Voter ID</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div id="timeline" className="scroll-mt-24">
        <Timeline />
      </div>
      <div id="checklist" className="scroll-mt-24">
        <Checklist />
      </div>
    </div>
  );
}
