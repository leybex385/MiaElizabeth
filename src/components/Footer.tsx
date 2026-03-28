import { Mail, MapPin, Phone, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const offices = [
    {
      name: 'New York HQ',
      address: '432 Park Avenue, Suite 2800',
      city: 'New York, NY 10022',
      phone: '+1 (212) 555-0100',
    },
    {
      name: 'London',
      address: '1 Canada Square, Level 42',
      city: 'Canary Wharf, London E14 5AB',
      phone: '+44 20 7946 0958',
    },
    {
      name: 'Singapore',
      address: '1 Raffles Quay, Level 28',
      city: 'Singapore 048583',
      phone: '+65 6532 5800',
    },
  ];

  const links = {
    About: ['Overview', 'Leadership Team', 'Investment Doctrine', 'Global Footprint'],
    Sectors: ['Medical Devices', 'New Energy', 'Real Estate', 'Hospitality', 'Digital Assets', 'Gold'],
    Resources: ['Market Insights', 'Research Reports', 'Press Releases', 'Careers'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Regulatory Disclosures', 'Risk Warnings'],
  };

  return (
    <footer id="contact" className="relative bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="text-3xl font-serif mb-6">
              <span className="text-white">Westorin</span>
              <span className="text-amber-400 ml-2">Partners</span>
            </div>
            <p className="text-zinc-400 font-light leading-relaxed mb-6">
              A specialized distributed investment model combining individual limited partner autonomy with institutional-grade intelligence and research.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 backdrop-blur-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 rounded-lg flex items-center justify-center transition-all"
              >
                <Linkedin size={18} className="text-zinc-400 hover:text-amber-400 transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 backdrop-blur-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 rounded-lg flex items-center justify-center transition-all"
              >
                <Twitter size={18} className="text-zinc-400 hover:text-amber-400 transition-colors" />
              </a>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-white font-medium mb-4 tracking-wider">{category}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-zinc-500 hover:text-amber-400 font-light text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 pt-16 border-t border-zinc-900">
          {offices.map((office, index) => (
            <div key={index} className="backdrop-blur-xl bg-zinc-900/40 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-white font-medium mb-4">{office.name}</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-amber-400 flex-shrink-0 mt-1" />
                  <div className="text-zinc-400 font-light">
                    <div>{office.address}</div>
                    <div>{office.city}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-amber-400 flex-shrink-0" />
                  <div className="text-zinc-400 font-light">{office.phone}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-zinc-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm font-light">
              &copy; {new Date().getFullYear()} Westorin Partners. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-amber-400" />
              <a href="mailto:info@westorinpartners.com" className="text-zinc-400 hover:text-amber-400 text-sm font-light transition-colors">
                info@westorinpartners.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-900">
          <p className="text-zinc-600 text-xs font-light leading-relaxed">
            IMPORTANT NOTICE: Westorin Partners is a private investment firm. The information on this website is provided for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. Investment in private funds involves substantial risks, including the loss of principal. Past performance is not indicative of future results. This material is confidential and may not be reproduced or distributed without prior written consent.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;