import DraggableCard from "../DraggableCard";
import { Droppable } from "react-beautiful-dnd"
import { KanbanContext } from '../../context';
import MenuIcon from "../../assets/icons/menu.svg"
import { useContext, useRef, useState } from "react";

const KanbanBlock = (props) => {
  const { boardData, setBoardData } = useContext(KanbanContext)
  const [updatedBoardData, setUpdatedBoardData] = useState(boardData);
  const contentEditableRef = useRef(null);

  const addCard = () => {
    const card = {
      title: "Title",
      id: crypto.randomUUID()
    }

    const updatedBoardData = boardData.map(item => {
      if (item.id === props.id) {
        const cards = [...item.cards, card];
        const cardsCount = cards.length;
        return { ...item, cards, cardsCount };
      }
      return item;
    });

    setBoardData(updatedBoardData)
  }

  const handleTextEdit = (e) => {
    console.log(contentEditableRef.current.innerText);

    const updatedText = contentEditableRef.current.innerText;
    const updatedData = boardData.map(column => ({
      ...column,
      title: column.id === props.id ? updatedText : column.title
    }));

    setUpdatedBoardData(updatedData);
  };

  const handleSave = () => {
    contentEditableRef.current.contentEditable = false
    setBoardData(updatedBoardData);
  }
  return (

    <div className='KanbanBlock'>
      <div className="KanbanBlock__container">
        <div className="KanbanBlock__container__header">

          <div className="KanbanBlock__container__header__title">
            <div className="KanbanBlock__container__header__title__wrapper">
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
                onDoubleClick={() => { contentEditableRef.current.contentEditable = "true" }}
              >{props.title}</span>
            </div>
            <div className="KanbanBlock__container__header__title__count">
              <span>{props.cardsCount}</span>
            </div>
          </div>

          <div className="KanbanBlock__container__header__controls">
            <img src={MenuIcon} alt="menu" />
          </div>

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
            <button onClick={addCard}>+ Add New</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KanbanBlock