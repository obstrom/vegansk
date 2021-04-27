import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import StarRating from './StarRating';
import createServer from './ProductList';

export default function RatingWindow(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const handleFormSubmit = (e) => {
    e.preventDefault();
  }

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
            <label for={`product-id-${props.productId}`}  className="rating-label">
                <strong>Betygsätt produkten</strong> (obligatoriskt)
                </label>
            <StarRating id={props.productId}/>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleFormSubmit}>
              Save Changes
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
