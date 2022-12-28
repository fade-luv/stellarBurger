import React from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import AppCss from "./App.module.css";
import { useEffect, useState } from "react";
import { IngredientsContext } from "./services/ingredientsContext";


function App() {
  const ApiLink = "https://norma.nomoreparties.space";

  const [ingredients, setIngredients] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null);

  useEffect(() => {
    const getIngredientsData = async () => {
      try {
        const res = await fetch(`${ApiLink}/api/ingredients`);
        if (res.ok) {
          const data = await res.json();
          setIsLoaded(true);
          setIngredients(data.data);
        } else {
          const error = await res.json();
          throw new Error(error);
        }
      } catch (error) {
        setIsLoaded(true);
        setError(error);
        console.log(`Ошибка: ${error}`);
      }
    };
    getIngredientsData();
  }, []);

  return (
    <>
      {isLoaded && (
        <IngredientsContext.Provider value={ingredients}>
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
        </IngredientsContext.Provider>
      )}
    </>
  );
}

export default App;
