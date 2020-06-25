import React from "react";
import { Container, Button } from "react-bootstrap";

export default function GovtRules() {
  return (
    <div>
      <Container>
        <h3>Rules by government for adoption</h3>
        <p>
          There are several government regulations one needs to adhere after
          adoption:
        </p>
        <ul>
          <li>Registering your dog</li>
          <p>
            In the Netherlands, all dogs must be registered at the local town
            hall (gemeente). The declaration with your municipality has to be
            done within the first 14 days of getting your dog and proof of
            registration comes in the form of a small metal tag on the dog’s
            collar.
          </p>
          <li>Annual dog tax</li>
          <p>
            Depending on where you live in the Netherlands, you may have to pay
            an annual dog tax (hondenbelasting) to your local tax office
            (Belastingdienst).
          </p>
          <li>Identification microchips</li>
          <p>
            As well as registering your dog at the local town hall, you are also
            required to have an electronic microchip implanted.
          </p>
          <li>Pet passports</li>
          <p>
            European Union pet owners are now required to have pet passports
            when traveling with their animals or bringing them into the
            Netherlands.
          </p>
          <li>Pet insurance</li>
          <p>
            There are different insurances for pets in the Netherlands. Some
            cover veterinary treatments while others also pay out when the pet
            is lost or stolen.
          </p>
          <li>Walking your dog</li>
          <p>
            You should check with your local town or district hall to find out
            where your dog is free to walk without a leash and where it can
            relieve itself. It is important to know that allowing your dog to do
            this in an undesignated area can bring a heavy fine.
          </p>
        </ul>
        <Button onClick={() => window.print()}>PRINT</Button>
      </Container>
    </div>
  );
}
