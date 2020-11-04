import React, { createContext, useContext, useState } from 'react';

const TasksConfig = createContext();

export default function TaskContext({ children }) {
    const [tasks, setTasks] = useState([{ name: 'work', status: false }, { name: 'better', status: false }, { name: 'faster', status: false }]);

    return (
        <TasksConfig.Provider value={{ tasks, setTasks }} >
            {children}
        </TasksConfig.Provider>
    )
}

export function useTasks() {
    const context = useContext(TasksConfig);
    const { tasks, setTasks } = context;
    return { tasks, setTasks };
}