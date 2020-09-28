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
        <PopularButton showpopular='true' clickHandler={this.showPopularHandler}></PopularButton>
        <PopularButton showpopular='false' clickHandler={this.hidePopularHandler}></PopularButton>
         {/* <button onClick={() => this.showPopularHandler()}>View Popular Movies</button>
        <button onClick={() => this.hidePopularHandler()}>Hide Popular Movies</button>  */}
        <PopularMoviesList style={{width: '100%',alignItems: 'center'}} viewMovie={this.state.viewPopularMovies}></PopularMoviesList> 
        
      </div>
     );
   }
}

export default App;
