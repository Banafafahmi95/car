import React from "react";
import { Col, Layout, Row } from "antd";
import PageHeaderComponent from "../components/page-header/page-header-component";
import "./home.styles.css";
import { useSelector } from "react-redux";
import { selectAllCars } from "../redux/car-slice/carSlice";
import CarCard from "../components/car-card/car-card.component";
const { Content } = Layout;
function Home() {
  const data = useSelector(selectAllCars);

  return (
    <Content className="home-content">
      <PageHeaderComponent hasBack={false} title="All Cars" />
      <Row gutter={[16, 16]}>
        {data.map((e) => (
          <Col key={e.id} xs={24} sm={12} md={8} lg={6}>
            <CarCard item={e} />
          </Col>
        ))}
      </Row>
    </Content>
  );
}

export default Home;
