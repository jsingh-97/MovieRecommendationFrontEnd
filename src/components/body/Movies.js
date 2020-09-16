import React from 'react';
// this is functional component see content body for class component
function Movies({movies}) //here we are destructing the props 
{
    return (
        <React.Fragment>
            <h3>{movies}</h3>
        </React.Fragment>
    );
}
export default Movies;