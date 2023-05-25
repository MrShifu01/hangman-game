import React from 'react';
import '../index.css';
import { useSelector, useDispatch } from 'react-redux';
import { resetWin } from '../store/gamestate';

function WinModal() {
  const win = useSelector((state) => state.gamestate.win); // Retrieve the win state from the Redux store
  const dispatch = useDispatch();

  const closeModal = (e) => {
    e.preventDefault();
    dispatch(resetWin()); // Dispatch the resetWin action to reset the win state
  };

  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className={`modal modal-bottom sm:modal-middle ${win ? 'modal-open' : ''}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Congratulations!</h3>
          <p className="py-4">You won the Hangman Challenge</p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="flip-scale-up-hor btn" onClick={closeModal}>
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default WinModal;

