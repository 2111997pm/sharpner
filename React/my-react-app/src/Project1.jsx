
import React, { useState, useEffect } from 'react';

const Project1 = () => {
    const [tasks, setTasks] = useState([]);
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDueDate, setTaskDueDate] = useState('');

    useEffect(() => {
    
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    const addTask = () => {
        if (taskTitle.trim() !== '' && taskDescription.trim() !== '' && taskDueDate.trim() !== '') {
            const newTask = {
                id: new Date().getTime(),
                title: taskTitle,
                description: taskDescription,
                dueDate: taskDueDate,
            };

            const updatedTasks = [...tasks, newTask];
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));

            setTasks(updatedTasks);
            
            setTaskTitle('');
            setTaskDescription('');
            setTaskDueDate('');
        }
    };

    const deleteTask = (taskId) => {
    
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h2>Task Manager</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <strong>{task.title}</strong> - {task.description} (Due: {task.dueDate}){' '}
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <div>
                <label htmlFor="">Product Id : </label>
                <input
                    type="number"
                    placeholder="Product Id"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                />
                <label htmlFor="">Selling price : </label>
                <input
                    type="Number"
                    placeholder="Selling priceion"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                />
                <label htmlFor="">Product Name : </label>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={taskDueDate}
                    onChange={(e) => setTaskDueDate(e.target.value)}
                />
                <button onClick={addTask}>Add Task</button>
            </div>
        </div>
    );
};

export default Project1;
