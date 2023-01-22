import { useRef } from "react";
import React from "react";
import BurgerConstructorStyle from "./../BurgerConstructor.module.css";
import { useDrop } from "react-dnd";
import { useDrag } from "react-dnd";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import deleteIngredientActionCreator from "../../../store/actionCreators/deleteingredint-actionCreator.js";
import decrementActionCreator from "../../../store/actionCreators/decrement-actionCreator";
import { useDispatch} from "react-redux";

const BurgerConstructorItem = function (props) {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const [{ handlerId }, drop] = useDrop({
    accept: "SoucesAndFillingsSort",
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
      item.index = hoverIndex;
    },
  });

  let ingredient = props.ingredient;

  function handleDelete(ingredient) {
    dispatch(deleteIngredientActionCreator(ingredient));
    dispatch(decrementActionCreator(ingredient.price))
  }

  const [, drag] = useDrag({
    type: "SoucesAndFillingsSort",
    item: () => {
      return { id: props.ingredient.uuid, index: props.index };
    },
  });


  drag(drop(ref));

  return (
    <li
      key={props.uuid}
      className={`${BurgerConstructorStyle.test} `}
      ref={ref}
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



export default BurgerConstructorItem;
