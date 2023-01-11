import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import {
  InputGroup,
  Input,
  Label,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Form,
} from "reactstrap";
import Products from "../components/Products/Products";
import classes from "./CategoryPage.module.css";

function CategoryPage() {
  const [sortOpen, setSortOpen] = useState(false);
  const toggleSort = () => setSortOpen((prevState) => !prevState);
  const [sort, setSort] = useState();
  const [search, setSearch] = useState("");

  const { category } = useParams();

  function sortHandler(e) {
    setSort(e.target.value);
  }

  function searchHandler(e) {
    setSearch(e.target.value);
  }

  return (
    <Fragment>
      <InputGroup className={classes.advanceBar}>
        <Dropdown isOpen={sortOpen} toggle={toggleSort} direction="down">
          <DropdownToggle caret>Ordenar</DropdownToggle>
          <DropdownMenu style={{ margin: 0 }}>
            <DropdownItem value="barato" onClick={sortHandler}>Mais barato</DropdownItem>
            <DropdownItem value="caro" onClick={sortHandler}>Mais caro</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Form>
          <Row className="align-items-center">
            <Col>
              <Label size="lg">Pesquisar:</Label>
            </Col>
            <Col>
              <Input type="text" value={search} onChange={searchHandler} />
            </Col>
          </Row>
        </Form>
      </InputGroup>

      <Products
        onCategory={category}
        onSort={sort}
        onSearch={search}
      />
    </Fragment>
  );
}

export default CategoryPage;
