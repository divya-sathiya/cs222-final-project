import React from "react";
import Todo from "./Todo"


const TodoList = ( { todos, setTodos } ) => {
    return (
        <div className="todo-container">
            <div className="flex-container">
                <div className="center">Monday
                    <ul className="todo-list">
                        {todos.filter(todo => todo.day === "monday").map(todo => (
                            <Todo
                                setTodos={setTodos} 
                                todos={todos} 
                                key={todo.id}
                                todo={todo}
                                text={todo.text}
                                day={todo.day}
                            />
                        ))}
                    </ul>
                </div>
                <div className="center">Tuesday
                    <ul className="todo-list">
                        {todos.filter(todo => todo.day === "tuesday").map(todo => (
                            <Todo
                                setTodos={setTodos} 
                                todos={todos} 
                                key={todo.id}
                                todo={todo}
                                text={todo.text}
                                day={todo.day}
                            />
                        ))}
                    </ul>
                </div>
                <div className="center">Wednesday
                    <ul className="todo-list">
                        {todos.filter(todo => todo.day === "wednesday").map(todo => (
                            <Todo
                                setTodos={setTodos} 
                                todos={todos} 
                                key={todo.id}
                                todo={todo}
                                text={todo.text}
                                day={todo.day}
                            />
                        ))}
                    </ul>
                </div>
                <div className="center">Thursday
                    <ul className="todo-list">
                        {todos.filter(todo => todo.day === "thursday").map(todo => (
                            <Todo
                                setTodos={setTodos} 
                                todos={todos} 
                                key={todo.id}
                                todo={todo}
                                text={todo.text}
                                day={todo.day}
                            />
                        ))}
                    </ul>
                </div>
                <div className="center">Friday
                    <ul className="todo-list">
                        {todos.filter(todo => todo.day === "friday").map(todo => (
                            <Todo
                                setTodos={setTodos} 
                                todos={todos} 
                                key={todo.id}
                                todo={todo}
                                text={todo.text}
                                day={todo.day}
                            />
                        ))}
                    </ul>
                </div>
                <div className="center">Saturday
                    <ul className="todo-list">
                        {todos.filter(todo => todo.day === "saturday").map(todo => (
                            <Todo
                                setTodos={setTodos} 
                                todos={todos} 
                                key={todo.id}
                                todo={todo}
                                text={todo.text}
                                day={todo.day}
                            />
                        ))}
                    </ul>
                </div>
                <div className="center">Sunday
                    <ul className="todo-list">
                        {todos.filter(todo => todo.day === "sunday").map(todo => (
                            <Todo
                                setTodos={setTodos} 
                                todos={todos} 
                                key={todo.id}
                                todo={todo}
                                text={todo.text}
                                day={todo.day}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TodoList;