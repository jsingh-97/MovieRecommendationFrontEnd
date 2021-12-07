import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/header/SearchBar';
import PopularMoviesList from './components/body/PopularMoviesList';
import PopularButton from './components/header/PopularButton';
class App extends Component {
    constructor()
    {
      super()
      this.state={
        viewPopularMovies:false,
        moviesList :[],
        viewSimilarMovies:false
      }
      //binding events
      this.showPopularHandler=this.showPopularHandler.bind(this)
      this.hidePopularHandler=this.hidePopularHandler.bind(this)
      this.showSimilarMoviesHandler = this.showSimilarMoviesHandler.bind(this)
    }
   async showSimilarMoviesHandler(title){
    const response = await fetch(`http://127.0.0.1:8000/v1/similar?title=${title}`);
    const data = await response.json();
    console.log("data",data);
    this.setState(
      {
        viewPopularMovies:false,
        moviesList: data,
        viewSimilarMovies:true
      }
    ) 
   }
   async showPopularHandler() {
    //set the state of viewPopularmovie flag to true and pass the result to MoviesList Component which will display result i.e popular movies
    const response = await fetch('http://127.0.0.1:8000/v1/popular');
    console.log("reponse",response)
    const data = await response.json();
    
    this.setState(
      {
        viewPopularMovies:true,
        moviesList: data
      }
    )  
  }
  hidePopularHandler() {
    //set the state of viewPopularmovie flag to false and pass the result to MoviesList Component which will display result i.e popular movies
    this.setState(
      {
        viewPopularMovies:false
      }
    )  
  }
   render()
   {
     return ( 
      <div>
        <SearchBar clickHandler={this.showSimilarMoviesHandler}/>
        <PopularButton showpopular='true' clickHandler={this.showPopularHandler}></PopularButton>
        <PopularButton showpopular='false' clickHandler={this.hidePopularHandler}></PopularButton>
        { this.state.viewPopularMovies && <PopularMoviesList style={{width: '100%',alignItems: 'center'}} viewMovie={this.state.viewPopularMovies} movieList ={this.state.moviesList} title="20 Most Popular movies"></PopularMoviesList>} 
        { this.state.viewSimilarMovies && <PopularMoviesList style={{width: '100%',alignItems: 'center'}} viewMovie={this.state.viewPopularMovies} movieList ={this.state.moviesList} title="Similar movies"></PopularMoviesList>} 

      </div>
     );
   }
}

export default App;
