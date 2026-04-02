'use client';

import { useEffect, useRef } from 'react';

export default function ScrollAnimationWrapper({ children, isHero = false, ...props }) {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Untuk hero section, tidak perlu animasi - shown langsung
        if (isHero) {
            return;
        }

        // Disable scroll animations - instant show
        element.classList.add('animate-in');
    }, [isHero]);

    return (
        <section ref={ref} {...props}>
            {children}
        </section>
    );
}
