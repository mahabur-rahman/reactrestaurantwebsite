import React from "react";
import "./pizzaItems.scss";
import cardImg1 from "../../images/item1.png";
import cardImg2 from "../../images/item1.png";
import cardImg3 from "../../images/item1.png";
import cardImg4 from "../../images/item1.png";
import { Container, Row, Col } from "react-bootstrap";
import PizzaItemCard from "./PizzaItemCard";
// data
import pizzaItemCard from "../Data/PizzaItemCard";

const PizzaItems = () => {
  return (
    <>
      <section id="pizzaItems">
        <Container>
          <Row>
            <Col xl={6} lg={6} className="mx-auto">
              <div className="pizzaItems-heading text-center mb-4">
                <h4>Pizza menu</h4>
                <h2>Welcome to maestro Pizzini</h2>
              </div>
            </Col>
          </Row>

          <Row className="gy-4">
            <Col xl={10} lg={10} className="mx-auto">
              <Row>
                {pizzaItemCard.map((data) => (
                  <PizzaItemCard key={data.id} {...data} />
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PizzaItems;
