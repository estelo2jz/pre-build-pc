import React, {components} from 'react';
import Header from './components/Header'
import Products from './components/Products'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {DataProvider} from './components/DataProvider'
import Details from './components/Details'
import Cart from './components/Cart'

import Home from './components/Home/Home';

import About from './components/pages/AboutUs/About';
import BuildPC from './components/pages/BuildPC/BuildPC';
import Financing from './components/pages/Financing/Financing';
import Review from './components/pages/Review/Review';
import Support from './components/pages/Support/Support';


function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />

          <section>
            <Routes>
              <Route path="/" exact element={ <Home /> } />

              <Route path="/pages/build-your-pc" exact element={ <BuildPC /> } />
              <Route path="/pages/review" exact element={ <Review /> } />
              <Route path="/pages/financing" exact element={ <Financing /> } />
              <Route path="/pages/support" exact element={ <Support /> } />
              <Route path="/pages/why-pre-build" exact element={ <About /> } />

              <Route path="/products" exact element={ <Products /> } />
              <Route path="products/:id" exact element={ <Details /> } />

              <Route path="cart" exact element={ <Cart /> } />
            </Routes>
          </section>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;