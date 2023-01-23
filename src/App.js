import React from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import AppCss from "./App.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";




function App(props) {


 

  return (
    <>
      <div className={AppCss}>
        <header className={AppCss.header}>
          <AppHeader />
        </header>
        <main className={AppCss.main}>
          <div className={AppCss.main__container}>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor  />
            </DndProvider>
          </div>
        </main>
      </div>
    </>
  );
}






export default App;
