import {Modal, Button} from "react-bootstrap";
import {useState, useEffect, useRef} from "react";
import StarRatingModal from "./StarRatingModal";
import "./RatingWindow.css";
import "./FeedbackWindow.css";
import reviewObject from "./reviewObject";

function FeedBackCheckbox(props) {

    const handleCheckbox = () => {
        let validCheck = false
        console.log(props.feedbackForm.current)
        const formData = props.feedbackForm.current
        for (let i = 0; i < formData.length; i++) {
            if (formData[i].type === "checkbox") {

                if (formData[i].checked) {
                    props.setAnyChecked(true)
                    validCheck = true;
                }
            }
        }
        if (!validCheck) {
            props.setAnyChecked(false)
            console.log("knappen grå")
        }

    }
    return (
        <div className="checkbox-container">
            <label htmlFor={`checkbox-${props.key}`}>{props.label}</label>
            <input onChange={handleCheckbox} id={`checkbox-${props.key}`} type="checkbox"/>
        </div>
    )
}

export default function FeedbackWindow(props) {
    const [anyChecked, setAnyChecked] = useState(false)
    const [show, setShow] = useState(false);
    const feedbackForm = useRef(null);
    const [displayNormalState, setDisplayNormalState] = useState("");
    const [displayThankYouState, setDisplayThankYouState] = useState("d-none");
    const sendButton = useRef(null);

    function enableButton(enable) {
        if (sendButton.current != null) {
            sendButton.current.disabled = !enable
        }
    }

    useEffect(() => {
        enableButton(anyChecked)
    }, [anyChecked]);

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

    const handleAccordionButton = (e) => {
        e.preventDefault()
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
                    <img src="/images/report-icon.svg" alt="report button"/>
                </Button>
                <label
                    htmlFor="report-window-button"
                    className="feedback-button-text"
                >
                    Rapportera felaktighet
                </label>
            </div>
            <Modal
                className={"rating-modal feedback-modal"}
                show={show}
                onHide={handleClose}
            >
                <Modal.Header className={"rating-modal-header"} closeButton>
                    <Modal.Title className={displayNormalState}>
                        Hjälp oss bli bättre!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={"rating-modal-body"}>
                    <form ref={feedbackForm} className={`rating-form ${displayNormalState}`}>
                        <div className="review-container">
                            <div
                                id="accordion"
                                className="product-info-accordion"
                            >
                                <div className="card">
                                    <div
                                        className="card-header"
                                        id="headingOne"
                                    >
                                        <h5 className="mb-0">
                                            <button
                                                className="btn btn-link collapsed"
                                                data-toggle="collapse"
                                                data-target="#feedbackOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                                onClick={handleAccordionButton}
                                            >
                                                En produkt har felaktig
                                                information
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
                                        id="feedbackOne"
                                        className="collapse"
                                        aria-labelledby="headingOne"
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body product-ingredients">

                                            <FeedBackCheckbox feedbackForm={feedbackForm}
                                                              setAnyChecked={setAnyChecked} key={1}
                                                              label="Allergener är missvisande"/>
                                            <FeedBackCheckbox feedbackForm={feedbackForm}
                                                              setAnyChecked={setAnyChecked} key={2}
                                                              label="Felaktiga ingredienser"/>
                                            <FeedBackCheckbox feedbackForm={feedbackForm}
                                                              setAnyChecked={setAnyChecked} key={3} label="Missvisande varumärkesinformation"/>
                                            <FeedBackCheckbox feedbackForm={feedbackForm}
                                                              setAnyChecked={setAnyChecked} key={4} label="Produkten är inte vegansk"/>
                                            <FeedBackCheckbox feedbackForm={feedbackForm}
                                                              setAnyChecked={setAnyChecked} key={5} label="E-ämnen är felaktiga"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div
                                        className="card-header"
                                        id="headingTwo"
                                    >
                                        <h5 className="mb-0">
                                            <button
                                                className="btn btn-link collapsed"
                                                data-toggle="collapse"
                                                data-target="#feedbackTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                                onClick={handleAccordionButton}
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
                                        id="feedbackTwo"
                                        className="collapse"
                                        aria-labelledby="headingTwo"
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body product-about">
                                            <FeedBackCheckbox feedbackForm={feedbackForm}
                                                              setAnyChecked={setAnyChecked} key={1} label="Allergener är missvisande"/>
                                            <FeedBackCheckbox feedbackForm={feedbackForm}
                                                              setAnyChecked={setAnyChecked} key={2} label="Felaktiga ingredienser"/>
                                            <FeedBackCheckbox feedbackForm={feedbackForm}
                                                              setAnyChecked={setAnyChecked} key={3} label="Missvisande varumärkesinformation"/>
                                            <FeedBackCheckbox feedbackForm={feedbackForm}
                                                              setAnyChecked={setAnyChecked} key={4} label="Produkten är inte vegansk"/>
                                            <FeedBackCheckbox feedbackForm={feedbackForm}
                                                              setAnyChecked={setAnyChecked} key={5} label="E-ämnen är felaktiga"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div
                                        className="card-header"
                                        id="headingThree"
                                    >
                                        <h5 className="mb-0">
                                            <button
                                                className="btn btn-link collapsed"
                                                data-toggle="collapse"
                                                data-target="#feedbackThree"
                                                aria-expanded="false"
                                                aria-controls="collapseThree"
                                                onClick={handleAccordionButton}
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
                                        id="feedbackThree"
                                        className="collapse"
                                        aria-labelledby="headingThree"
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body product-allergens">
                                            <FeedBackCheckbox feedbackForm={feedbackForm}
                                                              setAnyChecked={setAnyChecked} key={1} label="Allergener är missvisande"/>
                                            <FeedBackCheckbox feedbackForm={feedbackForm}
                                                              setAnyChecked={setAnyChecked} key={2} label="Felaktiga ingredienser"/>
                                            <FeedBackCheckbox feedbackForm={feedbackForm}
                                                              setAnyChecked={setAnyChecked} key={3} label="Missvisande varumärkesinformation"/>
                                            <FeedBackCheckbox feedbackForm={feedbackForm}
                                                              setAnyChecked={setAnyChecked} key={4} label="Produkten är inte vegansk"/>
                                            <FeedBackCheckbox feedbackForm={feedbackForm}
                                                              setAnyChecked={setAnyChecked} key={5} label="E-ämnen är felaktiga"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="button-container">
                            <Button
                                ref={sendButton}
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
                            <p className="thank-you-text">
                                Tack för din hjälp!
                            </p>
                            <img src="/images/lemon.svg"/>
                        </div>
                        <div className="button-container">
                            <Button
                                id="close-button"
                                variant="primary"
                                onClick={handleClose}
                            >
                                Stäng
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
