import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function DogDetails(props) {
  return (
    <div>
      <style type="text/css">
        {`
      .btn-flat {
    background-color: darkmagenta;
    color: white;
  }
  `}
      </style>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.imageUrl}
          style={{ width: "18rem", height: "15rem" }}
        />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.age}</Card.Subtitle>
          <Link to={`/dogs/${props.id}`}>
            <Button variant="flat">View Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
