import WrittenReview from "./WrittenReview";
import { useEffect } from "react";

export default function ProductAllReviews(props) {
    return (
        <>
            {props.reviewData.map((review, index) => {
                return (
                    <WrittenReview
                        key={index + 1}
                        value={review.rating}
                        name={review.name}
                        text={review.review}
                        date={review.date}
                    />
                );
            })}
        </>
    );
}
