import { useLocation, Link } from "react-router-dom";
import createServer from "./ProductList";
import "./Product.css";
import ModalWindow from "./ModalWindow";
import RatingWindow from "./RatingWindow";
import StarRatingProductPage from "./StarRatingProductPage";
import WrittenReview from "./WrittenReview";

function Product(props) {
    const getProductIdFromPath = (location) => {
        const splitPath = location.pathname.split("-");
        return splitPath[splitPath.length - 1];
    };

    const productId = getProductIdFromPath(useLocation());
    const productData = props.productDataAll[productId - 1];
    const specialIngredientsData = props.specialIngredients;

    const productTitleAwnser = (bool) => {
        if (bool) {
            return (
                <>
                    <h1>Ja</h1>
                    <h2>Vegansk</h2>
                </>
            );
        }
        return (
            <>
                <h1>Nej</h1>
                <h2>Ej vegansk</h2>
            </>
        );
    };

    const renderVeganThumb = (bool) => {
        if (bool) {
            return (
                <img
                    alt="Vegansk produkt ikon"
                    className="vegan-thumb vegan-true"
                    src="/images/vegan-thumbs-up.svg"
                />
            );
        } else {
            return (
                <img
                    alt="Ej-vegansk produkt ikon"
                    className="vegan-thumb vegan-false"
                    src="/images/vegan-thumbs-down.svg"
                />
            );
        }
    };

    const renderProductIngredients = () => {
        let list = [];
        productData.ingredients.forEach((ingred) => {
            if (typeof ingred === "string") {
                list.push(
                    <li key={ingred} className="ingredient normal-ingredient">
                        {ingred}
                    </li>
                );
            } else if (typeof ingred === "object") {
                console.log(ingred);
                list.push(
                    <li
                        key={`special-${ingred.specialId}`}
                        className="ingredient special-ingredient"
                    >
                        <ModalWindow
                            specialIngredientsData={specialIngredientsData}
                            specialProductId={ingred.specialId}
                        />
                    </li>
                );
            }
        });

        return <ul className="product-ingredients">{list}</ul>;
    };

    const renderProductAllergens = (numOfAllergens) => {
        if (numOfAllergens) {
            return (
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                Allergener
                                <div className="collapse-arrow-wrapper">
                                    <img
                                        className="collapse-arrow"
                                        src="/images/accordion-arrow.svg"
                                        alt="Arrow icon"
                                    />
                                </div>
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                    >
                        <div className="card-body product-allergens">
                            <p>{productData.allergens}</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    };

    // Make body-tag (outside React) white for product page
    document.body.style.backgroundColor = "white";

    return (
        <div className={`product-page product-${productData.id}`}>
            <div className="product-page-content">
                <div className={`product-top vegan-${productData.vegan}`}>
                    <Link to="/">
                        <button className="go-back">
                            <img
                                src="/images/back-arrow.svg"
                                alt="Arrow icon"
                            />
                        </button>
                    </Link>
                    <div className="product-title-container container">
                        {productTitleAwnser(productData.vegan)}
                    </div>
                </div>
                <div className="product-info">
                    <div className="product-info-container container">
                        <div className="product-image-section d-flex">
                            <div className="product-image-container">
                                <div className="product-image-wrapper d-flex">
                                    <img
                                        className="img-fluid"
                                        src={`/images/products/product-${productData.id}.jpg`}
                                        alt={`Product image of ${productData.name}`}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="product-title-wrapper d-flex">
                            <h3 className="product-title">{`${productData.name}`}</h3>
                            {/*renderVeganThumb(productData.vegan)*/}
                        </div>
                        <h4 className="product-info-header">
                            Produktinformation
                        </h4>
                        <div id="accordion" className="product-info-accordion">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button
                                            className="btn btn-link"
                                            data-toggle="collapse"
                                            data-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Ingredienser
                                            <div className="collapse-arrow-wrapper">
                                                <img
                                                    className="collapse-arrow"
                                                    src="/images/accordion-arrow.svg"
                                                    alt="Arrow icon"
                                                />
                                            </div>
                                        </button>
                                    </h5>
                                </div>

                                <div
                                    id="collapseOne"
                                    className="collapse show"
                                    aria-labelledby="headingOne"
                                    data-parent="#accordion"
                                >
                                    <div className="card-body product-ingredients">
                                        {renderProductIngredients()}
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h5 className="mb-0">
                                        <button
                                            className="btn btn-link collapsed"
                                            data-toggle="collapse"
                                            data-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            Om varumärket
                                            <div className="collapse-arrow-wrapper">
                                                <img
                                                    className="collapse-arrow"
                                                    src="/images/accordion-arrow.svg"
                                                    alt="Arrow icon"
                                                />
                                            </div>
                                        </button>
                                    </h5>
                                </div>
                                <div
                                    id="collapseTwo"
                                    className="collapse"
                                    aria-labelledby="headingTwo"
                                    data-parent="#accordion"
                                >
                                    <div className="card-body product-about">
                                        <p>{productData.about}</p>
                                    </div>
                                </div>
                            </div>
                            {renderProductAllergens(
                                productData.allergens.length
                            )}
                        </div>

                        <div className="product-report-wrapper">
                            <a href="#">Rapportera felaktighet</a>
                        </div>
                        {/* FIXA: Data vi skickar in i StarRatingProductPage är hårdkodat */}
                        <StarRatingProductPage value={3.9} />
                        <div className="rating-container text-center">
                            <RatingWindow productId={productId} />
                        </div>
                        <div className="written-reviews-container">
                            <div className="title-reviews">
                                <h5>Kundrecensioner</h5>
                                {/* FIXA: Antal recensioner är nu hårdkodat */}
                                <span>{`${"2"} recensioner totalt`}</span>
                            </div>
                            {/* FIXA: Data vi skickar in i WrittenReview är hårdkodat */}
                            <WrittenReview
                                value={3}
                                name={"Anonym"}
                                date={"21 mars 2021"}
                                text={"Nja, ganska god!"}
                            />
                            <WrittenReview
                                value={4}
                                name={"Berra"}
                                date={"18 mars 2021"}
                                text={"Hade gett den 5 av 5 men..."}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/*<div className="product-sticky-footer text-center">
                <div className="container">
                    <button>Scanna</button>
                    <button>Sök</button>
                </div>
    </div>*/}
        </div>
    );
}

export default Product;
