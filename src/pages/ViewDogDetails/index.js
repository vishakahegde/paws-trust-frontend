import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Image, Row, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogDetail } from "../../store/viewDogDeatils/actions";
import { selectDogDetails } from "../../store/viewDogDeatils/selectors";
import { selectUser } from "../../store/user/selectors";

export default function ViewDogDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDogDetail(id));
  }, [dispatch, id]);

  const dog = useSelector(selectDogDetails);
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <div>
      <style type="text/css">
        {`
      .btn-flat {
    background-color: darkmagenta;
    color: white;
  } 
  .row{
    padding-top: 30px;
  }
  `}
      </style>
      <Container>
        <Row class="row">
          <Col>
            <Image
              src={dog.imageUrl}
              alt="Dog Image"
              width={500}
              height={500}
            />
          </Col>
          <Col>
            <h3>I am {dog.name}</h3>
            <h4>Age: {dog.age}</h4>
            <h4>Breed: {dog.breed}</h4>
            <h4>Gender: {dog.gender}</h4>
            <p>{dog.aboutMe}</p>
            {user.token !== null ? (
              <Link to={`/adoptionform`}>
                <Button variant="flat">Adopt</Button>
              </Link>
            ) : (
              <Link to={`/login`}>Please login to continue with adoption</Link>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
