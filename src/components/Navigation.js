import ThemeSwitcher from "./ThemeSwitch"
import { useDispatch } from 'react-redux'
import { toggleInstructions, toggleHelp } from "../store/navigation"

function Navigation() {

    const dispatch = useDispatch()

    const handleRestart = () => {
        window.location.reload()
      }
      
      const handleInstructions = (e) => {
        e.preventDefault()
        dispatch(toggleInstructions())
      }

      const handleHelp = (e) => {
        e.preventDefault()
        dispatch(toggleHelp())
      }

  return (
    <>
      <div className="navbar bg-base-300">
        <div className="nav-content flex justify-between">
          <div className="left-nav">
            <a href="/" className="btn btn-ghost normal-case text-xl">
              <button onClick={handleRestart}>Restart</button>
            </a>
          </div>
            
          <div className="right-nav flex items-center">
            <ul className="flex">
              <li>
                <a href="/" className="btn btn-ghost normal-case text-xl">
                <button onClick={handleInstructions}>Instructions</button>
                </a>
              </li>
              <li>
                <a href="/" className="btn btn-ghost normal-case text-xl">
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