import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import gallery_1 from "/assets/gallery-1.jpg";
import gallery_2 from "/assets/gallery-2.jpg";
import gallery_3 from "/assets/gallery-3.jpg";
import gallery_4 from "/assets/gallery-4.jpg";
import gallery_5 from "/assets/gallery-5.jpg";
import gallery_6 from "/assets/gallery-6.jpg";
import gallery_7 from "/assets/gallery-7.jpeg";
import gallery_8 from "/assets/gallery-8.png";
import gallery_9 from "/assets/gallery-9.jpg";

import white_arrow from "/assets/white-arrow.png";

const Offerings = () => {
    return (
        <section className="offering-section">
            <div className="gallery">
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={3}
                    spaceBetween={40}
                    breakpoints={{
                        480: { slidesPerView: 1, spaceBetween: 10 }, // Small screens
                        768: { slidesPerView: 2, spaceBetween: 15 }, // Medium screens
                        1024: { slidesPerView: 3, spaceBetween: 40 }, // Large screens
                    }}
                    coverflowEffect={{
                        rotate: 10,
                        stretch: 0,
                        depth: 120,
                        modifier: 1.2,
                    }}
                    navigation={true}
                    modules={[EffectCoverflow, Navigation, Autoplay]}
                    className="swiper-container"
                >
                    {[gallery_1, gallery_2, gallery_3, gallery_4, gallery_5, gallery_6, gallery_7, gallery_8, gallery_9].map(
                        (src, idx) => (
                            <SwiperSlide key={idx}>
                                <img src={src} alt={`Gallery ${idx + 1}`} />
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            </div>

            <button className="btn dark-btn">
                See more <img src={white_arrow} alt="Arrow" />
            </button>
        </section>
    );
};

export default Offerings;
