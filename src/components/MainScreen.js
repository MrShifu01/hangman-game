import '../index.css'
import Hangman from './Hangman'
import Keys from './Keys'
import Word from './Word'

function MainScreen() {
  return (
    <>
        <Hangman/>
        <Word/>
        <Keys/>
    </>
  )
}

export default MainScreen