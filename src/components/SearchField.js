import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  InputGroup,
  Input,
  InputGroupAddon,
  Button
} from "reactstrap";

const jumboStyle = {
  background: "#aa4b6b fixed center" /* fallback for old browsers */,
  background:
    "-webkit-linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b) fixed center" /* Chrome 10-25, Safari 5.1-6 */,
  background:
    "linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b) fixed center" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
};

const SearchField = props => {
  const { search, random } = props;

  return (
    <div>
      <Jumbotron fluid style={jumboStyle}>
        <Container fluid>
          <a href="." style={{ textDecoration: "none" }}>
            <h1>Giphy</h1>
          </a>
          {/* <h1>Giphy</h1> */}
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <InputGroup>
                <Input id="search" />
                <InputGroupAddon addonType="append">
                  <Button
                    color="primary"
                    onClick={() => {
                      search(document.getElementById("search").value);
                    }}
                  >
                    Search
                  </Button>
                </InputGroupAddon>
                <InputGroupAddon addonType="append">
                  <Button
                    color="info"
                    onClick={() => {
                      random();
                    }}
                  >
                    Random
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default SearchField;