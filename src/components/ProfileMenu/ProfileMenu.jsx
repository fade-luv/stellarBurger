import React from "react";
import styles from "./ProfileMenu.module.css";
import { Link, NavLink } from "react-router-dom";
import {exiteRequest} from "../../utils/burger-api"
import { useNavigate } from "react-router-dom";
export function ProfileMenu () {
 const navigate = useNavigate();
 
function logOut(){
  exiteRequest(localStorage.getItem("refreshToken"));
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
            exact
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
            exact
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
            exact
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