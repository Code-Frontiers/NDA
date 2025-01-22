import React from "react";
import { useLocation } from "react-router-dom";
import productData from "../../data/productData.json";
import ProductCard from "../../Components/products/ProductCard";

const CategoryPage = () => {
    const location = useLocation();
    const currentPath = location.pathname; // Get the current path (URL)

    // Recursive function to find category data by matching link
    const findCategoryData = (data, path) => {
        for (let item of data) {
            // Check if the item's link matches the current path
            if (item.link === path) {
                return item; // Return the matched item
            }

            // If there are subcategories, recursively check them
            if (item.subcategories) {
                const foundInSubcategories = findCategoryData(item.subcategories, path);
                if (foundInSubcategories) {
                    return foundInSubcategories; // Return found item from subcategories
                }
            }
        }
        return null; // Return null if no match found
    };

    // Find the matching data based on the current URL path
    const categoryData = findCategoryData(productData.products, currentPath);

    // If no matching data is found, show an error message
    if (!categoryData) {
        return <p>Category or product not found!</p>;
    }

    return (
        <main className="products-page">
            <header className="products-header">
                <h1>{categoryData.name}</h1>
                <p>{categoryData.description}</p>
            </header>
            <section className="products-grid">
                {/* Map through the subcategories if available */}
                {(categoryData.subcategories || []).map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </section>
        </main>
    );
};

export default CategoryPage;
