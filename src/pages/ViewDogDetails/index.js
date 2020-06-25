import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Image, Row, Button } from "react-bootstrap";
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
  `}
      </style>
      <Container>
        <Row>
          <Image src={dog.imageUrl} alt="Dog Image" width={500} height={500} />
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
        {user.token !== null ? (
          <Link to={`/adoptionform`}>
            <Button variant="flat">Adopt</Button>
          </Link>
        ) : (
          <Link to={`/login`}>Please login to continue with adoption</Link>
        )}
      </Container>
    </div>
  );
}
