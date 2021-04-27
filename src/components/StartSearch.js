import { useState, useRef } from "react";
import StartInfo from "./StartInfo";
import SearchResults from "./SearchResults";
import createServer from './ProductList';

function StartSearch(props) {
    const productList = props.allProductsList;
    const [filteredList, setFilteredList] = useState(productList);
    const [showSearchResults, setShowSearchResults] = useState(false);

    const searchInputElement = useRef(null);

    const fetchRatingData = async () => {
        return await fetch("./api/ratings")
            .then((res) => res.json())
            .then((data) => {
                console.log("ratings: ", data);
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

            //Testkod för post ratings//
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: 'React POST Request Example' })
            };
            fetch('/api/ratings', requestOptions)
                .then(response => response.json());

            fetchRatingData();    
                

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
