import { useContext } from "react"
import { KanbanBlock } from "../components"
import { KanbanContext } from "../context"

const Kanban = () => {
  const { boardData, setBoardData, resetBoard: reset } = useContext(KanbanContext);

  const addColumn = () => {
    const column = {
      title: 'New Column',
      id: crypto.randomUUID(),
      cardsCount: 0 ,
      cards: []
    }
    let updatedBoardData = [...boardData];
    updatedBoardData.push(column)
    setBoardData(updatedBoardData)
  }

  const resetBoard = () => {
    localStorage.clear()
    reset()
  }
  return (
    <div className="Kanban">
      <div className="Kanban__container">
        <div className="Kanban__container__pageNav">
          <button onClick={resetBoard}>Reset Board</button>
        </div>
    
        <div className="Kanban__container__board">
          {
            boardData.map((screen) => {
              return <KanbanBlock title={screen.title} id={screen.id} key={screen.id} cardsCount={screen.cardsCount} cards={screen.cards} />
            })
          }
          <div className="Kanban__container__board__addColumn">
            <button onClick={addColumn}>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kanban