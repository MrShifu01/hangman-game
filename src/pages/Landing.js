// Import CSS
import '../index.css'
import { Link } from 'react-router-dom'

// Using a landing page that I got from Daisy UI
function Landing() {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("/assets/images/landing-image.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold landing-title">Hang on, man</h1>
            <p className="mb-5 landing-paragraph">Welcome to Hangman, the hilariously suspenseful word-guessing game where stick figures teeter on the edge of doom and your vocabulary skills are put to the ultimate test! Challenge friends, family, and foes in a brain-bending battle of wits, unraveling words letter by letter. Get ready for laughter, forehead slaps, and an addictive guessing journey that keeps you on the edge. Let the Hangman begin!</p>
            <Link to="/home">
              <button className="btn btn-primary px-5 jello-horizontal"><i class='bx bx-play play-icon'></i></button>
            </Link>
            
        </div>
        </div>
    </div>
  )
}

export default Landing



