import { useContext } from "react"
import { KanbanBlock } from "../components"
import { KanbanContext } from "../context"
const Kanban = () => {
  const { boardData } = useContext(KanbanContext);

  return (
    <div className="Kanban">
      <div className="Kanban__container">
        <div className="Kanban__container__pageNav">
          <button>Reset Board</button>
        </div>

        <div className="Kanban__container__board">
          {
            boardData.map((screen) => {
              return <KanbanBlock title={screen.title} id={screen.id} key={screen.id} cardsCount={screen.cardsCount} cards={screen.cards} />
            })
          }
          <div className="Kanban__container__board__addColumn">
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kanban