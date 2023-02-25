import React from "react";
import pages from "./pages.module.css";
import { ProfileMenu } from "../components/ProfileMenu/ProfileMenu";
import testIngredients from "../utils/testDataBase";
import OrderItem  from "../components/orderItem/orderItem";

export function OrdersPage(params) {
  return (
    <>
      <div className={pages.profile_wrapper}>
        <ProfileMenu />
        <div className={pages.link_content} id={pages.link_content}>
          {testIngredients.map((ingredient) => (
            <OrderItem ingredientInfo={ingredient} />
          ))}
        </div>
      </div>
    </>
  );
}
