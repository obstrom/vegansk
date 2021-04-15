import { useState, useEffect } from "react";
import SearchResults from "./components/SearchResults";
import StartInfo from "./components/StartInfo";
// import ScannerBox from "./components/ScannerBox";

function App() {
    const [searchInput, setSearchInput] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        if (searchInput) {
            setShowSearch(true);
        } else {
            setShowSearch(false);
        }
    });

    return (
        <>
        <div className="App container d-flex flex-column">
            <h1 className="title">Är den vegansk?</h1>
            <div className="input-container text-center">
                <input
                    id="search-input"
                    placeholder="Sök produkt ..."
                    type="search"
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button id="search-button">Sök</button>
            </div>
            {!showSearch && <StartInfo />}
            {showSearch && <SearchResults />}
        </div>
        {showSearch && <div class="sticky-fade"></div>}
        </>
    );
}

export default App;
