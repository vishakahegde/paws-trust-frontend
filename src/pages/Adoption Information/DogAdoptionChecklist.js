import React from "react";
import { Container, Button, Form } from "react-bootstrap";

export default function DogAdoptionChecklist() {
  return (
    <div>
      <Container>
        <h3>Dog Adoption Checklist</h3>
        <p>
          Congratulations on deciding to adopt a dog! You are embarking on a
          wonderful and rewarding relationship. Because adopting a new dog comes
          with a lot of change for both dog and dog parent, we’ve compiled a
          checklist to help make the transition as smooth as possible.
        </p>

        <Form>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            <Form.Check type="checkbox" label="Collar and Leash" />
            <Form.Check
              type="checkbox"
              label="Identification Tags and Microchips"
            />
            <Form.Check type="checkbox" label="Dog Crate/ Carrier" />
            <Form.Check type="checkbox" label="Dog Bed" />
            <Form.Check type="checkbox" label="Food And Water Bowls" />
            <Form.Check type="checkbox" label="Brush and Nail Clippers" />
            <Form.Check type="checkbox" label="Shampoo and Conditioner" />
            <Form.Check type="checkbox" label="Dog Toys" />
            <Form.Check type="checkbox" label="Dog Food" />
            <Form.Check type="checkbox" label="Dog Treats" />
          </Form.Group>
        </Form>
        <Button onClick={() => window.print()}>PRINT</Button>
      </Container>
    </div>
  );
}
