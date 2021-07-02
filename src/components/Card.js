const Card = (props) => {
    return(
        <section>
            <h2>{props.card.message}</h2> 
            <ul>
                <li>
                    <p onclick={()=> props.addLikeToCard(props.card)}> ⚓ {props.card.likes_count}</p>
                </li>

                <li>
                    <p onClick={() => props.deleteCard(props.card)}> ☠️Delete☠️ </p>
                </li>
            </ul>
        </section>

    )
};

export default Card;