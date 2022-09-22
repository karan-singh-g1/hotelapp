import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Adminpage from "./Adminpage";
import LandingPage from "./LandingPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />;
      <Route path="/Admin" element={<Admin />} />;
      <Route path="/Adminpage" element={<Adminpage />} />;
   
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoutes;
