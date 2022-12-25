import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export default class Compnement extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    type: "text",
  };
  render() {
    return (
      <div>
        <Form.Control
          type={this.props.type}
          name={this.props.name}
          onChange={(e) => {
            this.props.setComponement(e.target.value);
          }}
          placeholder={this.props.name}
        />
      </div>
    );
  }
}
