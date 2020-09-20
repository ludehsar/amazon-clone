import React from "react";
import StarIcon from "@material-ui/icons/Star";

import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>
          Logitech G602 Lag-Free Wireless Gaming Mouse – 11 Programmable
          Buttons, Upto 2500 DPI
        </p>
        <p className="product__price">
          <small>$</small>
          <strong>86.00</strong>
        </p>
        <div className="product__rating">
          <StarIcon className="product__ratingGold" />
          <StarIcon className="product__ratingGold" />
          <StarIcon className="product__ratingGold" />
          <StarIcon className="product__ratingWhite" />
          <StarIcon className="product__ratingWhite" />
        </div>
      </div>
      <img src="/product.jpg" alt="Mouse" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
