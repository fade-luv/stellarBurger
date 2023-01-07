import React from "react";
import IngredientStyle from "./Ingredient.module.css";
import {
  CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import PropTypes from "prop-types";
import {modalActionCreator} from "../../store/actionCreators/modal-actionCreator";
import {closeModalActionCreator} from "../../store/actionCreators/modal-actionCreator";
import { escCloseModalActionCreator } from "../../store/actionCreators/modal-actionCreator";
import { overlayModalClickActionCreator } from "../../store/actionCreators/modal-actionCreator";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Ingredient = function (props) {

 let modalState = props.focusIngredient.focusIngredientReducer.state;
 let modalInfo = props.focusIngredient.focusIngredientReducer.focusIngredient;
 

  const { ingredientInfo } = props;

  function openModal(event) {
    props.getFocusIngredient(ingredientInfo, true);
  }

  function closeModal(params) {
    props.closeModal(false);
  }

  function escCloseModal(params) {
    props.escClose(false);
  }

  function overlayCloseModal(params) {
    props.overlayClose(false)
  }
  

  return (
    <div>
      <>
        <div
          data="ingredient"
          onClick={openModal}
          className={`${IngredientStyle.Ingredient_item} ml-4`}
        >
          <div className={IngredientStyle.counter}>1</div>
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
        {modalState && (
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

function mapStateToProps(state) {
  return {
    focusIngredient: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFocusIngredient: bindActionCreators(modalActionCreator, dispatch),
    closeModal: bindActionCreators(closeModalActionCreator, dispatch),
    escClose: bindActionCreators(escCloseModalActionCreator, dispatch),
    overlayClose: bindActionCreators(overlayModalClickActionCreator, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Ingredient);
