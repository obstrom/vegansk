import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import StarRating from "./StarRating";
import "./RatingWindow.css";
import createServer from "./ProductList";

export default function RatingWindow(props) {
  const [show, setShow] = useState(false);
  const [reviewCount, setReviewCount] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleTextAreaCount = (e) => {
    console.log(e);
    const message = e.target.value;
    const messageLength = message.length;
    setReviewCount(messageLength);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
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
                className="rating-label"
              >
                <strong>Betygsätt produkten</strong> (obligatoriskt)
              </label>
              <StarRating id={props.productId} />
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
                  onChange={handleTextAreaCount}
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
              ></input>
              <p className="disclaimer">
                Dina svar hanteras anonymt, lämna inga personuppgifter. Vänligen
                kommentera endast på produkten. <br />
                Tack!
              </p>
            </div>
            <div>
              <Button variant="primary" onClick={handleFormSubmit}>
                Skicka betyg
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Avbryt
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
