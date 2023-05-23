import { useSelector, useDispatch} from 'react-redux'
import { resetError, incrementError, decrementError } from '../store/error'
import Word from "./Word"

function GamePlay() {
    const error = useSelector((state) => state.error.value)
    const word = useSelector((state) => state.word.word)

    const unknownLetter = "_ "
    let blankWord = ""
    if (word != null) {
        blankWord = unknownLetter.repeat(word.length)
    }
    
  return (
    <>
        {word && <h1>{blankWord}</h1>}
        {!word && <Word/>}
    </>
  )
}

export default GamePlay