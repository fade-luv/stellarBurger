import React from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import AppCss from "./App.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import addIngredientActionCreator from "./store/actionCreators/addIngredient-actionCreator";

function App(props) {
  const [elements, setElements] = React.useState([]);
  const [draggedElements, setDraggedElements] = React.useState([]);

  const handleDrop = (itemId) => {
  props.addIngredientToBurgerConstructor(itemId)
 
  };

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
              <BurgerConstructor onDropHandler={handleDrop} />
            </DndProvider>
          </div>
        </main>
      </div>
    </>
  );
}



function mapStateToProps(state) {
  return {
    ingredients: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addIngredientToBurgerConstructor: bindActionCreators(
      addIngredientActionCreator,
      dispatch
    ),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
