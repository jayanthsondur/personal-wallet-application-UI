import React from "react";
import { Col, Input, Button, Label, FormGroup } from "reactstrap";

function AddFunds() {
  return (
    <div>
      <form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            User
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
        <FormGroup className="userList"></FormGroup>{" "}
        <FormGroup row>
          <Label for="Ammount" sm={2}>
            Ammount (RS)
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              name="number"
              id="Ammount"
              placeholder="1000"
            />
          </Col>
        </FormGroup>
        <FormGroup className="submit-btn">
          <Button color="primary" size="sm" type="submit">
            Submit
          </Button>{" "}
        </FormGroup>
      </form>
    </div>
  );
}

export default AddFunds;
