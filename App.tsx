
import React, { useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Features from './components/Features';
import Process from './components/Process';
import Proof from './components/Proof';
import Qualifiers from './components/Qualifiers';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen grid-bg">
      <Navbar onNavClick={scrollToSection} />
      
      <main>
        <div id="hero">
          <Hero onAuditClick={() => scrollToSection('apply')} />
        </div>

        <div id="what-is-monetizing">
          <Section title="What Monetizing Is" subtitle="Helping creators build and launch custom digital products.">
            <Features />
          </Section>
        </div>

        <div id="who-it-is-for">
          <Section title="Who This Is For" subtitle="Creators without custom products who want to monetize their audience." grayBg>
            <Qualifiers />
          </Section>
        </div>

        <div id="the-problem">
          <Section title="The Problem" subtitle="The missed opportunities when you don't have your own product.">
            <Proof />
          </Section>
        </div>

        <div id="how-it-works">
          <Section title="How It Works" subtitle="A structured path from positioning to launch." grayBg>
            <Process />
          </Section>
        </div>

        <div id="apply">
          <Section title="Application" subtitle="Start your product creation journey with YGLABZ.">
            <ApplicationForm />
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
