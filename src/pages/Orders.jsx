import React from "react";
import pages from "./pages.module.css";
import { ProfileMenu } from "../components/ProfileMenu/ProfileMenu";
import OrderItem from "../components/orderItem/orderItem";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export function OrdersPage(params) {
  const orders = useSelector((state) => state.ordersReducer.orders);
  const location = useLocation();
 
  return (
    <>
      <div className={pages.profile_wrapper}>
        <ProfileMenu />
        <div className={pages.link_content} id={pages.link_content}>
          {orders.map((order) => (
            <Link
              state={{ background: location }}
              className={pages.link}
              to={`/profile/orders/${order._id}`}
            >
              <OrderItem order={order} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
