import React from 'react';
import { TRUST_ITEMS } from '../constants';

const TrustBar: React.FC = () => {
  return (
    <section className="border-y border-[#dde8ce] bg-white">
      <div className="container py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_ITEMS.map((item, index) => (
            <div key={index} className="flex items-center gap-4 group cursor-default">
              <div className="size-12 rounded-full bg-[#f2f7ed] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div>
                <h3 className="font-bold text-olive text-sm md:text-base">
                  {item.title}
                </h3>
                <p className="text-xs text-olive/60">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;