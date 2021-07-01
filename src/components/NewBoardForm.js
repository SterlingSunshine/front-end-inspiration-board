import React, { useState } from 'react';
import axios from 'axios';


// Event Handling Functions

/*
<button onClick={}>Show New Board Form</button>
<button>Hide New Board Form</button>
*/

// set the STATE for show/hide
// const [showForm, setShowForm] = useState('');

// FUNCTION that DEFINES the NewBoardForm Component // A Component function should: 1. be named after the component 2. return one JSX object that represents how to render this component
const NewBoardForm = () => {

    const [formFields, setFormFields] = useState ({ 
        title: '',
        owner: ''
    });

    const addNewBoard = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards`, {formFields})
    }
// name is a part of the React system - it's what it expects
    const wrapUpdate = (event) => {
        if (event.target.name === 'title') {
            setFormFields({
                title: event.target.value,
                owner: formFields.owner
            })
        } else {
            setFormFields({
                title: formFields.title,
                owner: event.target.value
            })
        }
    }

    return (
        <form onSubmit={addNewBoard} > 
        <div>
                <lable htmlFor="boardTitle">Board Title</lable>
                <input 
                    name="title" type="text"
                    value={formFields.title} onChange={wrapUpdate}/>
        </div>
        <div> 
                <lable htmlFor="boardOwner">Board Owner</lable>
                <input 
                    name="owner" type="text"
                    value={formFields.owner} onChange={wrapUpdate}/>
        </div>
        <div>
                <button>Submit Now!</button>
        </div>
        </form>
    );    
}

export default NewBoardForm;


// in App.js

/*
STEP 1: Plan the Component 
We want to have the following UI displayed via the NewBoardForm Component:
    ** The input "title" input "Owners Name"
    // This component is presentational
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

/* 






*/


