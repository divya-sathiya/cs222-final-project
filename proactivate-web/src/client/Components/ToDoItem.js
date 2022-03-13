import React from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const ToDoItems = [
  "Do my laundry",
  "cs361 HW 6",
  "Exam cs411 review",
  "Take out trash",
];
const ToDoItem = () => {
  return (
    <FormGroup>
      {ToDoItems.map((items) => (
        <FormControlLabel control={<Checkbox />} label={items} />
      ))}
    </FormGroup>
  );
};
export default ToDoItem;
