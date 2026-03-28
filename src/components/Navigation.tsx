import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  scrolled: boolean;
}

const Navigation = ({ scrolled }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Sectors', href: '#sectors' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Doctrine', href: '#doctrine' },
    { label: 'Global', href: '#global' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${scrolled ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        <div className="backdrop-blur-2xl bg-zinc-900/40 border border-amber-500/20 rounded-full px-8 py-4 shadow-2xl shadow-amber-500/10">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-light tracking-wider text-zinc-300 hover:text-amber-400 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="fixed top-0 left-0 right-0 z-40 p-6 md:p-8">
        <div className="flex justify-between items-start">
          <div className="text-2xl md:text-3xl font-serif tracking-tight">
            <span className="text-white">Westorin</span>
            <span className="text-amber-400 ml-2">Partners</span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden backdrop-blur-xl bg-zinc-900/40 border border-amber-500/20 p-3 rounded-full"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 backdrop-blur-xl bg-zinc-900/40 border border-amber-500/20 p-3 rounded-full"
            >
              <X size={20} />
            </button>

            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-light tracking-wider text-zinc-300 hover:text-amber-400 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;