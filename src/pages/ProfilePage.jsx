import React, { useState } from "react";
import AppHeader from "../components/AppHeader/AppHeader";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, NavLink } from "react-router-dom";
import pages from "./pages.module.css";
import { ProfileMenu } from "../components/ProfileMenu/ProfileMenu";
import { updateUserNameActionCreator } from "../store/actionCreators/userInfo-actionCreator";
import { updateUserEmailActionCreator } from "../store/actionCreators/userInfo-actionCreator";
import { updateUserPasswordActionCreator } from "../store/actionCreators/userInfo-actionCreator";
import { useSelector, useDispatch } from "react-redux";
import {updateUserData} from "../utils/burger-api"
export function ProfilePage(params) {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState(null);
  const [userEmail,setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    dispatch(updateUserNameActionCreator(userName));
  };

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
    dispatch(updateUserEmailActionCreator(userEmail));
  };
  const handleUserPasswordChange = (e) => {
    setUserPassword(e.target.value);
    dispatch(updateUserPasswordActionCreator(userPassword));
  };

function updateUser(){
  updateUserData(userName, userEmail, userPassword);
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
              value={userName}
            />
            <EmailInput onChange={handleUserEmailChange} extraClass="mb-6" />
            <PasswordInput
              onChange={handleUserPasswordChange}
              extraClass="mb-6"
            />
            {(userName || userEmail || userPassword) && (
              <Button
                htmlType="button"
                type="secondary"
                size="medium"
                extraClass="ml-15 mr-15"
              >
                Отмена
              </Button>
            )}
            {(userName || userEmail || userPassword) && (
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
