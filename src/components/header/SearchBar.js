import React, { Component } from 'react'
import '../../css/searchBar.css'
class SearchBar extends Component{
    constructor()
    {
        super();
        // this is how usually event binding is done as per ES6 
        //this.inputRef=React.createRef();
    }
   
     
    componentDidMount()
    {
       
    }
    render(){
        // inline css
        // const heading={
        //     color:'blue',
        //     fontSize:'72px',
        // }
        const {name}=this.props
        return (
            <div>
                <h1 className='primary' style={{width: '100%',textAlign: 'center'}} > Welcome {name}</h1>
                <label htmlFor="search" style={{width: '100%',alignItems: 'center',} }> Search by Name</label>
                <input type="text" style={{alignItems: 'center'} }placeholder="Avengers!!!!!!!!!"></input>
            </div>
        )
    }
}
export default SearchBar;