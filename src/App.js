import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Remove Switch import
import Home from './home/Home';
import Menu from './menus/Menu';

const App = () => {
  return (
    <div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/menu" exact element={<Menu />} />
           
     
           
          </Routes>
      </div>
  );
};

export default App;
