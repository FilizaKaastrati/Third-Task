import { blue } from "@mui/material/colors";
import { border, sizeWidth } from "@mui/system";
import { useState } from "react";
import classes from "./Modal.module.css";

function Modal(props) {
  const [colors] = useState([
    { name: "Font Color", color: "#FFFFFF" },
    { name: "Background Color", color: "#000000" },
    { name: "Button Color", color: "#2072EF" },
    { name: "Button Border Color", color: "#2072EF" },
    { name: "Buttons Mouseover Color", color: "#0053D1" },
  ]);

  const colorsList = colors.map((color, key) => (
    <div className={classes.container}>
      <div className={classes.colorsList}>
        <div>
        <h6>{color.name}</h6>
        </div>
        <div>
          <span>{color.color} </span>
          <input type={"color"} value={color.color} style={{border:'#FFFFFF'}}/>
        </div>
      </div>
    </div>
  ));

  function cancelHandler() {
    props.onCancel();
  }
  function saveHandler() {
    props.onConfirm();
  }

  return (
    <div className={classes.modal}>
      <div className={classes.colorsList}>
        <h5>Theme Color</h5>
        <dt>Change Theme</dt>
      </div>
      <div>{colorsList}</div>
      <div className="text-right">
        <button className={classes.btn} onClick={cancelHandler}>
          Cancel
        </button>
        <button className={classes.btnSave} onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
}
export default Modal;
