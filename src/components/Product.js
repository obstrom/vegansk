import { useLocation } from "react-router-dom";

function Product(props) {
    const getProductIdFromPath = (location) => {
        const splitPath = location.pathname.split("-");
        return splitPath[splitPath.length - 1];
    };

    const productId = getProductIdFromPath(useLocation());
    const productData = props.productDataAll[productId - 1];

    return (
        <>
            {/*<ul className="info-container">
                <li>{`id: ${productData.id}`}</li>
                <li>{`name: ${productData.name}`}</li>
                <li>{`producer: ${productData.producer}`}</li>
                <li>{`vegan: ${productData.vegan}`}</li>
    </ul>*/}
            <div className="product-page">
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
        </>
    );
}

export default Product;
