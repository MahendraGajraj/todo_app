import "./Todo.css";
import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoDate } from "./TodoDate";
import { TodoList } from "./TodoList";
import {
    getLocalStorageTodoData,
    setLocalStorageTodoData,
} from "./TodoLocalStorage";

export const Todo = () => {
    const [task, setTask] = useState(() => getLocalStorageTodoData());

    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;
        //to check if the input field is empty or not
        if (!content) return;
        //to check if the data is already existing or not
        //if (task.includes(inputValue)) return;
        const ifTodoContentMethod = task.find((curTask) => curTask.content === content);
        if (ifTodoContentMethod) return;
        setTask((prevTask) => [...prevTask, { id, content, checked }]);
    }

    //todo add data to localStorage
    setLocalStorageTodoData(task);

    //todo handleDeleteTodo function
    const handleDeleteTodo = (value) => {
        const updatedTask = task.filter((curTask) => !(curTask.content === value))
        setTask(updatedTask);
    }

    //todo handleClearTodoData function

    const handleClearTodoData = () => {
        setTask([]);

    };
    //todo handleCheckedTodo functionality

    const handlecheckedTodo = (content) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, checked: !curTask.checked }

            } else {
                return curTask;
            }
        })
        setTask(updatedTask);
    }

    return (
        <>
            <section className="todo-container">

                <header>
                    <h1>Gajraj - Todo List</h1>
                    <TodoDate />
                </header>
                <TodoForm onAddTodo={handleFormSubmit} />
                <section className="myUnOrderList">
                    <ul>
                        {task.map((curTask) => {
                            return (
                                <TodoList
                                    key={curTask.id}
                                    data={curTask.content}
                                    checked={curTask.checked}
                                    onHandleDeleteTodo={handleDeleteTodo}
                                    onHandleCheckedTodo={handlecheckedTodo}
                                />
                            )
                        })}
                    </ul>
                </section>
                <section>
                    <button
                        className="clear-btn"
                        onClick={handleClearTodoData}>
                        Clear All
                    </button>
                </section>
                <p className='copy-right'>
                    Copyright 2024 ©- All Right Reserved.
                   <br/> Mahendra Singh Gajraj
                </p>
            </section>
        </>
    )
}