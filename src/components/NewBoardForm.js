import React, {useState} from 'react';


// Event Handling Functions

/*
<button onClick={}>Show New Board Form</button>
<button>Hide New Board Form</button>
*/

// set the STATE for show/hide
const [showForm, setShowForm] = useState('');

// FUNCTION that DEFINES the NewBoardForm Component // A Component function should: 1. be named after the component 2. return one JSX object that represents how to render this component
const NewBoardForm = () => {
    const [formFields, setFormFields] = useState ({
        title: '',
        owner: ''
    });

    return (
        <form onSubmit={onSubmit} > 
        <div>
                <lable htmlFor="boardTitle">Board Title</lable>
                <input 
                    title="boardTitle" 
                    value={formFields.title} onChange={}/>
        </div>
        <div> 
                <lable htmlFor="boardOwner">Board Owner</lable>
                <input 
                    owner="boardOwner" 
                    value={formFields.owner} onChange={}/>
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