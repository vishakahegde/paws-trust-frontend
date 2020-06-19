import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Col, Button } from "react-bootstrap";

export default function AdoptionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postcode, setPostcode] = useState("");
  const [country, setCountry] = useState("");

  function submitForm(event) {
    event.preventDefault();
    console.log(name, email, phone, address, city, province, postcode, country);
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Adoption Form</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            type="number"
            placeholder="Enter phone number"
            required
          />
        </Form.Group>
        <Form.Group controlId="formGridAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            type="text"
            placeholder="House Number, Street Name"
            required
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(event) => setCity(event.target.value)}
              type="text"
              placeholder="Enter City name"
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridProvince">
            <Form.Label>Province</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Choose..."
              value={province}
              onChange={(event) => setProvince(event.target.value)}
              required
            >
              <option>Choose...</option>
              <option>Noord-Holland</option>
              <option>Zuid-Holland</option>
              <option>Zeeland</option>
              <option>Noord-Brabant</option>
              <option>Utrecht</option>
              <option>Flevoland</option>
              <option>Friesland</option>
              <option>Groningen</option>
              <option>Drenthe</option>
              <option>Overijssel</option>
              <option>Gelderland</option>
              <option>Limburg</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPostcode">
            <Form.Label>Postcode</Form.Label>
            <Form.Control
              value={postcode}
              onChange={(event) => setPostcode(event.target.value)}
              type="text"
              placeholder="Enter Postcode"
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              type="text"
              placeholder="Enter Country"
              required
            />
          </Form.Group>
        </Form.Row>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
