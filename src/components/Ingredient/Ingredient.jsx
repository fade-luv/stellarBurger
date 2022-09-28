import React from "react";
import IngredientStyle from "./Ingredient.module.css";
import {
  CurrencyIcon,
  Counter
} from "@ya.praktikum/react-developer-burger-ui-components";
const Ingredient = function (props) {
  return (
    <div className={IngredientStyle.Ingredient_item}>
      <div className={IngredientStyle.counter}>1</div>
      <img
        className={IngredientStyle.Ingredient__image}
        src={props.ingredientInfo.image}
      ></img>
      <div className={IngredientStyle.Ingredient__price_info}>
        <span className="text text_type_digits-default">
          {props.ingredientInfo.price}
        </span>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={IngredientStyle.Ingredient__title}>
        {props.ingredientInfo.name}
      </h3>
    </div>
  );
};

export default Ingredient;
