import React from "react";
import { Stack } from "react-bootstrap";
import Button from "../Button/Button";
import { FaTrash } from "react-icons/fa";

export default function CartItem(props) {
  return (
    <Stack key={props.id} direction="horizontal" gap={2} className="border border-1 rounded-1 p-1 d-flex align-items-center">
      <div className="me-auto">
        <div>
        {props.item.name}{" "}
        {props.item.count > 1 && (
          <span className="text-muted" style={{ fontSize: ".65rem" }}>
            {props.item.count}x
          </span>
        )}
      </div>
      
      <div className="text-muted" style={{fontSize:".75rem"}}>
        {props.item.price}
      </div>
      </div>
      <div>
        {(props.item.price * props.item.count)}DT
      </div>
      <Button variant="outline-danger m-1" size="sm" onClick={props.onClick} name={<FaTrash/>}/>
    </Stack>
  );
}
