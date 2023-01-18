import React from "react";
import BurgerConstructorStyle from "./../BurgerConstructor.module.css";
import { useDrop } from "react-dnd";
import { useDrag } from "react-dnd";
import { bindActionCreators } from "redux";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { connect, useDispatch } from "react-redux";
import deleteIngredientActionCreator from "../../../store/actionCreators/deleteingredint-actionCreator.js";
import decrementActionCreator from "../../../store/actionCreators/decrement-actionCreator";

const BurgerConstructorItem = function (props) {
  let ingredient = props.ingredient;
  const [, dragRef] = useDrag({
    type: "constructorElem",
  });

  function handleDelete(ingredient) {
    props.deleteIngredient(ingredient);
    props.decrement(ingredient.price);
  }
  return (
    <li
      ref={dragRef}
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
        isLocked={false}
        thumbnail={ingredient.image}
        handleClose={() => handleDelete(ingredient)}
      />
    </li>
  );
};

function mapStateToProps(state) {
  return {
    ingredients: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteIngredient: bindActionCreators(
      deleteIngredientActionCreator,
      dispatch
    ),
    decrement: bindActionCreators(decrementActionCreator, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BurgerConstructorItem);
