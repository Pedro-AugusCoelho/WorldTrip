import { Route, Routes } from "react-router-dom";

import Continent from "../pages/Continent";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";



const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Continent/:id" element={<Continent />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default MainRoutes;