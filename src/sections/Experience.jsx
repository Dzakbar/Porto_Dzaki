'use client';

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
   
    
];

const galleryItems = experiences.flatMap((experience) =>
    (experience.photos || [])
        .filter(Boolean)
        .map((photo, photoIndex) => ({
            experience,
            photo,
            photoIndex,
            totalPhotos: experience.photos.length,
        }))
);

export default function Experience() {
    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.header}>
                <div className={styles.headerText}>
                    <h2 className={styles.sectionTitle}>My Experience</h2>
                </div>
            </div>

            <div className={styles.galleryGrid}>
                {galleryItems.map((item, idx) => (
                    <div
                        key={`${item.experience.title}-${item.photoIndex}`}
                        className={`${styles.galleryTile} ${idx % 5 === 0 ? styles.featureTile : ''}`}
                    >
                        <img
                            src={item.photo}
                            alt={`${item.experience.title} photo ${item.photoIndex + 1}`}
                            className={styles.galleryImage}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
