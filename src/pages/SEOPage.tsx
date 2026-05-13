import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import HeroBg from '../components/sections/HeroBg';
import IntroVideoSection from '../components/sections/IntroVideoSection';
import BuiltToBeFoundSection from '../components/sections/BuiltToBeFoundSection';
import ChatSemrushSection from '../components/sections/ChatSemrushSection';
import SEOReviewSection from '../components/sections/SEOReviewSection';
import LetLovableFixSection from '../components/sections/LetLovableFixSection';
import WhatsPossibleSection from '../components/sections/WhatsPossibleSection';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-[#FCFBF8]">
      <Navbar />

      <main id="main-content">
        {/* Dark hero section */}
        <HeroSection />

        {/* Blue glow + dark-to-light transition */}
        <HeroBg />

        {/* Light sections */}
        <IntroVideoSection />
        <BuiltToBeFoundSection />
        <ChatSemrushSection />
        <SEOReviewSection />
        <LetLovableFixSection />
        <WhatsPossibleSection />
        <FAQSection />

        {/* Dark CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
