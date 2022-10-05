import React from "react";
import BurgerConstructorStyle from "./BurgerConstructor.module.css";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  Counter,
  DragIcon, 
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";

const BurgerConstructor = function (props) {

 const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false); 


  const closeAllModals = () => {
  setIsOrderDetailsOpened(false);

  };


  const handleEscKeydown = (event) => {
  event.key === "Escape" && closeAllModals();
  };



  return (
    <ul className={`${BurgerConstructorStyle.ul} pl-10`}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <li className={BurgerConstructorStyle.test}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-01.png"}
          />
        </li>
        <ul id="center" className={BurgerConstructorStyle.center}>
          {props.ingridients.map((ingredient) => (
            <li className={`${BurgerConstructorStyle.test} `}>
              <div className={BurgerConstructorStyle.test2}>
                <DragIcon type="primary" />
              </div>
              <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                className="pr-20"
                thumbnail={ingredient.image}
              />
            </li>
          ))}
        </ul>
        {isOrderDetailsOpened && (
          <Modal
            title="Детали заказа"
            onOverlayClick={closeAllModals}
            onEscKeydown={handleEscKeydown}
          >
            <OrderDetails id={24334} title={"идентификатор заказа"}/>
          </Modal>
        )}
        <li className={BurgerConstructorStyle.test}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-01.png"}
          />
        </li>
      </div>
      <div className={`${BurgerConstructorStyle.constructor__result} mt-10`}>
        <span className={BurgerConstructorStyle.constructor_sum}>
          <span className="text text_type_digits-medium">610</span>
          <span className={BurgerConstructorStyle.test3}>
            <CurrencyIcon
              type="primary"
              className="text text_type_main-large"
            />
          </span>
        </span>
        <span className={BurgerConstructorStyle.button}>
          <Button
            type="primary"
            size="large"
            onClick={() => setIsOrderDetailsOpened(true)}
          >
            Оформить заказ
          </Button>
        </span>
      </div>
    </ul>
  );
};

export default BurgerConstructor;
