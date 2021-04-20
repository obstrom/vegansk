import StartSearch from './components/StartSearch'
// import ScannerBox from "./components/ScannerBox";

function App() {
    return (
        <>
        <div className="App container d-flex flex-column">
            <div className="title-container">
                <img src="images/ica.svg" className="title-icon"></img>
                <h1 className="title">Är den vegansk?</h1>
            </div>
            <StartSearch />
        </div>
        {/*showSearch && <div class="sticky-fade"></div>*/}
        </>
    );
}

export default App;
