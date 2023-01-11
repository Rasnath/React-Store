import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/Sidebar/SideBar";
import Content from "./content/Content";
import "./App.css";
import Cart from "./components/TopBar/Cart/Cart";
import CartProvider from "./components/Store/CartProvider";

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
        <div className="App wrapper">
          <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
          <Content
            onShowCart={showCartHandler}
            toggleSidebar={toggleSidebar}
            sidebarIsOpen={sidebarIsOpen}
          />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
