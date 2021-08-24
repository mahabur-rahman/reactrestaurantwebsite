import React from "react";
import "./items.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import foodItemsData from "../Data/FoodItemsData";
import LoadingBtn from "./LoadingBtn";

const Items = () => {
  return (
    <>
      <section id="items">
        <Container>
          <Row>
            <Col xl={6} lg={6} className="mx-auto">
              <div className="items-heading text-center">
                <h4>Pizza menu</h4>
                <h2>Welcome to maestro Pizzini</h2>
              </div>
            </Col>
          </Row>
          <Row className="my-5">
            {foodItemsData.map((data) => (
              <Col xl={10} lg={10} className="mx-auto my-3 shadow p-4">
                <div className="item-variant d-flex justify-content-between align-items-center">
                  <div className="item-img">
                    <Image src={data.imgSrc} fluid />
                  </div>
                  <div className="food-text px-3">
                    <h4>{data.title}</h4>
                    <p>{data.text}</p>
                  </div>
                  <div className="food-rate d-flex align-items-center justify-content-center">
                    <span>{data.cSymble}</span>
                    <span className="rate">{data.rate}</span>
                  </div>
                </div>
              </Col>
            ))}

            {/* show more btn  */}
          </Row>
          {/* loading btn  */}
          <div className="text-center">
            <LoadingBtn />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Items;
