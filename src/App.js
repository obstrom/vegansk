import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
// import ScannerBox from "./components/ScannerBox";

function App() {
    const [allProducts, setAllProducts] = useState([]);

    /*const fetchData = async () => {
        return await fetch("./api/products")
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);*/

    return (
        <>
            <Router>
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={(allProducts) => (
                            <Home products={allProducts} />
                        )}
                    />
                    <Route path="/products/" component={Product} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
