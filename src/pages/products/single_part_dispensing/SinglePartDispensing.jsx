import React from "react";
import ProductCard from "../../../Components/products/ProductCard";

import gallery_1 from "../../../assets/gallery-1.jpg";

const productData = [
    {
        id: 1,
        name: "Single Part Dispensing",
        description: "High-precision single part dispensing solutions.",
        link: "/",
        image: gallery_1,
    },
];

const SinglePartDispensing = () => {
    return (
        <main className="products-page">
            <header className="products-header">
                <h1>Our Products</h1>
                <p>Explore our wide range of high-quality industrial solutions.</p>
            </header>
            <section className="products-grid">
                {productData.map((product, index) => (
                    <ProductCard key={index} index={index} product={product} />
                ))}
            </section>
        </main>
    );
};

export default SinglePartDispensing;
