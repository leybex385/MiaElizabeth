import { Brain, FileSearch, BarChart3, Shield, Users, Globe } from 'lucide-react';

const IntelligenceUnit = () => {
  const capabilities = [
    {
      icon: FileSearch,
      title: 'Project Evaluation',
      description: 'Comprehensive analysis of investment opportunities including market positioning, competitive dynamics, and growth potential.',
      stat: '400+',
      statLabel: 'Annual Evaluations',
    },
    {
      icon: BarChart3,
      title: 'Financial Modeling',
      description: 'Sophisticated quantitative models incorporating scenario analysis, sensitivity testing, and Monte Carlo simulations.',
      stat: '15+',
      statLabel: 'Model Types',
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Multi-dimensional risk frameworks covering market, operational, regulatory, and geopolitical factors.',
      stat: '50+',
      statLabel: 'Risk Metrics',
    },
    {
      icon: Globe,
      title: 'Market Intelligence',
      description: 'Real-time monitoring of macro trends, sector dynamics, and competitive movements across global markets.',
      stat: '24/7',
      statLabel: 'Market Coverage',
    },
  ];

  const team = [
    { role: 'Senior Analysts', count: 8, focus: 'Sector-specific deep dives' },
    { role: 'Quantitative Modelers', count: 5, focus: 'Financial engineering' },
    { role: 'Risk Specialists', count: 4, focus: 'Risk framework development' },
    { role: 'Market Researchers', count: 4, focus: 'Competitive intelligence' },
    { role: 'Due Diligence Officers', count: 4, focus: 'Operational assessment' },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.15)',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900/90 to-black z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <div className="sticky top-8">
              <div className="inline-flex items-center gap-3 backdrop-blur-xl bg-amber-500/10 border border-amber-500/30 px-6 py-3 rounded-full mb-8">
                <Brain className="text-amber-400" size={20} />
                <span className="text-amber-400 text-sm tracking-widest font-light">ELITE INTELLIGENCE UNIT</span>
              </div>

              <h2 className="font-serif text-5xl md:text-6xl text-white mb-6 leading-tight">
                25 Specialists
                <span className="block text-amber-400">One Mission</span>
              </h2>

              <p className="text-zinc-400 text-xl font-light leading-relaxed mb-8">
                Our intelligence unit serves as the analytical backbone of Westorin Partners, providing partners with institutional-grade research and risk assessment.
              </p>

              <div className="backdrop-blur-2xl bg-zinc-900/60 border border-amber-500/20 rounded-2xl p-8 shadow-2xl shadow-amber-500/10">
                <div className="space-y-6">
                  {team.map((member, index) => (
                    <div key={index} className="flex items-start justify-between pb-6 border-b border-zinc-800 last:border-0 last:pb-0">
                      <div>
                        <div className="text-white font-medium mb-1">{member.role}</div>
                        <div className="text-zinc-500 text-sm font-light">{member.focus}</div>
                      </div>
                      <div className="text-amber-400 font-serif text-2xl">{member.count}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 hover:border-amber-500/40 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                    <capability.icon className="text-amber-400" size={28} />
                  </div>

                  <h3 className="text-white font-serif text-2xl mb-3">{capability.title}</h3>

                  <p className="text-zinc-400 font-light leading-relaxed mb-6">{capability.description}</p>

                  <div className="pt-6 border-t border-zinc-800">
                    <div className="flex items-baseline gap-2">
                      <span className="text-amber-400 font-serif text-3xl">{capability.stat}</span>
                      <span className="text-zinc-500 text-sm">{capability.statLabel}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 backdrop-blur-xl bg-amber-500/5 border border-amber-500/20 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="text-amber-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-serif text-xl mb-3">Collaborative Framework</h3>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    While each Limited Partner maintains full autonomy in investment decisions, the intelligence unit ensures every opportunity benefits from rigorous, multi-perspective analysis. This distributed model combines individual judgment with institutional-grade research infrastructure.
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

export default IntelligenceUnit;