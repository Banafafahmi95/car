import { Col, Row } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CarCard from "./components/car-card/car-card.component";
import CarDetail from "./components/car-detail/car-detail.component";
import Navbar from "./components/navbar/navbar.component";
import PageHeaderComponent from "./components/page-header/page-header-component";
import Slider from "./components/slider/slider.component";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { GetAllCars, selectAllCars } from "./redux/car-slice/carSlice";

if (window.location.origin === "http://localhost:3000") {
  axios.defaults.baseURL = "http://127.0.0.1:3005/";
} else {
  axios.defaults.baseURL = window.location.origin;
}
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllCars());
  }, []);
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
