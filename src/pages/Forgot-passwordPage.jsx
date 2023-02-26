import React, { useEffect, useState } from "react";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import pages from "./pages.module.css";
import { getUserInfo } from "../utils/burger-api";
import { Navigate } from "react-router-dom";
import forgotPasswordActionCreator from "../store/actionCreators/forgotPassword-actionCreator";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function ForgotPasswordPage(params) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLogined, setIsLogined] = useState(false);
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    let emailInput = document.querySelector(".input__textfield");
    let emailInputValue = emailInput.value;
    dispatch(forgotPasswordActionCreator(emailInputValue));
  }

  const isResetPasswordEmailSended = useSelector(
    (state) => state.userLogginedInfoReducer.isResetPasswordEmailSended
  );

  function changeEmailInput(value) {
    setEmail(value);
  }

  if (isResetPasswordEmailSended === true) {
    navigate("/reset-password");
  }

  function goToLogin(){
    navigate("/login");
  } 
  useEffect(() => {
    const getInfoAuth = async () => {
      const response = await getUserInfo();
      if (response) {
        setIsLogined(response.success);
      }
    };

    getInfoAuth();
  }, []);

  if (isLogined === true) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <form className={pages.container} onSubmit={onSubmit}>
        <h1 className={` ${pages.header} text text_type_main-medium mb-6`}>
          Восстановление пароля
        </h1>
        <EmailInput
          extraClass="mb-6"
          placeholder="Укажите e-mail"
          value={email}
          onChange={(e) => changeEmailInput(e.target.value)}
        />
        <div className={pages.sumbmit_forgot}>
          <Button
            htmlType="submit"
            type="primary"
            size="large"
            extraClass="mb-20"
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
            onClick={goToLogin}
          >
            Войти
          </Button>
        </p>
      </form>
    </>
  );
}
