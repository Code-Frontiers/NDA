import React, { useRef, useEffect } from "react";
import next_icon from "/assets/next-icon.png";
import back_icon from "/assets/back-icon.png";
import user_1 from "/assets/user-1.jpg";
import user_2 from "/assets/user-2.jpg";
import user_3 from "/assets/user-3.jpg";
import user_4 from "/assets/user-4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = ({ className, onClick, direction }) => {
    return (
        <div className={`${className} custom-arrow custom-arrow-${direction}`} onClick={onClick}>
            <img src={`${direction === "left" ? back_icon : next_icon}`} alt="" />
        </div>
    );
};

const Distributorship = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true, // Enable automatic sliding
        autoplaySpeed: 3000, // Time in ms for each slide
        speed: 500,
        slidesToShow: 2, // Show 2 slides by default
        slidesToScroll: 1,
        nextArrow: <CustomArrow direction="right" />,
        prevArrow: <CustomArrow direction="left" />,
        responsive: [
            {
                breakpoint: 768, // For mobile devices
                settings: {
                    slidesToShow: 1, // Show 1 slide on mobile
                },
            },
        ],
    };

    const carouselItems = [
        {
            img: user_1,
            name: "Pidilite Industrial Products",
            company: "Edusity, USA",
            text: "We are proud to be partners with Pidilite Industrial Products.",
        },
        {
            img: user_2,
            name: "San-Ei-Tech",
            company: "Edusity, USA",
            text: "We are proud to be partners with San-Ei-Tech.",
        },
        {
            img: user_3,
            name: "ARO",
            company: "Edusity, USA",
            text: "We are proud to be partners with ARO.",
        },
        {
            img: user_4,
            name: "Sulzer Mixpac",
            company: "Edusity, USA",
            text: "We are proud to be partners with Sulzer Mixpac.",
        },
    ];

    return (
        <div className="testimonials">
            <div className="carousel-container">
                <Slider {...settings}>
                    {carouselItems.map((carouselItem) => (
                        <div className="carousel-item-container">
                            <div className="carousel-item">
                                <div className="user-info">
                                    <img src={carouselItem.img} alt="" />
                                    <div>
                                        <h3>
                                            {carouselItem.name}
                                        </h3>
                                        <span>{carouselItem.company}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Distributorship;
