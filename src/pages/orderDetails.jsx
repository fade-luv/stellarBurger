import React from "react";
import pages from "./pages.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { WS_CONNECTION_START } from "../store/actionCreators/webSocket-actionCreator";
import { useLocation } from "react-router-dom";
import getIngredientsActionCreator from "../store/actionCreators/ingredients-actionCreator";
function OrderDetails() {
  const { ingredients } = useSelector((store) => store.ingredientsReducer);
  const { stateModalFeedDetails } = useSelector(
    (store) => store.focusIngredientReducer
  );

  const { focusOrder } = useSelector((store) => store.focusIngredientReducer);

  let modalIngredients;

  if (stateModalFeedDetails) {
    let ing = focusOrder.ingredients;
    modalIngredients = ing.map(
      (id) => ingredients.filter((item) => item._id === id)[0]
    );
  }

  const dispatch = useDispatch();
  const { id } = useParams();
  const ordersOnClickURL = useSelector(
    (state) => state.wsReducer.orders.orders
  );

  useEffect(() => {
    dispatch(getIngredientsActionCreator());
  }, []);

  const location = useLocation();
  const currentOrderOnClick = useSelector(
    (state) => state.focusIngredientReducer.focusOrder
  );
  let ingredientsArrayOnClick = [];

  if (location.pathname == "/feed/:id") {
    ingredientsArrayOnClick.push(
      currentOrderOnClick.ingredients.map(
        (id) => ingredients.filter((ingr) => ingr._id === id)[0]
      )
    );
  }
  let findItem;
  let findItemIds;

  if (ordersOnClickURL && id != undefined && ingredients != undefined) {
    findItem = ordersOnClickURL.find((i) => i._id === id);
    findItemIds = findItem.ingredients.map(
      (id) => ingredients.filter((item) => item._id === id)[0]
    );
  }

  let ingredientsList = modalIngredients || findItemIds;

  return (
    ingredientsList && (
      <div className={pages.feedDetailsWrapper}>
        <p
          className={`${pages.feed_details_orderNumber} text text_type_digits-default mb-10`}
        >
          #{findItem ? findItem.orderNumber : currentOrderOnClick.number}
        </p>
        <p
          className={`${pages.feed_details_orderTitle} text text_type_main-medium mb-3`}
        >
          {findItem ? findItem.orderTitle : currentOrderOnClick.name}
        </p>
        <p
          className={`${pages.feed_details_orderStatus} text text_type_main-small mb-15`}
        >
          {/* {.status === "done" ? "Выполнен" : "Готовится"} */}
        </p>
        <p
          className={`${pages.feed_details_orderStructure} text text_type_main-medium mb-6`}
        >
          Состав
        </p>

        <ul
          className={`${pages.feed_details_orderStructure_list}`}
          id={pages.feed_details_orderStructure_list}
        >
          {ingredientsList.map((ingredient) => (
            <li className={`${pages.feed_details_orderStructure_list_item}`}>
              <img
                className={`${pages.feed_details_orderStructure_list_item_img}`}
                src={`${ingredient.image}`}
                alt=""
              />
              <p
                className={`${pages.feed_details_orderStructure_list_item_title} text text_type_main-default ml-4`}
              >
                {`${ingredient.name}`}
              </p>
              <p
                className={`${pages.feed_details_orderStructure_list_item_quantity} text text_type_main-default ml-20`}
              >
                2 x {`${ingredient.price}`}
              </p>
              <CurrencyIcon type="primary" />
            </li>
          ))}
        </ul>
        <div className={`${pages.feed_details_orderFooter}`}>
          <p className={`${pages.feed_details_orderDate} text_color_inactive`}>
            {/* <FormattedDate date={new Date(order.createdAt)} /> */}
          </p>
          <p
            className={`${pages.feed_details_orderSumm} text_type_digits-default`}
          >
            {/* {findItem ? findItem.orderPrice : orderPrice} */}
            <CurrencyIcon type="primary" />
          </p>
        </div>
      </div>
    )
  );
}
export default React.memo(OrderDetails);
