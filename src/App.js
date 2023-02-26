import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { LoginPage } from "./pages/login";
import HomePage from "./pages/HomePage";
import { RegisterPage } from "./pages/register";
import { ForgotPasswordPage } from "./pages/Forgot-passwordPage";
import { ResetPasswordPage } from "./pages/Reset-passwordPage";
import { useEffect, useState } from "react";
import { ProfilePage } from "./pages/ProfilePage";
import { OrdersPage } from "./pages/Orders";
import { FeedPage } from "./pages/feedPage";
import { ProtectedRouteElement } from "./components/ProtectedRouteElement/ProtectedRouteElement";
import { userLogginedInfoActionCreator } from "./store/actionCreators/logginedUserInfo-actionCreator";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "./utils/burger-api";
import  AppHeader  from "./components/AppHeader/AppHeader";
import  IngredientDetails  from "./components/IngredientDetails/IngredientDetails";

function App(props) {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userLogginedInfoActionCreator());
  }, []);

  useEffect(() => {
    getUserInfo().then((res) => setData(res));
  }, []);

 const ingredients = useSelector(
   (store) => store.ingredientsReducer.ingredients
 );

    const location = useLocation();
    const background = location.state && location.state.background;


  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<AppHeader />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route
            path="/profile"
            element={<ProtectedRouteElement element={<ProfilePage />} />}
          />
          <Route exact path="profile/orders" element={<OrdersPage />} />
          <Route path="/ingredients/:id" element={<IngredientDetails />} />
        </Route>
        {!!background && (
          <Route path="/ingredients/:id" element={<IngredientDetails />} />
        )}
      </Routes>
    </>
  );
}

export default App;
