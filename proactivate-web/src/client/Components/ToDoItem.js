import React from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState,useEffect } from "react";

const ToDoItems = [
  "Do my laundry",
  "cs361 HW 6",
  "Exam cs411 review",
  "Take out trash",
];
const ToDoItem = () => {
  const [todos, setTodos] = useState([]);
  var ToDoItems=[];
  var daysWeek = {
    0: "sunday",
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday",
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
    } else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        var today = new Date();
        var today_day = daysWeek[today.getDay()];
   
        for (var i=0;i<todoLocal.length;++i)
        {
          if(todoLocal[i].day == today_day)
          {
            ToDoItems.push(todoLocal[i].text);
          }
        }

        setTodos(ToDoItems);
    }
};

useEffect(() => {
  getLocalTodos();
}, []);


  return (
    <FormGroup>
      {todos.map((items) => (
        <FormControlLabel control={<Checkbox />} label={items} />
      ))}
    </FormGroup>
  );
};
export default ToDoItem;
