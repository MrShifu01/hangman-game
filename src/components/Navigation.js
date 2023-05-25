import React from 'react';
import ThemeSwitcher from './ThemeSwitch';
import { useDispatch, useSelector } from 'react-redux';
import { toggleInstructions, toggleHelp } from '../store/navigation';
import { resetWord } from '../store/word';
import { resetError } from '../store/error';
import { resetKeys } from '../store/key';

function Navigation() {
  const help = useSelector((state) => state.navigation.help); // Retrieve the help state from the Redux store
  const instructions = useSelector((state) => state.navigation.instructions); // Retrieve the instructions state from the Redux store
  const dispatch = useDispatch();

  const handleInstructions = (e) => {
    e.preventDefault();
    dispatch(toggleInstructions()); // Dispatch the toggleInstructions action to update the instructions state
  };

  const handleHelp = (e) => {
    e.preventDefault();
    dispatch(toggleHelp()); // Dispatch the toggleHelp action to update the help state
  };

  const handleReset = (e) => {
    e.preventDefault();
    dispatch(resetWord()); // Dispatch the resetWord action to reset the word state
    dispatch(resetError()); // Dispatch the resetError action to reset the error state
    dispatch(resetKeys()); // Dispatch the resetKeys action to reset the activeKeys state

    // If help is active, toggle it off
    if (help) {
      dispatch(toggleHelp());
    }

    // If instructions are active, toggle them off
    if (instructions) {
      dispatch(toggleInstructions());
    }
  };

  return (
    <>
      <div className="navbar bg-base-300">
        <div className="nav-content flex justify-between">
          <div className="left-nav">
            <a href="/" className="btn btn-ghost normal-case text-xl">
              <button onClick={handleReset}>Reset</button> {/* Reset button */}
            </a>
          </div>

          <div className="right-nav flex items-center">
            <ul className="flex">
              <li>
                <a href="/" className={`btn btn-ghost normal-case text-xl ${instructions ? 'nav-active' : ''}`}>
                  <button onClick={handleInstructions}>Instructions</button> {/* Instructions button */}
                </a>
              </li>
              <li>
                <a href="/" className={`btn btn-ghost normal-case text-xl ${help ? 'nav-active' : ''}`}>
                  <button onClick={handleHelp}>Help</button> {/* Help button */}
                </a>
              </li>
            </ul>
            <div className="mt-3 ml-3">
              <ThemeSwitcher /> {/* ThemeSwitcher component */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
