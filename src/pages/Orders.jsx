import React from "react";
import pages from "./pages.module.css";
import { ProfileMenu } from "../components/ProfileMenu/ProfileMenu";
import FeedItem from "../components/feedItem/FeedItem";
import testIngredients from "../utils/testDataBase";

export function OrdersPage(params) {
  return (
    <>
      <div className={pages.profile_wrapper}>
        <ProfileMenu />
        <div className={pages.link_content} id={pages.link_content}>
          {testIngredients.map((ingredient) => (
            <FeedItem ingredientInfo={ingredient} />
          ))}
        </div>
      </div>
    </>
  );
}
