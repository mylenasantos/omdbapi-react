import React, { Component } from 'react';
import Header from './components/Header/';
import Routes from './routes';
import Main from './pages/main';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import "./style.css";
import axios from 'axios';
import StarRatings from 'react-star-ratings';


const App = () => (
   <div className="App">
      <Header />
      <Routes />
  </div>
);


export default App;
