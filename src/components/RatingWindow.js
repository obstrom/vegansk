import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import StarRating from "./StarRating";
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hjälp andra genom att betygsätta produkten</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="rating-form">
            <label
              htmlFor={`product-id-${props.productId}`} 
              className="rating-label"
            >
              <strong>Betygsätt produkten</strong> (obligatoriskt)
            </label>
            <StarRating id={props.productId} />
            <label htmlFor={`product-review`} className="review-label">
              <strong>Skriv en recension </strong>
              (ej obligatoriskt)
            </label>
            <textarea
              id="product-review"
              className="review-textarea"
              maxLength="150"
              name="review"
              onChange={handleTextAreaCount}
              placeholder="Din recension kommer att hjälpa andra människor att ta bättre beslut!"
            ></textarea>
            <span className="review-character-count">{`${reviewCount}/150`}</span>
            <Button variant="primary" onClick={handleFormSubmit}>
              Skicka betyg
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Avbryt
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
