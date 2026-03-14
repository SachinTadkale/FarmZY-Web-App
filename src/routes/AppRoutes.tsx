import { Routes, Route } from "react-router-dom";

import Login from "@/pages/auth/Login";
import LandingPage from "@/pages/Public/Home/LandingPage";
import PageNotFound from "@/pages/Page_Not_Found/Page_Not_Found";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<LandingPage />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />

      {/* Fallback */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
