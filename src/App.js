import React from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import AppCss from "./App.module.css";
import Modal from "./components/Modal/Modal";
import { useEffect, useState } from "react";
function App() {
  const ApiLink = "https://norma.nomoreparties.space";
  const initialState = [];
  const [ingridients, setIngridients] = useState(initialState);

  const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  };

  useEffect(() => {
    const getIngridientsData = async () => {
      const res = await fetch(`${ApiLink}/api/ingredients`).then(checkReponse);
      setIngridients(res.data);
    };
    getIngridientsData();
  }, []);

  return (
    <div className={AppCss}>
      <header className={AppCss.header}>
        <AppHeader />
      </header>
      <main className={AppCss.main}>
        <div className={AppCss.main__container}>
          <BurgerIngredients ingridients={ingridients} />
          <BurgerConstructor ingridients={ingridients} />
        </div>
      </main>
    </div>
  );
}

export default App;
