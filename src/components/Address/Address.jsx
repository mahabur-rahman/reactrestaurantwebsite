import React, { useState, useEffect } from "react";
import "./address.scss";
import contactImg from "../../images/contact.svg";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  FloatingLabel,
} from "react-bootstrap";
import { FaCircle } from "react-icons/fa";

const Address = () => {
  const [userInfo, setUserInfo] = useState({
    fName: "",
    lName: "",
    address: "",
    email: "",
    password: "",
  });

  // after form submit
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowText(false);
    }, 5000);
  }, []);

  const eventHandleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `fName : ${userInfo.fName} lName : ${userInfo.lName} address : ${userInfo.address} email : ${userInfo.email} password : ${userInfo.password}`
    );
    // after form submit
    setShowText(true);
  };

  return (
    <>
      <section id="address">
        <Container>
          <Row>
            <Col xl={6} lg={8} className="mx-auto">
              <div className="address-text">
                <h4>quick delivery</h4>
                <h2>order a pizza now</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                  dolor molestias, doloribus consectetur quam id.
                </p>
                <div className="address-form">
                  <Form onSubmit={formSubmit}>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="firstName">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="First name"
                          className="mb-3"
                        >
                          <Form.Control
                            name="fName"
                            value={userInfo.fName}
                            onChange={eventHandleChange}
                            type="text"
                            placeholder="first name"
                          />
                        </FloatingLabel>
                      </Form.Group>

                      <Form.Group as={Col} controlId="lastName">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Last name"
                          className="mb-3"
                        >
                          <Form.Control
                            name="lName"
                            value={userInfo.lName}
                            onChange={eventHandleChange}
                            type="text"
                            placeholder="last name"
                          />
                        </FloatingLabel>
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Street address"
                        className="mb-3"
                      >
                        <Form.Control
                          name="address"
                          value={userInfo.address}
                          onChange={eventHandleChange}
                          type="text"
                          placeholder="street address"
                        />
                      </FloatingLabel>
                    </Form.Group>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridCity">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Email"
                          className="mb-3"
                        >
                          <Form.Control
                            name="email"
                            value={userInfo.email}
                            onChange={eventHandleChange}
                            type="email"
                            placeholder="abc@gmail.com"
                          />
                        </FloatingLabel>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Password"
                          className="mb-3"
                        >
                          <Form.Control
                            name="password"
                            value={userInfo.password}
                            onChange={eventHandleChange}
                            type="password"
                            placeholder="******"
                          />
                        </FloatingLabel>
                      </Form.Group>
                    </Row>

                    <div className="d-grid gap-2">
                      <Button variant="primary" size="lg" type="submit">
                        quick delivery
                      </Button>
                    </div>
                    {/* after form submit 👍 */}
                    {showText ? (
                      <div className="text-success my-3 text-center text-capitalize">
                        <strong>Your order is completed 🙂</strong>
                      </div>
                    ) : (
                      ""
                    )}
                  </Form>
                </div>
              </div>
            </Col>
            <Col xl={5} lg={4} className="mx-auto align-self-center">
              <div className="address-img d-none d-lg-block">
                <Image src={contactImg} fluid />
                <span>
                  <FaCircle className="animated-circle" />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Address;
