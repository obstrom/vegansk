import StartSearch from "./StartSearch";

function Home({ products = [] }) {
    return (
        <>
            <div className="App container d-flex flex-column">
                <div className="title-container">
                    <img src="images/ica.svg" className="title-icon"></img>
                    <h1 className="title">Är den vegansk?</h1>
                </div>
                <StartSearch products={products} />
            </div>
            {/*showSearch && <div class="sticky-fade"></div>*/}
        </>
    );
}

export default Home;
