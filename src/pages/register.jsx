import React from "react";
import AppHeader from "../components/AppHeader/AppHeader";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import pages from "./pages.module.css";
import {registrationRequest} from "../utils/burger-api"
import {registrationActionCreator} from "../store/actionCreators/registration-actionCreator"
import { useSelector, useDispatch } from "react-redux";

export function RegisterPage(params) {
  const dispatch = useDispatch();

function sendRegistrationData(){
  const newUserData ={
    registerNameValue : document.getElementById("registerName").value,
    registerEmailValue : document.getElementById("registerEmail").value,
    registerPasswordValue : document.getElementById("registerPassword").value,
  }
 

  dispatch(
    registrationActionCreator(
      newUserData
    )
  );

}

  return (
    <>
      <AppHeader />
      <form className={pages.container}>
        <h1 className={` ${pages.header} text text_type_main-medium mb-6`}>
          Регистрация
        </h1>
        <Input placeholder="Имя" extraClass="mb-6" id="registerName" />
        <EmailInput extraClass="mb-6" id="registerEmail"/>
        <PasswordInput extraClass="mb-6" id="registerPassword"/>
        <div className={pages.sumbmit_register}>
          <Button
            htmlType="button"
            type="primary"
            size="large"
            extraClass="mb-20"
            onClick={sendRegistrationData}
          >
            Зарегестрироваться
          </Button>
        </div>

        <p className={`${pages.newUser} mt-20`}>
          Уже зарегистрированы?
          <Link to="/login">
            <Button
              htmlType="button"
              type="secondary"
              size="small"
              extraClass="pl-2 pr-2"
            >
              Войти
            </Button>
          </Link>
        </p>
      </form>
    </>
  ); 


}
