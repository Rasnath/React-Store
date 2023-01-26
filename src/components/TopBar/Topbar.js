import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, NavbarBrand } from "reactstrap";
import CartButton from "./Cart/CartButton";

const Topbar = ({ toggleSidebar, onShowCart }) => {
  return (
    <Navbar sticky="top" color="light">
      <Button color="primary" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <NavbarBrand href="/">
        <h1>Logo</h1>
      </NavbarBrand>
      <CartButton onClick={onShowCart} />
    </Navbar>
  );
};

export default Topbar;
