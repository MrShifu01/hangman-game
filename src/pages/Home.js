import '../index.css'
import ThemeSwitcher from '../components/ThemeSwitch'
import Instructions from '../components/Instructions'
import { useState } from 'react'
import MainScreen from '../components/MainScreen'

function Home() {
  const [showInstructions, setShowInstructions] = useState(false)

  const handleShowInstructions = (e) => {
    e.preventDefault()
    setShowInstructions(!showInstructions)
  }

  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}

          {showInstructions && <Instructions />}
          {!showInstructions && <MainScreen />}

          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"><i className='bx bx-menu'></i></label>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content sidebar-menu">
            {/* Sidebar content here */}
            <li><ThemeSwitcher /></li>
            <li><button onClick={handleShowInstructions}>Instructions</button></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home
