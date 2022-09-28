import React from 'react';
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import AppCss from "./App.module.css";
function App() {
  return (
    <div className={AppCss}>
      <header className={AppCss.header}>
        <AppHeader />
      </header>
      <main className={AppCss.main}>
        <div className={AppCss.main__container}>
          <BurgerIngredients />
          <BurgerConstructor />
        </div>
      </main>
    </div>
  );
}

export default App;