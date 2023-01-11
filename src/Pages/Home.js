import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import headerImage from "../assets/Header.jpg";
import Products from "../components/Products/Products";
import classes from "./Home.module.css";

function Home() {
  const [all, setAll] = useState(false);

  function allHandler() {
    setAll(true);
  }

  return (
    <Fragment>
      <div className={classes["main-image"]}>
        <img src={headerImage} alt="Imagem da loja"></img>
      </div>
      <div className={classes.buttonDiv}>
        <Link to="/product/all">
          <Button
            className={classes.button}
            color="primary"
            onClick={allHandler}
          >
            Ver todos os produtos
          </Button>
        </Link>
      </div>
      <main>
        <Products onAll={all} />
      </main>
    </Fragment>
  );
}

export default Home;
