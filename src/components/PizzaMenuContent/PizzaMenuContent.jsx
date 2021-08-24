import React, { useState } from "react";
import "./pizzaMenuContent.scss";
import itemOne from "../../images/item1.svg";
import { Container, Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaLocationArrow, FaCaretRight, FaCircle } from "react-icons/fa";

const PizzaMenuContent = () => {
  const [hover, setHover] = useState(true);

  const toggle = () => {
    setHover(!hover);
  };

  return (
    <>
      <section id="pizzaMenuContent">
        <Container>
          <Row>
            <Col xl={10} className="mx-auto">
              <Row>
                <Col xl={6} lg={6} className="mx-auto">
                  <div className="itemImg">
                    <Image src={itemOne} fluid />
                    <span>
                      <FaCircle className="animated-circle" />
                    </span>
                  </div>
                </Col>

                <Col xl={6} lg={6} md={12} className="mx-auto mt-4 mt-lg-0">
                  <div className="item-text">
                    <h3>the pizza menu</h3>
                    <h2 className="mb-0">chicago</h2>
                    <h2>thin crust</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quo facere repudiandae voluptatibus repellat obcaecati
                      earum, delectus ipsa. Ex, recusandae dignissimos.
                    </p>
                    <div>
                      <NavLink
                        to="/news"
                        className="btn btn-primary"
                        onMouseEnter={toggle}
                        onMouseLeave={toggle}
                      >
                        View More
                        <span className="mx-1">
                          {hover ? <FaCaretRight /> : <FaLocationArrow />}
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PizzaMenuContent;
