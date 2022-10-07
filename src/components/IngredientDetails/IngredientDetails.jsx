import React from "react";
import styles from "./IngredientDetails.module.css"



const IngredientDetails = function (props) {
   console.log(props.info);
  return (
    <>
      <h1 className={`${styles.title}`}>Детали ингредента</h1>
      <div className="wrapper">
        <img src={props.info.image} alt="" />
      </div>
      <h2 className={styles.subtitle}>{props.info.name}</h2>
      <ul className={styles.specifications}>
        <li className={styles.specificationItem}>
          <p className={styles.specificationItemTitle}>Калории,ккал</p>
          <p className={styles.specificationItemValue}>{props.info.calories}</p>
        </li>
        <li className={styles.specificationItem}>
          <p className={styles.specificationItemTitle}>Белки, г</p>
          <p className={styles.specificationItemValue}>
            {props.info.carbohydrates}
          </p>
        </li>
        <li className={styles.specificationItem}>
          <p className={styles.specificationItemTitle}>Жиры, г</p>
          <p className={styles.specificationItemValue}>{props.info.fat}</p>
        </li>
        <li className={styles.specificationItem}>
          <p className={styles.specificationItemTitle}>Углеводы, г</p>
          <p className={styles.specificationItemValue}>{props.info.proteins}</p>
        </li>
      </ul>
    </>
  );
  
  
}

export default IngredientDetails;;