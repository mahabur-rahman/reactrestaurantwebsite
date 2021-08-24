import React, { useState } from "react";

import "./aboutContent.scss";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
import aboutImg from "../../images/about.svg";

const AboutContent = ({ subHeading, mainHeading, text, btnName, btnLink }) => {
  const [hover, setHover] = useState(true);

  const toggle = () => {
    setHover(!hover);
  };

  return (
    <>
      <section id="aboutContent">
        <Container>
          <Row>
            <Col
              xl={6}
              lg={8}
              className="align-self-center order-2 order-xl-1 mx-auto"
            >
              <div className="about-content">
                <h3> {subHeading} </h3>
                <h2>{mainHeading}</h2>

                <p>{text}</p>
                <div>
                  <NavLink
                    to={btnLink}
                    onMouseEnter={toggle}
                    onMouseLeave={toggle}
                  >
                    <Button variant="btn btn-primary">
                      {btnName}
                      <span className="mx-1">
                        {hover ? <FaAngleRight /> : <FaArrowRight />}
                      </span>
                    </Button>
                  </NavLink>
                </div>
              </div>
            </Col>
            <Col
              xl={6}
              lg={5}
              md={7}
              className="align-self-center order-1 order-xl-2 mx-auto"
            >
              <div className="about-img">
                <Image src={aboutImg} fluid className="animated-img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutContent;
