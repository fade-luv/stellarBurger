import React from "react";
import pages from "./pages.module.css";
import { ProfileMenu } from "../components/ProfileMenu/ProfileMenu";

export function OrdersPage(params) {
  return (
    <>
      <div className={pages.profile_wrapper}>
        <ProfileMenu />
        <div className={pages.link_content}>ORDERS HISTORY</div>
      </div>
    </>
  );
}
