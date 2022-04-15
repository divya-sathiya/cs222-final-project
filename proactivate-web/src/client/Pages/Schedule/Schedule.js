import React, { useEffect, useState } from "react";
import "./Schedule.css";
import Form from "./Form";
import TodoList from "./TodoList";

const Schedule = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [inputDay, setInputDay] = useState("");

    useEffect(() => {
        getLocalTodos();
    }, []);

    useEffect(() => {
        saveLocalTodos();
    }, [todos]);

    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            setTodos(todoLocal);
        }
    };

    return (
      <div className="Schedule">
          <header>
              <h1>Your schedule</h1>
          </header>
          <Form 
            todos = {todos} 
            setTodos={setTodos} 
            inputText= {inputText} 
            setInputText={setInputText}
            inputDay={inputDay}
            setInputDay={setInputDay}
          />
          <TodoList setTodos={setTodos} todos={todos} inputDay={inputDay}/>
      </div>
    );
};

export default Schedule;
