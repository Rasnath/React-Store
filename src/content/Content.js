import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Routes, Route } from "react-router-dom";
import Topbar from "../components/TopBar/Topbar";
import About from "../Pages/About";
import Home from "../Pages/Home";
import ProductPage from "../Pages/ProductPage";
import CategoryPage from "../Pages/CategoryPage";
import "./Content.css"

function Content({ sidebarIsOpen, toggleSidebar, onShowCart }) {
  return (
    <Container
      fluid
      className={classNames("content", { "is-open": sidebarIsOpen })}
    >
      <Topbar toggleSidebar={toggleSidebar} onShowCart={onShowCart} />
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
