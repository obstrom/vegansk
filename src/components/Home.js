import StartSearch from "./StartSearch";
import { useEffect } from "react";

function Home(props) {
  // Make body-tag (outside React) green for home page
  document.body.style.backgroundColor = "#38514b";

  // Handle start page background image on window resize
  const windowWidthChange = () => {
    if (document.body.clientWidth < 768) {
      document.body.style.backgroundImage = "none";
    } else {
      document.body.style.backgroundImage = "url('./images/lemon_bg.png')";
    }
  };
  window.addEventListener("resize", windowWidthChange);

  windowWidthChange();

  return (
    <>
      <div className="App container d-flex flex-column">
        <div className="desktop-title">Vegansk.</div>
        <div className="title-container">
          <img src="images/ica.png" className="title-icon" alt="ICA Logo" />
          <h1 className="title">Är den vegansk?</h1>
        </div>
        <StartSearch allProductsList={props.allProducts} compactMode={false} />
      </div>
      {/*showSearch && <div class="sticky-fade"></div>*/}
    </>
  );
}

export default Home;
