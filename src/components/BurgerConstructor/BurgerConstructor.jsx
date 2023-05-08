import React from "react";
import BurgerConstructorStyle from "./BurgerConstructor.module.css";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import BurgerConstructorItem from "./BurgerConstructorItem/BurgerConstructorItem";
import { getOrderActionCreator } from "../../store/actionCreators/order-actionCreator";
import { useDispatch, useSelector } from "react-redux";
import addIngredientActionCreator from "../../store/actionCreators/addIngredient-actionCreator";
import addBunActionCreator from "../../store/actionCreators/addBun-actionCreator.js";
import incrementActionCreator from "../../store/actionCreators/increment-actionCreator";
import sortIngredientsActionCreator from "../../store/actionCreators/sortIngredients-actionCreator";
import { useNavigate, useLocation } from "react-router-dom";
import { useDrop } from "react-dnd";

const BurgerConstructor = function (props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);

  let order = useSelector((state) => state.orderReducer.order);

  let bun = useSelector(
    (state) => state.burgerConstructorReducer.constructorBun
  );

  let isAuth = useSelector((state) => state.authReducer.isAuth);

  let SoucesAndFillings = useSelector(
    (state) => state.burgerConstructorReducer.chosenIngredients
  );

  let BurgerElem = useSelector(
    (state) => state.burgerConstructorReducer.burgerConstructorElements
  );

  let totalPrice = useSelector(
    (state) => state.burgerConstructorReducer.burgerConstructorTotalPrice
  );

  function getIngredientsIDs(params) {
    let soucesAndFillingsID = SoucesAndFillings.map((el) => el._id);
    let bunID = bun._id;
    soucesAndFillingsID.push(bunID);
    return soucesAndFillingsID;
  }

  function handleClick(params) {
    if (localStorage.getItem("accessToken")) {
      openModal();
    } else {
      navigate("/login", {
        state: { from: location.pathname },
      });
    }
    let soucesAndFillingsID = getIngredientsIDs();
    dispatch(getOrderActionCreator(soucesAndFillingsID));
  }

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

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(ingredient) {
      onDropHandler(ingredient);
      priceIncrement(ingredient);
    },
  });

  const onDropHandler = (ingredient) => {
    if (ingredient.type === "sauce" || ingredient.type === "main") {
      dispatch(addIngredientActionCreator(ingredient));
      dispatch(incrementActionCreator(ingredient.price));
    } else {
      dispatch(addBunActionCreator(ingredient));
    }
  };

  const priceIncrement = (item) => {
    if (item.type === "sauce" || item.type === "main") {
      dispatch(incrementActionCreator(item.price));
    } else {
      dispatch(incrementActionCreator(item.price * 2));
    }
  };

  const moveCard = (dragIndex, hoverIndex) => {
    const dragSoucesAndFillingsItem = SoucesAndFillings[dragIndex];
    if (dragSoucesAndFillingsItem) {
      const newSoucesAndFillings = [...SoucesAndFillings];
      newSoucesAndFillings.splice(dragIndex, 1);
      newSoucesAndFillings.splice(hoverIndex, 0, dragSoucesAndFillingsItem);
      dispatch(sortIngredientsActionCreator(newSoucesAndFillings));
    }
  };

  return (
    <>
      <div></div>
      {BurgerElem && (
        <ul className={`${BurgerConstructorStyle.ul} pl-10`}>
          <div
            ref={dropTarget}
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
              {SoucesAndFillings.map((ingredient, index) => (
                <div key={index} className={`${BurgerConstructorStyle.test} `}>
                  <BurgerConstructorItem
                    ingredient={ingredient}
                    index={index}
                    moveCard={moveCard}
                  />
                </div>
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
              <span className="text text_type_digits-medium">{totalPrice}</span>
              <span className={BurgerConstructorStyle.test3}>
                <CurrencyIcon
                  type="primary"
                  className="text text_type_main-large"
                />
              </span>
            </span>

            <Button
              type="primary"
              size="large"
              onClick={handleClick}
              htmlType="button"
            >
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
          <OrderDetails id={order} title={"идентификатор заказа"} />
        </Modal>
      )}
    </>
  );
};


export default BurgerConstructor;
