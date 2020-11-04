import React, { useState } from 'react';
import { ImBin } from 'react-icons/im';

import './Main.css';

import Task from './Task';
import NewTask from '../NewTask/NewTask';

import { useTasks } from '../../config/TasksConfig';


function Main() {

    const { tasks, setTasks } = useTasks();

    const [showInput, setShowInput] = useState(false);

    function showCreate() {
        setShowInput(true);
    }

    function createTask(newTask) {
        setTasks([...tasks, newTask]);
        setShowInput(false);
    }


    return (
        <div className="main">
            {showInput ? <NewTask createTask={createTask} /> : <button className="btn-add" onClick={showCreate} > + Type your task</button>}
            <div className="tasks">
                {tasks.map((task, index) => {
                    return (
                        <div className="task" key={index}>
                            <Task task={task} />
                            <button onClick={() => {
                                let newArray = [...tasks];
                                newArray.splice(index, 1);
                                setTasks(newArray);
                                console.log(tasks);
                            }} className="btn-clear"><ImBin /></button>
                        </div>
                    );
                })}
            </div>

            <span className="footer">Inspired by <span>Enrio Dybell</span></span>
        </div>
    );
}

export default Main;