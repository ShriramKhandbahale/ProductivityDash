import TodoTaskBlock from "../components/Todo/TodoTaskBlock"
import TodoCompletedBlock from "../components/Todo/TodoCompletedBlock"

const Todo = () => {
  return (
    <div className="Todo">
      <div className="Todo__container">
        <div className="Todo__container__pendingTasks">
          <TodoTaskBlock />
        </div>
        <div className="Todo__container__stats">
          {/* <TodoTaskBlock /> */}
          stats
        </div>
        <div className="Todo__container__completedTasks">
          {/* <TodoTaskBlock /> */}
          <TodoCompletedBlock />
        </div>
      </div>
    </div>
  )
}

export default Todo