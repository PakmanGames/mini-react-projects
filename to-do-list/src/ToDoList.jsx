import {useState} from 'react'

function ToDoList() {
    // State variables to hold the list of tasks (tasks) and current task (task)
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    // Callback to update input box as user types task
    const handleTaskChange = (e) => {
        setTask(e.target.value);
    }

    // Callback to add the newest task to the tasks list
    const handleAddTask = () => {
        // Checks if task is empty space ex. " "
        setTasks(prevTasks => task.trim() !== "" ? [...prevTasks, task] : prevTasks);
        // Resets the task input to be empty
        setTask("");
    }

    // Callback to remove tasks by finding its index from tasks array and removing
    const handleRemoveTask = (index) => {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index))
    }

    // Callback to move task up in list
    const handleMoveTaskUp = (index) => {
        // Check if task isn't the first element
        if (index > 0) {
            const updatedTasks = [...tasks];
            // Swap with array destructuring
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    // Callback to move tasks down in list
    const handleMoveTaskDown = (index) => {
        // CHeck if task isn't the last element
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            // Swap with array destructuring
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


    return (
        <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <div>
                <input type="text" id='input' value={task} placeholder='Enter a task...' onChange={(e) => handleTaskChange(e)}/>
                <button className='add-button' onClick={handleAddTask}>Add</button>
            </div>
            <ul>
                {tasks.map(
                    (item, index) => {
                        return (
                            <li key={index}>
                                <span className='text'>{item}</span>
                                <button className='delete-button' onClick={() => handleRemoveTask(index)}>Delete</button>
                                <button className='move-button' onClick={() => handleMoveTaskUp(index)}>⬆️</button>
                                <button className='move-button' onClick={() => handleMoveTaskDown(index)}>⬇️</button>
                            </li>
                        );
                    }
                )}
            </ul>
        </div>
    );
}

export default ToDoList