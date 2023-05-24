import '../index.css';
import { useSelector, useDispatch } from 'react-redux';
import { resetLose } from '../store/gamestate';

function LoseModal() {
  const lose = useSelector((state) => state.gamestate.lose)
  const word = useSelector((state) => state.word.word)
  const dispatch = useDispatch()


  const closeModal= (e) => {
    e.preventDefault()
    dispatch(resetLose())
    console.log(lose)
  }

  return (
    <>
      
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className={`modal modal-bottom sm:modal-middle ${lose ? "modal-open" : ""}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">YOU LOSE!</h3>
          <p className="py-4">The word was {word}</p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn" onClick={closeModal}>Yay!</label>
          </div>
        </div>
      </div>

  
    </>
  );
}

export default LoseModal;
