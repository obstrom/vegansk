import { useLocation } from "react-router-dom";

function Product(props) {
    const getProductIdFromPath = (location) => {
        const splitPath = location.pathname.split("-");
        return splitPath[splitPath.length - 1];
    };

    return (
        <div>
            <h1>Det här är produkt #{getProductIdFromPath(useLocation())}</h1>
        </div>
    );
}

export default Product;
