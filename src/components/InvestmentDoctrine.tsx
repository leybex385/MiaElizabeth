import { Target, Microscope, Scale, TrendingUp } from 'lucide-react';

const InvestmentDoctrine = () => {
  const principles = [
    {
      icon: Target,
      title: 'Concentrated Conviction',
      description: 'We make deliberate, high-conviction investments rather than pursuing broad diversification for its own sake. Each position reflects deep analysis and partner-level conviction.',
    },
    {
      icon: Microscope,
      title: 'Rigorous Due Diligence',
      description: 'Our 25-member intelligence unit conducts exhaustive evaluation of every opportunity, combining quantitative modeling with qualitative market insight.',
    },
    {
      icon: Scale,
      title: 'Risk-Adjusted Returns',
      description: 'We optimize for risk-adjusted performance, not absolute returns. Every investment thesis includes comprehensive downside scenario planning.',
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Value Creation',
      description: 'We invest with multi-year time horizons, partnering with management teams to build enduring value rather than seeking quick exits.',
    },
  ];

  return (
    <section id="doctrine" className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.2)',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-900/80 to-black z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="w-16 h-px bg-amber-500 mb-8" />
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-6 leading-tight">
              Investment
              <span className="block text-amber-400">Doctrine</span>
            </h2>
            <p className="text-zinc-400 text-xl font-light leading-relaxed">
              Our investment philosophy has been refined over decades of market cycles, combining institutional discipline with entrepreneurial agility.
            </p>
          </div>

          <div className="backdrop-blur-2xl bg-zinc-900/60 border border-amber-500/20 rounded-2xl p-8 shadow-2xl shadow-amber-500/10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-400 font-serif text-2xl">01</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Sector Specialization</h3>
                  <p className="text-zinc-400 font-light text-sm">
                    Each partner brings deep domain expertise to their focus sectors, enabling nuanced understanding of market dynamics and competitive positioning.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-400 font-serif text-2xl">02</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Collaborative Intelligence</h3>
                  <p className="text-zinc-400 font-light text-sm">
                    While partners operate independently, our intelligence unit ensures cross-pollination of insights and consistent analytical standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-400 font-serif text-2xl">03</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Aligned Incentives</h3>
                  <p className="text-zinc-400 font-light text-sm">
                    Partners invest personal capital alongside institutional funds, ensuring complete alignment with our investors' interests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 hover:border-amber-500/40 transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                <principle.icon className="text-amber-400" size={28} />
              </div>
              <h3 className="text-white font-serif text-xl mb-3">{principle.title}</h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentDoctrine;