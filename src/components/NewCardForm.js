import { useState } from 'react';

const NewCardForm = (props) => {

    const [message, setMessage] = useState('');
    const changeNewMessage = (event) => { setMessage(event.target.value) };

    const submitNewCard = (event) => {
        event.preventDefault();                     //add addCardCallback cardlist
        props.createNewCard(message);
        setMessage('');
    };

    return (
        <section>
            <h2>Post a New Card</h2>
            <form onSubmit={ submitNewCard }>
                <label>Message:</label>
                <input
                    type = 'text'
                    value={ message }
                    onChange={ changeNewMessage }/>
                <p> Preview: { message }</p>
                <input type='submit' value='add card'></input>
            </form>
        </section>
    );
};

export default NewCardForm;



/// This is a nested component that lives inside the CardList component//////