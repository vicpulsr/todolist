import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

function NewTask ( { createTask }) {

    const [task, setTask] = useState({});
    const [hasError, setHasError] = useState(false);

    function handleChangeTask(event) {
        const taskName = event.target.value;
        setTask({ name: taskName, status: false });
        setHasError(false);
    }

    return(
        <div className="new-task">
            <TextField error={hasError} helperText="Type some task" value={task.name} onChange={handleChangeTask} variant="standard" placeholder=" + Type your task" size="medium" />
            <button className="btn-clear btn-addNewTask" onClick={() => {
                if(task.name && task.name.length !== 0) {
                    createTask(task)
                } else {
                    setHasError(true);
                } 
                } }>Add</button>
        </div>
    );
}

export default NewTask;