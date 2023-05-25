import React from 'react';
import '../index.css';
import { useSelector, useDispatch } from 'react-redux';
import { resetLose } from '../store/gamestate';

function LoseModal() {
  // Retrieve data from Redux store
  const lose = useSelector((state) => state.gamestate.lose);
  const word = useSelector((state) => state.word.word);
  const dispatch = useDispatch();

  // Handle close modal event
  const closeModal = (e) => {
    e.preventDefault();
    dispatch(resetLose()); // Reset the lose state
    console.log(lose);
  };

  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className={`modal modal-bottom sm:modal-middle ${lose ? 'modal-open' : ''}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">YOU LOSE!</h3>
          <p className="py-4">The word was {word}</p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="flip-scale-up-hor btn" onClick={closeModal}>
              Oh no!
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoseModal;

