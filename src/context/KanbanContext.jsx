import { createContext, useEffect, useState } from 'react';

const data = [
  {
    title: 'Todo',
    id: crypto.randomUUID(),
    cardsCount: 0,
    cards: []
  },
  {
    title: 'In Progress',
    id: crypto.randomUUID(),
    cardsCount: 0,
    cards: []
  },
  {
    title: 'Done',
    id: crypto.randomUUID(),
    cardsCount: 0,
    cards: []
  },
];

export const KanbanContext = createContext();

export const KanbanProvider = ({ children }) => {
  const [boardData, setBoardData] = useState(() => {
    const localData = localStorage.getItem('KanbanBoardData');
    return localData ? JSON.parse(localData) : data;
  });

  useEffect(() => {
    localStorage.setItem('KanbanBoardData', JSON.stringify(boardData));
  }, [boardData]);
  
  const resetBoard = () => {
    setBoardData(data);
    localStorage.removeItem('KanbanBoardData');
  }


  const forward = {
    boardData,
    setBoardData,
    resetBoard
  };

  return (
    <KanbanContext.Provider value={forward}>
      {children}
    </KanbanContext.Provider>
  );
};
