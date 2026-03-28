import { ArrowRight, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { value: '$4.2B', label: 'AUM', change: '+12.4%' },
    { value: '87', label: 'Active Investments', change: '+8' },
    { value: '14', label: 'Global Markets', change: '+3' },
    { value: '23.7%', label: 'Avg. ROI', change: '+4.2%' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900/50 to-amber-900/20 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 py-32 grid md:grid-cols-12 gap-8 items-center">
        <div className={`md:col-span-7 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="space-y-6">
            <div className="inline-block backdrop-blur-xl bg-amber-500/10 border border-amber-500/30 px-4 py-2 rounded-full">
              <span className="text-amber-400 text-sm tracking-widest font-light">DISTRIBUTED INVESTMENT EXCELLENCE</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none">
              <span className="block text-white">Capital</span>
              <span className="block text-white">Deployed</span>
              <span className="block text-amber-400">Intelligently</span>
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              A specialized distributed model where individual limited partners are supported by an elite 25-member intelligence unit, delivering rigorous evaluation across medical devices, new energy, real estate, hospitality, digital assets, and gold.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#overview" className="group backdrop-blur-xl bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300 font-medium">
                Explore Our Model
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="backdrop-blur-xl bg-zinc-900/40 border border-amber-500/20 hover:border-amber-500/40 text-white px-8 py-4 rounded-full transition-all duration-300 font-light">
                Partner Inquiry
              </a>
            </div>
          </div>
        </div>

        <div className={`md:col-span-5 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
          <div className="backdrop-blur-2xl bg-zinc-900/40 border border-amber-500/20 rounded-2xl p-8 shadow-2xl shadow-amber-500/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-zinc-400 text-sm font-light tracking-wider">LIVE METRICS</span>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-serif text-white">{stat.value}</span>
                    <span className="text-green-400 text-sm flex items-center gap-1">
                      <TrendingUp size={14} />
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-zinc-500 text-sm font-light tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800">
              <div className="text-xs text-zinc-500 font-light">
                Market Updated: <span className="text-zinc-400">2 minutes ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;