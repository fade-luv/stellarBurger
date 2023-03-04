import pages from "./pages.module.css";
import FeedItem from "../components/feedItem/FeedItem";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { WS_CONNECTION_START } from "../store/actionCreators/webSocket-actionCreator";

export function FeedPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { orders, total, totalToday } = useSelector(
    (state) => state.wsReducer.orders
  );


  useEffect(() => {
    dispatch(WS_CONNECTION_START());
  }, []);

  return (
    orders && (
      <div className={pages.feedWrapper}>
        <h1 className="text text_type_main-large mt-10 mb-2">Лента заказов</h1>
        <div className={pages.feedContainer}>
          <div className={pages.orderFeed} id={pages.orderFeed}>
            {orders.map((order) => (
              <Link
                state={{ background: location }}
                className={pages.link}
                to={`/feed/${order._id}`}
              >
                <FeedItem key={order._id} order={order} />
              </Link>
            ))}
          </div>
          <div className={pages.orderInfo}>
            <div className={`${pages.orderStatus_container} mb-15`}>
              <div className={pages.order_done}>
                <h3 className={`${pages.order_done_title} pb-6`}>Готовы:</h3>
                {orders.map((order, index) =>
                  order.status == "done" && index < 10 ? (
                    <p
                      className={`${pages.order_done_item} text text_type_digits-default`}
                    >
                      {order.number}
                    </p>
                  ) : null
                )}
              </div>
              <div className={pages.order_atWork}>
                <h3 className={`${pages.order_atWork_title} pb-6`}>
                  В работе:
                </h3>
                {orders.map((order, index) =>
                  order.status !== "done" && index < 10 ? (
                    <p
                      className={`${pages.order_atWord_item} text text_type_digits-default`}
                    >
                      {order.number}
                    </p>
                  ) : null
                )}
              </div>
            </div>
            <div
              className={`${pages.order_done_all} text text_type_main-medium mb-15`}
            >
              <p className={pages.order_done_all_title}>
                Выполнено за все время:
              </p>
              <div
                className={`${pages.order_done_all_value} text text_type_digits-large`}
              >
                {total}
              </div>
            </div>

            <div className={pages.order_done_today}>
              <p
                className={`${pages.order_done_today_title} text text_type_main-medium`}
              >
                Выполнено за сегодня:
              </p>
              <div
                className={`${pages.order_done_today_value} text text_type_digits-large`}
              >
                {totalToday}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
