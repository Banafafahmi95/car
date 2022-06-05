import React from "react";
import "./car-styles.css";
import { Card, Avatar } from "antd";
import { CarOutlined, ScheduleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Meta } = Card;
function CarCard({ item }) {
  return (
    <Card
      hoverable
      cover={<img alt="example" src={item.Images[0]} />}
      actions={[
        <div>
          <CarOutlined key="km" /> {item.Kilometers_Traveled}
        </div>,
        <div>
          <Link to={`/detail/${item.id}`}>
            <ScheduleOutlined key="booking" /> Detail
          </Link>
        </div>,
      ]}
    >
      <Meta title={item.Model} description={item.Make} />
    </Card>
  );
}

export default CarCard;
