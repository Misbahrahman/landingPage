import React, { useState, useEffect } from 'react';
import { GradientButton } from './components/Button';
import { Header } from './components/Header';
import { Card, Section } from './components/Layout';
import { industries, services } from './Data';
import { ArrowRight, ChevronDown, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import IndustriesSection from './components/Industries';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white text-center">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollY={scrollY}
        onNavClick={scrollToSection}
      />

      {/* Hero Section - Full height minus header */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-32">
        <div className="max-w-5xl mx-auto pt-20">
          {/* Main content with staggered animations */}
          <div className="space-y-12">
            <h1 className="opacity-0 animate-[fadeDown_1s_ease-out_forwards] text-6xl md:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Bridging Vision
              </span>
              <br />
              <span className="opacity-0 animate-[fadeDown_1s_ease-out_0.3s_forwards]">
                and Technology
              </span>
              <br />
              <span className="opacity-0 animate-[fadeDown_1s_ease-out_0.6s_forwards] text-orange-500">
                Through AI
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards]">
              Committed to driving your organization toward exceptional success with scalable, powerful, and highly customized AI solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-[fadeUp_1s_ease-out_1.2s_forwards]">
              <GradientButton
                size="large"
                variant="primary"
                withArrow
                className="min-w-[240px] text-lg"
                onClick={() => window.open('https://form.jotform.com/243202155079451', '_blank')}
              >
                Connect with us
              </GradientButton>

              <GradientButton
                size="large"
                variant="outline"
                className="min-w-[240px] text-lg"
                onClick={() => window.open('https://www.linkedin.com/company/alzairai/', '_blank')}
              >
                Learn More
              </GradientButton>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            onClick={scrollToNext}
            className="absolute bottom-12 inset-x-0 mx-auto w-max cursor-pointer opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]"
          >
            <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors duration-300">
              <div className="text-sm tracking-wider">Scroll to explore</div>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Scroll progress indicator */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 hidden lg:block opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
          <div className="h-24 w-0.5 bg-gray-700 rounded-full">
            <div
              className="w-full bg-orange-500 rounded-full transition-all duration-300"
              style={{
                height: `${Math.min((scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`
              }}
            />
          </div>
        </div>
      </section>

      {/* Services Section - Consistent height */}
      <Section id="services" className="relative overflow-hidden px-4 py-32 min-h-screen">
        {/* Gradient background effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            AI Solutions, Customized for Your Needs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="opacity-0 animate-[fadeUp_1s_ease-out_forwards]"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className={`
                  relative group
                  h-[420px] w-full
                  rounded-3xl
                  p-8
                  overflow-hidden
                  transition-all duration-500
                  hover:transform hover:scale-[1.02]
                `}>
                  {/* Glass background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl" />

                  {/* Border gradient */}
                  <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white/20 to-white/5" />

                  {/* Content container */}
                  <div className="relative h-full flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/50 to-orange-500/50 p-0.5">
                        <div className="w-full h-full rounded-2xl bg-black/40 backdrop-blur-xl flex items-center justify-center">
                          {service.icon}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-white/90 bg-clip-text">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300/90 leading-relaxed flex-grow">
                      {service.description}
                    </p>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Industries Section - Increased height */}
      <IndustriesSection />

      {/* CTA Section - Increased height */}
      <Section
        id="contact"
        className="bg-gradient-to-r from-blue-900/20 to-orange-900/20 py-32 min-h-[80vh] flex items-center"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center opacity-0 animate-[fadeIn_1s_ease-out_forwards] px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl">
            Join leading organizations that are already leveraging our AI solutions to drive innovation and growth
          </p>
          <GradientButton size="large" withArrow className="text-lg"  onClick={() => window.open('https://form.jotform.com/243202155079451', '_blank')} >
            Get Started Now
          </GradientButton>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-black text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Alzair AI
              </h3>
              <p className="text-gray-400 text-sm">
                Bridging Vision and Technology Through AI
              </p>
              <div className="flex justify-around w-32">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                <a href="https://www.linkedin.com/company/alzairai" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                </a>
                <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#industries" className="hover:text-white transition-colors">Industries</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Services</h4>
              <ul className="space-y-2 text-gray-400">
                {services.slice(0, 4).map((service, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-white transition-colors">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Us</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:contact@company.com" className="hover:text-white transition-colors">
                    contact@company.com
                  </a>
                </p>
                <p>Hyderabad</p>

              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;