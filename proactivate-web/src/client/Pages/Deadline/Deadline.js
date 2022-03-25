import React from "react";
import CustomizedProgressBars from "../../Components/ProgressBar.js";
import MaterialUIPickers from "../../Components/DatePicker.js";

const Deadline = () => {
  return( 
  <>
  <div className="datePick">
  <MaterialUIPickers/>
  </div>
  <CustomizedProgressBars />
  </>
   );
};

export default Deadline;
