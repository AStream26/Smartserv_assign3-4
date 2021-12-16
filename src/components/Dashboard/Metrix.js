import React from "react";
import { Card } from "react-bootstrap";
const Metrix = ({ item }) => {
  return (
    <Card
      bg="white"
      className="mt-2"
      style={{
        borderLeft: `10px solid rgba(6, 156,51, .8)`,
        boxShadow: "1.6px 1.6px 5px grey",
      }}
    >
      <Card.Body>
        <Card.Title
          style={{
            color: `${item.color1 ? item.color1 : "grey"}`,
            fontSize: "1.5em",
            marginBottom: "1em",
          }}
        >
          {item.price}{" "}
        </Card.Title>
        <Card.Text style={{ fontsize: "1.5", fontWeight: "600" }}>
          {item.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Metrix;
