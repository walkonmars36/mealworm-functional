import React from "react";
import styles from "./SearchBar.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";

const SearchBar = (props) => {
  const {placeholder} = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.search}>
      {isOpen ? <input type="text" placeholder={placeholder} /> : null}

      <button onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.fa}>
          <FontAwesomeIcon icon="search" />
        </span>
      </button>
    </div>
  );
};

export default SearchBar;
