import { useEffect, useRef } from 'react';

export default function useScrollAnimation() {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add animation class when element enters viewport
                        entry.target.classList.add('animate-in');
                        // Optional: stop observing after animation triggers
                        // observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of element is visible
                rootMargin: '0px 0px -100px 0px', // Start animation 100px before element enters
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return ref;
}
