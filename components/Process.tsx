import React from 'react';
import { STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-[#f7f9f5]">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-bold  tracking-widest text-sm">
            Quy trình làm việc
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-olive mt-2">
            6 Bước Triển Khai Chuyên Nghiệp
          </h2>
        </div>
        <div className="relative">
          {/* Line connecting steps (hidden on mobile) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
            {STEPS.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center group cursor-default">
                <div className="size-16 rounded-full bg-white border-4 border-[#eef4e7] group-hover:border-primary flex items-center justify-center text-olive font-bold text-xl shadow-sm mb-4 transition-colors z-10 relative">
                  {step.id}
                </div>
                <h3 className="font-bold text-olive mb-2">{step.title}</h3>
                <p className="text-xs text-olive/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;