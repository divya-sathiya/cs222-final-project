import React from "react";
import Todo from "./Todo"

const TodoList = ( { todos, setTodos, inputDay}) => {
    return (
        <div className="todo-container">
            <div class="flex-container">
                <div>Monday
                    <ul className="todo-list">
                        {todos.map(todo => (
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
                <div>Tuesday
                    <ul className="todo-list">
                        {todos.map(todo => (
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
                <div>Wednesday
                    <ul className="todo-list">
                        {todos.map(todo => (
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
                <div>Thursday
                    <ul className="todo-list">
                        {todos.map(todo => (
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
                <div>Friday
                    <ul className="todo-list">
                        {todos.map(todo => (
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
                <div>Saturday
                    <ul className="todo-list">
                        {todos.map(todo => (
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
                <div>Sunday
                    <ul className="todo-list">
                        {todos.map(todo => (
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