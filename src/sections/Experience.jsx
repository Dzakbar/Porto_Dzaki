'use client';

import { useRef, useState } from 'react';
import styles from './Experience.module.css';


const experiences = [
    {
        title: 'Student Mobility Program - Guangdong Construction Polytechnic',
        period: '2024',
        location: 'Guangdong, China',
        description: 'An incredible international exchange experience in China where I immersed myself in a dynamic learning environment. Mastered data analysis and visualization techniques, explored cutting-edge drone technology, and developed 3D modeling and motion graphics skills. Beyond technical excellence, I gained valuable cultural insights and expanded my global perspective through meaningful interactions with the local community and international peers.',
        highlights: [
            'Mastered data analysis and visualization with industry-standard tools',
            'Explored and operated advanced drone technology',
            'Developed 3D modeling and motion graphics projects',
            'Gained deep cultural insights and global perspectives',
            'Built meaningful connections with international peers'
        ],
        photos: ['/china1.jpg', '/china2.jpg', '/china3.jpg', '/china4.jpg'],
        tags: ['Data Analysis', 'Visualization', 'Drone', '3D Modeling', 'Motion Graphics', 'Cultural Exchange'],
    },
    {
        title: 'Gathering Yatim Part 3 - Head of Decoration Division',
        period: '2024',
        location: 'Villa, Puncak Bogor',
        description: 'Volunteered as Kadiv Dekorasi (Head of Decoration Division) for Gathering Yatim Part 3, an event organized by Sahabat Berbagi aimed at bringing joy to orphans. Conceptualized and executed a cohesive visual theme while leading a dedicated team and optimizing budget allocation without compromising the quality of decorations.',
        highlights: [
            'Designed comprehensive decoration theme translated into stunning visual artworks',
            'Led and coordinated decoration team members to execute vision effectively',
            'Strategically managed budget for materials and resources while maintaining quality standards',
            'Created memorable and engaging environment for over 50+ orphans',
            'Balanced creative excellence with practical resource management'
        ],
        photos: ['/gy3.1.JPG', '/gy3.2.JPG', '/gy3.4.JPG', '/gy3.5.JPG'],
        tags: ['Leadership', 'Event Planning', 'Decoration Design', 'Team Management', 'Budget Planning', 'Volunteering'],
    },
    {
        title: 'Web Development Bootcamp',
        period: 'Jun 2024 - Aug 2024',
        location: 'Online',
        description: 'Full-stack web development bootcamp focusing on React, Next.js, and modern web technologies. Built multiple projects from scratch.',
        highlights: [
            'Built 5+ full-stack projects from concept to deployment',
            'Mastered React hooks and Next.js server components',
            'Implemented RESTful APIs and database optimization',
            'Collaborated in agile team environment'
        ],
        photos: [null, null],
        tags: ['React', 'Next.js', 'Node.js'],
    },
    {
        title: 'Campus Tech Organization',
        period: 'Sep 2023 - Present',
        location: 'Campus',
        description: 'Active member and contributor in campus technology organization. Leading technical workshops and mentoring junior members.',
        highlights: [
            'Organized and led 10+ technical workshops',
            'Mentored 15+ junior members in web development',
            'Managed community events and hackathons',
            'Built collaborative learning environment'
        ],
        photos: [null, null, null, null],
        tags: ['Leadership', 'Teaching', 'Tech'],
    },
    {
        title: 'Freelance Projects',
        period: 'Mar 2024 - Present',
        location: 'Remote',
        description: 'Taking freelance projects for data analysis and web development. Working with various clients on dashboards, websites, and data solutions.',
        highlights: [
            'Delivered 8+ successful freelance projects',
            'Created interactive dashboards for data-driven decision making',
            'Built responsive websites with excellent UX',
            'Maintained 100% client satisfaction rate'
        ],
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
                {photos[currentPhoto] ? (
                    <img 
                        src={photos[currentPhoto]} 
                        alt={`${title} photo ${currentPhoto + 1}`}
                        className={styles.photo}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                ) : (
                    <div className={styles.photoPlaceholder}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <polyline points="21 15 16 10 5 21" />
                        </svg>
                        <span>Photo {currentPhoto + 1}</span>
                    </div>
                )}
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

function DetailModal({ experience, isOpen, onClose }) {
    if (!isOpen || !experience) return null;

    return (
        <>
            <div className={styles.modalOverlay} onClick={onClose} />
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>{experience.title}</h2>
                    <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <div className={styles.modalContent}>
                    <div className={styles.modalGrid}>
                        <div className={styles.modalLeft}>
                            {experience.photos && experience.photos[0] && (
                                <img 
                                    src={experience.photos[0]} 
                                    alt={experience.title}
                                    className={styles.modalImage}
                                />
                            )}
                        </div>

                        <div className={styles.modalRight}>
                            <div className={styles.infoGroup}>
                                <span className={styles.label}>📅 Period</span>
                                <p className={styles.value}>{experience.period}</p>
                            </div>

                            {experience.location && (
                                <div className={styles.infoGroup}>
                                    <span className={styles.label}>📍 Location</span>
                                    <p className={styles.value}>{experience.location}</p>
                                </div>
                            )}

                            <div className={styles.infoGroup}>
                                <span className={styles.label}>📝 Description</span>
                                <p className={styles.value}>{experience.description}</p>
                            </div>
                        </div>
                    </div>

                    {experience.highlights && experience.highlights.length > 0 && (
                        <div className={styles.highlightsSection}>
                            <h3 className={styles.highlightsTitle}>Key Highlights</h3>
                            <ul className={styles.highlightsList}>
                                {experience.highlights.map((highlight, i) => (
                                    <li key={i} className={styles.highlightListItem}>
                                        <span className={styles.checkmark}>✓</span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {experience.photos && experience.photos.length > 1 && (
                        <div className={styles.photosSection}>
                            <h3 className={styles.photosTitle}>Photo Gallery</h3>
                            <div className={styles.photoGrid}>
                                {experience.photos.map((photo, i) => (
                                    photo && (
                                        <img 
                                            key={i}
                                            src={photo} 
                                            alt={`${experience.title} ${i + 1}`}
                                            className={styles.photoGridItem}
                                        />
                                    )
                                ))}
                            </div>
                        </div>
                    )}

                    <div className={styles.tagsSection}>
                        <h3 className={styles.tagsTitle}>Skills & Tools</h3>
                        <div className={styles.tagsGrid}>
                            {experience.tags.map((tag, i) => (
                                <span key={i} className={styles.tagLarge}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function Experience() {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (experience) => {
        setSelectedExperience(experience);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

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
                    <div key={idx} className={styles.card} onClick={() => openModal(exp)} style={{ cursor: 'pointer' }}>
                        <PhotoGallery photos={exp.photos} title={exp.title} />

                        <div className={styles.cardBody}>
                            <h3 className={styles.cardTitle}>{exp.title}</h3>
                            <p className={styles.cardPeriod}>{exp.period}</p>
                            {exp.location && <p className={styles.cardLocation}>📍 {exp.location}</p>}
                            <p className={styles.cardDesc}>{exp.description}</p>
                            
                            {exp.highlights && exp.highlights.length > 0 && (
                                <ul className={styles.highlights}>
                                    {exp.highlights.map((highlight, i) => (
                                        <li key={i} className={styles.highlightItem}>{highlight}</li>
                                    ))}
                                </ul>
                            )}

                            <div className={styles.tags}>
                                {exp.tags.map((tag, i) => (
                                    <span key={i} className={styles.tag}>{tag}</span>
                                ))}
                            </div>

                            <button className={styles.viewDetailsBtn} onClick={(e) => { e.stopPropagation(); openModal(exp); }}>
                                View Full Details →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <DetailModal experience={selectedExperience} isOpen={isModalOpen} onClose={closeModal} />
        </section>
    );
}
