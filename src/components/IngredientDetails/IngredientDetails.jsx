import React from "react";
import styles from "./IngredientDetails.module.css";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const IngredientDetails = function () {

  const info = useSelector(
    (store) => store.focusIngredientReducer.focusIngredient
  );
    console.log(info);
  return (
    <>
      <h1 className={`${styles.title}`}>Детали ингредента</h1>
      <div className={styles.img_wrapper}>
        <img className={styles.img} src={info.image_large} alt="" />
      </div>
      <h2 className={styles.subtitle}>{info.name}</h2>
      <ul className={styles.specifications}>
        <li className={styles.specificationItem}>
          <p className={styles.specificationItemTitle}>Калории,ккал</p>
          <p className={styles.specificationItemValue}>{info.calories}</p>
        </li>
        <li className={styles.specificationItem}>
          <p className={styles.specificationItemTitle}>Белки, г</p>
          <p className={styles.specificationItemValue}>{info.carbohydrates}</p>
        </li>
        <li className={styles.specificationItem}>
          <p className={styles.specificationItemTitle}>Жиры, г</p>
          <p className={styles.specificationItemValue}>{info.fat}</p>
        </li>
        <li className={styles.specificationItem}>
          <p className={styles.specificationItemTitle}>Углеводы, г</p>
          <p className={styles.specificationItemValue}>{info.proteins}</p>
        </li>
      </ul>
    </>
  );
};
IngredientDetails.propTypes = {
  info: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};
export default IngredientDetails;
