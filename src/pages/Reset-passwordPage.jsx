import React, { useEffect, useState } from "react";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import pages from "./pages.module.css";
import { resetPasswordRequest } from "../utils/burger-api";
import { getUserInfo } from "../utils/burger-api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export function ResetPasswordPage(props) {
  const [isLogined, setIsLogined] = useState(false);
  const location = useLocation();
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const resetPasswordEmailSend = useSelector(
    (state) => state.userLogginedInfoReducer.isResetPasswordEmailSended
  );
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    const resetPassObj = {
      newPassword: document.getElementById("newPasswordInput").value,
      code: document.getElementById("checkCodeInput").value,
    };
    resetPasswordRequest(resetPassObj);
    navigate("/login", {
      state: { from: location.pathname },
    });
    
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

  if (isLogined === true || resetPasswordEmailSend == false) {
    return <Navigate to="/" replace />;
  }

  
  function changePasswordInput(value) {
    setPassword(value);
  }

    function changeCodeInput(value) {
      setCode(value);
    }

  return (
    <>
      <form className={pages.container} onSubmit={onSubmit}>
        <h1 className={` ${pages.header} text text_type_main-medium mb-6`}>
          Восстановление пароля
        </h1>
        <PasswordInput
          extraClass="mb-6"
          placeholder="Введите новый пароль"
          id="newPasswordInput"
          value={password}
          onChange={(e) => changePasswordInput(e.target.value)}
        />
        <Input
          placeholder="Введите код из письма"
          extraClass="mb-6"
          id="checkCodeInput"
          value={code}
          onChange={(e) => changeCodeInput(e.target.value)}
        />
        <div className={pages.sumbmit_save}>
          <Button
            htmlType="submit"
            type="primary"
            size="large"
            extraClass="mb-20"
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
