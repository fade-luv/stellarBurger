import React from "react";
import CartItemStyle from "./CartItem.module.css";
import {
  CurrencyIcon,
  Counter,
  LockIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
const CartItem = function (params) {
  return (
    <span className={CartItemStyle.cart__item }>
      <img
        className={CartItemStyle.cart__item_image}
        src="https://code.s3.yandex.net/react/code/bun-02.png"
      ></img>
      <p className="cart__item-title text text_type_main-default">
        Краторная булка N-200i (верх)
      </p>
      <span className="cart__item-price text text_type_digits-default ml-5">
        20
      </span>
      <span className="ml-2">
        <CurrencyIcon type="primary" />
      </span>
      <span className="ml-5">
        <LockIcon type="secondary" />
      </span>
    </span>
  );
}

export default CartItem;

