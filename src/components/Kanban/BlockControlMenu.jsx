import React from 'react'
import EditIcon from "../../assets/icons/edit.svg"
import DeleteIcon from "../../assets/icons/trash.svg"
import { KanbanContext } from '../../context'
import { useContext } from 'react'

const BlockControlMenu = (props) => {
  const { boardData, setBoardData } = useContext(KanbanContext)

  const handleEdit = () => {
    props.blockTitleRef.current.contentEditable = "true"
    props.blockTitleRef.current.focus();
    setTimeout(() => {
      props.setIsMenuOpen(false);
    }, 50);
  }

  const handleDelete = () => {
    let updatedBoardData = [...boardData];
    updatedBoardData = updatedBoardData.filter((block) => block.id !== props.blockId);
    setBoardData(updatedBoardData)
  }

  return (
    <div className='BlockControlMenu'>
      <div className="BlockControlMenu__container">
        <ul>
          <li>
            <div className="BlockContainerMenu__container__edit" onClick={handleEdit}>
              <div className="BlockContainerMenu__container__edit__title"><span>Edit</span></div>
              <div className="BlockContainerMenu__container__edit__icon">
                <img src={EditIcon} alt="edit" />
              </div>
            </div>
          </li>
          <li>
            <div className="BlockContainerMenu__container__delete" onClick={handleDelete}>
              <div className="BlockContainerMenu__container__delete__title"><span>Delete</span></div>
              <div className="BlockContainerMenu__container__delete__icon">
                <img src={DeleteIcon} alt="delete" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BlockControlMenu