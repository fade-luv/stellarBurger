import React from "react";
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
import BurgerConstructorItem from "./BurgerConstructorItem/BurgerConstructorItem";
import { getOrderActionCreator } from "../../store/actionCreators/order-actionCreator";
import { connect, useDispatch } from "react-redux";
import deleteIngredientActionCreator from "../../store/actionCreators/deleteingredint-actionCreator.js";
import addIngredientActionCreator from "../../store/actionCreators/addIngredient-actionCreator";
import addBunActionCreator from "../../store/actionCreators/addBun-actionCreator.js";
import incrementActionCreator from "../../store/actionCreators/increment-actionCreator";
import sortIngredientsActionCreator from "../../store/actionCreators/sortIngredients-actionCreator";

import { useDrop } from "react-dnd";

const BurgerConstructor = function (props) {
console.log(props);
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);

  let bun = props.ingredients.burgerConstructorReducer.constructorBun;
  let SoucesAndFillings =
    props.ingredients.burgerConstructorReducer.chosenIngredients;

  function getIngredientsIDs(params) {
    let soucesAndFillingsID = SoucesAndFillings.map((el) => el._id);
    let bunID = bun._id;
    soucesAndFillingsID.push(bunID);
    return soucesAndFillingsID;
  }

  const dispatch = useDispatch();

  function handleClick(params) {
    openModal();
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
      props.addIngredientToBurgerConstructor(ingredient);
      props.increment(ingredient.price);
    } else {
      props.addBunToBurgerConstructor(ingredient);
    }
  };

  const priceIncrement = (item) => {
    if (item.type === "sauce" || item.type === "main") {
      props.increment(item.price);
    } else {
      props.increment(item.price * 2);
    }
  };


  const moveCard = (dragIndex, hoverIndex) => {
    const dragSoucesAndFillingsItem = SoucesAndFillings[dragIndex];
    if (dragSoucesAndFillingsItem) {
      const newSoucesAndFillings = [...SoucesAndFillings];
      newSoucesAndFillings.splice(dragIndex, 1);
      newSoucesAndFillings.splice(hoverIndex, 0, dragSoucesAndFillingsItem);
      props.sortIngredients(newSoucesAndFillings);
    }
  };


  return (
    <>
      <div></div>
      {props.ingredients.burgerConstructorReducer.burgerConstructorElements && (
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
                <BurgerConstructorItem ingredient={ingredient} index={index} moveCard={moveCard}/>
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
                    .burgerConstructorTotalPrice
                }
              </span>
              <span className={BurgerConstructorStyle.test3}>
                <CurrencyIcon
                  type="primary"
                  className="text text_type_main-large"
                />
              </span>
            </span>

            <Button type="primary" size="large" onClick={handleClick}>
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
          <OrderDetails
            id={props.ingredients.orderReducer.order}
            title={"идентификатор заказа"}
          />
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
    getOrder: bindActionCreators(getOrderActionCreator, dispatch),
    deleteIngredient: bindActionCreators(
      deleteIngredientActionCreator,
      dispatch
    ),
    addIngredientToBurgerConstructor: bindActionCreators(
      addIngredientActionCreator,
      dispatch
    ),
    addBunToBurgerConstructor: bindActionCreators(
      addBunActionCreator,
      dispatch
    ),
    increment: bindActionCreators(incrementActionCreator, dispatch),
    sortIngredients: bindActionCreators(sortIngredientsActionCreator, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerConstructor);
