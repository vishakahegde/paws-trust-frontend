import React, { useEffect, useState } from "react";
import { fetchDogs } from "../../store/listOfDogs/actions";
import { useDispatch, useSelector } from "react-redux";

import { Container, Row, Button, CardDeck } from "react-bootstrap";
import { selectlistOfDogs } from "../../store/listOfDogs/selectors";
import DogDetails from "../../components/DogDetails";

export default function ListOfDogs() {
  const dispatch = useDispatch();
  const dogs = useSelector(selectlistOfDogs);

  // dogs.length === 0 ? console.log("empty") : console.log("present");

  useEffect(() => {
    dispatch(fetchDogs());
  }, [dispatch]);

  let filteredDogs = [];
  const [filter, setFilter] = useState("All");

  if (filter !== "All") {
    filteredDogs = dogs.filter((dog) => {
      return dog.breed === filter;
    });
  } else {
    filteredDogs = dogs;
  }

  //https://appdividend.com/2019/04/11/how-to-get-distinct-values-from-array-in-javascript/
  const breed = [...new Set(dogs.map((data) => data.breed))];
  breed.sort();
  breed.unshift("All");

  return (
    <div>
      <Container>
        <h1>List of Dogs</h1>
        <Row>
          {breed.map((filter) => {
            return (
              <div>
                <Button
                  className="mb-2 mr-2"
                  key={filter}
                  type="submit"
                  value={filter}
                  onClick={(event) => setFilter(event.target.value)}
                >
                  {filter}
                </Button>{" "}
              </div>
            );
          })}
        </Row>

        <Row>
          <CardDeck>
            {filteredDogs.map((dog) => {
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
          </CardDeck>
        </Row>
      </Container>
    </div>
  );
}
