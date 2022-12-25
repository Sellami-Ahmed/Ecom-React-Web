import React from "react";
import Button from "react-bootstrap/Button";
export default function Btn(props) {
  return (
    <div>
      <Button variant="primary" onClick={props.afficher}>
        {props.name}
      </Button>
    </div>
  );
}
