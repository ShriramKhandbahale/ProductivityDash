import { Draggable } from "react-beautiful-dnd";
import DragIcon from '../assets/icons/drag.svg';
import { KanbanContext } from "../context";
import { useContext, useRef, useEffect, useState } from "react";

const DraggableCard = (props) => {
  const { boardData, setBoardData } = useContext(KanbanContext);
  const [updatedBoardData, setUpdatedBoardData] = useState(boardData);
  const contentEditableRef = useRef(null);

  useEffect(() => {
      // contentEditableRef.current.contentEditable = "true";
      // contentEditableRef.current.focus();
  }, []);

  const handleTextEdit = (e) => {
    console.log(contentEditableRef.current.innerText);

    const updatedText = contentEditableRef.current.innerText;
    const updatedData = boardData.map(column => ({
      ...column,
      cards: column.cards.map(card => (card.id === props.id ? { ...card, title: updatedText } : card)),
    }));

    setUpdatedBoardData(updatedData);
  };

  const handleSave = () => {
    contentEditableRef.current.contentEditable = false
    setBoardData(updatedBoardData);
  }

  return (
    <Draggable draggableId={props.id} index={props.index}>
      {
        (provided) => (
          <div className="DraggableCard"
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            onDoubleClick={() => { contentEditableRef.current.contentEditable = "true" }}
          >
            <div className="DraggableCard__container">
              <div className="DraggableCard__container__dragIcon">
                <img src={DragIcon} alt="drag" />
              </div>
              <div className="DraggableCard__container__cardTitle">
                <span
                  ref={contentEditableRef}
                  contentEditable="true"
                  onInput={handleTextEdit}
                  onBlur={handleSave}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSave();
                    }
                  }}
                  // onBlur={handleSaveBlur}
                  onDoubleClick={() => { contentEditableRef.current.contentEditable = "true" }}
                >
                  {props.title}
                </span>
              </div>
            </div>
          </div>
        )
      }
    </Draggable>
  )
}

export default DraggableCard;
