import { useState, useEffect, useRef } from "react";
import StartInfo from "./StartInfo";
import SearchResults from "./SearchResults";
import createServer from "./ProductList";

function StartSearch({ products = [] }) {
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [productList, setProductList] = useState(products);
    const [filteredList, setFilteredList] = useState(products);

    const searchInputElement = useRef(null);

    const fetchData = async () => {
        return await fetch("./api/products")
            .then((res) => res.json())
            .then((data) => {
                setProductList(data);
                setFilteredList(data);
            });
    };

    const updateFilteredList = async (query) => {
        const filtered = productList.filter((product) => {
            const searchName = product.searchTags.join(" ");
            return searchName.includes(query.toLowerCase());
        });
        setFilteredList(filtered);
    };

    const searchInputEvent = (e) => {
        const inputText = e.target.value;
        if (!inputText) {
            setShowSearchResults(false);
        }
    };

    const searchButtonClick = (e) => {
        // Prevents <form>-tag from refreshing page
        e.preventDefault();

        const inputText = searchInputElement.current.value;

        if (inputText) {
            setShowSearchResults(true);
            updateFilteredList(inputText);
        } else {
            setShowSearchResults(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="input-container text-center">
                <form className="d-flex">
                    <input
                        id="search-input"
                        className="d-flex"
                        placeholder="Sök produkt ..."
                        type="search"
                        ref={searchInputElement}
                        onChange={searchInputEvent}
                    />
                    <button
                        id="search-button"
                        onClick={searchButtonClick}
                        type="submit"
                    >
                        Sök
                    </button>
                </form>
            </div>
            {!showSearchResults && <StartInfo />}
            {showSearchResults && <SearchResults renderData={filteredList} />}
        </>
    );
}

export default StartSearch;
