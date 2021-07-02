import styled from 'styled-components'


const CardContainer = styled.section`
    margin: 20px auto;
    font-family: 'Annie Use Your Telescope';
    background:#666;
    color:#fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-decoration:none;
    color:#000;
    background:#ffc;
    display:block;
    height:10em;
    width:10em;
    padding:1em;
    box-shadow: 5px 5px 7px rgba(33,33,33,.7);
    transform: rotate(6deg);
    transition: transform .15s linear;
    list-style-type: none;
    position:relative;
    `


const Card = (props) => {
    return(
        <CardContainer>
            <h2>{props.card.message}</h2> 
            <ul>
                <li>
                    <p onClick={()=> props.addLikeToCard(props.card)}> ⚓ {props.card.likes_count}</p>
                </li>

                <li>
                    <p onClick={() => props.deleteCard(props.card)}> ☠️Delete☠️ </p>
                </li>
            </ul>
        </CardContainer>
    )
};

export default Card;