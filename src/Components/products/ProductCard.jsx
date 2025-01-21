import react from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const ProductCard = ({ index, product }) => {
    return (
        <div className={`product-card animation-delay-${index}`}>
            <Link to={product.link} className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
            </Link>
            <div className="product-details">
                <div className="product-details-text">
                    <h3>
                        <Link>{product.name}</Link>
                    </h3>
                    <p>{product.description}</p>
                </div>
                <Link to={product.link} className="product-read-more-btn">
                    Read More
                    <MdOutlineKeyboardDoubleArrowRight className="icon" />
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
