'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import Contact from '@/sections/Contact';
import Experience from '@/sections/Experience';
import Hero from '@/sections/Hero';
import Projects from '@/sections/Projects';
import Tools from '@/sections/Tools';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ScrollAnimationWrapper isHero>
          <Hero />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <Tools />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <Projects />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <Experience />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <Contact />
        </ScrollAnimationWrapper>
      </main>
      <Footer />
    </>
  );
}
