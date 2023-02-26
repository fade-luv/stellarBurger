import React,{useState} from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import header from "./AppHeader.module.css";
import PropTypes from "prop-types";
import { Link, NavLink, Outlet, useHistory } from "react-router-dom";

const AppHeader = function () {
  const [activeLink, setActiveLink] = useState("constructor");

  const onClickProfile = () => {
    setActiveLink("profile");
  };
  const onClickConstructor = () => {
    setActiveLink("constructor");
  };

  const onClickOrders = () => {
    setActiveLink("orders");
  };

  return (
    <>
      <header className={`${header.header} pt-4 pb-4`}>
        <div className={header.header_wrapper}>
          <nav className={`${header.nav} text text_type_main-default`}>
            <ul className={header.nav__list}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? header.active : header.nav__item
                }
                onClick={onClickConstructor}
              >
                <BurgerIcon
                  type={activeLink === "constructor" ? "primary" : "secondary"}
                />
                <p className={`${header.nav__link_title} ml-2`}>Конструктор</p>
              </NavLink>
              <NavLink
                to="/feed"
                className={({ isActive }) =>
                  isActive ? header.active : header.nav__item
                }
                onClick={onClickOrders}
              >
                <ListIcon
                  type={activeLink === "orders" ? "primary" : "secondary"}
                />
                <p className={`${header.nav__link_title} ml-2`}>
                  Лента Заказов
                </p>
              </NavLink>
            </ul>
          </nav>
          <a href="#">
            <Logo />
          </a>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? header.active1 : header.profile_button
            }
            onClick={onClickProfile}
          >
            <p
              className={`${header.propfileLink} text text_type_main-default `}
            >
              <ProfileIcon
                type={activeLink === "profile" ? "primary" : "secondary"}
                className={header.test1}
              />
              Личный кабинет
            </p>
          </NavLink>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default AppHeader;
