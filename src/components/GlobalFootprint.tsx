import { MapPin } from 'lucide-react';

const GlobalFootprint = () => {
  const offices = [
    { city: 'New York', country: 'United States', type: 'Headquarters', coordinates: 'top-[35%] left-[20%]' },
    { city: 'London', country: 'United Kingdom', type: 'European Hub', coordinates: 'top-[30%] left-[48%]' },
    { city: 'Singapore', country: 'Singapore', type: 'Asia-Pacific Hub', coordinates: 'top-[60%] left-[75%]' },
    { city: 'Dubai', country: 'UAE', type: 'Middle East Office', coordinates: 'top-[45%] left-[58%]' },
    { city: 'Shanghai', country: 'China', type: 'Greater China Office', coordinates: 'top-[40%] left-[78%]' },
    { city: 'São Paulo', country: 'Brazil', type: 'Latin America Office', coordinates: 'top-[70%] left-[28%]' },
  ];

  const regions = [
    { name: 'North America', investments: 34, aum: '$1.8B' },
    { name: 'Europe', investments: 22, aum: '$1.1B' },
    { name: 'Asia-Pacific', investments: 28, aum: '$1.0B' },
    { name: 'Middle East', investments: 3, aum: '$0.3B' },
  ];

  return (
    <section id="global" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">
            Global <span className="text-amber-400">Footprint</span>
          </h2>
          <p className="text-zinc-400 text-xl font-light max-w-3xl mx-auto">
            Operating across 14 markets with on-the-ground presence in key financial centers worldwide.
          </p>
        </div>

        <div className="backdrop-blur-2xl bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 md:p-12 mb-12">
          <div className="relative aspect-[2/1] mb-8">
            <div
              className="absolute inset-0 rounded-xl overflow-hidden"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2033&auto=format&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.4) contrast(1.2)',
              }}
            />

            {offices.map((office, index) => (
              <div key={index} className={`absolute ${office.coordinates} group cursor-pointer`}>
                <div className="relative">
                  <div className="w-4 h-4 bg-amber-500 rounded-full animate-ping absolute" />
                  <div className="w-4 h-4 bg-amber-400 rounded-full border-2 border-white relative" />

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="backdrop-blur-xl bg-black/90 border border-amber-500/30 rounded-lg px-4 py-3 whitespace-nowrap">
                      <div className="text-white font-medium text-sm">{office.city}</div>
                      <div className="text-amber-400 text-xs">{office.type}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {offices.map((office, index) => (
              <div key={index} className="backdrop-blur-xl bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 hover:border-amber-500/40 transition-all">
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="text-amber-400 flex-shrink-0" size={16} />
                  <div className="text-white font-medium text-sm">{office.city}</div>
                </div>
                <div className="text-zinc-500 text-xs">{office.type}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {regions.map((region, index) => (
            <div key={index} className="backdrop-blur-xl bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
              <div className="text-amber-400 text-sm mb-3 tracking-wider">{region.name}</div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-white font-serif text-3xl">{region.investments}</span>
                <span className="text-zinc-500 text-sm">Investments</span>
              </div>
              <div className="text-zinc-400 font-light">{region.aum} AUM</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalFootprint;