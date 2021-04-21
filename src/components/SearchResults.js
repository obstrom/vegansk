import { Link } from "react-router-dom";

const SearchResults = ({ renderData = [] }) => {
    // No results found
    if (!renderData.length) {
        return (
            <div className="info-container">
                <p id="no-result">Inget resultat hittades. Försök igen!</p>
            </div>
        );
    }

    const renderVeganThumb = (bool) => {
        return bool
            ? "images/vegan-thumbs-up.svg"
            : "images/vegan-thumbs-down.svg";
    };

    // Display results
    return (
        <div className="search-results">
            <ul>
                {renderData.map((product) => (
                    <Link
                        key={product.id}
                        to={`/products/product-${product.id}`}
                    >
                        <li id={`result-${product.id}`} className="d-flex">
                            <img
                                className="product-image"
                                src={`images/products/product-${product.id}.jpg`}
                                alt={`Produkt ${product.producer} - ${product.name}`}
                            />
                            <span className="product-name flex-grow-1">
                                {`${product.producer} - ${product.name}`}
                            </span>
                            <div
                                className={`vegan-mark vegan-${product.vegan}`}
                            >
                                <img
                                    alt={
                                        product.vegan
                                            ? "Vegansk produkt"
                                            : "Ej vegansk produkt"
                                    }
                                    src={renderVeganThumb(product.vegan)}
                                ></img>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default SearchResults;
