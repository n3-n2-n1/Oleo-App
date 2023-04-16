import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./Components/Footer/footer.jsx";
import Home from "./Views/Home/Home.jsx";
import NavBar from "./Components/NavBar/NavBar";
import Ejemplo from "./Views/Ejemplo/Ejemplo";
import Landing from "./Views/Landing/Landing";
import Whatsapp from "./Components/Whatsapp/whatsapp";
import SobreNosotros from "./Views/SobreNosotros/SobreNosotros.jsx";
import Categorias from "./Views/Categorias/Categoria";
import Detalle from "./Views/Detalle/Detalle";
import Background from "./Components/Background/Background";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAllBrand,
  getAllCategory,
  getAllProducts,
} from "./features/apiPeticion";
import DashboardRoute from "./Views/Admin/DashboardRoute";
import Index from "./Views/Admin";

function App() {


  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    getAllBrand(dispatch);
    getAllCategory(dispatch);
    getAllProducts(dispatch);
  }, [dispatch]);
  return (
    <div className="App">
      {pathname !== "/" && pathname.split("/")[1] !== "dashboard" ? (
        <NavBar />
      ) : null}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ejemplo" element={<Ejemplo />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/productos/:categoria" element={<Categorias />} />
        <Route path="/detalle/:id" element={<Detalle />} />

        {/* PROTECTED ROUTES FOR ADMIN DASHBOARD */}
        <Route
          path="/dashboard/*"
          element={
            <DashboardRoute>
              <Index />
            </DashboardRoute>
          }
        />
        {/* Redirect to landing if don´t match */}
        <Route path="*" element={<Home />} />
      </Routes>
      {pathname !== "/" && pathname.split("/")[1] !== "dashboard" ? (
        <Footer />
      ) : null}
      {pathname !== "/" && pathname.split("/")[1] !== "dashboard" ? (
        <Whatsapp />
      ) : null}
    </div>
  );
}

export default App;
