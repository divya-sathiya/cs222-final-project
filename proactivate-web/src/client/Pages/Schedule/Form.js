import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            { text: inputText, completed: false, id: Math.random() * 1000},
        ]);
        setInputText('');
    };
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick= {submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            {/* <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="day">Day</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                    <option value="sunday">Sunday</option>
                </select>
            </div> */}
        </form>
    );
};

export default Form;