import { useState, useRef } from "react";
import StartInfo from "./StartInfo";
import SearchResults from "./SearchResults";
import createServer from "./ProductList";

function StartSearch(props) {
    const productList = props.allProductsList;
    const [filteredList, setFilteredList] = useState(productList);
    const [showSearchResults, setShowSearchResults] = useState(false);

    const searchInputElement = useRef(null);

    // Test kod
    /*const fetchRatingData = async () => {
        return await fetch("./api/rating").then((res) => res.json());
    };*/

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
            //Testkod för POST (skicka) ratings//
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: "Det här är en test!" }),
            };
            fetch("/api/rating", requestOptions).then((response) =>
                response.json()
            );

            //fetchRatingData();

            setShowSearchResults(true);
            updateFilteredList(inputText);
        } else {
            setShowSearchResults(false);
        }
    };

    /*useEffect(() => {
        fetchData();
    }, []);*/

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
