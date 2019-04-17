import React, { Component } from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import api from '../../services/api'
import { Link } from 'react-router-dom';
import './style.css';


export default class Main extends Component {
  state = {
    search: ''
  }

componentDidMount() {
   M.AutoInit(); //Inicializar Materialize



  }

  handleClick = async () => {
    const response = await api.get('/?apikey=1716a3d8&t='+ this.state.search);

    console.log(response);

  };
   render() {
     return (

       <div className="container">
        <nav id="nav-movie">
          <div className="form">
            <div className="input-field">
               <input id="search" type="search" placeholder="Search..." required onInput={(e) => this.setState({search: e.target.value})}/>
               <Link to={this.state.search} className="material-icons" onClick={this.handleClick}>search</Link>
           </div>
       </div>
         </nav>
      </div>




     )
   }
}
