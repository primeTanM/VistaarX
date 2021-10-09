import Card from "./Card"

const Cards = ({ cards, onDelete }) => {
    
    return (
        <>
           {cards.map((card) => (
               <Card card={card} key={card.id}
               onDelete={ onDelete } />
           ))} 
        </>
    )
}

export default Cards
