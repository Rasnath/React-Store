import React from "react";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import ProductImage from "../../../assets/Product.jpg";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import classes from "./ProductItem.module.css";
import { Link } from "react-router-dom";
import AddButton from "../../UI/AddButton";

function ProductItem(props) {
  const cartCtx = useContext(CartContext);
  const priceClass = `${classes.priceAdd} mt-auto`;
  const price = `${props.price.toFixed(2)} €`;
  const description = `${props.description.substring(0, 150)}`;

  function productDetailsHandler() {
    cartCtx.id = props.id;
  }

  const linkID = "/id/" + props.id;

  return (
    <Card
      className={classes.card}
      style={{
        width: "18rem",
      }}
    >
      <Link to={linkID}>
        <img
          style={{
            width: "17.85rem",
          }}
          src={ProductImage}
          onClick={productDetailsHandler}
          alt="Imagem do produto"
        ></img>
      </Link>
      <CardBody className="d-flex flex-column">
        <CardTitle tag="h5">{props.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {props.brand}
        </CardSubtitle>
        <CardText>{description}</CardText>
        <div className={priceClass}>
          <h3>{price}</h3>
          <AddButton
            id={props.id}
            name={props.name}
            price={props.price}
          ></AddButton>
        </div>
      </CardBody>
    </Card>
  );
}

export default ProductItem;
