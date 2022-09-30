import React from "react";
import BurgerConstructorStyle from "./BurgerConstructor.module.css";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  Counter,
  DragIcon, 
} from "@ya.praktikum/react-developer-burger-ui-components";
import CartItem from "../CartItem/CartItem";
const BurgerConstructor = function (params) {
  return (
    <ul className={`${BurgerConstructorStyle.ul} ml-10`}>
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
          <li className={BurgerConstructorStyle.test}>
            <div className={BurgerConstructorStyle.test2}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Филе Люминесцентного тетраодонтимформа"
              price={50}
              className="pr-20"
              thumbnail={"https://code.s3.yandex.net/react/code/meat-03.png"}
            />
          </li>
          <li className={BurgerConstructorStyle.test}>
            <div className={BurgerConstructorStyle.test2}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Биокотлета из марсианской Магнолии"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/meat-01.png"}
            />
          </li>
          <li className={BurgerConstructorStyle.test}>
            <div className={BurgerConstructorStyle.test2}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Сыр с астероидной плесенью"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/cheese.png"}
            />
          </li>
          <li className={BurgerConstructorStyle.test}>
            <div className={BurgerConstructorStyle.test2}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Сыр с астероидной плесенью"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/cheese.png"}
            />
          </li>

          <li className={BurgerConstructorStyle.test}>
            <div className={BurgerConstructorStyle.test2}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Сыр с астероидной плесенью"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/cheese.png"}
            />
          </li>
          
          <li className={BurgerConstructorStyle.test}>
            <div className={BurgerConstructorStyle.test2}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Сыр с астероидной плесенью"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/cheese.png"}
            />
          </li>
          <li className={BurgerConstructorStyle.test}>
            <div className={BurgerConstructorStyle.test2}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text="Сыр"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/cheese.png"}
            />
          </li>
        </ul>
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

      <div className={BurgerConstructorStyle.constructor__result}>
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
          <Button type="primary" size="large">
            Оформить заказ
          </Button>
        </span>
      </div>
    </ul>
  );
};

export default BurgerConstructor;
