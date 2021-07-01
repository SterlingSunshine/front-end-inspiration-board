import './App.css';                                             // we need to update the styling
import React from 'react';
import { useState } from 'react';
import axios from 'axios';                                      // we need to use axios to connect to the backend

//BOARD-RELATED IMPORTS//
import Board from './components/Board'
import BoardList from './components/BoardList'
import NewBoardForm from './components/NewBoardForm'


function App() {

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////// CARD STATES ////////////////////////////////////////////////////////////////////////////////////
  const [currentCardLikes, setCurrentCardLikes] = useState(0)     // set the state of the card likes
  // update card likes state in the app b/c you need to to get the update to the DB
  const [activeCards, setActiveCards] = useState([])              // the state of cards needs to be at app level - the Cards list is a GET from DB

  ///////////////// HIDE/SHOW THE NewBoardForm /////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [show, setShow] = useState(false)

// USING TOGGLE DIDN'T WORK - WHY?// import Toggle from 'react-toggle' // npm install react-toggle --save
//   const toggler = () => {
//     setToggler(!toggle);
// }
//   const buttonText = toggle === true ? "Hide" : "Show";
// let newBoard;
// if(toggle) {
//     newBoard = <NewBoardForm></NewBoardForm>
// } else {
//     newBoard = null;
// }
      // {newBoard}
      // <button onClick={toggler}>{buttonText}</button>

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////// SELECTED BOARD STATES //////////////////////////////////////////////////////////////////////////
  const defaultBoardItem = {
    title: '',
    owner: ''
  }
  const [selectedBoardItem, setSelectedBoardItem] =  useState(defaultBoardItem)         // set state for actively displayed/selected board   // store selectedBoard state by id

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////// SELECTED BOARD CALLBACK FUNCTION ///////////////////////////////////////////////////////////////
  const onBoardSelectCallback = (item) => {
    console.log(item)
    console.log(item.title)
    console.log(item.cards)
    console.log(item.id)
    console.log(item.owner)
    setSelectedBoardItem(item)
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Inspiration Board
        </h1>
      </header>

          <div>
            <h2>Boards</h2>
            <p><BoardList onBoardSelectCallback={onBoardSelectCallback} ></BoardList> Selected Board</p>
          </div>

          <div>
            <h2>Selected Boards</h2>
            <Board title={selectedBoardItem.title} owner={selectedBoardItem.owner}></Board>
          </div>

          <div>
            <h2>Create A New Board</h2>
            {show?<NewBoardForm></NewBoardForm>:null}
            <button onClick={()=>setShow(!show)}> Hide/Show Form </button>
          </div>
          
          <div>
            <h2>New Card Form</h2>
          </div>

          <div>
            <h2>Cards List</h2>
            {/* to grab the card list you can use     cards={selectedBoardItem.cards}    */}
          </div>

    </div>
  );
}

export default App;