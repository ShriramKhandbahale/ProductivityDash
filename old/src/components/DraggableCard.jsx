import { Draggable } from "react-beautiful-dnd"
import DragIcon from '../assets/icons/drag.svg'

const DraggableCard = (props) => {
  return (
    <Draggable draggableId={props.id} index={props.index}>
      {
        (provided) => (
          <div className="DraggableCard"
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <div className="DraggableCard__container">
              <div className="DraggableCard__container__dragIcon">
                <img src={DragIcon} alt="drag" />
              </div>
              <div className="DraggableCard__container__cardTitle">
                <span>{props.title}</span>
              </div>
            </div>
          </div>
        )
      }
    </Draggable>
  )
}

export default DraggableCard