
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

        <div id="what-we-do">
          <Section title="What We Do" subtitle="Backend systems designed for precision.">
            <Features />
          </Section>
        </div>

        <div id="how-it-works">
          <Section title="How It Works" subtitle="A structured path to systemized revenue." grayBg>
            <Process />
          </Section>
        </div>

        <div id="proof">
          <Section title="Observed Patterns" subtitle="Credibility through frameworks and execution.">
            <Proof />
          </Section>
        </div>

        <div id="qualifiers">
          <Section title="Strategic Fit" subtitle="We work exclusively with creators ready for systems." grayBg>
            <Qualifiers />
          </Section>
        </div>

        <div id="apply">
          <Section title="Private Audit" subtitle="Apply for a systems review of your current operations.">
            <ApplicationForm />
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
