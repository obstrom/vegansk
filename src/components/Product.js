import { useLocation, Link } from "react-router-dom";
import "./Product.css";

function Product(props) {
    const getProductIdFromPath = (location) => {
        const splitPath = location.pathname.split("-");
        return splitPath[splitPath.length - 1];
    };

    const productId = getProductIdFromPath(useLocation());
    const productData = props.productDataAll[productId - 1];

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

    // Make body-tag (outside React) white for product page
    document.body.style.backgroundColor = "white";

    return (
        <div className={`product-page product-${productData.id}`}>
            <div className="product-page-content">
                <div className={`product-top vegan-${productData.vegan}`}>
                    <Link to="/">
                        <button className="go-back">
                            <img src="/images/back-arrow.svg" />
                        </button>
                    </Link>
                    <div className="product-title-container container">
                        {productTitleAwnser(productData.vegan)}
                    </div>
                </div>
                <div className="product-info">
                    <div className="container">
                        <div className="product-image-wrapper text-center">
                            <img
                                src={`images/products/product-${productData.id}.jpg`}
                            />
                        </div>
                        <div className="product-title-wrapper">
                            <h3 className="product-title">
                                {`${productData.producer} - ${productData.name}`}
                            </h3>
                        </div>
                        <h4>Produktinformation</h4>
                        <div id="product-info-accordion accordion">
                            {/* Lägg accordion här! */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-sticky-footer text-center">
                <div className="container">
                    <button>Scanna</button>
                    <button>Sök</button>
                </div>
            </div>
        </div>
    );
}

export default Product;
