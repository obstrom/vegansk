function App() {
    return (
        <div className="App container">
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
                <input id="search-input" placeholder="Sök produkt ..."></input>
                <button id="search-button">Sök</button>
            </div>
            {/*<div className="info-container">
                <h2>Vi vill hjälpa dig!</h2>
                <p>
                    Scanna eller sök efter produkter för att vara säker på om de
                    är veganska eller inte.
                </p>
    </div>*/}
            <div className="footer-container"></div>
        </div>
    );
}

export default App;
