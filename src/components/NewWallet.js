import React from "react";
import { Col, Input, Button, Label, FormGroup } from "reactstrap";
import "../components/NewWallet.css";

function NewWallet() {
  return (
    <div>
      <form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Username, or email"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePhone" sm={2}>
            Phone
          </Label>
          <Col sm={10}>
            <Input
              type="Phone"
              name="Phone"
              id="examplePhone"
              placeholder="Enter Phone number"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Ammount" sm={2}>
            Ammount
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              name="number"
              id="Ammount"
              placeholder="Enter Ammount"
            />
          </Col>
        </FormGroup>
      </form>
      <FormGroup className="submit-btn">
        <Button color="primary" size="sm" type="submit">
          Submit
        </Button>{" "}
      </FormGroup>
    </div>
  );
}

export default NewWallet;
