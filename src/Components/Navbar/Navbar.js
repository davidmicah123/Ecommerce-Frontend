import React, { useState } from "react";
import classes from "./Navbar.module.css";
import MobileNav from "../MobileNav/MobileNav";

const Navbar = () => {
  const [isNavVisible, SetisNavVisible] = useState(false);

  const openNav = () => {
    SetisNavVisible(!isNavVisible);
  };

  const closeNav = () => {
    SetisNavVisible(!isNavVisible);
  };

  return (
    <nav className={classes.navbar}>
      {isNavVisible && <MobileNav close={closeNav} />}

      <div className={classes.nav_content_wrapper}>
        <h1>
          <ion-icon name="cart-outline"></ion-icon> <span>EduMart</span>
        </h1>

        <ul className={classes.nav_links_wrapper}>
          <li>Home</li>
          <li>Category</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>

        <div className={classes.flexed}>
          <div className={classes.searchbar_wrapper}>
            <input type="text" placeholder="Search here..." />
            <ion-icon name="search-outline"></ion-icon>
          </div>

          <div className={classes.nav_buttons_wrapper}>
            <button className={classes.colore_btn}>Sign Up</button>
            <button className={classes.btn}>Sign In</button>
          </div>
        </div>

        <div className={classes.menu_wrapper} onClick={openNav}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
