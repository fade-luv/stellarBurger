import React, { useEffect } from "react";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import pages from "../../pages/pages.module.css";
import { Link } from "react-router-dom";
import { feedOrderActionCreator } from "../../store/actionCreators/modal-actionCreator";
import { closeModalActionCreator } from "../../store/actionCreators/modal-actionCreator";
import { escCloseModalActionCreator } from "../../store/actionCreators/modal-actionCreator";
import { overlayModalClickActionCreator } from "../../store/actionCreators/modal-actionCreator";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal";

import OrderDetails from "../../pages/orderDetails";
import getIngredientsActionCreator from "../../store/actionCreators/ingredients-actionCreator";

const OrderItem = function (props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { order } = props;
  useEffect(() => {
    dispatch(getIngredientsActionCreator());
  }, []);
  const { ingredients } = useSelector((store) => store.ingredientsReducer);

  const findIngredient = order.ingredients.map(
    (id) => ingredients.filter((ingr) => ingr._id === id)[0]
  );

  const orderPrice = findIngredient
    .filter((el) => el !== undefined)
    .reduce((total, ingredient) => total + ingredient.price, 0);



  const modalState = useSelector(
    (store) => store.focusIngredientReducer.stateModalFeedDetails
  );
  function openModalOrder() {
    dispatch(feedOrderActionCreator(order, true));
     localStorage.setItem("modalOpen", true);
     localStorage.setItem("findIngredient", JSON.stringify(findIngredient));
     localStorage.setItem("findIngredient", JSON.stringify(order));
     localStorage.setItem("ingredients", JSON.stringify(ingredients));
  }

  function closeModal(params) {
    dispatch(closeModalActionCreator(false));
    navigate(-1);
     localStorage.setItem("modalOpen", false);
  }

  function escCloseModal(params) {
    dispatch(escCloseModalActionCreator(false));
    navigate(-1);
     localStorage.setItem("modalOpen", false);
  }

  function overlayCloseModal(params) {
    dispatch(overlayModalClickActionCreator(false));
    navigate(-1);
     localStorage.setItem("modalOpen", false);
  }
console.log(findIngredient);
  return (
    findIngredient && (
      <div>
        <>
          <div className={pages.orderFeed_item} onClick={openModalOrder}>
            <div className={`${pages.orderFeed_item_number_and_date} mb-6`}>
              <p className="text text_type_digits-default">
                {`# ${order.number}`}
              </p>
              <div className="text text_type_main-default text_color_inactive">
                <FormattedDate date={new Date(order.createdAt)} />
              </div>
            </div>
            <h2 className={pages.orderFeed_item_title}>{order.name}</h2>
            <div
              className={`${pages.orderFeed_item_ingredientsItems_and_price} mt-6`}
            >
              <ul className={`${pages.orderFeed_item_ingredientsItems_icons} `}>
                {findIngredient
                  .filter((el) => el !== undefined)
                  .map((orderItem) => {
                    return (
                      <li
                        className={
                          pages.orderFeed_item_ingredientsItems_icons_item
                        }
                      >
                        <img
                          src={`${orderItem.image}`}
                          alt=""
                          className={pages.orderFeed_item_ingredientsItems_icon}
                        />
                      </li>
                    );
                  })}
              </ul>
              <div className={pages.orderFeed_item_ingredientsItems_price}>
                <p className="text text_type_digits-default">{orderPrice}</p>
                <CurrencyIcon type="primary" />
              </div>
            </div>
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
              <OrderDetails order={order} />
            </Modal>
          )}
        </>
      </div>
    )
  );
};

export default OrderItem;
