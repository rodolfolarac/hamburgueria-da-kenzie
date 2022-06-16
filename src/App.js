import { GlobalStyle } from "./styles/global";
import "./App.css";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import Api from "../src/data/Api";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [currentSale, setCurrentSale] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    Api.get(
      "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
    ).then((res) => {
      setFilteredProducts(res.data);
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Header
          products={products}
          setProducts={setProducts}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />
        <ProductsList
          products={products}
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
        />
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </>
    </div>
  );
}

export default App;
