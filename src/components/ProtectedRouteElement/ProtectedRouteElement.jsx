import { Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { userLogginedInfoActionCreator } from "../../store/actionCreators/logginedUserInfo-actionCreator";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserInfo } from "../../utils/burger-api";

export const ProtectedRouteElement = ({ element }) => {
const [isLogined, setIsLogined] = useState(false);
const [isLoading, setIsLoading] = useState(true);

console.log(element);
useEffect(() => {
  const getInfoAuth = async () => {
    const response = await getUserInfo();
    setIsLogined(response);
    setIsLoading(false);
  };

  getInfoAuth();
}, []);
  

   if (isLoading) {
    return <div>Loading...</div>;
  }
 if (isLogined == undefined) {
   return <Navigate to="/login" />;
 }

  if (isLogined.success) {
    return element; 
  }

 

  
};
