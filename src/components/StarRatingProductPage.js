import { useState, useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import Ratings from "react-ratings-declarative";

export default function StarRatingProductPage(props) {
  const displayStar = () => {
    const starAmount = Math.round(props.value);
    let output = [];
    for (let i = 0; i < 5; i++) {
      if (i + 1 <= starAmount) {
        output.push(
          <img
            key={i + 1}
            id="star-icon-1"
            src="/images/star-yellow.svg"
            alt="star icon"
          />
        );
      } else {
        output.push(
          <img
            key={i + 1}
            id="star-icon-1"
            src="/images/star-grey.svg"
            alt="star icon"
          />
        );
      }
    }
    return output;
  };

  return (
    <div>
      <div className="star-icon-container">
        {displayStar()}
        <span>{`${props.value} av 5`}</span>
      </div>
    </div>
  );
}
