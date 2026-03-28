const Leadership = () => {
  const partners = [
    {
      name: 'James R. Wellington',
      title: 'Independent Limited Partner',
      nationality: 'British',
      education: 'MBA, Harvard Business School | BA Economics, Oxford University',
      background: [
        'Senior Vice President, Goldman Sachs Real Estate Division (2008-2015)',
        'Managing Director, Blackstone Hospitality Group (2015-2018)',
        'Joined Westorin Partners as Limited Partner in 2018',
        'Elevated to Independent Limited Partner in 2022'
      ],
      expertise: 'Real Estate, Hospitality, Asset Management',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop',
    },
    {
      name: 'Dr. Yuki Tanaka',
      title: 'Independent Limited Partner',
      nationality: 'Japanese',
      education: 'Ph.D. Electrical Engineering, MIT | B.Eng., University of Tokyo',
      background: [
        'Principal, McKinsey & Company Technology Practice (2010-2016)',
        'Chief Strategy Officer, Medtronic Asia-Pacific (2016-2019)',
        'Joined Westorin Partners as Limited Partner in 2019',
        'Promoted to Independent Limited Partner in 2023'
      ],
      expertise: 'Medical Devices, Clean Technology, Innovation Strategy',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop',
    },
  ];

  return (
    <section id="leadership" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">
            Leadership <span className="text-amber-400">Team</span>
          </h2>
          <p className="text-zinc-400 text-xl font-light max-w-3xl mx-auto">
            Independent Limited Partners with exceptional track records across global markets and diverse sectors.
          </p>
        </div>

        <div className="mb-32">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5 space-y-8">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=922&auto=format&fit=crop"
                  alt="Mia Elizabeth"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=987&auto=format&fit=crop"
                    alt="Mia Elizabeth"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=987&auto=format&fit=crop"
                    alt="Mia Elizabeth"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
              <div>
                <div className="inline-block backdrop-blur-xl bg-amber-500/10 border border-amber-500/30 px-4 py-2 rounded-full mb-6">
                  <span className="text-amber-400 text-sm tracking-widest font-light">FOUNDER</span>
                </div>

                <h3 className="font-serif text-5xl md:text-6xl text-white mb-4 leading-tight">
                  Mia Elizabeth
                </h3>

                <div className="text-amber-400 text-xl font-light mb-8">
                  Independent Limited Partner
                </div>

                <div className="space-y-6 text-zinc-400 font-light leading-relaxed">
                  <div className="backdrop-blur-xl bg-zinc-900/40 border border-zinc-800 rounded-xl p-6">
                    <div className="text-sm text-amber-400 mb-2 tracking-wider">NATIONALITY</div>
                    <div className="text-white text-lg">American</div>
                  </div>

                  <div className="backdrop-blur-xl bg-zinc-900/40 border border-zinc-800 rounded-xl p-6">
                    <div className="text-sm text-amber-400 mb-2 tracking-wider">EDUCATION</div>
                    <div className="text-white text-lg">Master's Degree, Stockholm School of Economics, Sweden</div>
                  </div>

                  <div className="backdrop-blur-xl bg-zinc-900/40 border border-zinc-800 rounded-xl p-6">
                    <div className="text-sm text-amber-400 mb-3 tracking-wider">CAREER MILESTONES</div>
                    <ul className="space-y-3 text-white">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2.5 flex-shrink-0" />
                        <span>2-year internship at Minghong Investment Management Co., Ltd., Shanghai, China</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2.5 flex-shrink-0" />
                        <span>3 years at TPG Asset Management headquarters</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2.5 flex-shrink-0" />
                        <span>Limited Partner at Westorin Partners (2012)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2.5 flex-shrink-0" />
                        <span>Promoted to Independent Limited Partner (2019)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="backdrop-blur-xl bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-500 group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h3 className="font-serif text-3xl text-white mb-2">{partner.name}</h3>
                  <div className="text-amber-400 font-light mb-1">{partner.title}</div>
                  <div className="text-zinc-500 text-sm">{partner.nationality}</div>
                </div>

                <div>
                  <div className="text-sm text-amber-400 mb-2 tracking-wider">EDUCATION</div>
                  <div className="text-zinc-400 font-light">{partner.education}</div>
                </div>

                <div>
                  <div className="text-sm text-amber-400 mb-3 tracking-wider">BACKGROUND</div>
                  <ul className="space-y-2 text-zinc-400 font-light">
                    {partner.background.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-amber-400 mt-2.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-sm text-amber-400 mb-2 tracking-wider">EXPERTISE</div>
                  <div className="text-zinc-400 font-light">{partner.expertise}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;