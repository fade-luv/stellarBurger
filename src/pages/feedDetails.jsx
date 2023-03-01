import pages from "./pages.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export function FeedDetails(props) {
  const { id } = useParams();
  const orders = useSelector((state) => state.ordersReducer.orders);

  const ordersInfo = useSelector(
    (state) => state.focusIngredientReducer.focusOrder
  );
  const { ingredients } = useSelector((store) => store.ingredientsReducer);

  const findItem = orders.find((i) => i._id === id);
 
  

 const findIngredient = ordersInfo.ingredients.map(
   (id) => ingredients.filter((ingr) => ingr._id === id)[0]
 );


  const orderPrice = findIngredient
    .filter((el) => el !== undefined)
    .reduce((total, ingredient) => total + ingredient.price, 0);

  let order = findItem || ordersInfo;

  return (
    <div className={pages.feedDetailsWrapper}>
      <p
        className={`${pages.feed_details_orderNumber} text text_type_digits-default mb-10`}
      >
        #{findItem ? findItem.orderNumber : ordersInfo.number}
      </p>
      <p
        className={`${pages.feed_details_orderTitle} text text_type_main-medium mb-3`}
      >
        {findItem ? findItem.orderTitle : ordersInfo.name}
      </p>
      <p
        className={`${pages.feed_details_orderStatus} text text_type_main-small mb-15`}
      >
        {order.status === "done" ? "Выполнен" : "Готовится"}
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
        {findIngredient.map((ingredient) => (
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
          <FormattedDate date={new Date(order.createdAt)} />
        </p>
        <p
          className={`${pages.feed_details_orderSumm} text_type_digits-default`}
        >
          {findItem ? findItem.orderPrice : orderPrice}
          <CurrencyIcon type="primary" />
        </p>
      </div>
    </div>
  );
}
