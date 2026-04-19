import { SiNextdotjs, SiReact, SiJavascript, SiPython, SiTailwindcss, SiBootstrap, SiNumpy, SiPandas, SiUnity, SiPostgresql, SiFigma, SiGithub } from 'react-icons/si';
import { FaChartBar } from 'react-icons/fa';
import styles from './Tools.module.css';

const tools = [
    { name: 'Next JS', category: 'Framework', icon: SiNextdotjs, color: '#000000' },
    { name: 'React JS', category: 'Library', icon: SiReact, color: '#61DAFB' },
    { name: 'JavaScript', category: 'Language', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Python', category: 'Language', icon: SiPython, color: '#3776AB' },
    { name: 'Tailwind', category: 'CSS Framework', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Bootstrap', category: 'CSS Framework', icon: SiBootstrap, color: '#7952B3' },
    { name: 'NumPy', category: 'Python Library', icon: SiNumpy, color: '#013243' },
    { name: 'Pandas', category: 'Data Analysis', icon: SiPandas, color: '#150458' },
    { name: 'Matplotlib', category: 'Data Visualization', icon: FaChartBar, color: '#006A4E' },
    { name: 'Unity', category: 'Game Engine', icon: SiUnity, color: '#FFFFFF' },
    { name: 'SQL', category: 'Database', icon: SiPostgresql, color: '#336791' },
    { name: 'Figma', category: 'Design Tool', icon: SiFigma, color: '#F24E1E' },
    { name: 'GitHub', category: 'Version Control', icon: SiGithub, color: '#181717' },
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
                                <tool.icon 
                                    size={48}
                                    style={{ color: tool.color }}
                                    className={styles.toolIcon}
                                />
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
