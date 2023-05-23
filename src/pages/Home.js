import '../index.css'
import Instructions from '../components/Instructions'
import MainScreen from '../components/MainScreen'
import Help from '../components/Help'
import Navigation from '../components/Navigation'
import { useSelector} from 'react-redux'

function Home() {

  const instructions = useSelector((state) => state.navigation.instructions)
  const help = useSelector((state) => state.navigation.help)

  return (
    <>
      <Navigation />
          {instructions && !help && <Instructions />}
          {help && !instructions && <Help />}
          {!instructions && !help && <MainScreen />}
    </>
  )
}

export default Home
