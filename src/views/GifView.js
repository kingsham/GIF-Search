import React from "react";
import ReactDOM from "react-dom";
import { Card, CardImg, Col } from "reactstrap";

const GifView = props => {
  const { gif } = props;

  return (
    <Col sm="3">
      <Card style={{ border: "none", marginBottom: "0.75rem" }}>
        <CardImg
          src={gif.images.fixed_height_downsampled.url}
          alt={gif.title}
        />
      </Card>
    </Col>
  );
};

export default GifView;
