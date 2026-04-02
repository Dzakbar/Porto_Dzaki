"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background Marquee */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeText}>
          Welcome <span className={styles.highlight}>Let's Work Together</span> 
        </div>
      </div>

      {/* Glow Effects */}
      <div className={styles.glowGold} />
      <div className={styles.glowNavy} />

      {/* Main Content */}
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Text Side */}
          <div className={styles.textSide}>
            <div className={styles.badge}>
              <div className={styles.badgeDot} />
              Available for Hire
            </div>
            <h1 className={styles.title}>
              Hi, I&apos;m <span className={styles.nameAccent}>Dzaki Ikbaar</span>
            </h1>
            <div className={styles.roleBar}>
              <span className={styles.role}>Web Developer</span>
              <span className={styles.roleDivider}>|</span>
              <span className={styles.role}>Data Analyst</span>
              <span className={styles.roleDivider}>|</span>
              <span className={styles.role}>Public Speaker</span>
            </div>
            <p className={styles.description}>
              Crafting beautiful web experiences, uncovering insights from data, and sharing knowledge through engaging presentations.
              Driven by curiosity and committed to delivering impactful solutions across web development and analytics.
            </p>
            <div className={styles.actions}>
                <a href="/cv.pdf" download className={styles.btnPrimary}>
                Download CV
              </a>
              <a href="mailto:ikbaarrizky@gmail.com" className={styles.btnOutline}>
                Contact Me
              </a>
            </div>
          </div>

          {/* Photo Side */}
          <div className={styles.photoSide}>
            <div className={styles.photoWrapper}>
              <Image
                src="/dzaki.jpg"
                alt="Dzaki Ikbaar"
                width={350}
                height={420}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
