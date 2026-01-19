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
                className="text-olive font-medium hover:text-primary transition-colors text-xs xl:text-sm uppercase tracking-wide flex items-center gap-1 whitespace-nowrap"
                to={link.href}
              >
                {link.label}
                {link.subLinks && (
                  <span className="material-symbols-outlined text-xs">expand_more</span>
                )}
              </Link>

              {link.subLinks && (
                <div className={`absolute top-16 left-0 bg-white border border-[#eef4e7] shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 ${link.label === 'Dịch vụ' ? 'w-[480px] grid grid-cols-2 p-4' : 'w-64'}`}>
                  {link.subLinks.map((sub: any) => (
                    <div key={sub.label} className={link.label === 'Dịch vụ' ? 'flex flex-col' : ''}>
                      <Link
                        to={sub.href}
                        className={`block px-6 py-2 text-sm font-bold text-olive hover:text-primary transition-colors ${link.label === 'Dịch vụ' ? 'mb-2' : ''}`}
                      >
                        {sub.label}
                      </Link>
                      {sub.items ? (
                        <div className="flex flex-col pl-6">
                          {sub.items.map((item: any) => (
                            <Link
                              key={item.label}
                              to={item.href}
                              className="block py-1.5 text-[13px] text-olive/70 hover:text-primary transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2 xl:gap-3 shrink-0">
          <button className="hidden xl:flex h-10 px-4 items-center justify-center rounded-xl bg-background-off border border-[#dde8ce] text-olive font-bold text-xs hover:bg-[#eef4e7] transition-colors gap-2 whitespace-nowrap">
            <span className="material-symbols-outlined text-accent text-sm">call</span>
            <span className="text-accent underline decoration-accent/30 underline-offset-4">0868 462 462</span>
          </button>
          <button className="flex h-10 px-4 md:px-6 items-center justify-center rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-xs md:text-sm shadow-md transition-all transform hover:-translate-y-0.5 whitespace-nowrap">
            Nhận tư vấn
          </button>
          <button
            className="lg:hidden h-10 w-10 flex items-center justify-center rounded-xl bg-background-off hover:bg-gray-100 ml-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-olive">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-[#eef4e7] shadow-lg py-4 px-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
          {NAV_LINKS.map((link) => {
            const isService = link.label === 'Dịch vụ';
            return (
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
                    {link.subLinks.map((sub: any) => (
                      <div key={sub.label} className="flex flex-col">
                        <div className="flex items-center justify-between pr-4">
                          <Link
                            to={sub.href}
                            className={`block px-6 py-2 text-sm font-bold text-olive hover:text-primary transition-colors ${isService ? 'text-primary/80' : ''}`}
                            onClick={() => !sub.items && setMobileMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        </div>
                        {sub.items && (
                          <div className="flex flex-col pl-10 pb-2">
                            {sub.items.map((item: any) => (
                              <Link
                                key={item.label}
                                to={item.href}
                                className="block py-1.5 text-sm text-olive/70 hover:text-primary transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;