import React from "react";
import ProductCard from "./ProductCard";

const ProductType = ({ productData }) => {
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

export default ProductType;
