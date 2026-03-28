import { useState } from 'react';
import { Heart, Zap, Building2, Home, UtensilsCrossed, Bitcoin, Coins } from 'lucide-react';

const InvestmentSectors = () => {
  const [activeSector, setActiveSector] = useState(0);

  const sectors = [
    {
      icon: Heart,
      title: 'Medical Devices',
      description: 'Investing in breakthrough technologies that improve patient outcomes and transform healthcare delivery.',
      allocation: '18%',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
    },
    {
      icon: Zap,
      title: 'New Energy',
      description: 'Supporting the transition to sustainable energy through strategic investments in solar, wind, and battery technologies.',
      allocation: '22%',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop',
    },
    {
      icon: Building2,
      title: 'Real Estate',
      description: 'Prime commercial and residential developments in high-growth metropolitan markets.',
      allocation: '25%',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    },
    {
      icon: Home,
      title: 'Hospitality',
      description: 'Luxury hotels and resorts in strategic locations worldwide, focusing on exceptional guest experiences.',
      allocation: '15%',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
    },
    {
      icon: UtensilsCrossed,
      title: 'High-End Dining',
      description: 'Curated portfolio of premium restaurants and culinary concepts led by award-winning chefs.',
      allocation: '8%',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
    },
    {
      icon: Bitcoin,
      title: 'Digital Assets',
      description: 'Strategic positions in cryptocurrency and blockchain infrastructure with rigorous risk management.',
      allocation: '7%',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop',
    },
    {
      icon: Coins,
      title: 'Gold & Precious Metals',
      description: 'Physical and derivative positions in gold as a portfolio stabilizer and inflation hedge.',
      allocation: '5%',
      image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <section id="sectors" className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.15)',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">
            Investment <span className="text-amber-400">Sectors</span>
          </h2>
          <p className="text-zinc-400 text-xl font-light max-w-3xl mx-auto">
            Diversified exposure across seven carefully selected sectors, each offering unique growth opportunities and risk characteristics.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {sectors.map((sector, index) => (
              <button
                key={index}
                onClick={() => setActiveSector(index)}
                className={`w-full text-left backdrop-blur-xl border rounded-xl p-6 transition-all duration-500 ${
                  activeSector === index
                    ? 'bg-amber-500/20 border-amber-500/50 shadow-2xl shadow-amber-500/20'
                    : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                    activeSector === index ? 'bg-amber-500/30' : 'bg-zinc-800'
                  }`}>
                    <sector.icon className="text-amber-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-1">{sector.title}</h3>
                    <div className="text-amber-400 text-sm font-light">{sector.allocation} Allocation</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="sticky top-8">
              <div className="backdrop-blur-2xl bg-zinc-900/60 border border-amber-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/10">
                <div
                  className="h-80 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${sectors[activeSector].image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center">
                      {(() => {
                        const Icon = sectors[activeSector].icon;
                        return <Icon className="text-amber-400" size={28} />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif text-white">{sectors[activeSector].title}</h3>
                      <div className="text-amber-400 font-light">{sectors[activeSector].allocation} Portfolio Allocation</div>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-lg font-light leading-relaxed">
                    {sectors[activeSector].description}
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

export default InvestmentSectors;