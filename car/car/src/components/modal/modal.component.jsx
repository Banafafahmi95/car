import React, { useState } from "react";
import { Button, DatePicker, Modal, Form } from "antd";
import { toast } from "react-toastify";
const { RangePicker } = DatePicker;

function ModalComponent({ item }) {
  const [show, setShow] = useState(false);
  const [date, setDates] = useState({
    start: "",
    end: "",
  });

  const showModal = () => {
    setShow(true);
  };
  const handleCancel = () => {
    setShow(false);
  };

  const handleOk = () => {};

  const onChange = (e) => {
    const d1 = e[0]._d;
    const d2 = e[1]._d;
    setDates({
      start: d1,
      end: d2,
    });
  };
  const onFinish = (values) => {
    const d1 = new Date(item.Available_From).toDateString();
    const d2 = new Date(item.Available_Until).toDateString();

    if (
      new Date(date.start).toDateString() >= d1 &&
      new Date(date.end).toDateString() <= d2
    ) {
      toast.success("Car Booked Successfully");
    } else {
      toast.error("the car is not available in the selected range");
    }
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Booking Now
      </Button>
      <Modal
        visible={show}
        title="Choose Date"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
        ]}
      >
        <Form
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Booking date"
            name="date"
            rules={[
              {
                required: true,
                message: "Please input your date!",
              },
            ]}
          >
            <RangePicker onChange={onChange} placement="bottomRight" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default ModalComponent;
