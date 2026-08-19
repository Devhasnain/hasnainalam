import { faqsData } from "@/constants/faqs";

import Accordion from "./Accordion";


const Faqs = () => {
  return (
    <section
      id="faqs"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto z-10 relative"
    >
      <div className="text-center mb-16">
        <div className="flex items-center justify-center space-x-3">
          <span className="text-blue-500 font-semibold tracking-widest text-xs uppercase">
            FAQ's
          </span>
          <div className="w-8 h-px bg-blue-500" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          MERN Stack &amp; Next.js Developer FAQs
        </h2>
        <p className="text-gray-300 text-base mt-4 font-light">
          Common questions about hiring a MERN Stack, Next.js, React Native, and
          Electron.js developer — covering my process, tech stack, and approach
          to building production-ready applications.
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
