import { useState } from 'react'
import { retailerData } from './data/retailers'
import Cards  from './components/Cards'

function App() {
  const [cards, setCard] = useState(retailerData)

  const deleteCard = (id) => {
    setCard(cards.filter((card) => card.id !== id))
  }

  return (
    <div className="container">
      <Cards cards={cards} onDelete = { deleteCard }/>
    </div>
  );
}

export default App;
