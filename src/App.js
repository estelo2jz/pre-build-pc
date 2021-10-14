import React, {components} from 'react';
import Header from './components/Header'
import Products from './components/Products'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {DataProvider} from './components/DataProvider'
import Details from './components/Details'
import Cart from './components/Cart'

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
              <Route path="products" exact element={ <Products /> } />
              <Route path="products/:id" exact element={ <Details /> } />
              <Route path="about" exact element={ <About /> } />
              <Route path="build-your-pc" exact element={ <BuildPC /> } />
              <Route path="financing" exact element={ <Financing /> } />
              <Route path="review" exact element={ <Review /> } />
              <Route path="support" exact element={ <Support /> } />

              <Route path="cart" exact element={ <Cart /> } />
            </Routes>
          </section>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;