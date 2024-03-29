import React from "react";
import IngredientStyle from "./Ingredient.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import PropTypes from "prop-types";
import { modalActionCreator } from "../../store/actionCreators/modal-actionCreator";
import { closeModalActionCreator } from "../../store/actionCreators/modal-actionCreator";
import { escCloseModalActionCreator } from "../../store/actionCreators/modal-actionCreator";
import { overlayModalClickActionCreator } from "../../store/actionCreators/modal-actionCreator";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Ingredient = function (props) {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ingredientInfo } = props;
  const chosenIngredients = useSelector(
    (store) => store.burgerConstructorReducer.chosenIngredients
  );

  const chosenBun = useSelector(
    (store) => store.burgerConstructorReducer.constructorBun
  );

  const addIngredients = [chosenBun, ...chosenIngredients];

  const counter = addIngredients.filter(
    (item) => item._id === ingredientInfo._id
  )?.length;
  const modalState = useSelector((store) => store.focusIngredientReducer.state);
  const modalInfo = useSelector(
    (store) => store.focusIngredientReducer.focusIngredient
  );
  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredient",
    item: ingredientInfo,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  function openModal(event) {
    dispatch(modalActionCreator(ingredientInfo, true));
    localStorage.setItem("modalOpen", true);
    localStorage.setItem("Ingredient", JSON.stringify(ingredientInfo));
  }

  function closeModal(params) {
    dispatch(closeModalActionCreator(false));
    localStorage.setItem("modalOpen", false);
    navigate("/");
  }

  function escCloseModal(params) {
    dispatch(escCloseModalActionCreator(false));
    localStorage.setItem("modalOpen", false);
    navigate(-1);
  }

  function overlayCloseModal(params) {
    dispatch(overlayModalClickActionCreator(false));
    localStorage.setItem("modalOpen", false);
    navigate("/");
  }

  return (
    !isDrag && (
      <div>
        <>
          <div
            ref={dragRef}
            data="ingredient"
            onClick={openModal}
            className={`${IngredientStyle.Ingredient_item} ml-4`}
          >
            <div className={IngredientStyle.counter}>{counter}</div>
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
          {localStorage.getItem("modalOpen") === "true" && (
            <Modal
              title="Детали заказа"
              onOverlayClick={overlayCloseModal}
              onEscKeydown={escCloseModal}
              onCloseButtonClick={closeModal}
            >
              <IngredientDetails info={modalInfo} />
            </Modal>
          )}
        </>
      </div>
    )
  );
};

Ingredient.propTypes = {
  ingredientInfo: PropTypes.shape({
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
  }).isRequired,
};

export default Ingredient;
