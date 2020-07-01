import React from "react";
import { Container, Row, Card, Button, Col } from "react-bootstrap";

export default function PreAdoptionInfo() {
  return (
    <div>
      <Container>
        <Row>
          <h2>Pre Adoption Information</h2>
        </Row>
        <Row>
          <h5>Questions for All Adopters:</h5>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                Do you have any other dogs and how will they react to a new pet?
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                Is your current residence suited to the dog you’re considering?
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                How do the people you live with feel about having a dog in the
                house?
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                Do you or any of your household/family members have health
                issues that may be affected by a dog?
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                If you are thinking of adopting a young dog, do you have the
                time and patience to work with the dog through its adolescence,
                taking house-breaking, chewing and energy-level into account?
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                What breed of dog is the best fit with your current
                lifestyle?(You can find references about dog breeds on the
                internet)
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                Can you train and handle a dog with behavior issues or are you
                looking for an easy-going friend?
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                How will your social life or work obligations affect your
                ability to care for a dog?
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                Do you have a plan for your new dog during vacations and/or work
                travel?
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                Are you (or your spouse, partner or roommate) intolerant of
                hair, dirt and other realities of sharing your home with a dog,
                such as allergies?
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                Is there tension in the home? Dogs quickly pick up on stress in
                the home, and it can exacerbate their health and behavior
                problems.
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                Is there an adult in the family who has agreed to be ultimately
                responsible for the dog’s care?
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                Do you need a dog who will be reliable with children or one you
                can take with you when you travel?
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Button onClick={() => window.print()}>PRINT</Button>
      </Container>
    </div>
  );
}
