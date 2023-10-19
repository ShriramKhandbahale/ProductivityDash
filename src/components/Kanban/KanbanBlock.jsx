import React from 'react'

const KanbanBlock = () => {

  const BoardData = [
    {
      title: 'Todo',
      id: 1,
      cards: [
        {
          title: 'Task 1',
          id: 1
        }
      ]
    },
  ]

  return (
    <div className='KanbanBlock'>
      <div className="KanbanBlock__container">
        <div className="KanbanBlock__container__header">

          <div className="KanbanBlock__container__header__title">
            <div className="KanbanBlock__container__header__title__wrapper">TODO</div>
            <div className="KanbanBlock__container__header__title__count">
              <span>1</span>
            </div>
          </div>

          <div className="KanbanBlock__container__header__controls">...</div>

        </div>

        <div className="KanbanBlock__container__cards"></div>

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