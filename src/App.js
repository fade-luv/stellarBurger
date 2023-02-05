import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  {LoginPage}  from "./pages/login";
import  HomePage  from "./pages/HomePage";
import  {RegisterPage}  from "./pages/register";
import { ForgotPasswordPage } from "./pages/Forgot-passwordPage";
import { ResetPasswordPage } from "./pages/Reset-passwordPage";
import { ProfilePage } from "./pages/ProfilePage";
import { OrdersPage } from "./pages/Orders";
function App(props) {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profilе/orders" element={<OrdersPage />} />
    </Routes>
  );
}

export default App;
