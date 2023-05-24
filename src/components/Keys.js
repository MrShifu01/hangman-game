import { useSelector, useDispatch } from "react-redux";
import "../index.css";
import keys from "../keys";
import { toggleKey } from "../store/key";
import { incrementError } from "../store/error";

function Keys() {
  const activeKeys = useSelector((state) => state.key.activeKeys);
  const word = useSelector((state) => state.word.word);
  const dispatch = useDispatch();

  const handleActiveKey = (e, key) => {
    e.preventDefault();
    if (!activeKeys.includes(key)) {
      if (!word.includes(key)) {
        dispatch(incrementError())
        dispatch(toggleKey(key));
      } else {
        dispatch(toggleKey(key));
      }
      
    }
    
  };

  return (
    <div className={`keys-container ${!word && "hidden"}`}>
      <div className="keys-row my-3">
        {keys.map((key) => (
          <div
            key={key}
            className={`btn btn-sm btn-square ${
              activeKeys.includes(key) ? "active-key" : ""
            }`}
            onClick={(e) => handleActiveKey(e, key)}
          >
            {key}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Keys;
