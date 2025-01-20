import react from "react";

const ProductCard = ({ index, product }) => {
    return (
        <div className={`product-card animation-delay-${index}`}>
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button className="read-more-btn">Read More</button>
            </div>
        </div>
    );
};

export default ProductCard;
