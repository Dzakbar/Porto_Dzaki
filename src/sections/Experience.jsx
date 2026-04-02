'use client';

import { useRef, useState } from 'react';
import styles from './Experience.module.css';

const experiences = [
    {
        title: 'Data Analysis Workshop',
        period: 'Jan 2025 - Mar 2025',
        description: 'Intensive data analysis workshop covering Python, SQL, and data visualization techniques. Developed real-world analytical solutions for business problems.',
        photos: [null, null, null],
        tags: ['Python', 'SQL', 'Data Viz'],
    },
    {
        title: 'Web Development Bootcamp',
        period: 'Jun 2024 - Aug 2024',
        description: 'Full-stack web development bootcamp focusing on React, Next.js, and modern web technologies. Built multiple projects from scratch.',
        photos: [null, null],
        tags: ['React', 'Next.js', 'Node.js'],
    },
    {
        title: 'Campus Tech Organization',
        period: 'Sep 2023 - Present',
        description: 'Active member and contributor in campus technology organization. Leading technical workshops and mentoring junior members.',
        photos: [null, null, null, null],
        tags: ['Leadership', 'Teaching', 'Tech'],
    },
    {
        title: 'Freelance Projects',
        period: 'Mar 2024 - Present',
        description: 'Taking freelance projects for data analysis and web development. Working with various clients on dashboards, websites, and data solutions.',
        photos: [null, null, null],
        tags: ['Freelance', 'Dashboard', 'Web'],
    },
];

function PhotoGallery({ photos, title }) {
    const [currentPhoto, setCurrentPhoto] = useState(0);

    const nextPhoto = (e) => {
        e.stopPropagation();
        setCurrentPhoto((prev) => (prev + 1) % photos.length);
    };

    const prevPhoto = (e) => {
        e.stopPropagation();
        setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
    };

    return (
        <div className={styles.gallery}>
            <div className={styles.galleryView}>
                {/* Placeholder photo */}
                <div className={styles.photoPlaceholder}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span>Photo {currentPhoto + 1}</span>
                </div>
            </div>

            {photos.length > 1 && (
                <>
                    <button className={`${styles.galleryBtn} ${styles.galleryPrev}`} onClick={prevPhoto} aria-label="Previous photo">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>
                    <button className={`${styles.galleryBtn} ${styles.galleryNext}`} onClick={nextPhoto} aria-label="Next photo">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>

                    <div className={styles.dots}>
                        {photos.map((_, i) => (
                            <button
                                key={i}
                                className={`${styles.dot} ${i === currentPhoto ? styles.dotActive : ''}`}
                                onClick={(e) => { e.stopPropagation(); setCurrentPhoto(i); }}
                                aria-label={`Photo ${i + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}

            <div className={styles.photoCount}>
                {currentPhoto + 1} / {photos.length}
            </div>
        </div>
    );
}

export default function Experience() {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleMouseLeave = () => setIsDragging(false);

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const scrollTo = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = 380;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.header}>
                <div className={styles.headerText}>
                    <h2 className={styles.sectionTitle}>My Experience</h2>
                    <p className={styles.sectionSubtitle}>Scroll to explore my journey & documentation</p>
                </div>
                <div className={styles.scrollButtons}>
                    <button className={styles.scrollBtn} onClick={() => scrollTo('left')} aria-label="Scroll left">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>
                    <button className={styles.scrollBtn} onClick={() => scrollTo('right')} aria-label="Scroll right">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </div>
            </div>

            <div
                className={styles.carousel}
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
            >
                {experiences.map((exp, idx) => (
                    <div key={idx} className={styles.card}>
                        <PhotoGallery photos={exp.photos} title={exp.title} />

                        <div className={styles.cardBody}>
                            <h3 className={styles.cardTitle}>{exp.title}</h3>
                            <p className={styles.cardPeriod}>{exp.period}</p>
                            <p className={styles.cardDesc}>{exp.description}</p>

                            <div className={styles.tags}>
                                {exp.tags.map((tag, i) => (
                                    <span key={i} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
