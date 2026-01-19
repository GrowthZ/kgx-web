import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#eef4e7] shadow-sm">
      <div className="container h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-olive">
          <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg">
            <span className="material-symbols-outlined text-3xl font-bold">spa</span>
          </div>
          <h2 className="text-2xl font-black tracking-tighter text-olive uppercase hidden sm:block">KGX Landscape</h2>
          <h2 className="text-xl font-black tracking-tighter text-olive uppercase sm:hidden">KGX</h2>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="relative group py-4">
              <Link
                className="text-olive font-medium hover:text-primary transition-colors text-sm uppercase tracking-wide flex items-center gap-1"
                to={link.href}
              >
                {link.label}
                {link.subLinks && (
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                )}
              </Link>

              {link.subLinks && (
                <div className="absolute top-16 left-0 w-64 bg-white border border-[#eef4e7] shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  {link.subLinks.map((sub) => (
                    <Link
                      key={sub.label}
                      to={sub.href}
                      className="block px-6 py-3 text-sm text-olive hover:text-primary hover:bg-[#fcfbf8] transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:flex h-11 px-5 items-center justify-center rounded-xl bg-background-off border border-[#dde8ce] text-olive font-bold text-sm hover:bg-[#eef4e7] transition-colors gap-2">
            <span className="material-symbols-outlined text-accent">call</span>
            <span className="text-accent">0868 462 462</span>
          </button>
          <button className="flex h-11 px-6 items-center justify-center rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5">
            Nhận tư vấn
          </button>
          <button
            className="lg:hidden h-11 w-11 flex items-center justify-center rounded-xl bg-background-off hover:bg-gray-100 ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-olive">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-[#eef4e7] shadow-lg py-4 px-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="border-b border-gray-100 last:border-0">
              <div className="flex items-center justify-between py-3">
                <Link
                  className="text-olive font-bold hover:text-primary transition-colors text-base uppercase tracking-wide flex-grow"
                  to={link.href}
                  onClick={() => !link.subLinks && setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.subLinks && (
                  <button
                    onClick={() => setActiveSubmenu(activeSubmenu === link.label ? null : link.label)}
                    className="p-2"
                  >
                    <span className={`material-symbols-outlined transition-transform ${activeSubmenu === link.label ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                )}
              </div>

              {link.subLinks && activeSubmenu === link.label && (
                <div className="bg-[#fcfbf8] rounded-lg mb-2 py-2">
                  {link.subLinks.map((sub) => (
                    <Link
                      key={sub.label}
                      to={sub.href}
                      className="block px-6 py-2 text-sm text-olive hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;