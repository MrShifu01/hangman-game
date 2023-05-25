import { useDispatch, useSelector} from 'react-redux'
import '../index.css'
import { assignWord } from '../store/word'
import hangManWords from "../hangManWords"

function Word() {
  const word = useSelector((state) => state.word.word)
  const dispatch = useDispatch()
  
  function pickRandomWord (hangManWords) {
    let index = Math.floor(Math.random() * 19)
    return hangManWords[index]
  }

  const handleWord = (e) => {
    e.preventDefault()
    const randomWord = pickRandomWord(hangManWords)
    dispatch(assignWord(randomWord))
  }

  return (
    <>
        {!word && <button className='heartbeat btn btn-lg mt-3 start-button' onClick={handleWord}>Start</button>}
    </>
  )
}

export default Word