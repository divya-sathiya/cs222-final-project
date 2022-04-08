import React from "react";

const Form = ({ setInputText, setInputDay, todos, setTodos, inputText, inputDay}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            { text: inputText, day: inputDay, completed: false, id: Math.random() * 1000},
        ]);
        setInputText('');
        setInputDay('');
    };
    const inputDayHandler = (e) => {
        console.log(e.target.value);
        setInputDay(e.target.value);
    };

    return (
        <form onSubmit={submitTodoHandler}>
            <div>
                <input 
                    value={inputText} 
                    onChange= {inputTextHandler}
                    type="text" 
                    className="todo-input"
                    placeholder="Enter task"
                />
            </div>
            
            <div className="select">
                <select className="dayName" onChange= {inputDayHandler}>
                    <option value="day">Day</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                    <option value="sunday">Sunday</option>
                </select>
            </div>

            <div className="monday">Monday</div>
            <div className="tuesday">Tuesday</div>
            <div className="wednesday">Wednesday</div>
            <div className="thursday">Thursday</div>
            <div className="friday">Friday</div>
            <div className="saturday">Saturday</div>
            <div className="sunday">Sunday</div>
            <div className="end"></div>

            <button
                className="todo-button" 
                type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    );
};

export default Form;