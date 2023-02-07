import React from "react";
import pages from "./pages.module.css";
import AppHeader from "../components/AppHeader/AppHeader";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginActionCreator } from "../store/actionCreators/login-actionCreator";



export function LoginPage(params) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  if (isAuth === true) {
    navigate("/");
  }

  function goToForgotPassword(params) {
    navigate("/forgot-password");
  }



  function sendAuthData() {
    const loginUserData = {
      authEmailValue: document.getElementById("authEmail").value,
      authPasswordValue: document.getElementById("authPassword").value,
    };
    dispatch(loginActionCreator(loginUserData));
  }

  return (
    <>
      <AppHeader />
      <form className={pages.container}>
        <h1 className={` ${pages.header} text text_type_main-medium mb-6`}>
          Вход
        </h1>
        <EmailInput extraClass="mb-6" id="authEmail" />
        <PasswordInput extraClass="mb-6" id="authPassword" />
        <div className={pages.sumbmit_login}>
          <Button
            htmlType="button"
            type="primary"
            size="large"
            extraClass="mb-20"
            onClick={sendAuthData}
          >
            Войти
          </Button>
        </div>

        <p className={`${pages.newUser} mt-20`}>
          Вы новый пользователь?
          <Link to="/register">
            <Button
              htmlType="button"
              type="secondary"
              size="small"
              extraClass="pl-2 pr-2"
            >
              Зарегестрироваться
            </Button>
          </Link>
        </p>
        <p className={pages.forgotPassword}>
          Забыли пароль?
          <Button
            onClick={goToForgotPassword}
            htmlType="button"
            type="secondary"
            size="small"
            extraClass="pl-2 pr-2"
          >
            Восстановить пароль
          </Button>
        </p>
      </form>
    </>
  );
}

//  <p className={`${header.nav__link_title} ml-2`}>Конструктор</p>;
