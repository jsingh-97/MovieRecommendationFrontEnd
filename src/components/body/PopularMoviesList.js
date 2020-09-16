import React, { Component } from 'react';
import Movies from './Movies'
//importing library for http 

// this is class component 
class MoviesList extends Component
{
    constructor()
    {
        super();
        this.state={
            moviesList:[]
        }
    }
    async componentWillMount()
    {
        const response = await fetch('http://127.0.0.1:5000/v1/popular');
        const data = await response.json();
        this.setState({
            moviesList:data
        })
    }
    render(){
         
          const moviesListNew= this.state.moviesList.map(movie =>(
             <Movies key={movie} movies={movie}/>
          ));
          if(this.props.viewMovie)
            return <div><h1>Most Popular Movies</h1>{moviesListNew}</div>
            else 
            return null
        }
}
export default MoviesList;