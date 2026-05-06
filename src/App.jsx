import React from 'react';
import { Video, TrendingUp, Code, Cpu, Shield, Handshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowlingMediaSite = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter text-slate-900">
          HOWLING<span className="text-indigo-600">MEDIA</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
          <a href="#approach" className="hover:text-indigo-600 transition-colors">Our Approach</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>
        <button className="bg-slate-900 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">
          Start a Project
        </button>
      </nav>

      {/* Hero Section */}
      <header className="px-8 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold mb-6">
          <Cpu size={16} />
          <span>AI-Powered Digital Growth</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl">
          We don't just build brands. <br className="hidden md:block"/> We engineer their future.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
          Howling Media blends technical precision with creative vision. From high-end video production to AI-driven social growth, we are your long-term partners in digital dominance.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-md font-semibold flex items-center justify-center hover:bg-indigo-700 transition-colors">
            Explore Our Solutions <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="bg-white py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-2">Technical & Creative Solutions</h2>
          <p className="text-slate-600 mb-12 max-w-2xl">Comprehensive strategies designed to scale your business across every digital touchpoint.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-8 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow bg-slate-50">
              <TrendingUp className="text-indigo-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Growth & Advertising</h3>
              <p className="text-slate-600 leading-relaxed">Data-driven social media management and ad campaigns optimized by machine learning for maximum ROI.</p>
            </div>
            
            {/* Service 2 */}
            <div className="p-8 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow bg-slate-50">
              <Code className="text-indigo-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Web & Tech Infrastructure</h3>
              <p className="text-slate-600 leading-relaxed">Scalable, lightning-fast websites and technical ecosystems built to convert visitors into loyal clients.</p>
            </div>

            {/* Service 3 */}
            <div className="p-8 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow bg-slate-50">
              <Video className="text-indigo-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Video Production</h3>
              <p className="text-slate-600 leading-relaxed">Cinematic business visuals and promotional videos that capture attention and communicate your core value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us / Approach Section */}
      <section id="approach" className="py-24 max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Built on Trust. <br/>Powered by Innovation.</h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              We view our clients as partners. We aren't here for quick fixes; we are committed to the long-term architecture of your brand. By integrating traditional design principles with next-generation AI tools, we keep you ahead of the curve.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-slate-800 font-medium">
                <Shield className="text-emerald-500 mr-3" size={24} /> Uncompromising Data Security & Trust
              </li>
              <li className="flex items-center text-slate-800 font-medium">
                <Handshake className="text-indigo-500 mr-3" size={24} /> Long-Term Strategic Partnerships
              </li>
              <li className="flex items-center text-slate-800 font-medium">
                <Cpu className="text-rose-500 mr-3" size={24} /> AI-Enhanced Analytics & Workflows
              </li>
            </ul>
          </div>
          
          {/* Abstract Visual Placeholder */}
          <div className="w-full md:w-1/2 bg-slate-900 rounded-2xl aspect-square flex items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-slate-900 to-slate-900"></div>
            <div className="z-10 text-center">
               <Cpu className="text-indigo-400 mx-auto mb-4" size={64} />
               <p className="text-indigo-200 font-mono text-sm tracking-widest uppercase">Intelligent Infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer id="contact" className="bg-slate-900 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to scale your agency?</h2>
          <p className="text-slate-400 mb-10">Let's discuss your brand's technical and creative future.</p>
          <div className="flex justify-center space-x-4">
            <input 
              type="email" 
              placeholder="Enter your work email" 
              className="bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-indigo-500 w-64"
            />
            <button disabled className="bg-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-indigo-500 transition-colors">
              Connect
            </button>
            <button className="bg-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-indigo-500 transition-colors">
              <a href="https://wa.me/918910241042" target="_blank">Connect with WhatsApp</a>
            </button>
          </div>
          <div className="mt-20 pt-8 border-t border-slate-800 text-slate-500 text-sm flex justify-between items-center">
            <p>&copy; 2026 Howling Media. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default HowlingMediaSite;