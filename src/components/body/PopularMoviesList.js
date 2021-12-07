import React, { Component } from 'react';
import Movies from './Movies'
//importing library for http 

// this is class component 
class MoviesList extends Component
{
    constructor()
    {
        super();
       
    }

    render(){
         
          const moviesListNew= this.props.movieList.map(movie =>(
             <Movies key={movie} movies={movie}/>
          ));
          
            return <div><h2>{this.props.title}</h2>{moviesListNew}</div>
            
        }
}
export default MoviesList;