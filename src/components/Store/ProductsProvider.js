import { useEffect, useState } from "react";
import ProductContext from "./products-context";

function ProductsProvider(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "firebase"
      );
      const responseData = await response.json();
      const loadedProducts = [];

      for (const key in responseData) {
        if (responseData[key]) {
          loadedProducts.push({
            id: key,
            name: responseData[key].name,
            brand: responseData[key].brand,
            category: responseData[key].category,
            description: responseData[key].description,
            featured: responseData[key].featured,
            price: responseData[key].price,
            qt: responseData[key].qt
          });
        }
      }
      setProducts(loadedProducts);
    };
    fetchProducts();
  }, []);

  const ProductsContext = {
    products: products
  };

  return (
    <ProductContext.Provider value={ProductsContext}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductsProvider;
