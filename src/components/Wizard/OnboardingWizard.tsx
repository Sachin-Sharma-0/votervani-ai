"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, User, MapPin, ClipboardList, Info } from "lucide-react";
import { INDIAN_STATES, UserContext } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface WizardProps {
  onComplete: (data: UserContext) => void;
}

export default function OnboardingWizard({ onComplete }: WizardProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<UserContext>>({
    age: 18,
    state: "",
    district: "",
    voterStatus: "not_registered",
    electionType: "lok_sabha",
  });

  const totalSteps = 4;

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleComplete = () => {
    if (formData.age && formData.state && formData.voterStatus && formData.electionType) {
      onComplete(formData as UserContext);
    }
  };

  const updateData = (data: Partial<UserContext>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const progress = (step / totalSteps) * 100;

  return (
    <div className="max-w-2xl mx-auto glass p-8 rounded-2xl shadow-2xl">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-muted-foreground">Step {step} of {totalSteps}</span>
          <span className="text-sm font-bold text-saffron">{Math.round(progress)}% Complete</span>
        </div>
        <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-saffron" 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-saffron/10 p-2 rounded-lg text-saffron">
                  <User className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Tell us about yourself</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">How old are you?</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="120"
                    value={formData.age}
                    onChange={(e) => updateData({ age: parseInt(e.target.value) || 0 })}
                    className="w-full p-3 rounded-xl border bg-background focus:ring-2 focus:ring-saffron outline-none"
                    placeholder="Enter your age"
                  />
                  {formData.age! < 18 && (
                    <p className="text-sm text-saffron mt-2 flex items-center gap-1">
                      <Info className="w-4 h-4" /> You're slightly under the voting age, but it's great to start learning!
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-india/10 p-2 rounded-lg text-green-india">
                  <MapPin className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Where do you vote?</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">State / Union Territory</label>
                  <select 
                    value={formData.state}
                    onChange={(e) => updateData({ state: e.target.value })}
                    className="w-full p-3 rounded-xl border bg-background focus:ring-2 focus:ring-saffron outline-none"
                  >
                    <option value="">Select your state</option>
                    {INDIAN_STATES.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">District / Pincode (Optional)</label>
                  <input 
                    type="text" 
                    value={formData.district}
                    onChange={(e) => updateData({ district: e.target.value })}
                    className="w-full p-3 rounded-xl border bg-background focus:ring-2 focus:ring-saffron outline-none"
                    placeholder="Enter district or pincode"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-ashoka/10 p-2 rounded-lg text-ashoka">
                  <ClipboardList className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Voter Registration</h2>
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-medium mb-1">What is your current registration status?</label>
                {[
                  { id: 'registered', label: 'I am a registered voter', sub: 'I have my Voter ID (EPIC)' },
                  { id: 'not_registered', label: 'I am not registered yet', sub: 'I need to apply for registration' },
                  { id: 'unsure', label: 'I am not sure', sub: 'I want to check my name in the list' }
                ].map((status) => (
                  <div 
                    key={status.id}
                    onClick={() => updateData({ voterStatus: status.id as any })}
                    className={cn(
                      "p-4 rounded-xl border-2 cursor-pointer transition-all",
                      formData.voterStatus === status.id 
                        ? "border-saffron bg-saffron/5" 
                        : "border-transparent bg-slate-50 dark:bg-slate-900 hover:border-slate-200"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold">{status.label}</p>
                        <p className="text-xs text-muted-foreground">{status.sub}</p>
                      </div>
                      {formData.voterStatus === status.id && <CheckCircle2 className="text-saffron w-5 h-5" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-saffron/10 p-2 rounded-lg text-saffron">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Election Type</h2>
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-medium mb-1">Which election are you interested in?</label>
                {[
                  { id: 'lok_sabha', label: 'Lok Sabha (General Elections)', sub: 'To elect the Prime Minister & Central Govt' },
                  { id: 'state_assembly', label: 'State Assembly (Vidhan Sabha)', sub: 'To elect the Chief Minister & State Govt' }
                ].map((type) => (
                  <div 
                    key={type.id}
                    onClick={() => updateData({ electionType: type.id as any })}
                    className={cn(
                      "p-4 rounded-xl border-2 cursor-pointer transition-all",
                      formData.electionType === type.id 
                        ? "border-green-india bg-green-india/5" 
                        : "border-transparent bg-slate-50 dark:bg-slate-900 hover:border-slate-200"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold">{type.label}</p>
                        <p className="text-xs text-muted-foreground">{type.sub}</p>
                      </div>
                      {formData.electionType === type.id && <CheckCircle2 className="text-green-india w-5 h-5" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-12 flex items-center justify-between">
        <button
          onClick={prevStep}
          disabled={step === 1}
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-30"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        {step < totalSteps ? (
          <button
            onClick={nextStep}
            className="bg-saffron text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg transition-all"
          >
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleComplete}
            className="bg-green-india text-white px-8 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg transition-all"
          >
            Start My Journey <CheckCircle2 className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
