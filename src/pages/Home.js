import '../index.css'
import ThemeSwitcher from '../components/ThemeSwitch'
import Instructions from '../components/Instructions'
import { useState } from 'react'
import MainScreen from '../components/MainScreen'
import Help from '../components/Help'

function Home() {
  const [showInstructions, setShowInstructions] = useState(false)
  const [help, setHelp] = useState(false)

  const handleRestart = (e) => {
    e.preventDefault()
    setHelp(false)
    setShowInstructions(false)
  } 

  const handleShowInstructions = (e) => {
    e.preventDefault()
    setShowInstructions(!showInstructions)
    setHelp(false)
  }

  const handleHelp = (e) => {
    e.preventDefault()
    setHelp(!help)
    setShowInstructions(false)
  }

  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-start pt-5">
          {/* Page content here */}

          {showInstructions && !help && <Instructions />}
          {help && !showInstructions && <Help />}
          {!showInstructions && !help && <MainScreen />}

          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"><i className='bx bx-menu'></i></label>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-50 bg-base-100 text-base-content sidebar-menu">
            {/* Sidebar content here */}
            <li><ThemeSwitcher /></li>
            <li><button onClick={handleRestart}>Restart</button></li>
            <li><button onClick={handleShowInstructions}>Instructions</button></li>
            <li><button onClick={handleHelp}>Help</button></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home
