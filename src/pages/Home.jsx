import { NavLink } from "react-router-dom"
import Logo from "../assets/icons/icon.png"

const Home = () => {
  return (
    <div className="Home">
      <div className="Home__container">
        <div className="Home__container__message">
          <div className="Home__contianer__message__logo">
            <img src={Logo} alt="ProductivityDash" />
          </div>
          <div className="Home__contianer__message__text">
            <h1>Welcome To ProductivityDash</h1>
          </div>
        </div>
        <div className="Home__container__links">
          <div className="Home__container__links__kanban">
            <NavLink to="/kanban">
              <button>Kanban Board</button>
            </NavLink>
          </div>
          <div className="Home__container__links__todo">
            <NavLink to="/todo">
              <button>Daily Todo</button>
            </NavLink>
          </div>
          <div className="Home__container__links__pomodoro">
            <NavLink to="/pomodoro">
              <button>Pomodoro Session</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home