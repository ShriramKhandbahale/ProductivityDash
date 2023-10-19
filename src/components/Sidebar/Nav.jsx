import { motion, AnimatePresence } from "framer-motion"
import { NavLink, useLocation } from "react-router-dom"

const Nav = (props) => {
  const location = useLocation();

  const isActive = '/' + props.title.toLowerCase() === location.pathname;
  const inActiveStyle = { opacity: `${isActive ? '1' : '0.5'}` }

  return (
    <NavLink to={props.path} key={props.title}>

      <div className="Nav" style={{ background: `${isActive ? 'rgb(54, 54, 54)' : ''}` }}>
        <div className="Nav__container">

          <div className="Nav__container__icon">
            <img src={props.icon} alt={props.title} style={inActiveStyle} />
          </div>

          <AnimatePresence>
            {props.isOpen && (
              <div className="Nav__container__title" style={inActiveStyle}>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >{props.title}</motion.span>
              </div>
            )}
          </AnimatePresence>

        </div>
      </div>

    </NavLink>
  )
}

export default Nav