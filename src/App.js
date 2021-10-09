import { useState } from 'react'
// import data from './data/retailers.json'
import Cards  from './components/Cards'

function App() {
  const [cards, setCard] = useState([
    {
      id: 1,
      name: "Michael Scott",
      company: "Dunder Mifflin",
      connections: 534
    },
    {
      id: 2,
      name: "John Cena",
      company: "WWE",
      connections: 900
    },
    {
      id: 3,
      name: "A",
      company: "ABC",
      connections: 454
    },
    {
      id: 4,
      name: "B",
      company: "BCD",
      connections: 349
    },
    {
      id: 5,
      name: "C",
      company: "CDE",
      connections: 923
    },
    {
      id: 6,
      name: "D",
      company: "DEF",
      connections: 934
    },
    {
      id: 7,
      name: "E",
      company: "EFG",
      connections: 234
    },
    {
      id: 8,
      name: "F",
      company: "FGH",
      connections: 345
    },
    {
      id: 9,
      name: "G",
      company: "GHI",
      connections: 453
    },
    {
      id: 10,
      name: "H",
      company: "HIJ",
      connections: 745
    }
  ])

  const deleteCard = (id) => {
    // console.log('delete', id)
    setCard(cards.filter((card) => card.id !== id))
  }

  return (
    <div className="container">
      <Cards cards={cards} onDelete = { deleteCard }/>
    </div>
  );
}

export default App;
