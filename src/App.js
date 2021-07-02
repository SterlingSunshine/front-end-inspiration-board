import './App.css';    
import styled from 'styled-components'                                         // we need to update the styling
import React from 'react';
import { useState } from 'react';
import axios from 'axios';                                      // we need to use axios to connect to the backend
//CARD-RELATED IMPORTS//
import CardList from './components/CardList'
import Card from './components/Card'
import NewCardForm from './components/NewCardForm'

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
    setSelectedBoardItem(item)
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
  font-size: 2.5em;
  text-align: center;
  color: darkblue;
`;
const Wrapper = styled.section`
  padding: .03em;
  background: lightblue;
`;

const Subtitle = styled.h2`
  font-size: 2em;
  margin: 20px auto;
  display: flex;
  text-align: left;
  color: white;
  justify-content: left;
  padding:.1em;
`;
const Wrap = styled.div`
  background: teal;
`;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (

    <AppContainer>
    <Wrapper>
      <Title>

            Inspiration Board
        </Title>
    </Wrapper>

          <div>
          <Wrap>
            <Subtitle>* ⚓ Boards</Subtitle>
          </Wrap>
            <BoardList onBoardSelectCallback={onBoardSelectCallback} />
          </div>  

          <div>
          <Wrap>
            <Subtitle>* ⚓ Selected Board</Subtitle>
          </Wrap>
            <Board title={selectedBoardItem.title} owner={selectedBoardItem.owner}/>
          </div>

          <div>
          <Wrap>
            <Subtitle>* ⚓ Create a New Board</Subtitle>
          </Wrap>
            {show?<NewBoardForm/>:null}
            <button onClick={()=>setShow(!show)}> Hide/Show Form </button>
          </div>

          <div>
            {selectedBoardItem.id ? <CardList board={selectedBoardItem}/> : ''}
          </div>

  </AppContainer>
  );
}

export default App;
