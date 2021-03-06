import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import StarRatingModal from "./StarRatingModal";
import "./RatingWindow.css";
import reviewObject from "./reviewObject";

export default function RatingWindow(props) {
    const [show, setShow] = useState(false);
    const [reviewCount, setReviewCount] = useState(0);

    const [displayNormalState, setDisplayNormalState] = useState("");
    const [displayThankYouState, setDisplayThankYouState] = useState("d-none");

    const [formRatedStars, setFormRatedStars] = useState(0);
    const [formReviewText, setFormReviewText] = useState("");
    const [formName, setFormName] = useState("");

    const [starValidationFailureClass, setStarValidationFailureClass] =
        useState(false);
    const [nameValidationFailureClass, setNameValidationFailureClass] =
        useState(false);

    const handleClose = () => {
        setShow(false);
        thankYouState(false);
        setFormRatedStars(0);
        setReviewCount(0);
    };
    const handleShow = () => setShow(true);

    const handleTextArea = (e) => {
        const message = e.target.value;
        const messageLength = message.length;
        setReviewCount(messageLength);
        setFormReviewText(message);
    };

    const handleNameInput = (e) => {
        const name = e.target.value;
        setFormName(name);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        let validationFailure = false;

        if (formRatedStars < 1 || formRatedStars > 5) {
            validationFailure = true;
            setStarValidationFailureClass(true);
        } else {
            setStarValidationFailureClass(false);
        }

        if (formName === "") {
            validationFailure = true;
            setNameValidationFailureClass(true);
        } else {
            setNameValidationFailureClass(false);
        }

        if (!validationFailure) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            const dateNow = new Date().toLocaleDateString("sv-SE", options);
            saveRatingData(formRatedStars, formReviewText, formName, dateNow);
            thankYouState(true);
            /*setTimeout(() => {
                handleClose();
            }, 3000);*/
        }
    };

    function saveRatingData(ratingValue, reviewText, reviewName, reviewDate) {
        const reviewOb = new reviewObject(
            ratingValue,
            reviewText,
            reviewName,
            reviewDate
        );
        const reviewArr = props.productAllReviews;
        reviewArr.unshift(reviewOb);
        props.productSetAllReviews(Array.from(reviewArr));
    }

    function thankYouState(bool) {
        if (bool) {
            setDisplayNormalState("d-none");
            setDisplayThankYouState("");
        } else {
            setDisplayNormalState("");
            setDisplayThankYouState("d-none");
        }
    }

    return (
        <>
            <div className="feedback-button-container text-center">
                <Button
                    id="rating-window-button"
                    className="feedback-button"
                    variant="primary"
                    onClick={handleShow}
                >
                    {props.calculateAverageRating()}/5
                </Button>
                <label
                    htmlFor="rating-window-button"
                    className="feedback-button-text"
                >
                    Tyck till om produkten
                </label>
            </div>
            <Modal className={"rating-modal"} show={show} onHide={handleClose}>
                <Modal.Header
                    className={`rating-modal-header thank-you-state-${!displayThankYouState}`}
                    closeButton
                >
                    <Modal.Title className={displayNormalState}>
                        Hj??lp andra genom att betygs??tta produkten!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={"rating-modal-body"}>
                    <form className={`rating-form ${displayNormalState}`}>
                        <div className="star-container">
                            <label
                                htmlFor={`product-id-${props.productId}`}
                                className={`rating-label ${
                                    starValidationFailureClass
                                        ? "validation-failure"
                                        : null
                                }`}
                            >
                                <strong>Betygs??tt produkten</strong>{" "}
                                (obligatoriskt)
                            </label>
                            <StarRatingModal
                                id={props.productId}
                                formRatedStars={formRatedStars}
                                setFormRatedStars={setFormRatedStars}
                            />
                        </div>
                        <div className="review-container">
                            <label
                                htmlFor="product-review"
                                className="review-label"
                            >
                                <strong>Skriv en recension </strong>
                                (ej obligatoriskt)
                            </label>
                            <div className="review-wrapper">
                                <textarea
                                    id="product-review"
                                    className="review-textarea"
                                    maxLength="150"
                                    name="review"
                                    onChange={handleTextArea}
                                    placeholder="Din recension kommer att hj??lpa andra m??nniskor att ta b??ttre beslut!"
                                />
                                <span className="review-character-count">{`${reviewCount}/150`}</span>
                            </div>
                            <label
                                htmlFor="name-input"
                                className={`name-label ${
                                    nameValidationFailureClass
                                        ? "validation-failure"
                                        : null
                                }`}
                            >
                                <strong>Ditt namn</strong>
                                (obligatoriskt)
                            </label>
                            <input
                                id="name-input"
                                placeholder="Ditt namn..."
                                name="name"
                                className="review-input"
                                onChange={handleNameInput}
                            />
                            <p className="disclaimer">
                                Dina svar hanteras anonymt, l??mna inga
                                personuppgifter. V??nligen kommentera endast p??
                                produkten. <br />
                                Tack!
                            </p>
                        </div>
                        <div className="button-container">
                            <Button
                                id="send-button"
                                variant="primary"
                                onClick={handleFormSubmit}
                            >
                                Skicka betyg
                            </Button>

                            <Button
                                id="abort-button"
                                variant="secondary"
                                onClick={handleClose}
                            >
                                Avbryt
                            </Button>
                        </div>
                    </form>
                    <div className={`thank-you-state ${displayThankYouState}`}>
                        <div className="text-center">
                            <img src="/images/happylemon.svg" />
                            <p className="thank-you-text">Tack!</p>
                            <p className="thank-you-text-info">
                                Din ??sikt hj??lper andra att v??lja r??tt!
                            </p>
                        </div>
                        <div className="button-container">
                            <Button
                                id="close-button"
                                variant="primary"
                                onClick={handleClose}
                            >
                                St??ng
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
