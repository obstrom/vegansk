import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import createServer from "./components/ProductList";

function App() {
    const [allProducts, setAllProducts] = useState([]);
    const [specialIngredients, setSpecialIngredients] = useState([]);

    const fetchProductData = async () => {
        return await fetch("./api/products")
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
            });
    };

    const fetchIngredientsData = async () => {
        return await fetch("./api/special-ingredients")
            .then((res) => res.json())
            .then((data) => {
                setSpecialIngredients(data);
            });
    };

    useEffect(() => {
        fetchProductData();
        fetchIngredientsData();
    }, []);

    return (
        <>
            <Router>
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={() => <Home allProducts={allProducts} />}
                    />
                    <Route
                        path="/products/"
                        component={() => (
                            <Product
                                productDataAll={allProducts}
                                specialIngredients={specialIngredients}
                            />
                        )}
                    />
                </Switch>
            </Router>
        </>
    );
}

export default App;
