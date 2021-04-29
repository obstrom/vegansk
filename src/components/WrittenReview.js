import StarRatingProductPage from "./StarRatingProductPage";

export default function WrittenReview(props) {
    return (
        <div className="single-review">
            <StarRatingProductPage value={props.value} />
            <p className="single-review-header">
                <strong>{props.name}</strong>, {props.date}
            </p>
            <p className="single-review-text">{props.text}</p>
        </div>
    );
}
