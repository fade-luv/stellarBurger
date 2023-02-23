import React, { useEffect, useState } from "react";
import pages from "./pages.module.css";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginActionCreator } from "../store/actionCreators/login-actionCreator";
import { getUserInfo } from "../utils/burger-api";
import { Navigate, useLocation } from "react-router-dom";

export function LoginPage(params) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLogined, setIsLogined] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const location = useLocation();

  function changeEmailInput(value) {
    setEmail(value);
  }

  function changePasswordInput(value) {
    setPassword(value);
  }

  if (isAuth === true) {
    navigate(`${location.state.from}`);
  }

  function goToForgotPassword(params) {
    navigate("/forgot-password");
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

  function onSubmit(e) {
    e.preventDefault();
    const loginUserData = {
      authEmailValue: document.getElementById("authEmail").value,
      authPasswordValue: document.getElementById("authPassword").value,
    };
    dispatch(loginActionCreator(loginUserData));
  }

  return (
    <>
      <form className={pages.container} onSubmit={onSubmit}>
        <h1 className={` ${pages.header} text text_type_main-medium mb-6`}>
          Вход
        </h1>
        <EmailInput
          extraClass="mb-6"
          id="authEmail"
          value={email}
          onChange={(e) => changeEmailInput(e.target.value)}
        />
        <PasswordInput
          extraClass="mb-6"
          id="authPassword"
          value={password}
          onChange={(e) => changePasswordInput(e.target.value)}
        />
        <div className={pages.sumbmit_login}>
          <Button
            htmlType="submit"
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
