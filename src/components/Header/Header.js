import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src="logo.png" alt="Amazon logo" />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__navItem">
          <div className="header__navItemTextSm">Hello</div>
          <div className="header__navItemTextLg">Sign In</div>
        </div>
        <div className="header__navItem">
          <div className="header__navItemTextSm">Returns</div>
          <div className="header__navItemTextLg">& Orders</div>
        </div>
        <div className="header__navItem">
          <div className="header__navItemTextSm">Your</div>
          <div className="header__navItemTextLg">Prime</div>
        </div>
        <div className="header__navItemBasket">
          <ShoppingBasketIcon />
          <span className="header__navItemTextLg header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
