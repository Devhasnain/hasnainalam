import { useState } from "react";


type Props = {
    q: string;
    a: string;
}

const Accordion = ({ q, a }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
     return (
            <div
              className="bg-gray-950/40 border border-gray-900 hover:border-gray-800/80 rounded-2xl transition-all duration-300 overflow-hidden shadow-lg"
            >
              {/* FAQ Accordion Header Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none select-none group"
              >
                <h5 className="text-base font-semibold text-gray-200 group-hover:text-blue-400 transition-colors duration-200 pr-4">
                  {q}
                </h5>
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
                <p className="text-gray-300 text-base leading-relaxed font-light">
                  {a}
                </p>
              </div>
            </div>
          );
};

export default Accordion;