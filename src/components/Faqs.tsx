import { faqsData } from "@/constants/faqs";

import Accordion from "./Accordion";


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
          Common questions about my development approach, technical decisions,
          and cross-platform framework handling.
        </p>
      </div>

      {/* Accordion Component List Loop */}
      <div className="space-y-4" data-aos="fade-up">
        {faqsData.map((faq, index) => (
          <Accordion key={index} q={faq.question} a={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
