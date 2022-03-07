﻿import React from "react";
import styles from "./NavBar.module.scss";
import logo from "../../assets/plate-secondary.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SearchBar from "../SearchBar";

const NavBar = () => {
  return (
    <nav className={styles.navFlex}>
      <div className={styles.navFlex}>
        <img src={logo} alt="FoodWorm logo" />
        <h1>MealWorm</h1>
      </div>
      <div className={styles.searchPanel}>
        <SearchBar placeholder="search for recipes..." />
        <span className={styles.faStyles}>
          <FontAwesomeIcon icon="book-open" />
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
