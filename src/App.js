import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login";
import HomePage from "./pages/HomePage";
import { RegisterPage } from "./pages/register";
import { ForgotPasswordPage } from "./pages/Forgot-passwordPage";
import { ResetPasswordPage } from "./pages/Reset-passwordPage";
import { useEffect, useState } from "react";
import { ProfilePage } from "./pages/ProfilePage";
import { OrdersPage } from "./pages/Orders";
import { ProtectedRouteElement } from "./components/ProtectedRouteElement/ProtectedRouteElement";
import { userLogginedInfoActionCreator } from "./store/actionCreators/logginedUserInfo-actionCreator";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "./utils/burger-api";
function App(props) {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    getUserInfo().then((res) => dispatch(userLogginedInfoActionCreator(res)));
  }, []);

  useEffect(() => {
    getUserInfo().then((res) => setData(res));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route
        path="/profile"
        element={
          <ProtectedRouteElement test={data} element={<ProfilePage />} />
        }
      />
      <Route path="/profilе/orders" element={<OrdersPage />} />
    </Routes>
  );
}

export default App;
