import React, { Component } from 'react';


// this is class component 
class PopularClick extends Component
{
    constructor()
    {
        super();
    }
    render(){
          if(this.props.showpopular=== 'true')
          return (
             <div>
                  <button onClick={this.props.clickHandler}>View Popular Movies</button>
              </div>
          )
          else
          return (
            <div>
                <button onClick={this.props.clickHandler}>Hide Popular Movies</button>
            </div>
          )
        }
}
export default PopularClick;