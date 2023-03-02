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
import { FeedDetails } from "../../pages/feedDetails";
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
  }

  function closeModal(params) {
    dispatch(closeModalActionCreator(false));
    navigate(-1);
  }

  function escCloseModal(params) {
    dispatch(escCloseModalActionCreator(false));
    navigate(-1);
  }

  function overlayCloseModal(params) {
    dispatch(overlayModalClickActionCreator(false));
    navigate(-1);
  }

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
          {modalState && (
            <Modal
              title="Детали заказа"
              onOverlayClick={overlayCloseModal}
              onEscKeydown={escCloseModal}
              onCloseButtonClick={closeModal}
            >
              <FeedDetails orderInfo={order} />
            </Modal>
          )}
        </>
      </div>
    )
  );
};

export default OrderItem;
