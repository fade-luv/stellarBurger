import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  {LoginPage}  from "./pages/login";
import  HomePage  from "./pages/HomePage";
import  {RegisterPage}  from "./pages/register";

function App(props) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage /> } />
    </Routes>
  );
}

export default App;
