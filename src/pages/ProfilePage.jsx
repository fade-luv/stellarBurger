import React, { useState, useEffect } from "react";
import AppHeader from "../components/AppHeader/AppHeader";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, NavLink } from "react-router-dom";
import pages from "./pages.module.css";
import { ProfileMenu } from "../components/ProfileMenu/ProfileMenu";
import { userLogginedInfoActionCreator } from "../store/actionCreators/logginedUserInfo-actionCreator";
import { changeUserLogginedNameActionCreator } from "../store/actionCreators/logginedUserInfo-actionCreator";
import { changeUserLogginedEmailActionCreator } from "../store/actionCreators/logginedUserInfo-actionCreator";
import { useSelector, useDispatch } from "react-redux";
import { updateUserData } from "../utils/burger-api";
import { getUserInfo } from "../utils/burger-api";

export function ProfilePage(params) {
  const dispatch = useDispatch();


const { userEmail, userName, userPassword } = useSelector(
  (state) => state.userLogginedInfoReducer
);


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInputChanged, setChanged] = useState(false);

  useEffect(() => {
    getUserInfo().then((res) => dispatch(userLogginedInfoActionCreator(res)));
  }, []);

  useEffect(() => {
    setName(userName);
    setEmail(userEmail);
    setPassword("******");
  }, [userName, userEmail, userPassword]);

  const handleUserNameChange = (e) => {
    setName(e.target.value);
    setChanged(true);
  };

  const handleUserEmailChange = (e) => {
    setEmail(e.target.value);
    setChanged(true);
  };

  const handleUserPasswordChange = (e) => {
    setPassword(e.target.value);
    setChanged(true);
  };

  function updateUser() {
    updateUserData(name, email, password);
  }

  function resetForm() {
    setName(userName);
    setEmail(userEmail);
    setChanged(false);
  }

  return (
    <>
      <AppHeader />
      <div className={pages.profile_wrapper}>
        <ProfileMenu />
        <div className={pages.link_content}>
          <form>
            <Input
              onChange={handleUserNameChange}
              placeholder="Имя"
              extraClass="mb-6"
              value={name}
            />
            <EmailInput
              onChange={handleUserEmailChange}
              extraClass="mb-6"
              value={email}
            />
            <PasswordInput
              extraClass="mb-6"
              value={password}
              onChange={handleUserPasswordChange}
            />
            {isInputChanged && (
              <Button
                htmlType="button"
                type="secondary"
                size="medium"
                extraClass="ml-15 mr-15"
                onClick={resetForm}
              >
                Отмена
              </Button>
            )}
            {isInputChanged && (
              <Button
                htmlType="button"
                type="primary"
                size="medium"
                onClick={updateUser}
              >
                Сохранить
              </Button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
