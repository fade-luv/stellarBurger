import React, { useEffect, useState } from "react";
import AppHeader from "../components/AppHeader/AppHeader";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import pages from "./pages.module.css";
import { forgotPasswordRequest } from "../utils/burger-api";
import { getUserInfo } from "../utils/burger-api";
import { Navigate } from "react-router-dom";

export function ForgotPasswordPage(params) {
  const [isLogined, setIsLogined] = useState(false);

  function onButtnonClickForgotPassword() {
    let emailInput = document.querySelector(".input__textfield");
    let emailInputValue = emailInput.value;
    forgotPasswordRequest(emailInputValue);
  }

  useEffect(() => {
    const getInfoAuth = async () => {
      const response = await getUserInfo();
      setIsLogined(response.success);
    };

    getInfoAuth();
  }, []);

  if (isLogined === true) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <AppHeader />
      <form className={pages.container}>
        <h1 className={` ${pages.header} text text_type_main-medium mb-6`}>
          Восстановление пароля
        </h1>
        <EmailInput extraClass="mb-6" placeholder="Укажите e-mail" />
        <div className={pages.sumbmit_forgot}>
          <Button
            htmlType="button"
            type="primary"
            size="large"
            extraClass="mb-20"
            onClick={onButtnonClickForgotPassword}
          >
            Восстановить
          </Button>
        </div>
        <p className={pages.forgotPassword}>
          Вспомнили пароль?
          <Button
            htmlType="button"
            type="secondary"
            size="small"
            extraClass="pl-2 pr-2"
          >
            Войти
          </Button>
        </p>
      </form>
    </>
  );
}
