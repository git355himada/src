import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './NavBar'
import About from './About'
import User from './User'
import Top from './Top'
import Count from './Count'
import React, { useState } from 'react';
import {Task} from '../models/TaskItem'
import TaskList from './TaskList';
import TaskInput from './TaskInput';

const initialState: Task[] = [
    {
        id: 2,
        title: '次のTodo',
        done: false
    },
    {
        id: 1,
        title: '最初のTodo',
        done: true
    }
]

function App() {
    const [tasks, setTasks] = useState(initialState);
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">{'HelloWorld'}</div>
                            <Router>
                                <div className="card-body">
                                    <NavBar />
                                        <Switch>
                                            <Route path="/" exact component={Top} />
                                            <Route path="/about" component={About} />
                                            <Route path="/user" component={User} />
                                            <Route path="/count" component={Count} />
                                            <Route path="/taskList" component={TaskList} />
                                        </Switch>
                                </div>
                            </Router>
                        </div>
                        <TaskInput tasks={tasks} setTasks={setTasks} />
                        <TaskList tasks={tasks} setTasks={setTasks} />
                    </div>
                </div>
            </div>
        );
    }

render(<App/>, document.getElementById('app') as HTMLDivElement);