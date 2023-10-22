// packages 
import { routes } from './routes'
import { useState } from 'react'
import { Droppable } from "react-beautiful-dnd"


// components 
import Nav from './Nav'

// assets 
import Bin from '../../assets/icons/bin.svg'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  }

  const handleMouseLeave = () => {
    setIsOpen(false);
  }
  return (
    <aside className="Sidebar" style={{ width: `${isOpen ? '15rem' : '5rem'}` }}>
      <div className="Sidebar__container">
        <div className="Sidebar__container__nav" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <nav>
            {routes.map((route) => {
              return <Nav key={route.title} title={route.title} icon={route.icon} path={route.path} isOpen={isOpen} />
            })}
          </nav>
        </div>
        <Droppable droppableId="deleteCardBin" type="group" shouldRespectDroppable={true}>
          {
            (provided) => (
              <div className="Sidebar__container__bin"
                {...provided.droppableProps} ref={provided.innerRef}
              >
                <img src={Bin} alt="bin" />
              </div>
            )
          }
        </Droppable>
      </div>
    </aside>
  )
}



export default Sidebar