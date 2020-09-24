import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../StateProvider";

import "./Header.css";

function Header() {
  const [{ basket }] = useStateValue();

  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src="logo.png" alt="Amazon logo" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__navItem">
            <span className="header__navItemTextSm">Hello</span>
            <span className="header__navItemTextLg">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__navItem">
            <span className="header__navItemTextSm">Returns</span>
            <span className="header__navItemTextLg">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__navItem">
            <span className="header__navItemTextSm">Your</span>
            <span className="header__navItemTextLg">Prime</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header__navItemBasket">
            <ShoppingBasketIcon />
            <span className="header__navItemTextLg header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
