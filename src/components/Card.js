
import { FaTimesCircle } from "react-icons/fa"

const Card = ({ card, onDelete }) => {
    return (
        <div>
           <FaTimesCircle 
                onClick={() => onDelete(card.id) } />
           <h1>{ card.name }</h1>
           <h3>{ card.company }</h3>
           <div className='connections'>
               <h1>{ card.connections }</h1>
               <h3>connections</h3>
           </div>
        </div>
    )
}

export default Card
