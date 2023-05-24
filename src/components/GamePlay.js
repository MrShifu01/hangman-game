import { useSelector} from 'react-redux'
import '../index.css'

function GamePlay() {

    const error = useSelector((state) => state.error.value)
    const word = useSelector((state) => state.word.word)
    const activeKeys = useSelector((state) => state.key.activeKeys)

    let gameWord = ""
    if (word != null) {
      for (let i = 0; i < word.length; i++) {
        if (activeKeys.includes(word[i])) {
          gameWord = gameWord + word[i];
        } else {
          gameWord = gameWord + "_ ";
        }
      }
    }

    if (/^[A-Z]+$/.test(gameWord)) {
      gameWord = "YOU WIN"
    }
    

  return (
    <>
      {word}
        {word && <h1 className='tracking-in-expand-fwd-bottom my-3 gameplay-word'>{gameWord}</h1>}
        {error === 7 && <h1>You Lose</h1>}
    </>
  )
}

export default GamePlay