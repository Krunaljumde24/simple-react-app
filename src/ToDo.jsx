import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './reducers/TodoReducer'

function ToDo() {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo.todos);
    console.log(todos);

    const [todo, setTodo] = useState('');

    const handleAddTodo = (event) => {
        event.preventDefault();
        dispatch(addTodo(todo));
        setTodo('')
    }

    return (
        <div className='container'>
            <h3 className="text-center my-3">ToDo App | React+Redux</h3>

            <div className="todo-container mx-auto p-3">
                <label htmlFor="todoInput">Enter your task name</label>
                <input
                    type="text"
                    name="todo"
                    id="todoInput"
                    className="form-control form-control-sm"
                    value={todo}
                    onChange={(event) => setTodo(event.target.value)}
                />
                <button
                    className="mt-2 btn btn-sm btn-success"
                    id="addBtn"
                    onClick={(event) => handleAddTodo(event)}
                >
                    Add
                </button>
                <hr />

                <div className="todoListContainer">
                    <ul>
                        {todos.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ToDo