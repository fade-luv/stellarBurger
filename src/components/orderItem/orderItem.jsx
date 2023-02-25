import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import pages from "../../pages/pages.module.css";
import { Link } from "react-router-dom";

const OrderItem = function (props) {
  let order = props.ingredientInfo;
  let orderIngredients = order.ingredients;

  return (
    <Link className={pages.link} to={`/profile/orders/${order._id}`}>
      <div className={pages.orderFeed_item}>
        <div className={`${pages.orderFeed_item_number_and_date} mb-6`}>
          <p className="text text_type_digits-default">{`# ${order.orderNumber}`}</p>
          <div className="text text_type_main-default text_color_inactive">
            Сегодня, {order.orderDate} i-GMT+3
          </div>
        </div>
        <h2 className={pages.orderFeed_item_title}>{order.orderTitle}</h2>
        <div
          className={`${pages.orderFeed_item_ingredientsItems_and_price} mt-6`}
        >
          <ul className={`${pages.orderFeed_item_ingredientsItems_icons} `}>
            {orderIngredients.map((orderItem) => {
              return (
                <li
                  className={pages.orderFeed_item_ingredientsItems_icons_item}
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
            <p className="text text_type_digits-default">{order.orderPrice}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OrderItem;
