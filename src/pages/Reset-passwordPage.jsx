import React from "react";
import AppHeader from "../components/AppHeader/AppHeader";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import pages from "./pages.module.css";
import {resetPasswordRequest} from "../utils/burger-api"

export function ResetPasswordPage(params) {

    function onButtnonClickResetPassword() {

      const resetPassObj = {
        newPassword: document.getElementById("newPasswordInput").value,
        code: document.getElementById("checkCodeInput").value
      };
      resetPasswordRequest(resetPassObj);
    }



  return (
    <>
      <AppHeader />
      <form className={pages.container}>
        <h1 className={` ${pages.header} text text_type_main-medium mb-6`}>
          Восстановление пароля
        </h1>
        <PasswordInput
          extraClass="mb-6"
          placeholder="Введите новый пароль"
          id="newPasswordInput"
        />
        <Input
          placeholder="Введите код из письма"
          extraClass="mb-6"
          id="checkCodeInput"
        />
        <div className={pages.sumbmit_save}>
          <Button
            htmlType="button"
            type="primary"
            size="large"
            extraClass="mb-20"
            onClick={onButtnonClickResetPassword}
          >
            Сохранить
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
