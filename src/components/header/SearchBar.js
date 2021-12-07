import React, { Component } from 'react'
import '../../css/searchBar.css'
import { useRef} from "react";
function SearchBar(props){
    const titleInputRef = useRef();
        
        // inline css
        // const heading={
        //     color:'blue',
        //     fontSize:'72px',
        // }
        
        return (
            <div>
                <h1 className='primary' style={{width: '100%',textAlign: 'center'}} > Welcome </h1>
                <label htmlFor="search" style={{width: '100%',alignItems: 'center',} }> Search by Name</label>
                <input ref={titleInputRef} type="text" style={{alignItems: 'center'} }placeholder="Avengers!!!!!!!!!"></input>
                <button onClick={()=> props.clickHandler(titleInputRef.current.value)}>Search</button>
            </div>
        )
    }

export default SearchBar;