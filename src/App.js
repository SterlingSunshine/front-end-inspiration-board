import './App.css';                                             // we need to update the styling
import React from 'react';
import {useState} from 'react';
import axios from 'axios';                                      // we need to use axios to connect to the backend


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////// CARD STATES ////////////////////////////////////////////////////////////////////////////////////
const [currentCardLikes, setCurrentCardLikes] = useState(0)     // set the state of the card likes
                                                                // update card likes state in the app b/c you need to to get the update to the DB
const [activeCards, setActiveCards] = useState([])              // the state of cards needs to be at app level - the Cards list is a GET from DB

///////////////// CARD CRUD ////////////////////////////////////// how to you get the cards? 
const cards = getCardsByBoardId(boardId)                        // need to write this // how we get the cards
  setActiveCards

  const deleteCard = 
  // How will we manage the resets after delete?

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////// BOARD STATES ///////////////////////////////////////////////////////////////////////////////////
const [showForm, setShowForm] = useState(??)            // << move state for hide/show to the NewBoardForm.js?? (because it isn't passed to anything else)
const [Boards, setBoards] = useState([])                        // set the state for the boards
const [activeBoardId, setActiveBoardId] =  useState("")         // set state for actively displayed/selected board
                                                                // store board state by id

///////////////// BOARD CRUD ///////////////////////////////////// how to you get the boards? 

const allBoards = await axious.get("/boards")
  // set drop down list of all board titles
  setBoards

const createNewBoard = async (title, author) => {
  // create new board on the back end
  const board = axios.post("/newboardEndpoint", {title, author})

// We don't need to manage deleting boards

  // then, you can fetch all your boards again to make sure you have the latest data

const setSelectedBoard = (boardId) => {
  // set selected board
  setActiveBoardId(boardID)
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Inspiration Board
        </p>
      </header>

          <div>
            <h2>Boards</h2>
          </div>

          <div>
            <h2>Selected Board</h2>
          </div>

          <div>
            <h2>New Board Form</h2>
          </div>
          
          <div>
            <h2>New Card Form</h2>
          </div>


          <div>
            <h2>Cards List</h2>
          </div>

    </div>
  );
}

export default App;