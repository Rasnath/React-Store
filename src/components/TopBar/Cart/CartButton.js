import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap";
import classes from "./CartButton.module.css";

function CartButton(props) {
  const cartCtx = useContext(CartContext);

  const numberCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <Button color="primary" onClick={props.onClick}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className={classes.badge}>{numberCartItems}</span>
    </Button>
  );
}

export default CartButton;
