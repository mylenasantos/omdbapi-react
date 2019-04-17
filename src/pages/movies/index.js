import React, { Component } from 'react';
import api from '../../services/api';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import './style.css';


export default class Movies extends Component {
  state = {
    title: '',
    error: '',
    poster: '',
    plot: '' ,
    actors: '',
    director: '',
    writer: '',
    released: '',
    genre: '',
    awards: '',
    ratings: []
  };

  async componentDidMount() {
    const { search } = this.props.match.params;

    const response = await api.get(`/?apikey=1716a3d8&t=/:${search}`)
    .then(response => this.setState({
        title: response.data.Title,
        error: response.data.Error,
        poster: response.data.Poster,
        plot: response.data.Plot,
        actors: response.data.Actors,
        director: response.data.Director,
        writer: response.data.Writer,
        released: response.data.Released,
        genre: response.data.Genre,
        awards: response.data.Awards,
        ratings: response.data.Ratings
    }))

}

 Error(error) {
   if (error == null) {
     return (
       <div className="container">
         <div className="row col s12" id="title">
           <h4>{this.state.title}</h4>
         </div>
         <div className="row col s12">
           <div className="col s2">
             <p>{this.state.released} - {this.state.genre}</p>
           </div>
           <div className="col s10">
             {this.state.awards}
           </div>
         </div>
         <div className="row col s12">
           <div className="col s4">
                <img className="responsive-img"  src={this.state.poster} alt={this.state.title} />
           </div>
           <div className="col s8" id="contentMovie">
               <p>Plot</p> {this.state.plot}
               <p>Actors</p> {this.state.actors}
               <p>Director</p> {this.state.director}
               <p>Writer</p> {this.state.writer}
           </div>
         </div>
         <div className="row col s5">
           <p className="text" id="ratings">Ratings</p>
         </div>
         <div className="row col s6" id="stars">
                 {this.state.ratings.map(function(ratings){
                   var numStar = 5;
                   var stars = ratings.Value.split('/');
                   stars = (parseInt(stars[0].replace('.','').replace('%','')) / 100) * numStar;
                   return (
                     <div key={ratings.id} className="col s3">
                       <StarRatings rating={stars} starRatedColor="gold" numberOfStars={numStar} starDimension="20px" starSpacing="7px" />
                     </div>
                   )
                 })}
             </div>
             <div className="backButton">
                  <Link to={`/`}>Back</Link>
             </div>
           </div>
     )
   }
   else {
     return(
       <h1>{this.state.error}</h1>
     )
   }
 }


  render () {
    return (
      <div className="container">
        <div className="row col s12" id="title">
          <h4>{this.state.title}</h4>
        </div>
        <div className="row col s12">
          <div className="col s2">
            <p>{this.state.released} - {this.state.genre}</p>
          </div>
          <div className="col s10">
            {this.state.awards}
          </div>
        </div>
        <div className="row col s12">
          <div className="col s4">
               <img className="responsive-img"  src={this.state.poster} alt={this.state.title} />
          </div>
          <div className="col s8" id="contentMovie">
              <p>Plot</p> {this.state.plot}
              <p>Actors</p> {this.state.actors}
              <p>Director</p> {this.state.director}
              <p>Writer</p> {this.state.writer}
          </div>
        </div>
        <div className="row col s5">
          <p className="text" id="ratings">Ratings</p>
        </div>
        <div className="row col s6" id="stars">
                {this.state.ratings.map(function(ratings){
                  var numStar = 5;
                  var stars = ratings.Value.split('/');
                  stars = (parseInt(stars[0].replace('.','').replace('%','')) / 100) * numStar;
                  return (
                    <div key={ratings.id} className="col s3">
                      <StarRatings rating={stars} starRatedColor="gold" numberOfStars={numStar} starDimension="20px" starSpacing="7px" />
                    </div>
                  )
                })}
            </div>
            <div className="backButton">
                 <Link to={`/`}>Back</Link>
            </div>
          </div>





    )
  }
}
