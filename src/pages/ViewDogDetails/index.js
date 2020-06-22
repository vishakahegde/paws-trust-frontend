import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Image, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogDetail } from "../../store/viewDogDeatils/actions";
import { selectDogDetails } from "../../store/viewDogDeatils/selectors";

export default function ViewDogDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDogDetail(id));
  }, [dispatch, id]);

  const dog = useSelector(selectDogDetails);
  console.log(dog);

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
      <Container>
        <Row>
          <Image src={dog.imageUrl} />
        </Row>
        <Row>
          <h3>I am {dog.name}</h3>
        </Row>
        <Row>
          <h4>Age: {dog.age}</h4>
        </Row>
        <Row>
          <h4>Breed: {dog.breed}</h4>
        </Row>
        <Row>
          <h4>Gender: {dog.gender}</h4>
        </Row>
        <Row>
          <p>{dog.aboutMe}</p>
        </Row>
        <Link to={`/adoptionform`}>
          <Button variant="flat">Adopt</Button>
        </Link>
      </Container>
    </div>
  );
}
