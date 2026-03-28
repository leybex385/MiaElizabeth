import { Shield, Users, LineChart } from 'lucide-react';

const Overview = () => {
  return (
    <section id="overview" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900" />

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-16 items-start">
          <div className="md:col-span-1 space-y-6">
            <div className="w-16 h-px bg-amber-500" />
            <h2 className="font-serif text-5xl text-white leading-tight">
              The Distributed
              <span className="block text-amber-400">Advantage</span>
            </h2>
          </div>

          <div className="md:col-span-2 space-y-12">
            <p className="text-2xl text-zinc-300 font-light leading-relaxed">
              Unlike traditional one-stop investment platforms, Westorin Partners operates on a specialized distributed model that combines the agility of individual limited partners with the analytical power of a dedicated intelligence unit.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="group">
                <div className="backdrop-blur-xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                    <Users className="text-amber-400" size={24} />
                  </div>
                  <h3 className="text-xl font-serif text-white mb-3">Individual Limited Partners</h3>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    Autonomous decision-makers with the freedom to pursue opportunities aligned with their expertise and market insights.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="backdrop-blur-xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                    <Shield className="text-amber-400" size={24} />
                  </div>
                  <h3 className="text-xl font-serif text-white mb-3">Elite Intelligence Unit</h3>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    25 specialists providing rigorous project evaluation, comprehensive underwriting, and actionable prospect reports.
                  </p>
                </div>
              </div>

              <div className="md:col-span-2 group">
                <div className="backdrop-blur-xl bg-amber-500/5 border border-amber-500/20 rounded-2xl p-8 transition-all duration-500">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                    <LineChart className="text-amber-400" size={24} />
                  </div>
                  <h3 className="text-xl font-serif text-white mb-3">Proven Track Record</h3>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    Since our inception, we have deployed capital across seven distinct sectors with a disciplined approach to risk management and value creation. Our distributed model enables faster decision-making while maintaining institutional-grade due diligence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;