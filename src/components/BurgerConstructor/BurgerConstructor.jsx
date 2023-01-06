import React from "react";
import { useEffect } from "react";
import BurgerConstructorStyle from "./BurgerConstructor.module.css";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { getOrderNumber } from "../../utils/burger-api";
import { connect } from "react-redux";
import burgerConstructorActionCreator from "../../store/actionCreators/burgerConstructor-actionCreator";

const BurgerConstructor = function (props) {

  const [orderId, setOrderId] = React.useState(0);
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);
  
  let bun = props.ingredients.burgerConstructorReducer.constructorBun;
  let SoucesAndFillings = props.ingredients.burgerConstructorReducer.constructorSoucesAndFillings;
;
  useEffect(() => {
    const Ingredients = props.ingredients.ingredientsReducer.ingredients;
    props.burgerConstructorIngredients(Ingredients);
  }, []);

  // function orderDetaildHandler(params) {
  //   const IDs = getIngerdientIDs();
  //   openModal();
  //   getOrderNumber(IDs).then((data) => setOrderId(data.order.number));
  // }

  // function getIngerdientIDs(params) {
  //   return [...sortSoucesAndFillings().map((el) => el._id), sortBun()._id];
  // }

  function openModal(params) {
    setIsOrderDetailsOpened({
      ...isOrderDetailsOpened,
      state: true,
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
      {props.ingredients.burgerConstructorReducer.burgerConstructorElements && (
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
              <span className="text text_type_digits-medium">
                {
                  props.ingredients.burgerConstructorReducer
                    .burgerConstructorPrice
                }
              </span>
              <span className={BurgerConstructorStyle.test3}>
                <CurrencyIcon
                  type="primary"
                  className="text text_type_main-large"
                />
              </span>
            </span>

            <Button type="primary" size="large" onClick={openModal}>
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

function mapStateToProps(state) {
  return {
    ingredients: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    burgerConstructorIngredients: bindActionCreators(
      burgerConstructorActionCreator,
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerConstructor);
