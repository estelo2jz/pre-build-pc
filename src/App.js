import React, { components } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Products/Cart";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./components/Home/Home";

import Products from "./components/Products//Products";
import { DataProvider } from "./components/Products/Data/DataProvider";
import { DataContext } from "./components/Products/Data/DataProvider";
import Details from "./components/Products/Details/Details";

import Checkout from "./components/Products/Chechout";
import Shipping from "./components/Products/Shipping";
import Payment from "./components/Products/Payment";
import TransactionComplete from "./components/Products/TransactionComplete";

import Login from "./components/pages/Login/Login";
import About from "./components/pages/AboutUs/About";
import BuildPC from "./components/pages/BuildPC/BuildPC";
import Financing from "./components/pages/Financing/Financing";
import Review from "./components/pages/Review/Review";
import Support from "./components/pages/Support/Support";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <ScrollToTop />
          <section>
            <Header />
            <Routes>
              <Route path="/" exact element={<Home />}>
                <Home />
              </Route>

              <Route path="/products" exact element={<BuildPC />} />
              <Route path="/pages/review" exact element={<Review />} />
              <Route path="/pages/financing" exact element={<Financing />} />
              <Route path="/pages/support" exact element={<Support />} />
              <Route path="/pages/why-pre-build" exact element={<About />} />
              <Route path="/checkout" exact element={<Checkout />} />
              <Route path="/shipping" exact element={<Shipping />} />
              <Route path="/payment" exact element={<Payment />} />
              <Route
                path="/transaction"
                exact
                element={<TransactionComplete />}
              />
              <Route path="/login" exact element={<Login />} />

              {/* <Route path="/cart" exact render={() => <Redirect to="/cart" />} /> */}
              {/* <Route path="/products" exact element={ <Products /> } /> */}

              <Route path="/products/:id" exact element={<Details />} />
              <Route path="cart" exact element={<Cart />} />
            </Routes>
          </section>
          <Footer />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
