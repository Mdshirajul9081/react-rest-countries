import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
       <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
     
    </div>
  );
}



export default App;
