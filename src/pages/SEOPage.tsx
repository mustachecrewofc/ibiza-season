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
    <div className="min-h-screen bg-[#0A0A0F]">
      <Navbar />

      <main id="main-content">
        <HeroSection />
        <HeroBg />
        <IntroVideoSection />
        <BuiltToBeFoundSection />
        <ChatSemrushSection />
        <SEOReviewSection />
        <LetLovableFixSection />
        <WhatsPossibleSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
