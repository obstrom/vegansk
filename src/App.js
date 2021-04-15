import { useState, useEffect, useRef } from "react";
import SearchResults from "./components/SearchResults";
import StartInfo from "./components/StartInfo";
// import ScannerBox from "./components/ScannerBox";
import { createServer } from 'miragejs';

createServer({
    routes() {
      this.get("/api/users", () => [
        { id: "1", name: "Luke" },
        { id: "2", name: "Leia" },
        { id: "3", name: "Anakin" },
      ])
    },
  })

function App() {
    const [searchInput, setSearchInput] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [users, setUsers] = useState([]);

    const searchInputElement = useRef(null);

    useEffect(() => {
        if (!searchInput) {
            setShowSearch(false);
        }
    });

    function search() {
        

        let searchInput = searchInputElement.current.value;

        console.log("click");
        console.log(searchInput);

        if (searchInput) {
            fetch("/api/users")
                .then((response) => response.json())
                .then((json) => setUsers(json));
            setShowSearch(true);
        } else {
            setShowSearch(false);
        }
    }

    function searchButtonClick() {
        //setSearchInput(searchInputElement.current.value);
        search();
    }

    return (
        <>
        <div className="App container d-flex flex-column">
            <h1 className="title">Är den vegansk?</h1>
            <div className="input-container text-center">
                <input
                    id="search-input"
                    placeholder="Sök produkt ..."
                    type="search"
                    ref={searchInputElement}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button id="search-button" onClick={searchButtonClick}>Sök</button>
            </div>
            <ul>{users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}</ul>
            {!showSearch && <StartInfo />}
            {showSearch && <SearchResults />}
        </div>
        {showSearch && <div class="sticky-fade"></div>}
        </>
    );
}

export default App;
