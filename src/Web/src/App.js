import { React, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import { getMyBasket } from "./services/basketService";

const App = () => {
  const [basket, setBasket] = useState({ userId: "asingh", items: [] });

  useEffect(() => {
    const fetchBasket = async () => {
      try {
        let _basket = await getMyBasket();
        console.log(_basket.data);
        await setBasket(_basket.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBasket();
  }, []);

  return (
    <div>
      <Router>
        <Header basket={basket} />
        <Routes>
          <Route path="/carts" element={<Cart />} />
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
