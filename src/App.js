import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import store from './Store';

import About from './About/About';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Drinks from './Menu/Drinks/Drinks';
import Meals from './Menu/Meals/Meals';
import MeatAndVegetables from './Menu/MeatAndVegetables/MeatAndVegetables';
import Sandwich from './Menu/Sandwich/Sandwich';
import SideDishes from './Menu/SideDishes/SideDishes';
import Snacks from './Menu/Snacks/Snacks';


const App = () => {
  return (
    <Provider store={store}>
    <div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/about_us" exact element={<About />} />
            <Route path="/meals" exact element={<Meals />} />
            <Route path="/meat-vegetables" exact element={<MeatAndVegetables />} />
            <Route path="/side-dishes" exact element={<SideDishes />} />
            <Route path="/sandwich" exact element={<Sandwich />} />
            <Route path="/snacks" exact element={<Snacks />} />
            <Route path="/drinks" exact element={<Drinks />} />
          </Routes>
      </div>
    </Provider>
  );
};

export default App;
