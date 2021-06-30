import React from 'react';
// import './Board.css';
import CardList from './CardList';
import PropTypes from 'prop-types';

// const title = // How do we GET the board name? onSelect right?

// FUNCTION that DEFINES the Board Component // A Component function should: 1. be named after the component 2. return one JSX object that represents how to render this component
const Board = (title) => {
    return (
        <div>
        <h2>{title}</h2>
        </div>
    );    
}


/*  
Board.propTypes = {
    cards: PropTypes.arrayOf
}
*/

export default Board;


/*
STEP 1: Plan the Component
The Board Component is a presentation component - it provide the structure for presenting a singular board to App.js for Rendering
When a Board component is rendered, what data is presented? - that structure should be specified here

We want to have the following UI displayed via the Board Component:
    ** The Board Title
        ** Do we want the Board Component to hold the display logic for the Card list?
        ** OR will the Board Component simply get the board name via axios request?
        ** ... and then pass that board name as a prop to App.js for rendering under the 
        ** "Selected Board" Element
        ** Callback function
*/

/*
STEP 2: Define Component:
To define a component, we will follow these steps:

    1. Create a new file (**check**)
    2. Import React, and any other dependencies
    3. Create a function
    4. Export the component (**check**)
        What other components depend on this one? How?

    EXTRA STUFF
    5. Props?
    6. State?
    7. Events / Handling?
*/