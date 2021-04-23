import { useLocation, Link } from "react-router-dom";
import createServer from "./ProductList";
import "./Product.css";
import ModalWindow from "./ModalWindow";

function Product(props) {
    const getProductIdFromPath = (location) => {
        const splitPath = location.pathname.split("-");
        return splitPath[splitPath.length - 1];
    };

    const productId = getProductIdFromPath(useLocation());
    const productData = props.productDataAll[productId - 1];
    const specialIngredientsData = props.specialIngredients;

    const CiccisKod = () => {
        <>
            <div>
                <div className="Product container d-flex flex-column">
                    {/*Produktlandningssida här!*/}
                    <div></div>
                    <div className="product-top">
                        <div className="product-answer">
                            Ja{" "}
                            {/* Oscar: Ska HTML skrivas med gemener, som sedan justeras till versaler i CSS? Svar: Vanlig text, stor boxtav på första ordet*/}
                            <div className="specify-answer">Vegansk</div>
                        </div>
                    </div>
                    <div className="bottom">
                        <svg>{/* Bild på Florapaket */}</svg>
                        <div className="product-name">
                            Flora mjölkfri 400 gram {/* + SVG tummen upp? */}
                        </div>
                        <div className="product-information">
                            Produktinformation{/*Accordion?*/}
                        </div>
                        <div className="ingredients">Ingredienser</div>
                        <ul className="ingredient-list">
                            <li>Vatten</li>
                            <li>Palmolja</li>
                            <li>Rapsolja (24%)</li>
                            <li>Salt (1,2%)</li>
                            <li>Emulgeringsmedel</li>
                            <li>Naturlig arom</li>
                        </ul>
                        <div className="report-flawes">
                            <a className="flaw-link" href="">
                                Rapportera felaktighet
                            </a>
                        </div>
                        <br />
                    </div>
                    <footer className="footer">
                        <button className="new-search" onClick="blablabla()">
                            Gör ny sökning
                        </button>
                    </footer>
                </div>
            </div>
        </>;
    };

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
                            <h3 className="product-title">
                                {`${productData.name}`}
                            </h3>
                            {renderVeganThumb(productData.vegan)}
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
                        <div className="product-report-wrapper text-center">
                            <a href="#">Rapportera felaktighet</a>
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
