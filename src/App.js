import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';

import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Sandwich from './Menu/Sandwich/Sandwich';
import MeatAndVegetables from './Menu/MeatAndVegetables/MeatAndVegetables';
import Meals from './Menu/Meals/Meals';


const App = () => {
  return (
    <Provider store={store}>
    <div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/about_us" exact element={<About />} />
            <Route path="/meals" exact element={<Meals />} />
            <Route path="/meals-vegetables" exact element={<MeatAndVegetables />} />
            <Route path="/sandwich" exact element={<Sandwich />} />
          </Routes>
      </div>
    </Provider>
  );
};

export default App;
