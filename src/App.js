import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/header/SearchBar';
import PopularMoviesList from './components/body/PopularMoviesList';
import PopularClick from './components/header/PopularClick';
class App extends Component {
    constructor()
    {
      super()
      this.state={
        viewPopularMovies:false
      }
      //binding events
      this.showPopularHandler=this.showPopularHandler.bind(this)
      this.hidePopularHandler=this.hidePopularHandler.bind(this)
    }
   showPopularHandler() {
    //set the state of viewPopularmovie flag to true and pass the result to MoviesList Component which will display result i.e popular movies
    this.setState(
      {
        viewPopularMovies:true
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
        <SearchBar/>
        <PopularClick showpopular='true' clickHandler={this.showPopularHandler}></PopularClick>
        <PopularClick showpopular='false' clickHandler={this.hidePopularHandler}></PopularClick>
         {/* <button onClick={() => this.showPopularHandler()}>View Popular Movies</button>
        <button onClick={() => this.hidePopularHandler()}>Hide Popular Movies</button>  */}
        <PopularMoviesList viewMovie={this.state.viewPopularMovies}></PopularMoviesList> 
        
      </div>
     );
   }
}

export default App;
