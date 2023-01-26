import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import ProductPage from "../Pages/ProductPage";
import CategoryPage from "../Pages/CategoryPage";
import "./Content.css";

function Content({ sidebarIsOpen }) {
  return (
    <Container
      fluid
      className={classNames("content", { "is-open": sidebarIsOpen })}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path={"/id/:id"} element={<ProductPage />} />
        <Route path={"/product/:category"} element={<CategoryPage />} />
      </Routes>
    </Container>
  );
}

export default Content;
