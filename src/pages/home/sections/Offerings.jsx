import React, { useState, useEffect, useRef } from "react";

const Offerings = () => {
    const [items, setItems] = useState([
        { id: 1, image: "assets/gallery-1.jpg", name: "EAGLE", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae." },
        { id: 2, image: "assets/gallery-2.jpg", name: "OWL", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae." },
        { id: 3, image: "assets/gallery-3.jpg", name: "CROW", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae." },
        { id: 4, image: "assets/gallery-4.jpg", name: "BUTTERFLY", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae." },
        { id: 5, image: "assets/gallery-5.jpg", name: "OWL", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae." },
        { id: 6, image: "assets/gallery-6.jpg", name: "EAGLE", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae." },
        { id: 7, image: "assets/gallery-7.jpeg", name: "EAGLE", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae." },
        { id: 8, image: "assets/gallery-8.png", name: "EAGLE", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae." },
        { id: 9, image: "assets/gallery-9.png", name: "EAGLE", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae." },
    ]);

    const [animation, setAnimation] = useState(null);
    const runningTimeRef = useRef(null);
    const timeRunning = 3000;
    const timeAutoNext = 7000;

    const resetAnimation = () => {
        if (runningTimeRef.current) {
            runningTimeRef.current.style.animation = "none";
            runningTimeRef.current.offsetHeight; // Trigger reflow
            runningTimeRef.current.style.animation = "runningTime 7s linear 1 forwards";
        }
    };

    const showSlider = (type) => {
        setAnimation(type);

        if (type === "next") {
            setItems((prevItems) => {
                const newItems = [...prevItems];
                const firstItem = newItems.shift();
                newItems.push(firstItem);
                return newItems;
            });
        } else {
            setItems((prevItems) => {
                const newItems = [...prevItems];
                const lastItem = newItems.pop();
                newItems.unshift(lastItem);
                return newItems;
            });
        }

        setTimeout(() => {
            setAnimation(null);
        }, timeRunning);
        resetAnimation();
    };

    useEffect(() => {
        const autoNext = setTimeout(() => {
            showSlider("next");
        }, timeAutoNext);

        return () => clearTimeout(autoNext);
    }, [items]);

    return (
        <section className="offering-section">
            <div className="carousal">
                <div className={`list ${animation}`}>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="item"
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            <div className="content">
                                <div className="name">{item.name}</div>
                                <div className="content-description">{item.description}</div>
                                <div className="content-button">
                                    <button>See More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="arrows">
                    <button className="prev" onClick={() => showSlider("prev")}>{"<"}</button>
                    <button className="next" onClick={() => showSlider("next")}>{">"}</button>
                </div>

                <div className="timeRunning" ref={runningTimeRef}></div>
            </div>
        </section>

    );
};

export default Offerings;