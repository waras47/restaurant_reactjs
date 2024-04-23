import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Remove Switch import
import Home from './home/Home';
import Food from './Menu/Food/Food';
import Drink from './Menu/Drink/Drink';

const App = () => {
  return (
    <div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/food" element={<Food />} />
            <Route path="/drink" element={<Drink />} />
           
          </Routes>
      </div>
  );
};

export default App;
