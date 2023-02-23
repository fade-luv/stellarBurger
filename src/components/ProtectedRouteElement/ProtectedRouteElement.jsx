import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getUserInfo } from "../../utils/burger-api";

export const ProtectedRouteElement = ({ element }) => {
const [isLogined, setIsLogined] = useState(false);
const [isLoading, setIsLoading] = useState(true);


const location = useLocation()
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
   return <Navigate to="/login" state={{ from: location.pathname }} />;
 }

  if (isLogined.success) {
    return element; 
  }

 

  
};
