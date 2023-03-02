import React from "react";
import pages from "./pages.module.css";
import { ProfileMenu } from "../components/ProfileMenu/ProfileMenu";
import OrderItem from "../components/orderItem/orderItem";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { WS_CONNECTION_AUTH_START } from "../store/actionCreators/webSocketAuth-actionCreator";
import { useEffect } from "react";

export function OrdersPage(params) {

 const { orders, total, totalToday } = useSelector(
   (state) => state.wsAuthReducer.orders
 );
console.log(orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(WS_CONNECTION_AUTH_START());
  }, []);

  const location = useLocation();

  return (
    orders && (
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
    )
  );
}
