import { useRef } from "react";
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
  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: "ingredientSort",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = props.index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      props.moveCard(dragIndex, hoverIndex);
      console.log(item.index, hoverIndex);
      item.index = hoverIndex;
    },
  });

  let ingredient = props.ingredient;

  function handleDelete(ingredient) {
    props.deleteIngredient(ingredient);
    props.decrement(ingredient.price);
  }

  const [{ isDragging }, drag] = useDrag({
    type: "ingredientSort",
    item: () => {
      return { id: props.ingredient.uuid, index: props.index };
    },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
    <li
      key={props.uuid}
      className={`${BurgerConstructorStyle.test} `}
      ref={ref}
      style={{ opacity }}
      data-handler-id={handlerId}
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
