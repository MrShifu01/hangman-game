import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../index.css';
import WinModal from './WinModal';
import LoseModal from './LoseModal';
import { toggleWin, toggleLose } from '../store/gamestate';

const GamePlay = () => {
  const word = useSelector((state) => state.word.word);
  const activeKeys = useSelector((state) => state.key.activeKeys);
  const win = useSelector((state) => state.gamestate.win);
  const lose = useSelector((state) => state.gamestate.lose);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkWordComplete = () => {
      if (word && activeKeys) {
        const isWordComplete = word.split('').every((letter) => activeKeys.includes(letter));
        if (isWordComplete) {
          dispatch(toggleWin());
        }
      }
    };

    const checkGameOver = () => {
      if (word && activeKeys) {
        const maxErrors = 7; // Set your maximum allowed errors here
        const numErrors = activeKeys.filter((key) => !word.includes(key)).length;
        if (numErrors >= maxErrors) {
          dispatch(toggleLose());
        }
      }
    };

    checkWordComplete();
    checkGameOver();
  }, [word, activeKeys, dispatch]);

  let gameWord = '';
  if (word != null) {
    for (let i = 0; i < word.length; i++) {
      if (activeKeys.includes(word[i])) {
        gameWord = gameWord + word[i];
      } else {
        gameWord = gameWord + '_ ';
      }
    }
  }

  return (
    <>
      {word}

      {lose && <LoseModal />}
      {win && <WinModal />}

      {word && <h1 className="tracking-in-expand-fwd-bottom my-3 gameplay-word">{gameWord}</h1>}
      {!win && 'false'}
      {win && 'true'}
    </>
  );
};

export default GamePlay;
