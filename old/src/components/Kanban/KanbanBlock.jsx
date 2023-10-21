import DraggableCard from "../DraggableCard";
import { Droppable } from "react-beautiful-dnd"

const KanbanBlock = (props) => {


  return (

    <div className='KanbanBlock'>
      <div className="KanbanBlock__container">
        <div className="KanbanBlock__container__header">

          <div className="KanbanBlock__container__header__title">
            <div className="KanbanBlock__container__header__title__wrapper">
              <span>{props.title}</span>
            </div>
            <div className="KanbanBlock__container__header__title__count">
              <span>{props.cardsCount}</span>
            </div>
          </div>

          <div className="KanbanBlock__container__header__controls">...</div>

        </div>
        <Droppable droppableId={props.id} type="group" shouldRespectDroppable={true}>
          {
            (provided) => (
              <div className="KanbanBlock__container__cards"  {...provided.droppableProps} ref={provided.innerRef}>
                {
                  props.cards.map((card, index) => {
                    return (
                      <DraggableCard key={card.id} id={card.id} index={index} title={card.title} />
                    )
                  })
                }
                {provided.placeholder}
              </div>
            )
          }
        </Droppable>

        <div className="KanbanBlock__container__addNew">
          <div className="KanbanBlock__container__addNew__wrapper">
            <button>+ Add New</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KanbanBlock