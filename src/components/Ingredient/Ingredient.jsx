import React from "react";
import IngredientStyle from "./Ingredient.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import PropTypes from "prop-types";

const Ingredient = function (props) {
  const { ingredientInfo } = props;

  const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] =
    React.useState({ state: false, target: {} });
  const target = isIngredientDetailsOpened.target;

  const closeAllModals = () => {
    setIsIngredientDetailsOpened(false);
  };

  const handleEscKeydown = (event) => {
    event.key === "Escape" && closeAllModals();
  };

  return (
    <div>
      <>
        <div
          data="ingredient"
          onClick={(event) =>
            setIsIngredientDetailsOpened({
              ...isIngredientDetailsOpened,
              state: true,
              target: event.currentTarget.getAttribute("data"),
            })
          }
          className={`${IngredientStyle.Ingredient_item} ml-4`}
        >
          <div className={IngredientStyle.counter}>1</div>
          <img
            className={`${IngredientStyle.Ingredient__image} ml-4`}
            src={ingredientInfo.image}
          ></img>

          <div className={IngredientStyle.Ingredient__price_info}>
            <p className="text text_type_digits-default mt-1">
              {ingredientInfo.price}
            </p>

            <div className="ml-1">
              <CurrencyIcon type="primary" />
            </div>
          </div>
          <h3
            className={`${IngredientStyle.Ingredient__title} text text_type_main-default  mt-2`}
          >
            {ingredientInfo.name}
          </h3>
        </div>
      </>
      <>
        {isIngredientDetailsOpened.state && (
          <Modal
            target={target}
            title="Детали заказа"
            onOverlayClick={closeAllModals}
            onEscKeydown={handleEscKeydown}
            onCloseButtonClick={closeAllModals}
          >
            <IngredientDetails info={ingredientInfo} />
          </Modal>
        )}
      </>
    </div>
  );
};

Ingredient.propTypes = {
  ingredientInfo: PropTypes.shape({
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};


export default Ingredient;
