import { useSelector} from 'react-redux'
import '../index.css'

function Word() {
  const word = useSelector((state) => state.word.word)

  return (
    <>
        {word}
    </>
  )
}

export default Word