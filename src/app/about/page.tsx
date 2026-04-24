import { Vote, Info, Shield, Users, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 space-y-16 animate-slide-up">
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">About <span className="text-saffron">VoterVani</span> <span className="text-green-india">AI</span></h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          VoterVani AI is an independent educational initiative designed to simplify the complex landscape of Indian elections. 
          Our mission is to ensure every eligible citizen feels informed, confident, and empowered to participate in the world's largest democracy.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Vision</h2>
          <p className="text-muted-foreground">
            We believe that democracy thrives when citizens are well-informed. VoterVani AI leverages modern technology 
            to bridge the gap between complex electoral rules and the everyday voter.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 glass rounded-2xl">
              <div className="bg-saffron/10 p-2 rounded-lg text-saffron shrink-0"><Target className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold">Accuracy</h4>
                <p className="text-sm text-muted-foreground">All our process information is sourced from official ECI guidelines.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 glass rounded-2xl">
              <div className="bg-ashoka/10 p-2 rounded-lg text-ashoka shrink-0"><Shield className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold">Neutrality</h4>
                <p className="text-sm text-muted-foreground">We maintain a strict non-partisan stance, focusing solely on the process, not parties.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-8 flex items-center justify-center">
          <div className="relative w-48 h-48 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl flex items-center justify-center rotate-3">
             <Vote className="w-24 h-24 text-saffron animate-float" />
          </div>
        </div>
      </div>

      <section className="bg-ashoka text-white p-12 rounded-3xl text-center space-y-6">
        <h2 className="text-3xl font-bold">Disclaimer</h2>
        <p className="max-w-3xl mx-auto opacity-90">
          VoterVani AI is an educational tool and is not affiliated with the Election Commission of India (ECI). 
          While we strive for 100% accuracy, electoral rules and dates can change. Always verify the latest information 
          on the official ECI portal at <strong>voters.eci.gov.in</strong>.
        </p>
      </section>
    </div>
  );
}
