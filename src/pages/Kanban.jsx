import { KanbanBlock } from "../components"

const Kanban = () => {
  return (
    <div className="Kanban">
      <div className="Kanban__container">
        <div className="Kanban__container__pageNav">
          <button>Reset Board</button>
        </div>
        <div className="Kanban__container__board">
         
          <KanbanBlock/>
          <KanbanBlock />
          <KanbanBlock />
          <KanbanBlock />

        </div>
      </div>
    </div>
  )
}

export default Kanban