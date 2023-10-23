import DraggableCard from "../DraggableCard";
import { Droppable } from "react-beautiful-dnd"
import { KanbanContext } from '../../context';
import { GlobalContext } from '../../context';
import MenuIcon from "../../assets/icons/menu.svg"
import { useContext, useRef, useState, useEffect } from "react";
import BlockControlMenu from "./BlockControlMenu";
import { motion, AnimatePresence } from "framer-motion";
import AddIcon from '../../assets/icons/add.svg'

const KanbanBlock = (props) => {
  const { boardData, setBoardData } = useContext(KanbanContext)
  const [updatedBoardData, setUpdatedBoardData] = useState(boardData);
  const blockTitleRef = useRef(null);
  // let cardContainerRef = useRef(null);
  const { isMobile } = useContext(GlobalContext)
  const controlMenuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (controlMenuRef.current && !controlMenuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

    // cardContainerRef.current.scrollTo(100,100)
    // console.log(cardContainerRef.current)
    setBoardData(updatedBoardData)
  }

  const handleTextEdit = (e) => {
    const updatedText = blockTitleRef.current.innerText;
    const updatedData = boardData.map(column => ({
      ...column,
      title: column.id === props.id ? updatedText : column.title
    }));

    setUpdatedBoardData(updatedData);
  };

  const handleSave = () => {
    blockTitleRef.current.contentEditable = false
    setBoardData(updatedBoardData);
  }
  return (

    <div className='KanbanBlock'>
      <div className="KanbanBlock__container">
        <div className="KanbanBlock__container__header">

          <div className="KanbanBlock__container__header__title">
            <div className="KanbanBlock__container__header__title__wrapper">
              <span
                ref={blockTitleRef}
                contentEditable="true"
                onInput={handleTextEdit}
                onBlur={handleSave}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSave();
                  }
                }}
                onDoubleClick={() => { blockTitleRef.current.contentEditable = "true" }}
              >{props.title}</span>
            </div>
            <div className="KanbanBlock__container__header__title__count">
              <span>{props.cardsCount}</span>
            </div>
          </div>

          <div className="KanbanBlock__container__header__controls" ref={controlMenuRef} onClick={() => setIsMenuOpen(true)}>
            <img src={MenuIcon} alt="menu" />
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div className="KanbanBlock__container__header__controls__menu"
                  initial={{ scale: 0.5, translate: `${isMobile ? '-3rem 4rem' : '3rem 3rem'}` }}
                  animate={{ scale: 1, transformOrigin: `${isMobile ? 'top right' : 'top left'}` }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                >
                  <BlockControlMenu blockId={props.id} setIsMenuOpen={setIsMenuOpen} blockTitleRef={blockTitleRef} handleTextEdit={handleTextEdit} />
                </motion.div>
              )}
            </AnimatePresence>
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
            <button onClick={addCard}><img src={AddIcon} alt="add" /> Add New</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KanbanBlock