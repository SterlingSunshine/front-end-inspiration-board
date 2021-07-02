import './App.css';    
import styled from 'styled-components'                                         // we need to update the styling
import React from 'react';
import { useState } from 'react';
import axios from 'axios';                                      // we need to use axios to connect to the backend
//CARD-RELATED IMPORTS//
import CardList from './components/CardList'
import Card from './components/Card'
import NewCardForm from './components/NewCardForm'
import CoolCards from './components/CoolCards'

//BOARD-RELATED IMPORTS//
import Board from './components/Board'
import BoardList from './components/BoardList'
import NewBoardForm from './components/NewBoardForm'


function App() {
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////// HIDE/SHOW STATE NewBoardForm ///////////////////////////////////////////////////////////////////
  const [show, setShow] = useState(false)

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////// SELECTED BOARD STATE ///////////////////////////////////////////////////////////////////////////
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
    console.log('HI')
    console.log(selectedBoardItem)
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// STYLED COMPONENTS  ///////////////////////////////////////////////////////////
const AppContainer = styled.section`
    margin: 20px auto;
    font-family: 'Annie Use Your Telescope';
    background:#666;
    color:#fff;
    padding:2em;
    `

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: darkblue;
`;
const Wrapper = styled.section`
  padding: 2em;
  background: lightblue;
`;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (

    <AppContainer>
    <Wrapper>
      <Title>
          <h1>
            Inspiration Board
          </h1>
        </Title>
    </Wrapper>


          <div>
            <h2>Boards</h2>
            <BoardList onBoardSelectCallback={onBoardSelectCallback} />
          </div>  

          <div>
            <h2>Selected Boards</h2>
            <Board title={selectedBoardItem.title} owner={selectedBoardItem.owner}/>
          </div>

          <div>
            <h2>Create A New Board</h2>
            {show?<NewBoardForm/>:null}
            <button onClick={()=>setShow(!show)}> Hide/Show Form </button>
          </div>

          <div>
            <h2>Cards List</h2>
            {selectedBoardItem.id ? <CardList board={selectedBoardItem}/> : ''}
          </div>

  </AppContainer>
  );
}

export default App;

//     cards={selectedBoardItem.cards}  

// <CardList cards={selectedBoardItem.cards}/>