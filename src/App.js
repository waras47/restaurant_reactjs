import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Remove Switch import
import Home from './home/Home';
import About from './About/About';

const App = () => {
  return (
    <div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path = "/about" element={<About />} />
           
          </Routes>
      </div>
  );
};

export default App;
