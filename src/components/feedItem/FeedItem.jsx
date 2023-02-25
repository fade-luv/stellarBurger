import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import pages from "../../pages/pages.module.css";
import { Link } from "react-router-dom";

const FeedItem = function (props) {
let ingredients = props.ingredientInfo;

  return (
    <Link className={pages.link} to={`/feed/${ingredients._id}`}>
      <div className={pages.orderFeed_item}>
        <div className={`${pages.orderFeed_item_number_and_date} mb-6`}>
          <p className="text text_type_digits-default">#034535</p>
          <div className="text text_type_main-default text_color_inactive">
            Сегодня, 13:20 i-GMT+3
          </div>
        </div>
        <h2 className={pages.orderFeed_item_title}>
          Death Star Starship Main бургер
        </h2>
        <div
          className={`${pages.orderFeed_item_ingredientsItems_and_price} mt-6`}
        >
          <ul className={`${pages.orderFeed_item_ingredientsItems_icons} `}>
            <li className={pages.orderFeed_item_ingredientsItems_icons_item}>
              <img
                src={`${ingredients.image}`}
                alt=""
                className={pages.orderFeed_item_ingredientsItems_icon}
              />
            </li>
          </ul>
          <div className={pages.orderFeed_item_ingredientsItems_price}>
            <p className="text text_type_digits-default">480</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </Link>
  );

};

export default FeedItem;
