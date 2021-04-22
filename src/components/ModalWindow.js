export default function (props) {
    const specialProductId = props.specialProductId;
    const specialIngredientsData =
        props.specialIngredientsData[specialProductId - 1];

    return (
        <>
            <a
                href="#"
                data-toggle="modal"
                data-target={`#ingredient-modal-${specialProductId}`}
            >
                <div className="question-icon-wrapper">
                    <img
                        src="/images/question-icon.svg"
                        alt="Question mark icon"
                    />
                </div>
                {specialIngredientsData.name}
            </a>

            <div
                class="modal ingredient-modal"
                id={`ingredient-modal-${specialProductId}`}
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">
                                {specialIngredientsData.name}
                            </h4>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="modal-body">
                            {specialIngredientsData.text}
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
