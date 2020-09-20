import React from "react";
import Product from "../Product/Product";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__banner" src="/banner.jpg" alt="Prime banner" />

        <div className="home__row">
          <Product />
          {/* Product */}
        </div>
        <div className="home__row">
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>
        <div className="home__row">{/* Product */}</div>
      </div>
    </div>
  );
}

export default Home;
