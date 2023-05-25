import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../index.css';
import { assignWord } from '../store/word';
import hangManWords from '../hangManWords';

function Word() {
  const word = useSelector((state) => state.word.word); // Retrieve the word from the Redux store
  const dispatch = useDispatch();

  // Mapping the hangManWords into a local array with unique keys
  const words = hangManWords.map((word) => ({ word, key: word }));

  // Function to pick a random word from the words array
  function pickRandomWord(words) {
    let index = Math.floor(Math.random() * words.length);
    return words[index].word;
  }

  const handleWord = (e) => {
    e.preventDefault();
    const randomWord = pickRandomWord(words);
    dispatch(assignWord(randomWord)); // Dispatch the assignWord action to set the word in the Redux store
  };

  return (
    <>
      {!word && ( // Render the Start button only if the word is not set in the Redux store
        <button className="heartbeat btn btn-lg mt-3 start-button" onClick={handleWord}>
          Start
        </button>
      )}
    </>
  );
}

export default Word;
