import { useLocation } from "react-router-dom";

function Product(props) {
    const getProductIdFromPath = (location) => {
        const splitPath = location.pathname.split("-");
        return splitPath[splitPath.length - 1];
    };

    const productId = getProductIdFromPath(useLocation());
    const productData = props.productDataAll[productId - 1];

    return (
        <ul className="info-container">
            <li>{`id: ${productData.id}`}</li>
            <li>{`name: ${productData.name}`}</li>
            <li>{`producer: ${productData.producer}`}</li>
            <li>{`vegan: ${productData.vegan}`}</li>
        </ul>
    );
}

export default Product;
