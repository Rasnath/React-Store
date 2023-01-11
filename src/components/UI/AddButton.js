import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faCheck } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../Store/cart-context";
import classes from "./AddButton.module.css";
import { useContext, useState } from "react";

function AddButton(props) {
  const cartCtx = useContext(CartContext);
  const [btnClicked, setBtnClicked] = useState(false);
  const btnColor = `${btnClicked ? "success" : "primary"}`;
  const btnText = `${btnClicked ? "Adicionado " : "Adicionar "}`;
  const btnClasses = `${btnClicked ? classes.bump : ""}`;

  const addItemHandler = (event) => {
    event.preventDefault();
    setBtnClicked(true);
    setTimeout(function () {
      setBtnClicked(false);
    }, 500);

    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: 1,
      price: props.price,
    });
  };

  return (
    <Button className={btnClasses} color={btnColor} onClick={addItemHandler}>
      {btnText} <FontAwesomeIcon icon={btnClicked ? faCheck : faShoppingCart} />
    </Button>
  );
}

export default AddButton;
