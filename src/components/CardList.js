import axios from 'axios';
import { useState, useEffect } from "react";
import Card from './Card';
import NewCardForm from './NewCardForm'

// FUNCTION that DEFINES the CardList Component // A Component function should: 1. be named after the component 2. return one JSX object that represents how to render this component
const CardList = (props) => {
    const [cardData, setCardData] = useState([]);  

    useEffect(()=> {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.id}`)//axios.get make call to database get all cards when board is clicked
        .then((response) => { 
            setCardData(response.data.cards); //setCardData to the response of the call
        })
        .catch((error) => {
            console.log(error);
        });
    }, [props.board]);


    const addLikeToCard = (card) => { 
        axios.patch(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.id}/cards/${card.id}/like`)    
            .then((response) => {
                const newCardData = cardData.map( (currentCard) => {
                    if (currentCard.card_id === card.card_id){
                        return response.data.card;
                    }
                    return currentCard;
                });
                setCardData(newCardData);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteCard = (card)=> {  
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.id}/cards/${card.id}`)
            .then((response) => {
                const newCardData = cardData.filter( (currentCard) => {
                return currentCard.card_id !== card.card_id;
            });
            setCardData(newCardData);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const cardListComponents = cardData.map((card)=> {
        return( 
            <li key={card.id}>
                <Card
                    card = {card}
                    addLikeToCard={addLikeToCard}
                    deleteCard={deleteCard}>
                </Card>
            </li>
        )
    });

    const createNewCard = (cardMessage) => {
        const postData = { message: cardMessage }
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.id}/cards`, postData)
            .then((response) => {
                const cards = [...cardData];
                cards.push(response.data.card);
                setCardData(cards)
            })
            .catch((error) => {
                console.log(error);
            });
    };
    
    return (
        <section>
            <section>
                <h2 className='card-list__header'>Cards for {props.board.title}</h2>
                <ul>
                    {cardListComponents}
                </ul>
            </section>

            <section>
                <NewCardForm createNewCard={createNewCard}></NewCardForm>
            </section>

        </section>
    );
};

export default CardList;




/*  card list is my container item for card, 
    all my calls to the database will go through cardlist
    - delete card
    - add card
    - add like to a card
    - use effect to make api call when board is selected
*/