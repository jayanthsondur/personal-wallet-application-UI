import React from "react";
import {
  Col,
  Input,
  Button,
  Label,
  FormGroup,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import "../components/CheckBalance.css";

function CheckBalance() {
  return (
    <>
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
        </form>
      </div>

      <div className="submit_btn">
        <FormGroup className="submit-btn">
          <Button color="primary" size="sm" type="submit">
            Submit
          </Button>{" "}
        </FormGroup>
      </div>
    </>
  );
}

export default CheckBalance;
