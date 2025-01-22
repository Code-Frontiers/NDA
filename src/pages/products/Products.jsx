import React from "react";
import ProductCard from "../../Components/products/ProductCard";
import productsData from "../../data/productData.json";

const Products = () => {
    return (
        <main className="products-page">
            <header className="products-header">
                <h1>Our Products</h1>
                <p>Explore our wide range of high-quality industrial solutions.</p>
            </header>
            <section className="products-grid">
                {productsData.map((product, index) => (
                    <ProductCard key={product.id} index={index} product={product} />
                ))}
            </section>
        </main>
    );
};

export default Products;
