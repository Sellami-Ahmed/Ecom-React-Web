import React from "react";
import Alert from "react-bootstrap/Alert";
import PropTypes from "prop-types";
export default function Alrt(props) {
  return (
    <>
      <Alert key={props.id} variant={props.variant} className={props.className}>
        {props.name}
      </Alert>
    </>
  );
}
Alrt.defaultProps = {
  variant: "danger",
  name: "",
  id: "",
  className: "",
};
Alrt.propTypes = {
  name: PropTypes.string,
  variant: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
};