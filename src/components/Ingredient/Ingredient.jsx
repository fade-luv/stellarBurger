import React from "react";
import IngredientStyle from "./Ingredient.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

const Ingredient = function (props) {
  const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = React.useState(false);

    
    const closeAllModals = () => {
      setIsIngredientDetailsOpened(false)
    };

    const handleEscKeydown = (event) => {
      event.key === "Escape" && closeAllModals();
    };


  return (
    <div>
      <>
        <div
          onClick={() => setIsIngredientDetailsOpened(true)}
          className={`${IngredientStyle.Ingredient_item} ml-4`}
        >
          <div className={IngredientStyle.counter}>1</div>
          <img
            className={`${IngredientStyle.Ingredient__image} ml-4`}
            src={props.ingredientInfo.image}
          ></img>

          <div className={IngredientStyle.Ingredient__price_info}>
            <p className="text text_type_digits-default mt-1">
              {props.ingredientInfo.price}
            </p>

            <div className="ml-1">
              <CurrencyIcon type="primary" />
            </div>
          </div>
          <h3
            className={`${IngredientStyle.Ingredient__title} text text_type_main-default  mt-2`}
          >
            {props.ingredientInfo.name}
          </h3>
        </div>
      </>
      <>
        {isIngredientDetailsOpened && (
          <Modal
            title="Детали заказа"
            onOverlayClick={closeAllModals}
            onEscKeydown={handleEscKeydown}
          >
            <IngredientDetails info={props.ingredientInfo} />
          </Modal>
        )}
      </>
    </div>
  );
};

export default Ingredient;
