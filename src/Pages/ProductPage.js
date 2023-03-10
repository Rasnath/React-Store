import { Fragment } from "react";
import { useContext } from "react";
import ProductContext from "../components/Store/products-context";
import { useParams } from "react-router-dom";
import { CardBody, Card, CardImg, CardTitle, CardText } from "reactstrap";
import AddButton from "../components/UI/AddButton";
import classes from "./ProductPage.module.css";

function ProductPage() {
  const productCtx = useContext(ProductContext);
  const { id } = useParams();
  const product = productCtx.products.find(
    (product) => product.id === { id }.id
  );
  const price = `${product.price.toFixed(2)} €`;

  return (
    <Fragment>
      <Card className="my-2">
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/900/180"
          style={{
            height: 180
          }}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">{product.name}</CardTitle>
          <CardText>{product.description}</CardText>
          <div className={classes.priceAdd}>
            <h3>{price}</h3>
            <AddButton
              id={product.id}
              name={product.name}
              price={product.price}
            />
          </div>
        </CardBody>
      </Card>
    </Fragment>
  );
}

export default ProductPage;
