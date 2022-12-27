import { Offcanvas, Stack } from "react-bootstrap";
import PropTypes from "prop-types";
import React from "react";
import CartItem from "./CartItem";
import { removeProduct } from "../../Redux/Actions";
import Button from "../Button/Button";

export default function Cart(props) {
  return (
    <Offcanvas show={props.show} onHide={props.hide} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart:</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {props.content.map((item) => (
            <CartItem
              item={item}
              id={item._id}
              onClick={() => props.remove(removeProduct(item))}
            />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total: {props.content.reduce((a, b) => a + b.count * b.price, 0)}DT
          </div>

          <Button name={"BUY"} onClick={props.submit} variant={"primary"} />
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
Cart.defaultProps = {
  show: false,
  hide: () => null,
};
Cart.propTypes = {
  show: PropTypes.bool,
  hide: PropTypes.func,
};
