import StartSearch from "./StartSearch";

function Home(props) {
    // Make body-tag (outside React) green for home page
    document.body.style.backgroundColor = "#38514b";

    return (
        <>
            <div className="App container d-flex flex-column">
                <div className="title-container">
                    <img
                        src="images/ica.png"
                        className="title-icon"
                        alt="ICA Logo"
                    ></img>
                    <h1 className="title">Är den vegansk?</h1>
                </div>
                <StartSearch allProductsList={props.allProducts} />
            </div>
            {/*showSearch && <div class="sticky-fade"></div>*/}
        </>
    );
}

export default Home;
