export default function (props) {
    const x = props.productData;

    function specE(){
        if(x.ingredients==="E500"){
            return(
                <div className="modal-body">
                    Alkaliska salter av kolsyra kallas också soda. Förekommer naturligt, men kan också
                    framställas av salt och koldioxid. Surhetsreglerande medel. Natriumvätekarbonat är
                    också ett mycket vanligt jäsningsmedel (natriumbikarbonat, bakpulver). Får användas
                    i nästan alla livsmedel som får innehålla tillsatser. Mängdbegränsning i kakao- och
                    chokladprodukter.
                </div>
            )
        }
        else {
            return (
                <div className="modal-body">
                    Ej E500
                </div>
            )
        }
    }

    return (
        <body className="modalw">

            <p id="btn"  data-toggle="modal" data-target="#myModal">
                E500
            </p>


            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">


                        <div class="modal-header">
                            <h4 class="modal-title">E500 - Natriumkarbonater</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>


                        {specE()}


                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </body>
    )
}