import React from "react";
import "./productRate.scss";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaDollarSign, FaPhoneAlt } from "react-icons/fa";

const ProductRate = () => {
  return (
    <>
      <section id="productRate">
        <Container>
          <Row>
            <Col xl={6} className="mx-auto text-center">
              <div className="product-content">
                <h4>Free Delivery With</h4>
                <h2>Pizza of the day</h2>
                <h4>
                  only
                  <sup>
                    <FaDollarSign />
                  </sup>
                  8.99 usd
                </h4>
                <div>
                  <NavLink to="/contact">
                    <Button className="btn btn-primary">
                      Call now
                      <span className="mx-2">
                        <FaPhoneAlt className="phn-icon-animated" />
                      </span>
                    </Button>
                  </NavLink>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductRate;
