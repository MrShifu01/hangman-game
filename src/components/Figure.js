// Used some of the code from Aaron Gaither on his code pen at https://codepen.io/aaronng/pen/JNRqYe?editors=1010, just for the SVG figure
import { useSelector } from 'react-redux';

const Figure = () => {
const error = useSelector((state) => state.error.value);

return (
<div>
  {/* Hangman Figure SVG */}
  <svg className="scale-in-center hangman-figure mt-5 rounded-lg bg-primary-content" height="300" width="400">
    <g id="body">
    {error > 1 && (
      <g id="head">
      <circle cx="200" cy="80" r="20" stroke="black" strokeWidth="4" fill="white" />
      {error !== 7 && (
          <g id="rEyes">
            {/* Alive Eyes */}
            <circle cx="193" cy="80" r="4" />
            <circle cx="207" cy="80" r="4" />
          </g>
      )}
      {error === 7 && (
          <g id="xEyes">
            {/* Dead Eyes */}
            <line x1="190" y1="78" x2="196" y2="84" />
            <line x1="204" y1="78" x2="210" y2="84" />
            <line x1="190" y1="84" x2="196" y2="78" />
            <line x1="204" y1="84" x2="210" y2="78" />
          </g>
      )}
      </g>
    )}
      {/* Body Line */}
      {error > 2 && <line id="body" x1="200" y1="100" x2="200" y2="150" />}
      {/* Left Arm */}
      {error > 3 && <line id="armL" x1="200" y1="120" x2="170" y2="140" />}
      {/* Right Arm */}
      {error > 4 && <line id="armR" x1="200" y1="120" x2="230" y2="140" />}
      {/* Left Leg */}
      {error > 5 && <line id="legL" x1="200" y1="150" x2="180" y2="190" />}
      {/* Right Leg */}
      {error > 6 && <line id="legR" x1="200" y1="150" x2="220" y2="190" />}
        <line x1="10" y1="250" x2="390" y2="250" />
        <line x1="100" y1="250" x2="100" y2="20" />
        <line x1="100" y1="20" x2="200" y2="20" />
        {error > 0 && <line id="rope" x1="200" y1="20" x2="200" y2="60" />}
    </g>
  </svg>
</div>
);
};

export default Figure;