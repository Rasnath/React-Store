import React from "react";
import GeneralCard from "../UI/GeneralCard";
import classes from "./Products.module.css";
import ProductItem from "./ProductItem/ProductItem";
import Procucts from "../../data/dummyProducts.json";

function Products(props) {
  const filterCategory = (array) => {
    if (props.onCategory === "all") {
      return array;
    } else if (props.onCategory) {
      return array.filter((product) => product.category === props.onCategory);
    } else {
      return array.filter((product) => product.featured === "sim");
    }
  };

  const filterSearch = (array) => {
    if (props.onSearch) {
      const searchArray = props.onSearch.split(" ").map((item) => {
        return item.toLowerCase();
      });
      return array.filter(
        (product) =>
          searchArray.every((item) =>
            product.name.toLowerCase().includes(item)
          ) ||
          searchArray.every((item) =>
            product.brand.toLowerCase().includes(item)
          )
      );
    } else {
      return array;
    }
  };

  const sortProducts = (array) => {
    if (props.onSort === "barato") {
      return array.sort(function (a, b) {
        return parseFloat(a.price) - parseFloat(b.price);
      });
    } else if (props.onSort === "caro") {
      return array.sort(function (a, b) {
        return parseFloat(b.price) - parseFloat(a.price);
      });
    } else {
      return array;
    }
  };

  const filtrados = () => {
    let result = Procucts;
    result = filterCategory(result);
    result = filterSearch(result);
    result = sortProducts(result);
    return result;
  };

  const productsList = filtrados().map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.name}
      brand={product.brand}
      description={product.description}
      price={product.price}
    />
  ));

  return (
    <section className={classes.product}>
      <GeneralCard>
        <div className={classes.products}>{productsList}</div>
      </GeneralCard>
    </section>
  );
}

export default Products;
