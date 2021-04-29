import { useState, useEffect } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import Ratings from 'react-ratings-declarative'; 

export default function StarRatingModal(props){

    const [ratingValue, setRatingValue] = useState(0);

    const ratedColor = '#f5c300';
    const hoverColor = '#f5c300';

    useEffect(
        () => {console.log("ratingValue: ", ratingValue);}
    )


    return(
        <div className="star-rating" id={`product-id-${props.id}`}>
        <Ratings rating={ratingValue} widgetSpacing={"13px"} changeRating={setRatingValue}>
        <Ratings.Widget widgetDimension={"29px"} widgetRatedColor={ratedColor} widgetHoverColor={hoverColor}/>
        <Ratings.Widget widgetDimension={"29px"} widgetRatedColor={ratedColor} widgetHoverColor={hoverColor}/>
        <Ratings.Widget widgetDimension={"29px"} widgetRatedColor={ratedColor} widgetHoverColor={hoverColor}/>
        <Ratings.Widget widgetDimension={"29px"} widgetRatedColor={ratedColor} widgetHoverColor={hoverColor}/>
        <Ratings.Widget widgetDimension={"29px"} widgetRatedColor={ratedColor} widgetHoverColor={hoverColor}/>
        </Ratings>
        <span className="rating-number">
            {`${ratingValue}/5`}
        </span>
        </div>
    )
}