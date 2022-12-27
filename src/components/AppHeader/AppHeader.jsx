import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import header from "./AppHeader.module.css";
import PropTypes from "prop-types";

const AppHeader = function () {
  return (
    <header className={`${header.header} pt-4 pb-4`}>
      <div className={header.header_wrapper}>
        <nav className={`${header.nav} text text_type_main-default`}>
          <ul className={header.nav__list}>
            <li className={header.nav__item}>
              <a href="#" className={header.nav__link}>
                <BurgerIcon type="primary" />
                <p className={`${header.nav__link_title} ml-2`}>Конструктор</p>
              </a>
            </li>
            <li className={header.nav__item}>
              <a href="#" className={`${header.nav__link} ml-2`}>
                <ListIcon type="secondary" />
                <p className={`${header.nav__link_title} ml-2`}>
                  Лента Заказов
                </p>
              </a>
            </li>
          </ul>
        </nav>
        <a href="#">
          <Logo />
        </a>
        <button type="button" className={header.profile_button}>
          <p className={`${header.propfileLink} text text_type_main-default `}>
            <ProfileIcon type="secondary" />
            <p className="ml-2">Личный кабинет</p>
          </p>
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
