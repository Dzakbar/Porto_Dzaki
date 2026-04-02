'use client';

import { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Show loading screen for 1.2 seconds only
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className={styles.loadingScreen}>
            <div className={styles.loadingContainer}>
                <div className={styles.logo}>
                    <span className={styles.initial}>D</span>
                </div>
                <p className={styles.text}>Loading...</p>
                <div className={styles.loader}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                </div>
            </div>
        </div>
    );
}
