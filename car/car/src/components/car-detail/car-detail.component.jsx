import React from "react";
import { Descriptions, Row, Col, Button } from "antd";
import Slider from "../slider/slider.component";
import "./car-detail.styles.css";
import { CalendarOutlined } from "@ant-design/icons";
import ModalComponent from "../modal/modal.component";

function CarDetail({ item }) {
  return (
    <Row gutter={[16, 16]}>
      <Col lg={12}>
        <Slider images={item.Images} />
      </Col>
      <Col lg={12}>
        <div className="card-detail">
          <Descriptions title="User Info">
            <Descriptions.Item label="Make">{item.Make}</Descriptions.Item>
            <Descriptions.Item label="Model">{item.Model}</Descriptions.Item>
            <Descriptions.Item label="Kilometers Traveled">
              {item.Kilometers_Traveled}
            </Descriptions.Item>
            <Descriptions.Item label="Latitude">
              {item.Latitude}
            </Descriptions.Item>
            <Descriptions.Item label="Longitude">
              {item.Longitude}
            </Descriptions.Item>
            <Descriptions.Item label="Available From">
              {item.Available_From}
            </Descriptions.Item>
            <Descriptions.Item label="Available Until">
              {item.Available_Until}
            </Descriptions.Item>
          </Descriptions>
          <div className="booking-section">
            <ModalComponent item={item} />
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default CarDetail;
