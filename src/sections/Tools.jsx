import styles from './Tools.module.css';

const tools = [
    { name: 'Next JS', category: 'Framework', devicon: 'devicon-nextjs-original', color: '#FFFFFF' },
    { name: 'React JS', category: 'Library', devicon: 'devicon-react-original', color: '#61DAFB' },
    { name: 'JavaScript', category: 'Language', devicon: 'devicon-javascript-plain', color: '#F7DF1E' },
    { name: 'Python', category: 'Language', devicon: 'devicon-python-plain', color: '#3776AB' },
    { name: 'Tailwind', category: 'CSS Framework', devicon: 'devicon-tailwindcss-plain', color: '#06B6D4' },
    { name: 'Bootstrap', category: 'CSS Framework', devicon: 'devicon-bootstrap-plain', color: '#7952B3' },
    { name: 'SQL', category: 'Database', devicon: 'devicon-postgresql-plain', color: '#336791' },
    { name: 'Excel', category: 'Data Tool', devicon: 'devicon-microsoft-excel-plain', color: '#207044' },
    { name: 'Figma', category: 'Design Tool', devicon: 'devicon-figma-plain', color: '#F24E1E' },
    { name: 'GitHub', category: 'Version Control', devicon: 'devicon-github-original', color: '#181717' },
];

export default function Tools() {
    return (
        <section id="tools" className={styles.tools}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Tools & Technologies</h2>
                <p className={styles.sectionSubtitle}>My Professional Skills</p>

                <div className={styles.grid}>
                    {tools.map((tool, idx) => (
                        <div key={idx} className={styles.toolCard}>
                            <div 
                                className={styles.iconWrapper}
                                style={{ 
                                    borderColor: tool.color,
                                    backgroundColor: `${tool.color}15`
                                }}
                            >
                                <i 
                                    className={`${tool.devicon} ${styles.toolIcon}`}
                                    style={{ color: tool.color }}
                                ></i>
                            </div>
                            <div className={styles.toolInfo}>
                                <h3 className={styles.toolName}>{tool.name}</h3>
                                <p className={styles.toolCategory}>{tool.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
