import '../index.css'
import Figure from './Figure'
import GamePlay from './GamePlay'
import Keys from './Keys'

function MainScreen() {
  return (
    <div className='mainscreen-container flex flex-col items-center justify-center'>
        <div className='figure-container'>
          <Figure/>
        </div>
        <div className='gameplay-container'>
          <GamePlay/>
        </div>
        <Keys/>
    </div>
  )
}

export default MainScreen