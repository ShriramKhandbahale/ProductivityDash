import { createContext, useEffect, useState } from 'react'

const data = [
  {
    title: 'Todo',
    id: crypto.randomUUID(),
    cardsCount: 2,
    cards: [
      {
        title: 'Task 1',
        id: crypto.randomUUID(),
      },
      {
        title: 'Task 2',
        id: crypto.randomUUID()
      },
      {
        title: 'Task 3',
        id: crypto.randomUUID()
      },
    ],
  },
  {
    title: 'In Progress',
    id: crypto.randomUUID(),
    cardsCount: 6,
    cards: [
      {
        title: 'Task 4',
        id: crypto.randomUUID()
      },
      {
        title: 'Task 5',
        id: crypto.randomUUID()
      },
      {
        title: 'Task 6',
        id: crypto.randomUUID()
      }
    ]
  },
  {
    title: 'Done',
    id: crypto.randomUUID(),
    cardsCount: 5,
    cards: [
      {
        title: 'Task 7',
        id: crypto.randomUUID()
      },
      {
        title: 'Task 8',
        id: crypto.randomUUID()
      },
      {
        title: 'Task 9',
        id: crypto.randomUUID()
      }
    ]
  },
]

export const KanbanContext = createContext();

export const KanbanProvider = ({ children }) => {
  const [boardData, setBoardData] = useState(data);

  // useEffect(() => {
  //   localStorage.setItem()
  // }, [boardData])

  const forward = {
    boardData,
    setBoardData
  }

  return (
    <KanbanContext.Provider value={forward}>
      {children}
    </KanbanContext.Provider>
  )
}