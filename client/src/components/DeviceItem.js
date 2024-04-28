import React from "react";
import { Col, Card, Image } from "react-bootstrap";

const DeviceItem = ({ device }) => {
  return (
    <Col md={3} className="mt-3">
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image width={150} height={150} src={device.img} />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>samsung....</div>

          <div>
            <div>{device.rating}</div>
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
