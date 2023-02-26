import React, { useEffect, useState } from "react";
import styles from "./IngredientDetails.module.css";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getIngredientsActionCreator from "../../store/actionCreators/ingredients-actionCreator";

const IngredientDetails = function (props) {
let {id} = useParams()

  const [isLoaded, setIsLoaded] = useState(false);
 const dispatch = useDispatch();

useEffect(() => {
  dispatch(getIngredientsActionCreator());
}, []);

const ingredients = useSelector(
  (state) => state.ingredientsReducer.ingredients
);
const info = useSelector(
  (store) => store.focusIngredientReducer.focusIngredient
);

 const findItem = ingredients.find((i) => i._id === id);

  return (
    <>
      <h1 className={findItem ? styles.title_page : styles.title}>
        Детали ингредента
      </h1>
      <div className={findItem ? styles.img_wrapper_page : styles.img_wrapper}>
        <img
          
          src={findItem ? findItem.image_large : info.image_large}
          alt=""
        />
      </div>
      <h2 className={findItem ? styles.subtitle_page : styles.subtitle}>
        {findItem ? findItem.name : info.name}
      </h2>
      <ul className={styles.specifications}>
        <li className={styles.specificationItem}>
          <p className={styles.specificationItemTitle}>Калории,ккал</p>
          <p className={styles.specificationItemValue}>
            {findItem ? findItem.calories : info.calories}
          </p>
        </li>
        <li className={styles.specificationItem}>
          <p className={styles.specificationItemTitle}>Белки, г</p>
          <p className={styles.specificationItemValue}>
            {findItem ? findItem.carbohydrates : info.carbohydrates}
          </p>
        </li>
        <li className={styles.specificationItem}>
          <p className={styles.specificationItemTitle}>Жиры, г</p>
          <p className={styles.specificationItemValue}>
            {findItem ? findItem.fat : info.fat}
          </p>
        </li>
        <li className={styles.specificationItem}>
          <p className={styles.specificationItemTitle}>Углеводы, г</p>
          <p className={styles.specificationItemValue}>
            {findItem ? findItem.proteins : info.proteins}
          </p>
        </li>
      </ul>
    </>
  );
};

export default IngredientDetails;
