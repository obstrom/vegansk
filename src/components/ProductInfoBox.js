import React from 'react';
import StarRatingProductPage from "./StarRatingProductPage";

function ProductInfoBox(props) {
    return (
        <div className="product-info-box-container">
            <div className="product-image-container">
                <div className="product-image-wrapper d-flex">
                    <img
                        className="img-fluid"
                        src={`/images/products/product-${props.productData.id}.jpg`}
                        alt={`Product image of ${props.productData.name}`}
                    />
                </div>
            </div>
            <div className="product-info-text">
                    <h3>{props.productData.name}</h3>
                Ett bra smör helt enkelt! Ett bra smör helt enkelt! Ett bra smör helt enkelt! Ett bra smör helt enkelt!
                <div className="product-info-rating">
                    <StarRatingProductPage value={props.productAverageReview()}/>
            </div>
            </div>

        </div>
    );
}

export default ProductInfoBox;