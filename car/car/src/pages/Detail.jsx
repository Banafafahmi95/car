import React from "react";
import { Col, Layout, Row } from "antd";
import PageHeaderComponent from "../components/page-header/page-header-component";
import "./home.styles.css";
import { useSelector } from "react-redux";
import { selectAllCars, selectCarById } from "../redux/car-slice/carSlice";
import { useParams } from "react-router-dom";
import CarDetail from "../components/car-detail/car-detail.component";
const { Content } = Layout;

function Detail() {
  const { id } = useParams();
  const car = useSelector((state) => selectCarById(state, id));
  return (
    <Content className="home-content">
      {car && car.id ? (
        <>
          <PageHeaderComponent
            title={car.Model}
            subTitle={car.Make}
            hasBack={true}
          />
          <CarDetail item={car} />
        </>
      ) : (
        <h1>Error</h1>
      )}
    </Content>
  );
}

export default Detail;
