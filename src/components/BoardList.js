import React from 'react';
import axios from 'axios';
import { useState } from 'react';   

///////////////////////////////////////////////////////////////////////////
// API CALL FUNCTIONS // ALL-BOARD-RELATED API CALL FUNCTIONS are HERE (in the BoardList.js)//
///////////////////////////////////////////////////////////////////////////




// POST NEW BOARD
// newBoard = () =>
//     axios
//     .post()`${process.env.REACT_APP_BACKEND_URL}/boards`, {"title":title, "owner":owner})
//     .then((response) => {
//         console.log(
//             "...",
//             response.data
//         );
//     .catch((error) => {
//         console.log(
//             "...",
//             error.response.status
//         );
//         console.log(
//             "...",
//             error.response.data
//         );
//     }
//     });

///////////////////////////////////////////////////////////////////////////
// EVENT-HANDLING-FUNCTIONS
///////////////////////////////////////////////////////////////////////////

// EVENT1: User Select a Board from the BoardList
// EVENT2: User Clicks the Show/Hide button(s) for New Board Form
// EVENT3: User Submits the New Board Form

//??????//
// Is this an Event Handling situation? :
//??????// 
// const setSelectedBoard = (boardId) => {
//     // set selected board
//     setActiveBoardId(boardID)
// }

// SETTING STATE // const [pieceOfState, setPieceOfState] = useState('Initial value for pieceOfState.');
// UPDATING STATE // setPieceOfState('New value of pieceOfState.');


// FUNCTION that DEFINES the Board Component // A Component function should: 1. be named after the component 2. return one JSX object that represents how to render this component
const BoardList = () => {

    // GET ALL BOARDS -- by ID then you can parse out the title?
    const allBoards = axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
    // set drop down list of all board titles
    console.log(allBoards)

    return (
        <h2>Board List</h2>
    );
};

export default BoardList;



/*
STEP 1: Plan the Component 
BoardList is a container component
We want to have the following UI displayed via the BoardList Component:
    ** The BoardList should be a drop down or scroll menu that a user can select a board from
    ** The BoardList should have an array --  List of Boards that it 
    ** GET (s) from the DB via a function like getAllBoards -- and presents all the titles
        ** Where should the function getAllBoards live?? App.js??
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