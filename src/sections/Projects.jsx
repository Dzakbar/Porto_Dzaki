'use client';

import { useState } from 'react';
import styles from './Projects.module.css';

const projects = [
    {
        title: 'Company Profile & Logistics Monitoring System',
        role: 'Frontend Developer',
        description: 'Company profile website paired with advanced logistics monitoring dashboard. Features real-time tracking via interactive map displaying strategic delivery location markers. Complete ecosystem with API integration connecting frontend and admin dashboard.',
        techStack: ['Next.js', 'React', 'Laravel', 'REST API', 'Maps', 'Admin Dashboard'],
        color: '#FF6B6B',
    },
   
   
    {
        title: 'AR Board Games',
        role: 'Game Product Designer',
        description: 'Interactive augmented reality board game integrating physical cards with digital AR experience. Designed custom game cards, packaging, and comprehensive gameplay guidance document. Built with Unity, featuring real-time AR tracking for immersive gaming experience.',
        techStack: ['Unity', 'AR Technology', 'C#', 'Card Design', '3D Modeling', 'Game Design'],
        color: '#FA709A',
    },
    {
        title: "iQuarium Mobile & Ecosystem",
        role: "Frontend Developer & Mobile Developer",
        description: "iQuarium is an e-learning and e-commerce platform for ornamental fish enthusiasts. Features a mobile app built with Android Studio (Java), company profile website (HTML, Bootstrap), and admin dashboard (Laravel), all seamlessly connected via APIs.",
        techStack: ["Android Studio", "Java", "HTML", "Bootstrap", "Laravel", "REST API"],
        color: "#8B5CF6",
    },
    {
        title: 'Hafidz Catering Mobile App Design',
        role: 'UI/UX Designer',
        description: 'Mobile application UI/UX design for Hafidz Catering, a catering service provider serving individuals, schools, and events. Comprehensive case study featuring user research, wireframes, prototypes, and design system implementation for seamless catering ordering experience.',
        techStack: ['Figma', 'UI Design', 'UX Design', 'User Research', 'Wireframing', 'Prototyping'],
        color: '#00D4FF',
    },
];

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const displayed = showAll ? projects : projects.slice(0, 4);

    const getProjectImage = (project) => {
        if (project.title === "Company Profile & Logistics Monitoring System") {
            return "/mjp.png";
        } else if (project.title === "AR Board Games") {
            return "/ar.png";
        } else if (project.title === "Hafidz Catering Mobile App Design") {
            return "/ui_ux.png";
        } else if (project.title === "iQuarium Mobile & Ecosystem") {
            return "/iQuarium Mobile & Webiste.png";
        }
        return null;
    };

    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>What Ived Worked On</h2>
                <p className={styles.sectionSubtitle}>Here are some of my recent projects</p>

                <div className={styles.grid}>
                    {displayed.map((project, idx) => (
                        <div 
                            key={idx} 
                            className={styles.card}
                            onClick={() => setSelectedProject(project)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className={styles.cardThumb} style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)` }}>
                                {getProjectImage(project) ? (
                                    <img 
                                        src={getProjectImage(project)} 
                                        alt={project.title} 
                                        style={{ 
                                            width: '100%', 
                                            height: '100%', 
                                            objectFit: 'cover',
                                            objectPosition: 'center center',
                                            display: 'block'
                                        }} 
                                    />
                                ) : (
                                    <div className={styles.cardThumbContent}>
                                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                            <line x1="8" y1="21" x2="16" y2="21" />
                                            <line x1="12" y1="17" x2="12" y2="21" />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            <div className={styles.cardBody}>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p className={styles.cardRole}>{project.role}</p>
                                <p className={styles.cardDesc}>{project.description}</p>

                                <div className={styles.techStack}>
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className={styles.techPill}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {projects.length > 4 && (
                    <div className={styles.showMore}>
                        <button onClick={() => setShowAll(!showAll)} className={styles.showMoreBtn}>
                            {showAll ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                )}
            </div>

            {selectedProject && (
                <div className={styles.modal} onClick={() => setSelectedProject(null)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button 
                            className={styles.modalClose}
                            onClick={() => setSelectedProject(null)}
                        >
                            ✕
                        </button>

                        {getProjectImage(selectedProject) ? (
                            <img 
                                src={getProjectImage(selectedProject)} 
                                alt={selectedProject.title}
                                className={styles.modalImage}
                            />
                        ) : (
                            <div className={styles.modalImagePlaceholder} style={{ background: `linear-gradient(135deg, ${selectedProject.color}22, ${selectedProject.color}08)` }}>
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke={selectedProject.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                            </div>
                        )}

                        <div className={styles.modalDetails}>
                            <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
                            <p className={styles.modalRole}>{selectedProject.role}</p>
                            <p className={styles.modalDesc}>{selectedProject.description}</p>

                            <div className={styles.modalTechStack}>
                                <h3>Technologies Used:</h3>
                                <div className={styles.techStackList}>
                                    {selectedProject.techStack.map((tech, i) => (
                                        <span key={i} className={styles.techPill}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
