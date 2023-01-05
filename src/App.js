import React from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import AppCss from "./App.module.css";
import { useEffect, useState } from "react";
import { getIngredientsData } from "./utils/burger-api";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ingredientsActionCreator  from "./store/actionCreators/ingredients-actionCreator";


function App(props) {
  const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
      getIngredientsData()
        .then((data) => props.changeIngredients(data.data))
        .then(() => setIsLoaded(true));
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
                <BurgerIngredients />
                <BurgerConstructor />
            </div>
          </main>
        </div>
      )}
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    changeIngredients: bindActionCreators(ingredientsActionCreator, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(App);

