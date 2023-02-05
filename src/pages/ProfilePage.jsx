import React, {useState} from "react";
import AppHeader from "../components/AppHeader/AppHeader";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, NavLink } from "react-router-dom";
import pages from "./pages.module.css";
import {ProfileMenu} from "../components/ProfileMenu/ProfileMenu"
export function ProfilePage(params) {



  return (
    <>
      <AppHeader />
      <div className={pages.profile_wrapper}>
        <ProfileMenu />
        <div className={pages.link_content}>
          <form>
            <Input placeholder="Имя" extraClass="mb-6" />
            <EmailInput extraClass="mb-6" />
            <PasswordInput extraClass="mb-6" />
          </form>
        </div>
      </div>
    </>
  );
}
