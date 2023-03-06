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
function FeedDetails() {
  const { ingredients } = useSelector((store) => store.ingredientsReducer);
  const { stateModalFeedDetails } = useSelector(
    (store) => store.focusIngredientReducer
  );


  let localData = localStorage.getItem("findIngredient");
  let localIngredients = localStorage.getItem("ingredients");
  let localDataParse = JSON.parse(localData);
  let localDataIngredientsParse = JSON.parse(localIngredients);

  
  const { focusOrder } = useSelector((store) => store.focusIngredientReducer);

  let modalIngredients;

  if (stateModalFeedDetails) {
    let ing = focusOrder.ingredients;
    modalIngredients = ing.map(
      (id) => ingredients.filter((item) => item._id === id)[0]
    );
  }

  let windowReloadIngredients;


    if (localDataParse && !!stateModalFeedDetails == false && ingredients) {
    let ing = localDataParse.ingredients;
    
     windowReloadIngredients = ing.map(
       (id) => localDataIngredientsParse.filter((item) => item._id === id)[0]
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

  if (
    location.pathname === "/feed" &&
    Object.keys(currentOrderOnClick).length > 1
  ) {
    ingredientsArrayOnClick.push(
      currentOrderOnClick.ingredients.map(
        (id) => ingredients.filter((ingr) => ingr._id === id)[0]
      )
    );
  }
  let findItem;
  let findItemIds =[];

  if (ordersOnClickURL && id != undefined) {
    findItem = ordersOnClickURL.find((i) => i._id === id);
    findItemIds = findItem.ingredients.map(
      (id) => ingredients.filter((item) => item._id === id)[0]
    );
  }




  let ingredientsList =
    modalIngredients || windowReloadIngredients   || findItemIds.length > 1

  const result = ingredientsList.reduce((acc, current) => {
    const existing = acc.find((ingredient) => ingredient._id === current._id);
    if (existing) {
      existing.quantity += 1;
    } else {
      acc.push({ ...current, quantity: 1 });
    }
    return acc;
  }, []);

  const totalCost = ingredientsList.reduce((acc, current) => {
    return acc + current.price;
  }, 0);


  const orderNumber =
    (findItem && findItem.number) ||
    (localDataParse && localDataParse.number) ||
    (currentOrderOnClick && currentOrderOnClick.number);

  const orderName =
    (findItem && findItem.orderTitle) ||
    (localDataParse && localDataParse.name) ||
    (currentOrderOnClick && currentOrderOnClick.name);



  return (
    ingredientsList && (
      <div className={pages.feedDetailsWrapper}>
        <p
          className={`${pages.feed_details_orderNumber} text text_type_digits-default mb-10`}
        >
          #{orderNumber}
        </p>
        <p
          className={`${pages.feed_details_orderTitle} text text_type_main-medium mb-3`}
        >
          {orderName}
        </p>
        <p
          className={`${pages.feed_details_orderStatus} text text_type_main-small mb-15`}
        ></p>
        <p
          className={`${pages.feed_details_orderStructure} text text_type_main-medium mb-6`}
        >
          Состав
        </p>

        <ul
          className={`${pages.feed_details_orderStructure_list}`}
          id={pages.feed_details_orderStructure_list}
        >
          {result.map((ingredient,index) => (
            <li className={`${pages.feed_details_orderStructure_list_item}`} key={index}>
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
                {`${ingredient.quantity}`} x {`${ingredient.price}`}
              </p>
              <CurrencyIcon type="primary" />
            </li>
          ))}
        </ul>
        <div className={`${pages.feed_details_orderFooter}`}>
          <p className={`${pages.feed_details_orderDate} text_color_inactive`}>
            <FormattedDate
              date={
                new Date(
                  findItem ? findItem.createdAt : currentOrderOnClick.createdAt
                )
              }
            />
          </p>
          <p
            className={`${pages.feed_details_orderSumm} text_type_digits-default`}
          >
            {findItem ? findItem.orderPrice : totalCost}
            <CurrencyIcon type="primary" />
          </p>
        </div>
      </div>
    )
  );
}
export default React.memo(FeedDetails);
