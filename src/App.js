import { useState } from 'react'
// import data from './data/retailers.json'
import Cards  from './components/Cards'

function App() {
  const [cards, setCard] = useState([
    {
      id: 1,
      avatar: "./avatar/avataaars.png",
      name: "Michael Scott",
      company: "Dunder Mifflin",
      connections: 534
    },
    {
      id: 2,
      avatar: "./avatar/avataaars(1).png",
      name: "John Cena",
      company: "WWE",
      connections: 900
    },
    {
      id: 3,
      avatar: "./avatar/avataaars(2).png",
      name: "A",
      company: "ABC",
      connections: 454
    },
    {
      id: 4,
      avatar: "./avatar/avataaars(3).png",
      name: "B",
      company: "BCD",
      connections: 349
    },
    {
      id: 5,
      avatar: "./avatar/avataaars(4).png",
      name: "C",
      company: "CDE",
      connections: 923
    },
    {
      id: 6,
      avatar: "./avatar/avataaars(5).png",
      name: "D",
      company: "DEF",
      connections: 934
    },
    {
      id: 7,
      avatar: "./avatar/avataaars(6).png",
      name: "E",
      company: "EFG",
      connections: 234
    },
    {
      id: 8,
      avatar: "./avatar/avataaars(7).png",
      name: "F",
      company: "FGH",
      connections: 345
    },
    {
      id: 9,
      avatar: "./avatar/avataaars(8).png",
      name: "G",
      company: "GHI",
      connections: 453
    },
    {
      id: 10,
      avatar: "./avatar/avataaars(9).png",
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
