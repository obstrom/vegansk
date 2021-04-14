import { useState, useEffect } from "react";
import SearchResults from "./components/SearchResults";
import StartInfo from "./components/StartInfo";

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
        <div className="App container d-flex flex-column">
            <h1 className="title">Är den vegansk?</h1>
            {/*<div className="scanner-container">
                <div className="scanner-icon-wrapper text-center">
                    <i className="scanner-icon">
                        <svg
                            width="82"
                            height="45"
                            viewBox="0 0 82 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="4.27632"
                                height="44.0104"
                                transform="matrix(-1 0 0 1 4.27637 0)"
                                fill="#38514B"
                            />
                            <rect
                                width="8.55263"
                                height="44.0104"
                                transform="matrix(-1 0 0 1 81.25 0)"
                                fill="#38514B"
                            />
                            <rect
                                width="4.27632"
                                height="44.0104"
                                transform="matrix(-1 0 0 1 12.8291 0)"
                                fill="#38514B"
                            />
                            <rect
                                width="4.27632"
                                height="44.0104"
                                transform="matrix(-1 0 0 1 68.4209 0)"
                                fill="#38514B"
                            />
                            <rect
                                width="8.55263"
                                height="44.0104"
                                transform="matrix(-1 0 0 1 25.6582 0)"
                                fill="#38514B"
                            />
                            <rect
                                width="4.27632"
                                height="44.0104"
                                transform="matrix(-1 0 0 1 34.2109 0)"
                                fill="#38514B"
                            />
                            <rect
                                width="4.27632"
                                height="44.0104"
                                transform="matrix(-1 0 0 1 59.8677 0)"
                                fill="#38514B"
                            />
                            <rect
                                width="12.8289"
                                height="44.0104"
                                transform="matrix(-1 0 0 1 51.3149 0)"
                                fill="#38514B"
                            />
                        </svg>
                    </i>
                </div>
                <p className="scanner-text">Scanna streckkod</p>
    </div>*/}
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
    );
}

export default App;
