import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  {LoginPage}  from "./pages/login";
import  HomePage  from "./pages/HomePage";

function App(props) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
