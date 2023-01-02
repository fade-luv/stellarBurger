import React from "react";
import BurgerConstructorStyle from "./BurgerConstructor.module.css";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { IngredientsContext } from "../../services/ingredientsContext";

const BurgerConstructor = function () {
  const ingredients = React.useContext(IngredientsContext);

  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);

  function sortBun(params) {
    return ingredients.find((ingredient) => ingredient.type === "bun");
  }
 

  function sortSoucesAndFillings(params) {
    return ingredients
      .filter((ingredient) => ingredient.type !== "bun")
      .slice(3, 9);
  }
  let SoucesAndFillings = sortSoucesAndFillings();

  function ingredientsPrice(params) {
    const mainPrice = SoucesAndFillings.reduce((sum, el) => sum + el.price, 0);
    const bun = sortBun()
    const price = mainPrice + bun.price * 2;
    return price;
  }

  let bun = sortBun();


  const closeAllModals = () => {
    setIsOrderDetailsOpened(false);
  };

  const handleEscKeydown = (event) => {
    event.key === "Escape" && closeAllModals();
  };

  return (
    <>
      {bun && (
        <ul className={`${BurgerConstructorStyle.ul} pl-10`}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <li className={BurgerConstructorStyle.test}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${bun.name} (верх)`}
                price={`${bun.price}`}
                thumbnail={`${bun.image}`}
              />
            </li>
            <ul id="center" className={BurgerConstructorStyle.center}>
              {SoucesAndFillings.map((ingredient) => (
                <li
                  key={ingredient._id}
                  className={`${BurgerConstructorStyle.test} `}
                >
                  <div className={BurgerConstructorStyle.test2}>
                    <DragIcon type="primary" />
                  </div>
                  <ConstructorElement
                    text={ingredient.name}
                    price={ingredient.price}
                    className="pr-20"
                    thumbnail={ingredient.image}
                  />
                </li>
              ))}
            </ul>
            <li className={BurgerConstructorStyle.test}>
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${bun.name} (низ)`}
                price={`${bun.price}`}
                thumbnail={`${bun.image}`}
              />
            </li>
          </div>
          <div
            className={`${BurgerConstructorStyle.constructor__result} mt-10`}
          >
            <span className={BurgerConstructorStyle.constructor_sum}>
              <span className="text text_type_digits-medium">{ingredientsPrice()}</span>
              <span className={BurgerConstructorStyle.test3}>
                <CurrencyIcon
                  type="primary"
                  className="text text_type_main-large"
                />
              </span>
            </span>
            {isOrderDetailsOpened && (
              <Modal
                title="Детали заказа"
                onOverlayClick={closeAllModals}
                onEscKeydown={handleEscKeydown}
                onCloseButtonClick={closeAllModals}
              >
                <OrderDetails id={24334} title={"идентификатор заказа"} />
              </Modal>
            )}
            <Button
              type="primary"
              size="large"
              onClick={(event) =>
                setIsOrderDetailsOpened({
                  ...isOrderDetailsOpened,
                  state: true,
                })
              }
            >
              Оформить заказ
            </Button>
          </div>
        </ul>
      )}
    </>
  );
};

BurgerConstructor.propTypes = {
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

export default BurgerConstructor;
