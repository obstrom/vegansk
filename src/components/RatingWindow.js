import { Modal, Button } from "react-bootstrap";
import { useState, useRef } from "react";
import StarRatingModal from "./StarRatingModal";
import "./RatingWindow.css";
import createServer from "./ProductList";

export default function RatingWindow(props) {
  const [show, setShow] = useState(false);
  const [reviewCount, setReviewCount] = useState(0);

  const [formRatedStars, setFormRatedStars] = useState(0);
  const [formReviewText, setFormReviewText] = useState("");
  const [formName, setFormName] = useState("");

  const [starValidationFailureClass, setStarValidationFailureClass] = useState(
    false
  );
  const [nameValidationFailureClass, setNameValidationFailureClass] = useState(
    false
  );

  const handleClose = () => setShow(false);
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
    console.log({
      stars: formRatedStars,
      message: formReviewText,
      name: formName,
    });

    let validationFailure = false;

    if (formRatedStars < 1 || formRatedStars > 5) {
      validationFailure = true;
      setStarValidationFailureClass(true);
    } else {
      setStarValidationFailureClass(false);
    }
  };

  return (
    <>
      <Button
        className="rating-window-button"
        variant="primary"
        onClick={handleShow}
      >
        Tyck till om produkten
      </Button>

      <Modal className={"rating-modal"} show={show} onHide={handleClose}>
        <Modal.Header className={"rating-modal-header"} closeButton>
          <Modal.Title>Hjälp andra genom att betygsätta produkten!</Modal.Title>
        </Modal.Header>
        <Modal.Body className={"rating-modal-body"}>
          <form className="rating-form">
            <div className="star-container">
              <label
                htmlFor={`product-id-${props.productId}`}
                className={`rating-label ${
                  starValidationFailureClass ? "validation-failure" : null
                }`}
              >
                <strong>Betygsätt produkten</strong> (obligatoriskt)
              </label>
              <StarRatingModal
                id={props.productId}
                formRatedStars={formRatedStars}
                setFormRatedStars={setFormRatedStars}
              />
            </div>
            <div className="review-container">
              <label htmlFor="product-review" className="review-label">
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
                  placeholder="Din recension kommer att hjälpa andra människor att ta bättre beslut!"
                ></textarea>
                <span className="review-character-count">{`${reviewCount}/150`}</span>
              </div>
              <label htmlFor="name-input" className="name-label">
                <strong>Ditt namn</strong>
                (obligatoriskt)
              </label>
              <input
                id="name-input"
                placeholder="Ditt namn..."
                name="name"
                className="review-input"
                onChange={handleNameInput}
              ></input>
              <p className="disclaimer">
                Dina svar hanteras anonymt, lämna inga personuppgifter. Vänligen
                kommentera endast på produkten. <br />
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
        </Modal.Body>
      </Modal>
    </>
  );
}
