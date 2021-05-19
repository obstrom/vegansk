import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import createServer from "./ProductList";
import "./Product.css";
import ModalWindow from "./ModalWindow";
import RatingWindow from "./RatingWindow";
import StarRatingProductPage from "./StarRatingProductPage";
import WrittenReview from "./WrittenReview";
import "./reviewObject.js";
import reviewObject from "./reviewObject";
import ProductAllReviews from "./ProductAllReviews";
import { map } from "react-bootstrap/ElementChildren";
import ProductInfoBox from "./ProductInfoBox";

function Product(props) {
  const getProductIdFromPath = (location) => {
    const splitPath = location.pathname.split("-");
    return splitPath[splitPath.length - 1];
  };

  const productId = getProductIdFromPath(useLocation());
  const productData = props.productDataAll[productId - 1];
  const specialIngredientsData = props.specialIngredients;

  const defaultReviews = [
    new reviewObject(4, "Smakar bra", "Erik", "3 Mars 2021"),
    new reviewObject(3, "Helt ok smak", "Magnus", "21 April 2021"),
  ];
  const [allReviews, setAllReviews] = useState(defaultReviews);
  const [averageRating, setAverageRating] = useState(0);

  function calculateAverageRating() {
    const ratingArray = [];
    allReviews.forEach((reviewObj) => {
      ratingArray.push(reviewObj.rating);
    });
    const result = ratingArray.reduce((sum, value) => {
      return sum + value;
    });
    return (result / ratingArray.length).toFixed(1);
  }

  const productTitleAwnser = (bool) => {
    if (bool) {
      return (
        <>
          <div className="answer-image-container">
            <img className="answer-image" src="/images/happylemon.svg" />
          </div>
          <h1>Hurra!</h1>
          <h2>Produkten är vegansk</h2>
        </>
      );
    }
    return (
      <>
        <div className="answer-image-container">
          <img className="answer-image" src="/images/blueberry.svg" />
        </div>
        <h1>Tyvärr</h1>
        <h2>Produkten är inte vegansk</h2>
      </>
    );
  };

  /*const renderVeganThumb = (bool) => {
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
    };*/

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

  const productMiddleContent = (bool) => {
    if (bool) {
      return (
        <>
          <div className="written-reviews-container">
            <div className="title-reviews">
              <h5>Kundrecensioner</h5>
              <span>{`${allReviews.length} recensioner totalt`}</span>
            </div>
            <ProductAllReviews reviewData={allReviews} />
          </div>
        </>
      );
    }
    return <>Simons kod!{/* Simons karusell! */}</>;
  };

  // Make body-tag (outside React) white for product page
  document.body.style.backgroundColor = "white";

  return (
    <div className={`product-page product-${productData.id}`}>
      <div className="product-page-content">
        <div className={`product-top vegan-${productData.vegan}`}>
          <Link to="/">
            <button className="go-back">
              <img src="/images/back-arrow.svg" alt="Arrow icon" />
            </button>
          </Link>
          <div className="product-title-container container">
            {productTitleAwnser(productData.vegan)}
            <ProductInfoBox
              productData={productData}
              productAverageReview={calculateAverageRating}
            />
          </div>
        </div>
        <div className="product-info">
          <div className="product-info-container container">
            <h4 className="product-info-header">Produktinformation</h4>
            <div id="accordion" className="product-info-accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
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
                  className="collapse"
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
              {renderProductAllergens(productData.allergens.length)}
            </div>
          </div>
        </div>
        <div className="product-middle">
          {productMiddleContent(productData.vegan)}
        </div>
        <div className="product-bottom">
          <div className="rating-container">
            <div className="feedback-button-container text-center">
              <button
                type="image"
                className="feedback-button"
                id="report-window-button"
              >
                <img src="/images/report-icon.svg" alt="report button" />
              </button>
              <label
                HTMLFor="report-window-button"
                className="feedback-button-text"
              >
                Rapportera felaktighet
              </label>
            </div>
            <RatingWindow
              productId={productId}
              productAllReviews={allReviews}
              productSetAllReviews={setAllReviews}
              calculateAverageRating={calculateAverageRating}
            />
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
