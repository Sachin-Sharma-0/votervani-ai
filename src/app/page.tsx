"use client";

import { useState } from "react";
import { UserContext } from "@/lib/constants";
import OnboardingWizard from "@/components/Wizard/OnboardingWizard";
import VoterJourney from "@/components/Dashboard/VoterJourney";
import ChatAssistant from "@/components/Chat/ChatAssistant";
import KnowledgeQuiz from "@/components/Quiz/KnowledgeQuiz";
import PollingHelper from "@/components/MapHelper/PollingHelper";
import { Vote, Users, Shield, BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [userContext, setUserContext] = useState<UserContext | null>(null);

  const handleComplete = (data: UserContext) => {
    setUserContext(data);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!userContext) {
    return (
      <div className="container mx-auto px-4 py-12 md:py-24">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-saffron/10 text-saffron px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
            <Shield className="w-4 h-4" /> Trusted Election Guide
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Empowering Your <span className="text-ashoka">Voice</span>,<br />
            Strengthening Our <span className="text-green-india">Democracy</span>.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            VoterVani AI is your personalized assistant for the Indian electoral process. 
            From registration to results, we guide you every step of the way.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
            <div className="p-6 glass rounded-2xl border-saffron/20 hover:border-saffron/40 transition-all">
              <BookOpen className="w-10 h-10 text-saffron mb-4" />
              <h3 className="text-lg font-bold">Simplified Learning</h3>
              <p className="text-sm text-muted-foreground">Complex election processes explained in simple, neutral language.</p>
            </div>
            <div className="p-6 glass rounded-2xl border-ashoka/20 hover:border-ashoka/40 transition-all">
              <Users className="w-10 h-10 text-ashoka mb-4" />
              <h3 className="text-lg font-bold">Personalized Journey</h3>
              <p className="text-sm text-muted-foreground">Guidance tailored to your age, location, and registration status.</p>
            </div>
            <div className="p-6 glass rounded-2xl border-green-india/20 hover:border-green-india/40 transition-all">
              <Vote className="w-10 h-10 text-green-india mb-4" />
              <h3 className="text-lg font-bold">AI Assistance</h3>
              <p className="text-sm text-muted-foreground">24/7 conversational support powered by Gemini AI for all your queries.</p>
            </div>
          </div>
        </div>

        {/* Wizard Start */}
        <section className="scroll-mt-24" id="start">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
            <p className="text-muted-foreground">Complete this quick wizard to get your personalized election guide.</p>
          </div>
          <OnboardingWizard onComplete={handleComplete} />
        </section>

        <ChatAssistant />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-20">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass p-6 rounded-2xl">
        <div>
          <h2 className="text-2xl font-bold">My Voting Dashboard</h2>
          <p className="text-sm text-muted-foreground">
            Location: <span className="font-bold text-ashoka">{userContext.state}</span> | 
            Interest: <span className="font-bold text-saffron">{userContext.electionType === 'lok_sabha' ? 'Lok Sabha' : 'State Assembly'}</span>
          </p>
        </div>
        <button 
          onClick={() => setUserContext(null)}
          className="text-sm font-medium text-muted-foreground hover:text-saffron flex items-center gap-1"
        >
          Reset Profile <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <VoterJourney userContext={userContext} />
      
      <div id="quiz" className="scroll-mt-24">
        <KnowledgeQuiz />
      </div>
      
      <div id="polling-helper" className="scroll-mt-24">
        <PollingHelper />
      </div>
    </div>
  );
}
