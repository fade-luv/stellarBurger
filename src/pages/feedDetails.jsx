import pages from "./pages.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export function FeedDetails(params) {
  return (
    <div className={pages.feedDetailsWrapper}>
      <p
        className={`${pages.feed_details_orderNumber} text text_type_digits-default mb-10`}
      >
        #034533
      </p>
      <p
        className={`${pages.feed_details_orderTitle} text text_type_main-medium mb-3`}
      >
        Black Hole Singularity острый бургер
      </p>
      <p
        className={`${pages.feed_details_orderStatus} text text_type_main-small mb-15`}
      >
        Выполнен
      </p>
      <p
        className={`${pages.feed_details_orderStructure} text text_type_main-medium mb-6`}
      >
        Состав
      </p>
      <ul className={`${pages.feed_details_orderStructure_list}`}>
        <li className={`${pages.feed_details_orderStructure_list_item}`}>
          <img
            className={`${pages.feed_details_orderStructure_list_item_img}`}
            src="https://code.s3.yandex.net/react/code/sauce-02.png"
            alt=""
          />
          <p
            className={`${pages.feed_details_orderStructure_list_item_title} text text_type_main-default ml-4`}
          >
            Флюоресцентная булка R2-D3
          </p>
          <p
            className={`${pages.feed_details_orderStructure_list_item_quantity} text text_type_main-default ml-30 mr-2`}
          >
            2 x 20
          </p>
          <CurrencyIcon type="primary" />
        </li>
      </ul>
      <div className={`${pages.feed_details_orderFooter}`}>
        <p className={`${pages.feed_details_orderDate} text_color_inactive`}>
          Вчера, 13:50 i-GMT+3
        </p>
        <p
          className={`${pages.feed_details_orderSumm} text_type_digits-default`}
        >
          510
          <CurrencyIcon type="primary" />
        </p>
      </div>
    </div>
  );
}
