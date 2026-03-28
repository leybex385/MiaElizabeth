import { TrendingUp, Award, Target } from 'lucide-react';

const Portfolio = () => {
  const highlights = [
    {
      company: 'MediTech Innovations',
      sector: 'Medical Devices',
      year: '2019',
      return: '+142%',
      description: 'Revolutionary cardiac monitoring device achieving FDA approval and market leadership.',
      image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2064&auto=format&fit=crop',
    },
    {
      company: 'SolarEdge Systems',
      sector: 'New Energy',
      year: '2020',
      return: '+98%',
      description: 'Next-generation solar panel technology with superior efficiency and lower manufacturing costs.',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop',
    },
    {
      company: 'Hudson Towers',
      sector: 'Real Estate',
      year: '2018',
      return: '+76%',
      description: 'Premium mixed-use development in Manhattan financial district.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
    },
    {
      company: 'Archipelago Resorts',
      sector: 'Hospitality',
      year: '2021',
      return: '+54%',
      description: 'Luxury island resort portfolio across the Mediterranean.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop',
    },
  ];

  const metrics = [
    { label: 'Portfolio Companies', value: '87', icon: Target },
    { label: 'Exits Since Inception', value: '42', icon: TrendingUp },
    { label: 'Industry Awards', value: '16', icon: Award },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">
            Portfolio <span className="text-amber-400">Highlights</span>
          </h2>
          <p className="text-zinc-400 text-xl font-light max-w-3xl mx-auto">
            Representative investments demonstrating our ability to identify and support exceptional growth opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="backdrop-blur-xl bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 text-center">
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <metric.icon className="text-amber-400" size={28} />
              </div>
              <div className="text-amber-400 font-serif text-5xl mb-2">{metric.value}</div>
              <div className="text-zinc-400 font-light">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`backdrop-blur-xl bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-500 group ${
                index % 2 === 0 ? '' : ''
              }`}
            >
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`aspect-video md:aspect-auto overflow-hidden ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <img
                    src={highlight.image}
                    alt={highlight.company}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="backdrop-blur-xl bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full text-amber-400 text-xs tracking-wider">
                      {highlight.sector}
                    </span>
                    <span className="text-zinc-500 text-sm">{highlight.year}</span>
                  </div>

                  <h3 className="text-white font-serif text-3xl mb-3">{highlight.company}</h3>

                  <p className="text-zinc-400 font-light leading-relaxed mb-6">{highlight.description}</p>

                  <div className="flex items-baseline gap-2">
                    <TrendingUp className="text-green-400" size={20} />
                    <span className="text-green-400 font-serif text-3xl">{highlight.return}</span>
                    <span className="text-zinc-500 text-sm">Total Return</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-zinc-500 text-sm font-light">
            Past performance is not indicative of future results. All figures are approximate and for illustrative purposes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;