import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
import classes from './Popup.module.css'

function Popup() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function popupHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <div className={classes.actions}>
        <button className={classes.btn} onClick={popupHandler}>
          Show Popup
        </button>
      </div>
      {modalIsOpen && (<Modal  onCancel={closeModalHandler} onConfirm={closeModalHandler}/>)}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}
export default Popup;
