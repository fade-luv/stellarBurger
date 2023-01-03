import React from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import AppCss from "./App.module.css";
import { useEffect, useState } from "react";
import { IngredientsContext } from "./services/ingredientsContext";
import { getIngredientsData } from "./utils/burger-api";


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
              <IngredientsContext.Provider value={ingredients}>
                <BurgerIngredients />
                <BurgerConstructor />
              </IngredientsContext.Provider>
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
