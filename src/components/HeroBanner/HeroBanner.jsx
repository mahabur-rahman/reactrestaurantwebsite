import React, { useState, useRef, useEffect } from "react";
// ityped
import { init } from "ityped";
import "./heroBanner.scss";
import bannerImg from "../../images/banner.svg";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";

const HeroBanner = () => {
  const [hover, setHover] = useState(true);

  const toggle = () => {
    setHover(!hover);
  };

  // ityped
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: [" pizzini", "monton", "caffee"],
    });
  }, []);

  return (
    <>
      <section
        id="heroBanner"
        className="d-flex justify-content-center align-items-center text-xl-block"
      >
        <Container>
          <Row>
            <Col
              xl={6}
              lg={12}
              className="align-self-center order-2 order-xl-1"
            >
              <div className="banner-content">
                <h3> Pizza Delivery </h3>
                <h2>
                  Maestro <span ref={textRef} className="move"></span>
                </h2>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.Numquam quasi sint deleniti blanditiis ut.Esse quas nulla
                  facilis beatae atque.
                </p>
                <div>
                  <NavLink
                    to="/contact"
                    onMouseEnter={toggle}
                    onMouseLeave={toggle}
                  >
                    <Button variant="btn btn-primary">
                      Delivery Now
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
              lg={6}
              md={7}
              className="align-self-center order-1 order-xl-2 mx-auto"
            >
              <div className="banner-img">
                <Image src={bannerImg} fluid className="animated-img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroBanner;
