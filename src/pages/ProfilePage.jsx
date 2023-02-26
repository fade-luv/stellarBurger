import React, { useState, useEffect } from "react";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import pages from "./pages.module.css";
import { ProfileMenu } from "../components/ProfileMenu/ProfileMenu";
import { userLogginedInfoActionCreator } from "../store/actionCreators/logginedUserInfo-actionCreator";
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
const [activeButton, setActiveButton] = useState();
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

  function onSubmit(e) {
    e.preventDefault();
    updateUserData(name, email, password);
  }


  function resetForm() {
    setName(userName);
    setEmail(userEmail);
    setChanged(false);
  }

  return (
    <>
      <div className={pages.profile_wrapper}>
        <ProfileMenu />
        <div className={pages.link_content}>
          <form onSubmit={onSubmit}>
            <Input
              onChange={handleUserNameChange}
              icon={activeButton === "name" ? "CloseIcon" : "EditIcon"}
              onIconClick={() => setActiveButton("name")}
              placeholder="Имя"
              extraClass="mb-6"
              errorText={"Ошибка"}
              value={name}
            />
            <EmailInput
              icon={activeButton === "password" ? "CloseIcon" : "EditIcon"}
              onChange={handleUserEmailChange}
              onIconClick={() => setActiveButton("email")}
              extraClass="mb-6"
              errorText={"Ошибка"}
              value={email}
            />
            <PasswordInput
              extraClass="mb-6"
              icon={activeButton === "password" ? "CloseIcon" : "EditIcon"}
              onIconClick={() => setActiveButton("password")}
              value={password}
              errorText={"Ошибка"}
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
              <Button htmlType="submit" type="primary" size="medium">
                Сохранить
              </Button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
