import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Remove Switch import
import AboutUs from './about_us/about_us';
import Contact from './contact/contact';
import Home from './home/Home';

const App = () => {
  return (
    <div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            {/* <Route path="/sandwiches" exact element={<Sandwiches />} /> */}
            <Route path="/about_us" exact element={<AboutUs />} />
            <Route path="/contact" exact element={<Contact/>} />

           
           
     
           
          </Routes>
      </div>
  );
};

export default App;
