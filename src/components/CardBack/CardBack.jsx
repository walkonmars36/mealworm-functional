import React from "react";
import styles from "./CardBack.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import List from "../List";
import {useState} from "react";

const CardBack = (props) => {
  const shortenInstructions = (instructions) => (instructions.length < 300 ? instructions : instructions.substring(0, 200) + "...");

  // Options for heart icon are:
  // SOLID HEART: ["fas", "heart"]
  // OPEN HEART: ["far", "heart"]

  const [icon, setIcon] = useState(true);
  const toggleIcon = () => setIcon((fav) => !fav);

  const swapIcon = (e) => {
    e.stopPropagation();
    toggleIcon();
  };

  const {ingredients, strMeal, strInstructions} = props.recipe;

  return (
    <section className={styles.cardBack}>
      <span className={styles.heart} onClick={swapIcon}>
        <FontAwesomeIcon icon={icon ? ["far", "heart"] : ["fas", "heart"]} />
      </span>
      <h2>{strMeal}</h2>
      <h3>Instructions</h3>
      <p>{shortenInstructions(strInstructions)}</p>
      <h3>Ingredients</h3>
      <div className={styles.list}>
        <List items={ingredients} />
      </div>
    </section>
  );
};

export default CardBack;
