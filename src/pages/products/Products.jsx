import React from "react";
import ProductCard from "../../components/products/ProductCard";
import productsData from "../../data/productData.json";

const Products = () => {
    return (
        <main className="products-page">
            <header className="products-header">
                <h1>Our Products</h1>
                <p>Explore our wide range of high-quality industrial solutions.</p>
            </header>
            <section className="products-grid">
                {productsData["products"].map((product, index) => (
                    <ProductCard key={product.id} index={index} product={product} />
                ))}
            </section>
        </main>
    );
};

export default Products;
