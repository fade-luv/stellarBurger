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
  const orderRequestURL = "https://norma.nomoreparties.space/api/orders";
  const ingredients = React.useContext(IngredientsContext);
  const [orderId, setOrderId] = React.useState(0);
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);

  function sortBun(params) {
    return ingredients.find((ingredient) => ingredient.type === "bun");
  }

  function sortSoucesAndFillings(params) {
    return ingredients
      .filter((ingredient) => ingredient.type !== "bun")
      .slice(3, 9);
  }

  function ingredientsPrice(params) {
    const mainPrice = sortSoucesAndFillings().reduce(
      (sum, el) => sum + el.price,
      0
    );
    const price = mainPrice + sortBun().price * 2;
    return price;
  }

  function orderDetaildHandler(params) {
    const IDs = getIngerdientIDs();
    openModal();
    getOrderNumber(IDs);
  }

  function getIngerdientIDs(params) {
    return [...sortSoucesAndFillings().map((el) => el._id), sortBun()._id];
  }

  async function getOrderNumber(IDs) {
    await fetch(orderRequestURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ ingredients: IDs }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`Somthing wrong: ${res.status}`);
      })
      .then((data) => setOrderId(data.order.number));
  }
  
  function openModal(params) {
    setIsOrderDetailsOpened({
      ...isOrderDetailsOpened,
      state: true
    });
  }
  const closeAllModals = () => {
    setIsOrderDetailsOpened(false);
  };

  const handleEscKeydown = (event) => {
    event.key === "Escape" && closeAllModals();
  };

  return (
    <>
      {sortBun() && (
        <ul className={`${BurgerConstructorStyle.ul} pl-10`}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <li className={BurgerConstructorStyle.test}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${sortBun().name} (верх)`}
                price={`${sortBun().price}`}
                thumbnail={`${sortBun().image}`}
              />
            </li>
            <ul id="center" className={BurgerConstructorStyle.center}>
              {sortSoucesAndFillings().map((ingredient) => (
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
                text={`${sortBun().name} (низ)`}
                price={`${sortBun().price}`}
                thumbnail={`${sortBun().image}`}
              />
            </li>
          </div>
          <div
            className={`${BurgerConstructorStyle.constructor__result} mt-10`}
          >
            <span className={BurgerConstructorStyle.constructor_sum}>
              <span className="text text_type_digits-medium">
                {ingredientsPrice()}
              </span>
              <span className={BurgerConstructorStyle.test3}>
                <CurrencyIcon
                  type="primary"
                  className="text text_type_main-large"
                />
              </span>
            </span>

            <Button type="primary" size="large" onClick={orderDetaildHandler}>
              Оформить заказ
            </Button>
          </div>
        </ul>
      )}

      {isOrderDetailsOpened && (
        <Modal
          title="Детали заказа"
          onOverlayClick={closeAllModals}
          onEscKeydown={handleEscKeydown}
          onCloseButtonClick={closeAllModals}
        >
          <OrderDetails id={orderId} title={"идентификатор заказа"} />
        </Modal>
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
