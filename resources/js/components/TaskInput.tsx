import React, {useState} from 'react';
import {Task} from '../models/TaskItem'

interface Props {
    tasks: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskInput: React.FC<Props> = ({tasks,setTasks}) => {
    const [inputTitle, setInputTitle] = useState('');
    const [count, setCount] = useState(tasks.length + 1);

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value)
    }

    const handleSubmit = () => {
        setCount(count + 1)

        const newTask: Task = {
            id: count,
            title: inputTitle,
            done: false
        }
        setTasks([newTask, ...tasks])
        setInputTitle('')
    }

    return (
        <React.Fragment>
            <input type='text' value={inputTitle} onChange={handleInputChange} />
            <button onClick={handleSubmit}>追加</button>
        </React.Fragment>
    );
}

export default TaskInput;