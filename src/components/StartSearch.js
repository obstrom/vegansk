import { useState, useRef } from "react";
import StartInfo from "./StartInfo";
import SearchResults from "./SearchResults";
import createServer from "./ProductList";

function StartSearch(props) {
  const productList = props.allProductsList;
  const [filteredList, setFilteredList] = useState(productList);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const searchInputElement = useRef(null);

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

  return (
    <>
      <div className="input-container text-center">
        <form>
          <i className="search-icon" />

          <input
            id="search-input"
            placeholder="Sök produkt ..."
            type="search"
            ref={searchInputElement}
            onChange={searchInputEvent}
          />
          {!props.compactMode ? (
            <button
              id="search-button"
              onClick={searchButtonClick}
              type="submit"
            >
              Sök
            </button>
          ) : null}
        </form>
      </div>
      {!showSearchResults && !props.compactMode && <StartInfo />}
      {showSearchResults && !props.compactMode && (
        <SearchResults renderData={filteredList} />
      )}
    </>
  );
}

export default StartSearch;
