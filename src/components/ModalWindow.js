export default function (props) {
    const specialProductId = props.specialProductId;
    const specialIngredientsData = props.specialIngredientsData[specialProductId-1];


    return (
        <>

            <p id="btn"  data-toggle="modal" data-target="#myModal">
                {specialIngredientsData.name}
            </p>


            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">


                        <div class="modal-header">
                            <h4 class="modal-title">{specialIngredientsData.name}</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            {specialIngredientsData.text}
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}