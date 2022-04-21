import React, { useEffect, useState } from "react";
import "./Schedule.css";
import Form from "./Form";
import TodoList from "./TodoList";
import axios from 'axios';

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
        const res = axios.post("http://localhost:5000/tasks/add_task", {token: localStorage.getItem("current_user_authToken"), todos: localStorage.getItem("todos")});
        console.log(res.data);
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
          <TodoList setTodos={setTodos} todos={todos} />
      </div>
    );
};

export default Schedule;
