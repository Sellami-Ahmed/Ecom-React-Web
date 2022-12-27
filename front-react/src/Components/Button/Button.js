import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
export default function Btn(props) {
  let className = ["default-input"];
  if (props.className) {
    className.push(props.className);
  }
  return (
    <>
      <Button
        className={className.join(" ")}
        variant={props.variant}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.name}
      </Button>
    </>
  );
}
Button.defaultProps = {
  variant: "",
  name: "",
  disabled: false,
  onClick: () => null,
};
Button.propTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
