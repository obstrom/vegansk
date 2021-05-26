import React from 'react';
import StarRatingProductPage from "./StarRatingProductPage";

function Carousel(props) {

    console.log(props.allReviews)

    return (
        <div className="carousel-inner-container">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="false">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="carousel-product-image" src="/images/products/product-2.jpg" alt="Flora växtbaserat"/>
                        <div className="bottom-section">
                       <h5> {props.productDataAll[1].name}</h5>
                            <div className="star-icon-container">
                        <StarRatingProductPage value={3}/>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="carousel-product-image" src="/images/products/product-2.jpg" alt="Flora växtbaserat"/>
                        <div className="bottom-section">
                            <h5> {props.productDataAll[1].name}</h5>
                            <div className="star-icon-container">
                                <StarRatingProductPage value={3}/>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="carousel-product-image" src="/images/products/product-2.jpg" alt="Flora växtbaserat"/>
                        <div className="bottom-section">
                            <h5> {props.productDataAll[1].name}</h5>
                            <div className="star-icon-container">
                                <StarRatingProductPage value={3}/>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}


export default Carousel;