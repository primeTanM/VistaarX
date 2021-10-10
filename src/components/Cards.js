import Card from "./Card"

const Cards = ({ cards, onDelete }) => {
    
    return (
        <>
           {cards.map((card, index) => {
               return (
                    index <= 7 ? (
                    <Card card={card} key={card.id}
                    onDelete={ onDelete } />
                    ) : (
                        ' '
                    )       
               )   
           }
               
           )} 
        </>
    )
}

export default Cards
