import { useState, useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import Ratings from "react-ratings-declarative";

export default function StarRatingModal(props) {
    //const [ratingValue, setRatingValue] = useState(0);

    const ratedColor = "#f5c300";
    const hoverColor = "#f5c300";

    /*useEffect(() => {
    
  });*/

    return (
        <div className="star-rating" id={`product-id-${props.id}`}>
            <Ratings
                rating={props.formRatedStars}
                widgetSpacing={"13px"}
                changeRating={props.setFormRatedStars}
            >
                <Ratings.Widget
                    widgetDimension={"29px"}
                    widgetRatedColor={ratedColor}
                    widgetHoverColor={hoverColor}
                />
                <Ratings.Widget
                    widgetDimension={"29px"}
                    widgetRatedColor={ratedColor}
                    widgetHoverColor={hoverColor}
                />
                <Ratings.Widget
                    widgetDimension={"29px"}
                    widgetRatedColor={ratedColor}
                    widgetHoverColor={hoverColor}
                />
                <Ratings.Widget
                    widgetDimension={"29px"}
                    widgetRatedColor={ratedColor}
                    widgetHoverColor={hoverColor}
                />
                <Ratings.Widget
                    widgetDimension={"29px"}
                    widgetRatedColor={ratedColor}
                    widgetHoverColor={hoverColor}
                />
            </Ratings>
            <span className="rating-number">{`${props.formRatedStars}/5`}</span>
        </div>
    );
}
