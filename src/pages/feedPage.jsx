import pages from "./pages.module.css";
import  FeedItem  from "../components/feedItem/FeedItem";
import testIngredients  from "../utils/testDataBase";
export function FeedPage() {

  return (
    <div className={pages.feedWrapper}>
      <h1 className="text text_type_main-large mt-10 mb-2">Лента заказов</h1>
      <div className={pages.feedContainer}>
        <div className={pages.orderFeed} id={pages.orderFeed}>
          {testIngredients.map((ingredient) => (
            <FeedItem ingredientInfo={ingredient} />
          ))}
        </div>
        <div className={pages.orderInfo}>
          <div className={`${pages.orderStatus_container} mb-15`}>
            <div className={pages.order_done}>
              <h3 className={`${pages.order_done_title} pb-6`}>Готовы:</h3>
              <p
                className={`${pages.order_done_item} text text_type_digits-default`}
              >
                034533
              </p>
              <p
                className={`${pages.order_done_item} text text_type_digits-default`}
              >
                034533
              </p>
              <p
                className={`${pages.order_done_item} text text_type_digits-default`}
              >
                034533
              </p>
              <p
                className={`${pages.order_done_item} text text_type_digits-default`}
              >
                034533
              </p>
              <p
                className={`${pages.order_done_item} text text_type_digits-default`}
              >
                034533
              </p>
            </div>
            <div className={pages.order_atWork}>
              <h3 className={`${pages.order_atWork_title} pb-6`}>В работе:</h3>
              <p
                className={`${pages.order_atWord_item} text text_type_digits-default`}
              >
                034538
              </p>
              <p
                className={`${pages.order_atWord_item} text text_type_digits-default`}
              >
                034538
              </p>
              <p
                className={`${pages.order_atWord_item} text text_type_digits-default`}
              >
                034538
              </p>
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
              28 752
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
              138
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
