import { useSelector, useDispatch } from 'react-redux'
import { assignWord, resetWord } from '../store/word'
import funnyWords from "../funnyWords"

function Word() {
  const word = useSelector((state) => state.word.word)
  const dispatch = useDispatch()

  function pickRandomWord (funnyWords) {
    let index = Math.floor(Math.random() * 19)
    return funnyWords[index]
  }

  const handleWord = (e) => {
    e.preventDefault()
    const randomWord = pickRandomWord(funnyWords)
    dispatch(assignWord(randomWord))
  }

  const handleReset = (e) => {
    e.preventDefault()
    dispatch(resetWord())
  }
  return (
    <>
      <form>
        <button onClick={handleWord}>Start</button>
      </form>

      <button onClick={handleReset}>Reset Word</button>
    </>
  )
}

export default Word