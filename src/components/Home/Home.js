import React from "react";
import Product from "../Product/Product";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__banner" src="/banner.jpg" alt="Prime banner" />

        <div className="home__row">
          <Product
            id="1"
            title="Logitech G602 Lag-Free Wireless Gaming Mouse – 11 Programmable Buttons, Upto 2500 DPI"
            price={11.86}
            rating={5}
            image="/product1.jpg"
          />
          <Product
            id="2"
            title="Samsung (MZ-V7S1T0B/AM) 970 EVO Plus SSD 1TB - M.2 NVMe Interface Internal Solid State Drive with V-NAND Technology"
            price={179.99}
            rating={3}
            image="/product2.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo PS3 Games"
            price={36.99}
            rating={4}
            image="/product3.jpg"
          />
          <Product
            id="1"
            title="Logitech G602 Lag-Free Wireless Gaming Mouse – 11 Programmable Buttons, Upto 2500 DPI"
            price={11.86}
            rating={5}
            image="/product1.jpg"
          />
          <Product
            id="1"
            title="Logitech G602 Lag-Free Wireless Gaming Mouse – 11 Programmable Buttons, Upto 2500 DPI"
            price={11.86}
            rating={5}
            image="/product1.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1"
            title="Logitech G602 Lag-Free Wireless Gaming Mouse – 11 Programmable Buttons, Upto 2500 DPI"
            price={11.86}
            rating={5}
            image="/product1.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
