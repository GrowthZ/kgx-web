import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
    // In React we can control this, but the HTML used standard <details>. 
    // Let's enhance it by allowing only one open at a time or just stick to simple map with standard details.
    // Standard details is accessible and simple.
    
  return (
    <section className="py-20 bg-[#f7f9f5]">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-olive">Câu hỏi thường gặp</h2>
          <p className="text-olive/60 mt-2">
            Giải đáp những thắc mắc phổ biến của khách hàng về dịch vụ của KGX
          </p>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-[#dde8ce] shadow-sm"
            >
              <details className="group">
                <summary className="flex justify-between items-center font-bold text-olive cursor-pointer list-none">
                  <span>{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <span className="material-symbols-outlined">expand_more</span>
                  </span>
                </summary>
                <div className="text-olive/70 text-sm mt-3 group-open:animate-fadeIn leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;