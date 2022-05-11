import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import NavBar from './NavBar';
import Services from './Services';

function App() {
  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/about' element={<About></About>} ></Route>
      <Route path='/contact' element={<Contact></Contact>} ></Route>
      <Route path='/services' element={<Services></Services>} ></Route>
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
