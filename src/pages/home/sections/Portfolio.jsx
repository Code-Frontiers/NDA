import React, { useEffect, useRef, useState } from "react";

const Portfolio = () => {
    const counters = [
        { id: 1, target: 2000, label: "Projects Completed" },
        { id: 2, target: 6000, label: "Happy Clients" },
        { id: 3, target: 5000, label: "Cups of Coffee" },
        { id: 4, target: 3000, label: "Real Professionals" },
    ];

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className="work-data-section" ref={sectionRef}>
            <div className="portfolio-container grid grid-four-col">
                {counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        target={counter.target}
                        label={counter.label}
                        isVisible={isVisible}
                    />
                ))}
            </div>
        </section>
    );
};

const Counter = ({ target, label, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const duration = 1500; // 1.5 seconds
        const increment = target / (duration / 30); // Increment based on duration

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                start = target;
                clearInterval(timer);
            }
            setCount(Math.ceil(start));
        }, 30);

        return () => clearInterval(timer);
    }, [isVisible, target]);

    return (
        <div className="counter-item">
            <h2 className="counter-numbers">{count}</h2>
            <p>{label}</p>
        </div>
    );
};

export default Portfolio;
