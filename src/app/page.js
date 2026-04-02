'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
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
        <Hero />
        <Tools />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
