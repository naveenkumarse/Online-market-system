import React from 'react';
import './App.css';
import Home1 from './pages/homepage';
import Login from './components/login';
import { Routes, Route, Router } from 'react-router-dom';
import Exporter from './pages/exporter';
import Producer from './pages/producer';
import Consumer from './pages/consumer';
import ViewPost from './pages/viewpost';
import SearchProduct from './pages/searchproduct';
import Trader from './pages/trader';
import Trader1 from './pages/trader1';
import Trader2 from './pages/trader2';
import Viewexporterrequest from './pages/viewexporterrequest';
import Viewproducerrequest from './pages/viewproducerrequest';

function App() {
  return (
    <Routes>

      <Route path='/' element={<Home1 />} />

      <Route path="/login" element={<Login />} />

      <Route path="/producer" element={<Producer />} />
      <Route path="/viewproducerrequest" element={<Viewproducerrequest />} />
      <Route path="/trader" element={<Trader />} />
      <Route path="/trader1" element={<Trader1 />} />
      <Route path="/trader2" element={<Trader2 />} />
      <Route path='/Viewexporterrequest' element={<Viewexporterrequest/> } />

      <Route path="/exporter" element={<Exporter />} />

      <Route path="/consumer" element={<Consumer />} />

      <Route path="/Viewpost" element={<ViewPost />} />

      <Route path="/searchproduct" element = {<SearchProduct/>}/>

    </Routes>

  );
}

export default App;
