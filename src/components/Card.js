
import { FaTimesCircle } from "react-icons/fa"


const Card = ({ card, onDelete }) => {
    const onClick = (e) => {
        e.target.innerText="Request Sent"
        e.target.style.backgroundColor="green"
    }
    return (
        <div className='card'>
           <FaTimesCircle onClick={() => onDelete(card.id) } />
           <img className='avatar-img' src={ card.avatar } alt="" />
           <h1>{ card.name }</h1>
           <h3>{ card.company }</h3>
           <div className='connections'>
               <h1>{ card.connections }</h1>
               <h3>connections</h3>
           </div>
           <button onClick={onClick}>Connect</button>
    
        </div>
    )
}

export default Card
