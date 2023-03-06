import React,{ useEffect,useState } from "react";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import pages from "../../pages/pages.module.css";
import { useParams } from "react-router-dom";
import { feedOrderActionCreator } from "../../store/actionCreators/modal-actionCreator";
import { closeModalActionCreator } from "../../store/actionCreators/modal-actionCreator";
import { escCloseModalActionCreator } from "../../store/actionCreators/modal-actionCreator";
import { overlayModalClickActionCreator } from "../../store/actionCreators/modal-actionCreator";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import FeedDetails  from "../../pages/feedDetails";
import getIngredientsActionCreator from "../../store/actionCreators/ingredients-actionCreator";

const FeedItem = function (props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const [isPopup, setPopup] = useState(false);
  const { order } = props;
  


  useEffect(() => {
     const isIngredientPopupOpen = localStorage.getItem("modalOpen");

    setPopup(isIngredientPopupOpen);
  }, []);

  const { ingredients } = useSelector((store) => store.ingredientsReducer);

  const findIngredient = order.ingredients.map(
    (id) => ingredients.filter((ingr) => ingr._id === id)[0]
  );
   
  const orderPrice = findIngredient
    .filter((el) => el !== undefined)
    .reduce((total, ingredient) => total + ingredient.price, 0);

  function openModalOrder() {
    dispatch(feedOrderActionCreator(order, true));
    localStorage.setItem("modalOpen", true);
    localStorage.setItem("findIngredient", JSON.stringify(findIngredient));
    localStorage.setItem("findIngredient", JSON.stringify(order));
    localStorage.setItem("ingredients", JSON.stringify(ingredients));
  }

  function closeModal(params) {
    dispatch(closeModalActionCreator(false));
    navigate(-1);
     localStorage.setItem("modalOpen", false);
  }

  function escCloseModal(params) {
    dispatch(escCloseModalActionCreator(false));
    navigate(-1);
    localStorage.setItem("modalOpen", false);
  }

  function overlayCloseModal(params) {
    dispatch(overlayModalClickActionCreator(false));
    localStorage.setItem("modalOpen", false);
    navigate(-1);
  }

  const modalState = useSelector(
    (store) => store.focusIngredientReducer.stateModalFeedDetails
  );

  return (
    findIngredient && (
      <div>
        <>
          <div className={pages.orderFeed_item} onClick={openModalOrder}>
            <div className={`${pages.orderFeed_item_number_and_date} mb-6`}>
              <p className="text text_type_digits-default">
                {`# ${order.number}`}
              </p>
              <div className="text text_type_main-default text_color_inactive">
                <FormattedDate date={new Date(order.createdAt)} />
              </div>
            </div>
            <h2 className={pages.orderFeed_item_title}>{order.name}</h2>
            <div
              className={`${pages.orderFeed_item_ingredientsItems_and_price} mt-6`}
            >
              <ul className={`${pages.orderFeed_item_ingredientsItems_icons} `}>
                {findIngredient
                  .filter((el) => el !== undefined)
                  .map((orderItem,index) => {
                    return (
                      <li
                        key={index}
                        className={
                          pages.orderFeed_item_ingredientsItems_icons_item
                        }
                      >
                        <img
                          src={`${orderItem.image}`}
                          alt=""
                          className={pages.orderFeed_item_ingredientsItems_icon}
                        />
                      </li>
                    );
                  })}
              </ul>
              <div className={pages.orderFeed_item_ingredientsItems_price}>
                <p className="text text_type_digits-default">{orderPrice}</p>
                <CurrencyIcon type="primary" />
              </div>
            </div>
          </div>
        </>
        <>
          {localStorage.getItem('modalOpen') === 'true' && (
            <Modal
              title="Детали заказа"
              onOverlayClick={overlayCloseModal}
              onEscKeydown={escCloseModal}
              onCloseButtonClick={closeModal}
            >
              <FeedDetails order={order} />
            </Modal>
          )}
        </>
      </div>
    )
  );
};

export default React.memo(FeedItem);
