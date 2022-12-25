import React from "react";
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form";

export default function Input(props) {
    const className=["default-input"]
    if(props.className){
        className.push(props.className)
    }
  return (<Form.Group  className="mb-3">
  {props.label && <Form.Label htmlFor={props.id}>{props.label}</Form.Label>}
    <Form.Control
    type={props.type}
      value={props.value}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
      className={className.join(' ')}
    />
    </Form.Group>
  );
}
Input.defaultProps = {
  value: "",
  type: "text",
  name: "",
  id: "",
  placeholder: "",
  className: "default-input",
  label: "",
  onChange: ()=>null,
};
Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};
