import React from "react";
import { useEffect} from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsStyle from "./BurgerIngredients.module.css";
import Ingredient from "../Ingredient/Ingredient";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function BurgerIngredients(props) {

  const [current, setCurrent] = React.useState("one");
  useEffect(() => {
    document.getElementById(current).scrollIntoView();
  });
  return (
    <React.Fragment>
      <div className={BurgerIngredientsStyle.BurgerIngredients}>
        <h1 className="text text_type_main-large mt-10 mb-5">
          Соберите бургер
        </h1>
        <div className="mb-10">
          <div style={{ display: "flex" }}>
            <a className={BurgerIngredientsStyle.tabLink}>
              <Tab value="one" active={current === "one"} onClick={setCurrent}>
                Булки
              </Tab>
            </a>
            <a className={BurgerIngredientsStyle.tabLink}>
              <Tab value="two" active={current === "two"} onClick={setCurrent}>
                Соусы
              </Tab>
            </a>
            <a className={BurgerIngredientsStyle.tabLink}>
              <Tab
                value="three"
                active={current === "three"}
                onClick={setCurrent}
              >
                Начинки
              </Tab>
            </a>
          </div>
        </div>

        <div
          id={BurgerIngredientsStyle.wrapper}
          className={BurgerIngredientsStyle.wrapper}
        >
          <h2 id="one" className="mb-6  text text_type_main-medium">
            Булки
          </h2>
          <div className={BurgerIngredientsStyle.ingredients_container}>
            {props.ingredients.ingredientsReducer.ingredients.map(
              (ingredient) =>
                ingredient.type === "bun" && (
                  <Ingredient
                    key={ingredient._id}
                    ingredientInfo={ingredient}
                  />
                )
            )}
          </div>
          <h2 id="two" className="mb-6 mt-10 text text_type_main-medium">
            Соусы
          </h2>
          <div className={BurgerIngredientsStyle.ingredients_container}>
            {props.ingredients.ingredientsReducer.ingredients.map(
              (ingredient) =>
                ingredient.type === "sauce" && (
                  <Ingredient
                    key={ingredient._id}
                    ingredientInfo={ingredient}
                  />
                )
            )}
          </div>
          <h2 id="three" className="mb-6 mt-10 text text_type_main-medium">
            Начинки
          </h2>
          <div className={BurgerIngredientsStyle.ingredients_container}>
            {props.ingredients.ingredientsReducer.ingredients.map(
              (ingredient) =>
                ingredient.type === "main" && (
                  <Ingredient
                    key={ingredient._id}
                    ingredientInfo={ingredient}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

BurgerIngredients.propTypes = {
  ingridients: PropTypes.arrayOf(
    PropTypes.shape({
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
    }).isRequired
  ),
};
function mapStateToProps(state) {
  return {
    ingredients: state,
  };
}
export default connect(mapStateToProps)(BurgerIngredients);
