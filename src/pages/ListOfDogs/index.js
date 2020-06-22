import React, { useEffect } from "react";
import { fetchDogs } from "../../store/listOfDogs/actions";
import { useDispatch, useSelector } from "react-redux";

import { Container, Row } from "react-bootstrap";
import { selectlistOfDogs } from "../../store/listOfDogs/selectors";
import DogDetails from "../../components/DogDetails";

export default function ListOfDogs() {
  const dispatch = useDispatch();
  const dogs = useSelector(selectlistOfDogs);

  useEffect(() => {
    dispatch(fetchDogs());
  }, [dispatch]);

  return (
    <div>
      <h1>List of Dogs</h1>
      <Container>
        <Row>
          {dogs.map((dog) => {
            return (
              <DogDetails
                key={dog.id}
                name={dog.name}
                imageUrl={dog.imageUrl}
                age={dog.age}
                id={dog.id}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
