import About from "@/pages/About/About";
import Landing from "@/pages/Landing/Landing";
import NotFound from "@/pages/NotFound/NotFound";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/about" element={<About/>}/>


        {/* Keep Following Route At last */}
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
