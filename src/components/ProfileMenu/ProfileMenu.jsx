import React from "react";
import styles from "./ProfileMenu.module.css";
import { NavLink } from "react-router-dom";
import { logoutActionCreator } from "../../store/actionCreators/logout-actionCreator";
import {  useDispatch } from "react-redux";

export function ProfileMenu () {

 const dispatch = useDispatch();

let RefreshToken = (localStorage.getItem("refreshToken"));
function logOut(){
  dispatch(logoutActionCreator(RefreshToken));
   localStorage.removeItem("refreshToken");
   localStorage.removeItem("accessToken");
}


  return (
    <div className={styles.profile_nav}>
      <ul className={styles.prifile_nav_list}>
        <li className={styles.profile_nav_list_item}>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? styles.active : styles.unactive
            }
           
          >
            Профиль
          </NavLink>
        </li>
        <li className={styles.profile_nav_list_item}>
          <NavLink
            to="/profilе/orders/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.unactive
            }
            
          >
            История заказов
          </NavLink>
        </li>
        <li className={styles.profile_nav_list_item}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.unactive
            }
            
            onClick={logOut}
          >
            Выход
          </NavLink>
        </li>
      </ul>
      <article className={styles.page_info}>
        В этом разделе вы можете изменить свои персональные данные
      </article>
    </div>
  );
}