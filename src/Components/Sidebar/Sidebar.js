import React from "react";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <h3>Filter by</h3>
      <ul>
        <li>Product Price</li>
        <li>Product Ratings</li>
        <li>Discount</li>
        <li>Ascending order</li>
        <li>Discending order</li>
      </ul>
      <h3>Categories</h3>
      <ul>
        <li>Mens wear</li>
        <li>Womens wear</li>
        <li>Kids wear</li>
        <li>Hoodies</li>
        <li>Winter Wear</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
