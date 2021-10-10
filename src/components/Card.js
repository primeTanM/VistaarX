
import { FaTimesCircle } from "react-icons/fa"


const Card = ({ card, onDelete }) => {
    const onClick = (e) => {
        if(e.target.innerText === "Connect"){
            e.target.innerText="Request Sent"
            e.target.style.backgroundColor="green"
        } else {
            e.target.innerText="Connect"
            e.target.style.backgroundColor="black"
        }
        
    }
    return (
        <div className='card'>
           <FaTimesCircle className="cross-icon" onClick={() => onDelete(card.id) } />
           <div className="card-contents">
            <img className='avatar-img' src={ card.avatar } alt="" />
            <div className="retailer-data">
                <h1>{ card.name }</h1>
                <h3>{ card.company }</h3>
            </div>
            
            <div className='connections'>
                <h1>{ card.connections }</h1>
                <h3>connections</h3>
            </div>
            <button className="connect-btn" onClick={onClick}>Connect</button>
           </div>
           
    
        </div>
    )
}

export default Card
