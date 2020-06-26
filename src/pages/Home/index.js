import React from "react";
import { Container, Row, Image, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {" "}
      <style type="text/css">
        {`
  .btn-flat {
background-color: darkmagenta;
color: white;
} `}
      </style>
      <Container>
        <h1>Paws Trust Adoption Centre</h1>

        <Row>
          <Col xs={6} md={4}>
            <Image
              src="https://i.pinimg.com/originals/1e/d3/60/1ed360e382a2a3ff4b217d02a717fdbe.jpg"
              thumbnail
            />
          </Col>
          <Col>
            <p>
              Here in Paws Trust we believe that all dogs deserve a permanent,
              loving home of their own.
            </p>
            <p>
              We process online applications for adoption Monday – Friday.We
              welcome volunteer dog walkers and groomers at our centre on
              weekdays
            </p>
            <p>
              We are a non-profit organisation. We rescue dogs and wish to do
              more with the support of generous donations, fosters, and
              volunteers.
            </p>
            <p>
              Our team of volunteers and animal-care attendants are dedicated to
              providing a high quality of care and meeting each animals’ unique
              needs through training and enrichment programs.
            </p>

            <Link to={`/preadoptioninformation`}>
              <Button className="mb-2 mr-2" variant="flat">
                Guide for Adoption
              </Button>
            </Link>
            <Button
              className="mb-2 mr-2"
              variant="flat"
              onClick={() =>
                (window.location.href = "mailto:pawstrustadoption@gmail.com")
              }
            >
              Contact Us
            </Button>
          </Col>
        </Row>

        <Row>
          <Col xs={6} md={4}>
            <Image
              src="https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077_1280.jpg"
              thumbnail
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="https://cdn.pixabay.com/photo/2016/11/29/01/24/adorable-1866531_1280.jpg"
              thumbnail
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="https://cdn.pixabay.com/photo/2015/02/21/10/39/dog-644111_1280.jpg"
              thumbnail
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
