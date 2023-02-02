import React from "react";
import pages from "./pages.module.css";
import AppHeader from "../components/AppHeader/AppHeader";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export function LoginPage(params) {
  const navigate = useNavigate();
  function goToForgotPassword(params) {
    navigate("/forgot-password"); 
  }

  return (
    <>
      <AppHeader />
      <form className={pages.container}>
        <h1 className={` ${pages.header} text text_type_main-medium mb-6`}>
          Вход
        </h1>
        <EmailInput extraClass="mb-6" />
        <PasswordInput extraClass="mb-6" />
        <div className={pages.sumbmit_login}>
          <Button
            htmlType="button"
            type="primary"
            size="large"
            extraClass="mb-20"
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
