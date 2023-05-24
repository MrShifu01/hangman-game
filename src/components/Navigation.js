import ThemeSwitcher from "./ThemeSwitch"
import { useDispatch, useSelector } from 'react-redux'
import { toggleInstructions, toggleHelp } from "../store/navigation"
import { resetWord } from '../store/word'
import { resetError } from '../store/error'
import { resetKeys } from "../store/key"

function Navigation() {

  const help = useSelector((state) => state.navigation.help)
  const instructions = useSelector((state) => state.navigation.instructions)

    const dispatch = useDispatch()
      
      const handleInstructions = (e) => {
        e.preventDefault()
        dispatch(toggleInstructions())
      }

      const handleHelp = (e) => {
        e.preventDefault()
        dispatch(toggleHelp())
      }

      const handleReset = (e) => {
        e.preventDefault()
        dispatch(resetWord())
        dispatch(resetError())
        dispatch(resetKeys())

        if (help) {
          dispatch(toggleHelp())
        }

        if (instructions) {
          dispatch(toggleInstructions())
        }
      }

  return (
    <>
      <div className="navbar bg-base-300">
        <div className="nav-content flex justify-between">
          <div className="left-nav">
            <a href="/" className="btn btn-ghost normal-case text-xl">
              <button onClick={handleReset}>Reset</button>
            </a>
          </div>
            
          <div className="right-nav flex items-center">
            <ul className="flex">
              <li>
                <a href="/" className={`btn btn-ghost normal-case text-xl ${instructions ? "nav-active" : ""}`}>
                <button onClick={handleInstructions}>Instructions</button>
                </a>
              </li>
              <li>
                <a href="/" className={`btn btn-ghost normal-case text-xl ${help ? "nav-active" : ""}`}>
                  <button onClick={handleHelp}>
                    Help
                  </button>
                </a>
              </li>
            </ul>
            <div className="mt-3 ml-3">
              <ThemeSwitcher />
            </div>
          </div>  
        </div>
      </div>
    </>
  )
}

export default Navigation