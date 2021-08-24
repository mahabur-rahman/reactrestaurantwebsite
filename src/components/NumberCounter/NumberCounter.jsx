import React from "react";
import "./numberCounter.scss";
import { Container, Row, Col } from "react-bootstrap";
import counterNumber from "../Data/CounterData";

const NumberCounter = () => {
  return (
    <>
      <section id="numberCounter">
        <Container>
          <Row>
            <Col xl={10} className="mx-auto">
              <Row>
                {counterNumber.map((item) => (
                  <Col
                    xl={3}
                    lg={3}
                    md={6}
                    className="align-self-center my-3 my-lg-0"
                    key={item.id}
                  >
                    <div className="number-item text-center">
                      <h2>{item.cNumber}</h2>
                      <p>{item.text}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default NumberCounter;
