import Button from "../Button/Button";
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import PropTypes from "prop-types";

export default function Crd(props) {
  return (
    <Card className="m-16 text-center h-100" bg="light" >
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
        <p>Description:{props.description}</p>
        <p>Price:{props.price}</p>
        <p>Stock:{props.stock}</p>
        {!props.isAdded && <Button name={"Add"} onClick={props.onClick} variant="primary" />}
        {props.isAdded &&<ButtonGroup size="sm">
          <Button name={"-"} variant="danger" onClick={props.desincrement}/>
          <Button name={props.quantity} variant="white"/>
          <Button name={"+"} variant="success" onClick={props.increment}/>
        </ButtonGroup>}
        </Card.Body>
    </Card>
  )
}
Crd.defaultProps = {
  isAdded: "",
  quantity: "",
  increment: () => null,
  desincrement: () => null,
};
Crd.propTypes = {
  isAdded: PropTypes.string,
  quantity: PropTypes.string,
  increment: PropTypes.func,
  desincrement: PropTypes.func,
};
