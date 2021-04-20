

function Product(){
    // JS-kod här!
    return(
        <div className="Product container d-flex flex-column text-center">
        {/*Produktlandningssida här!*/}
        <div></div>
        <div className="top">
           <div className="answer">ja {/* Oscar: Ska HTML skrivas med gemener, som sedan justeras till versaler i CSS?*/}
           <div className="specify-answer">vegansk</div>
           </div>
        </div>
        <div className="bottom">
        <div className="product-name">Flora bordsmargarin 400 gram</div>
        <img></img>
        <br/>
        <div className="ingredients">Ingredienser</div>
        <ul className="ingredient-list">
            <li>Vatten</li> 
            <li>Palmolja</li> 
            <li>Rapsolja (24%)</li> 
            <li>Salt (1,2%)</li> 
            <li>Emulgeringsmedel</li> 
            <li>Naturlig arom</li>
        </ul>
        <button className="new-search" onClick="blablabla()">Gör ny sökning</button>
        </div>
     </div>
    )
}

export default Product;