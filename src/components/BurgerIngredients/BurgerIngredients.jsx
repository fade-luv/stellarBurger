import React from "react";
import { useEffect, useState, useRef } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsStyle from "./BurgerIngredients.module.css";
import Ingredient from "../Ingredient/Ingredient";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import  {useInView}  from "react-intersection-observer";
import getIngredientsActionCreator from "../../store/actionCreators/ingredients-actionCreator";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function BurgerIngredients(props) {
  const dispatch = useDispatch();
  const [current, setCurrent] = React.useState("one");
  const [isLoaded, setIsLoaded] = useState(false);

        
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const ingRef = useRef(null);


 const { ref: bunsRefVisible, inView: bunsVisible } = useInView();
 const { ref: saucesRefVisible, inView: saucesVisible } = useInView();
 const { ref: ingredientsRefVisible, inView: ingredientsVisible } = useInView();

 useEffect(() => {
   dispatch(getIngredientsActionCreator());
   setIsLoaded(true);
 }, []);

const ingredients = useSelector((state) => state.ingredientsReducer.ingredients)
  const handleScroll = () => {
    if (bunsVisible) {
      setCurrent("one");
    } else if (saucesVisible) {
      setCurrent("two");
    } else if (ingredientsVisible) {
      setCurrent("three");
    }
  };
  
  useEffect(() => {
    handleScroll();
  }, [bunsVisible, saucesVisible, ingredientsVisible]);


  const handleTabClick = (value, ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setCurrent(value);
  };

  
 

  return (
    <React.Fragment>
      {isLoaded && (
        <div className={BurgerIngredientsStyle.BurgerIngredients}>
          <h1 className="text text_type_main-large mt-10 mb-5">
            Соберите бургер
          </h1>
          <div className="mb-10">
            <div style={{ display: "flex" }}>
              <a className={BurgerIngredientsStyle.tabLink}>
                <Tab
                  value="one"
                  active={current === "one"}
                  onClick={(value) => handleTabClick(value, bunRef)}
                >
                  Булки
                </Tab>
              </a>
              <a className={BurgerIngredientsStyle.tabLink}>
                <Tab
                  value="two"
                  active={current === "two"}
                  onClick={(value) => handleTabClick(value, sauceRef)}
                >
                  Соусы
                </Tab>
              </a>
              <a className={BurgerIngredientsStyle.tabLink}>
                <Tab
                  value="three"
                  active={current === "three"}
                  onClick={(value) => handleTabClick(value, ingRef)}
                >
                  Начинки
                </Tab>
              </a>
            </div>
          </div>
          <div className="scrollArea">
            <div
              id={BurgerIngredientsStyle.wrapper}
              className={BurgerIngredientsStyle.wrapper}
            >
              <h2
                id="one"
                className="mb-6   text text_type_main-medium"
                ref={bunRef}
              >
                Булки
              </h2>
              <div
                className={BurgerIngredientsStyle.ingredients_container}
                ref={bunsRefVisible}
              >
                {ingredients.map(
                  (ingredient) =>
                    ingredient.type === "bun" && (
                      <Link to={{ pathname: `ingredients/:id` }}>
                        <Ingredient
                          key={ingredient._id}
                          ingredientInfo={ingredient}
                        />
                      </Link>
                    )
                )}
              </div>
              <h2
                id="two"
                className="mb-6 mt-10 text text_type_main-medium"
                ref={sauceRef}
              >
                Соусы
              </h2>
              <div
                className={BurgerIngredientsStyle.ingredients_container}
                ref={saucesRefVisible}
              >
                {ingredients.map(
                  (ingredient) =>
                    ingredient.type === "sauce" && (
                      <Link to={{ pathname: `ingredients/:id` }}>
                        <Ingredient
                          key={ingredient._id}
                          ingredientInfo={ingredient}
                        />
                      </Link>
                    )
                )}
              </div>
              <h2
                id="three"
                className="mb-6 mt-10 my-class text text_type_main-medium"
                ref={ingRef}
              >
                Начинки
              </h2>
              <div
                className={BurgerIngredientsStyle.ingredients_container}
                ref={ingredientsRefVisible}
              >
                {ingredients.map(
                  (ingredient) =>
                    ingredient.type === "main" && (
                      <Link to={{ pathname: `ingredients/:id` }}>
                        <Ingredient
                          key={ingredient._id}
                          ingredientInfo={ingredient}
                        />
                      </Link>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
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

export default BurgerIngredients;
