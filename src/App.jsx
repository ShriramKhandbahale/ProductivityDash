// packages
import { Route, Routes } from 'react-router-dom'
import { DragDropContext } from 'react-beautiful-dnd'
import { useContext } from 'react';

// components 
import { Sidebar } from './components';
import { KanbanContext } from './context';

// pages 
import { Home, Kanban, Todo, Pomodoro } from './pages'

const App = () => {
  const { boardData, setBoardData } = useContext(KanbanContext)

  const handleCardDragDrop = (results) => {
    const { source, destination, type } = results;

    console.log(results)

    if (
      !destination ||
      (source.droppableId === destination.droppableId && source.index === destination.index)
    ) return

    let updatedBoardData = [...boardData];

    // if deleted 
    if (destination.droppableId == 'deleteCardBin') {
      let { cards } = updatedBoardData.find(item => item.id === source.droppableId) || { cards: [] };
      cards.splice(source.index, 1);
      setBoardData(updatedBoardData)

      // console.log(movedCard)
      return
    }

    // dropped in the same column 
    if (source.droppableId === destination.droppableId) {
      let { cards } = updatedBoardData.find(item => item.id === source.droppableId) || { cards: [] };
      const [movedCard] = cards.splice(source.index, 1);
      cards.splice(destination.index, 0, movedCard)
    }
    // dropped in different column 
    else {
      const sourceColumn = updatedBoardData.find(item => item.id === source.droppableId);
      const destinationColumn = updatedBoardData.find(item => item.id === destination.droppableId);

      const sourceCards = sourceColumn?.cards || [];
      const destinationCards = destinationColumn?.cards || [];

      const [movedCard] = sourceCards.splice(source.index, 1);

      destinationCards.splice(destination.index, 0, movedCard);

      sourceColumn.cardsCount = sourceCards.length;
      destinationColumn.cardsCount = destinationCards.length;
    }

    setBoardData(updatedBoardData)
  }

  return (
    <DragDropContext onDragEnd={handleCardDragDrop}>
      <div className='App'>
        <div className="App__container">

          <div className="App__container__sidebar">
            <Sidebar />
          </div>

          <div className="App__container__app">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/kanban' element={<Kanban />} />
              <Route path='/Todo' element={<Todo />} />
              <Route path='/Pomodoro' element={<Pomodoro />} />
            </Routes>
          </div>
        </div>
      </div>
    </DragDropContext>
  )
}

export default App
