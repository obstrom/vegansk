import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import StarRatingModal from "./StarRatingModal";
import "./RatingWindow.css";
import reviewObject from "./reviewObject";

export default function FeedbackWindow(props) {
  const [show, setShow] = useState(false);

  const [displayNormalState, setDisplayNormalState] = useState("");
  const [displayThankYouState, setDisplayThankYouState] = useState("d-none");

  const handleClose = () => {
    setShow(false);
    thankYouState(false);
  };
  const handleShow = () => setShow(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

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
          id="report-window-button"
          className="feedback-button"
          variant="primary"
          type="image"
          onClick={handleShow}
        >
          <img src="/images/report-icon.svg" alt="report button" />
        </Button>
        <label htmlFor="report-window-button" className="feedback-button-text">
          Rapportera felaktighet
        </label>
      </div>
      <Modal className={"rating-modal"} show={show} onHide={handleClose}>
        <Modal.Header className={"rating-modal-header"} closeButton>
          <Modal.Title className={displayNormalState}>
            Hjälp oss bli bättre!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={"rating-modal-body"}>
          <form className={`rating-form ${displayNormalState}`}>
            <div className="review-container">
              <div id="accordion" className="product-info-accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        En produkt har felaktig information
                        <div className="collapse-arrow-wrapper">
                          <img
                            className="collapse-arrow"
                            src="/images/accordion-arrow.svg"
                            alt="Arrow icon"
                          />
                        </div>
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body product-ingredients">
                      Checkboxes
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Ett fel på tjänsten
                        <div className="collapse-arrow-wrapper">
                          <img
                            className="collapse-arrow"
                            src="/images/accordion-arrow.svg"
                            alt="Arrow icon"
                          />
                        </div>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="card-body product-about">
                      <p>Checkboxes tjänstefel</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Information saknas
                        <div className="collapse-arrow-wrapper">
                          <img
                            className="collapse-arrow"
                            src="/images/accordion-arrow.svg"
                            alt="Arrow icon"
                          />
                        </div>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div className="card-body product-allergens">
                      <p>Checkboxes information saknas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-container">
              <Button
                id="send-button"
                variant="primary"
                onClick={handleFormSubmit}
                disabled
              >
                Skicka rapport
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
            <div></div>
            <div className="text-center">
              <img src="/images/happylemon.svg" />
              <p className="thank-you-text">Tack!</p>
              <p className="thank-you-text-info">
                För att du gör tjänsten bättre!
              </p>
            </div>
            <div className="button-container">
              <Button id="close-button" variant="primary" onClick={handleClose}>
                Stäng
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
