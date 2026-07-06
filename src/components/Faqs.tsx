import { faqsData } from "@/constants/faqs";
import React from "react";


const Faqs = () => {
  return (
    <section
      id="faqs"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto z-10 relative"
    >
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-3 py-1 mb-3">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
            FAQ Hub
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Technical Architecture FAQs
        </h2>
        <p className="text-gray-500 text-sm mt-4 font-light">
         Common questions about my development approach, technical decisions, and cross-platform framework handling.
        </p>
      </div>

      {/* Accordion Component List Loop */}
      <div className="space-y-4" data-aos="fade-up">
        {faqsData.map((faq, index) => {
          // Local state toggle framework handles the open/close triggers seamlessly
          const [isOpen, setIsOpen] = React.useState(false);

          return (
            <div
              key={index}
              className="bg-gray-950/40 border border-gray-900 hover:border-gray-800/80 rounded-2xl transition-all duration-300 overflow-hidden shadow-lg"
            >
              {/* FAQ Accordion Header Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none select-none group"
              >
                <span className="text-base font-semibold text-gray-200 group-hover:text-blue-400 transition-colors duration-200 pr-4">
                  {faq.question}
                </span>
                <span
                  className={`text-xl transform transition-transform duration-300 font-mono ${
                    isOpen
                      ? "rotate-180 text-blue-400"
                      : "text-gray-600 group-hover:text-gray-400"
                  }`}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* FAQ Smooth Collapsible Body Panel */}
              <div
                className={`transition-all duration-300 ease-in-out border-gray-900/40 ${
                  isOpen
                    ? "max-h-60 border-t p-6 bg-gray-950/20"
                    : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faqs;
