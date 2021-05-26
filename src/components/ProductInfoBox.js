import React from 'react';
import StarRatingProductPage from "./StarRatingProductPage";

function ProductInfoBox(props) {


    const decideBoxContent = () => {
        if (props.productData.vegan) {
            return (
                <>
                    Ett veganskt och njutbart alternativ till smör.
                    <div className="product-info-rating">
                        <StarRatingProductPage value={props.productAverageReview()}/>
                    </div>
                </>
            )

        } else {
            return (
                <div>
                    <ul>
                        <li><img src="/images/exclamation-mark.svg" alt="utropstecken"/><span>  Mjölk</span></li>
                        <li><img src="/images/exclamation-mark.svg" alt="utropstecken"/><span>  Vassle</span></li>
                        <li><img src="/images/exclamation-mark.svg" alt="utropstecken"/><span>  Animaliska E-ämnen</span></li>
                    </ul>
                </div>
            )
        }
    }


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
                {decideBoxContent()}

            </div>

        </div>
    );
}

export default ProductInfoBox;