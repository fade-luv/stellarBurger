import React from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import AppCss from "./App.module.css";
import { useEffect, useState } from "react";
import { getIngredientsData } from "./utils/burger-api";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  

  const [ingredients, setIngredients] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
      getIngredientsData()
        .then((data) => setIngredients(data.data))
        .then(() => setIsLoaded(true))
    }, [])
  return (
    <>
      {isLoaded && (
        <div className={AppCss}>
          <header className={AppCss.header}>
            <AppHeader />
          </header>
          <main className={AppCss.main}>
            <div className={AppCss.main__container}>
              <Provider store={store}>
                <BurgerIngredients />
                <BurgerConstructor />
              </Provider>
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
