import { useSelector } from 'react-redux'

const Figure = () => {
  const error = useSelector((state) => state.error.value)

  return ( // REDO IN MY OWN WORDS
    <div>
      <svg className="scale-in-center hangman-figure mt-5 rounded-lg bg-primary-content" height="300" width="400">
        <g id="body">
          {error > 1 && <g id="head">
            <circle cx="200" cy="80" r="20" stroke="black" strokeWidth="4" fill="white" />
            {error !== 7 && <g id="rEyes">
              <circle cx="193" cy="80" r="4" />
              <circle cx="207" cy="80" r="4" />
            </g>}
            {error === 7 && <g id="xEyes">
              <line x1="190" y1="78" x2="196" y2="84" />
              <line x1="204" y1="78" x2="210" y2="84" />
              <line x1="190" y1="84" x2="196" y2="78" />
              <line x1="204" y1="84" x2="210" y2="78" />
            </g>}
          </g>}
          {error > 2 && <line x1="200" y1="100" x2="200" y2="150" />}
          {error > 3 && <line id="armL" x1="200" y1="120" x2="170" y2="140" />}
          {error > 4 && <line id="armR" x1="200" y1="120" x2="230" y2="140" />}
          {error > 5 && <line id="legL" x1="200" y1="150" x2="180" y2="190" />}
          {error > 6 && <line id="legR" x1="200" y1="150" x2="220" y2="190" />}
          <line x1="10" y1="250" x2="150" y2="250" />
          <line id="door1" x1="150" y1="250" x2="200" y2="250" />
          <line id="door2" x1="200" y1="250" x2="250" y2="250" />
          <line x1="250" y1="250" x2="390" y2="250" />
          <line x1="100" y1="250" x2="100" y2="20" />
          <line x1="100" y1="20" x2="200" y2="20" />
          {error > 0 && <line id="rope" x1="200" y1="20" x2="200" y2="60" />}
        </g>
      </svg>
    </div>
  )
}

export default Figure