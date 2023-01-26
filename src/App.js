import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/Sidebar/SideBar";
import Content from "./content/Content";
import "./App.css";
import Cart from "./components/TopBar/Cart/Cart";
import CartProvider from "./components/Store/CartProvider";
import Topbar from "./components/TopBar/Topbar";
import ProductsProvider from "./components/Store/ProductsProvider";

function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  const [CartIsShown, SetCartIsShown] = useState(false);

  function showCartHandler() {
    SetCartIsShown(true);
  }

  function hideCartHandler() {
    SetCartIsShown(false);
  }

  return (
    <CartProvider>
      {CartIsShown && <Cart onClose={hideCartHandler} />}
      <Router>
        <Topbar toggleSidebar={toggleSidebar} onShowCart={showCartHandler} />
        <div className="App wrapper">
          <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
          <ProductsProvider>
            <Content sidebarIsOpen={sidebarIsOpen} />
          </ProductsProvider>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
