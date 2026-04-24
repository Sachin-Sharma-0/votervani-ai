"use client";

import { ELECTION_PHASES } from "@/lib/constants";
import { motion } from "framer-motion";
import { Info, Clock } from "lucide-react";

export default function Timeline() {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Election Process Timeline</h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
          <Clock className="w-4 h-4" />
          <span>Approx. 2-3 months process</span>
        </div>
      </div>

      <div className="relative overflow-x-auto pb-12 hide-scrollbar">
        <div className="flex gap-6 min-w-max px-6 py-4">
          {ELECTION_PHASES.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-72 glass p-8 rounded-2xl relative border-t-4 hover:shadow-xl transition-all"
              style={{ 
                borderTopColor: index % 3 === 0 ? '#FF9933' : index % 3 === 1 ? '#000080' : '#138808' 
              }}
            >
              <div className="absolute -top-4 left-4 bg-background border-2 border-slate-200 shadow-md w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg z-10">
                {phase.id}
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">{phase.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {phase.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <Info className="w-3 h-3" />
                Key Phase
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="p-6 bg-ashoka/5 border border-ashoka/10 rounded-2xl">
        <h4 className="font-bold flex items-center gap-2 mb-2">
          <Info className="w-5 h-5 text-ashoka" />
          Did you know?
        </h4>
        <p className="text-sm text-muted-foreground">
          The Model Code of Conduct (MCC) ensures that political parties and candidates do not use government resources for campaigning and maintain a level playing field.
        </p>
      </div>
    </section>
  );
}
