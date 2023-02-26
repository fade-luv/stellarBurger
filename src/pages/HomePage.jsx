import React, { useEffect } from "react";
import BurgerIngredients from "../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../components/BurgerConstructor/BurgerConstructor";
import AppCss from "../App.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function HomePage(params) {
  return (
    <main className={AppCss.main}>
      <div className={AppCss.main__container}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </div>
    </main>
  );
}

export default HomePage;
