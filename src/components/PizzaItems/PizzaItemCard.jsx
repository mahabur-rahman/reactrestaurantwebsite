import React from "react";

import { Col, Card } from "react-bootstrap";

const PizzaItemCard = ({ imgSrc, title, text, rate }) => {
  return (
    <>
      <Col xl={4} lg={6}>
        <Card className="text-center border-0 shadow">
          <Card.Img variant="top" src={imgSrc} fluid />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Card.Text class="card-rate">{rate}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default PizzaItemCard;
