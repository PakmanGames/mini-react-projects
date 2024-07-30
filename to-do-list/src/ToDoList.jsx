import {useState} from 'react'

function ToDoList() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleTaskChange = (e) => {
        setTask(prevTask => e.target.value);
    }

    const handleAddTask = () => {
        setTasks(prevTasks => task.trim() !== "" ? [...prevTasks, task] : prevTasks);
        setTask("");
    }

    const handleRemoveTask = (index) => {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index))
    }

    const handleMoveTaskUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    const handleMoveTaskDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
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