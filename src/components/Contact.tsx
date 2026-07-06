import axiosInstance from "@/services/axiosInstance";
import React, { useState } from "react";
import axios from "axios";


export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);
  const handleContactSubmit = async (e: React.FormEvent) => {
    try {
    e.preventDefault();
    setIsLoading(true);
    await axios.post("/api/contact", contactForm);
    setIsLoading(false);
    setFormSubmitted(true);
    setContactForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      alert("Failed to send message. Please try again later.");
      setIsLoading(false);
      setFormSubmitted(false);
    }
  };

  return (
     <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="text-blue-500 font-semibold tracking-widest text-xs uppercase">Contact Core</span>
              <div className="w-8 h-1px bg-blue-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Let&apos;s Architect Your Vision</h2>
            <p className="text-gray-400 leading-relaxed font-light">
              Aapko apne startup, product prototype, mobile interfaces, ya hardware desktop integration systems par discussion karni ho? Details share kijiye taaki hum efficient performance metrics ke sath build shuru kar saken.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-950 border border-gray-900 rounded-xl text-blue-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300">Direct Email Channels</h4>
                  <p className="text-sm text-gray-400">hasnain.alam@example.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-950 border border-gray-900 rounded-xl text-cyan-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300">Geographical Scope</h4>
                  <p className="text-sm text-gray-400">Karachi, Sindh, Pakistan (Open to Global Remote / Relocation)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Interactive Email Form Grid */}
          <div className="lg:col-span-7 bg-gray-950/60 border border-gray-900 p-8 rounded-3xl relative">
            {formSubmitted ? (
              <div className="absolute inset-0 bg-[#080b13]/95 z-20 rounded-3xl flex flex-col items-center justify-center text-center p-6 transition-opacity">
                <div className="w-16 h-16 bg-blue-500/15 text-blue-400 rounded-full flex items-center justify-center text-2xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-white">System Handshake Completed!</h3>
                <p className="text-gray-400 text-sm max-w-sm mt-2 leading-relaxed">
                  Aapka message pipeline mein save ho chuka hai. Main agle 24 hours ke andar contact coordinates verify karke revert back karunga.
                </p>
              </div>
            ) : null}

            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full bg-gray-900/60 border border-gray-900 focus:border-blue-500 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full bg-gray-900/60 border border-gray-900 focus:border-blue-500 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Subject Context</label>
                <input
                  type="text"
                  required
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  className="w-full bg-gray-900/60 border border-gray-900 focus:border-blue-500 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Message Payload</label>
                <textarea
                  rows={4}
                  required
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full bg-gray-900/60 border border-gray-900 focus:border-blue-500 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
              disabled={isLoading}
                type="submit"
                className="w-full py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all text-sm uppercase tracking-wider"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </section>
  );
}