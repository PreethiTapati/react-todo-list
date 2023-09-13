import  { useState } from 'react';
import Card from './components/Card';
import Form from './components/Form';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
      {
      id: '1',
      text: 'Read a book',
      done: false,
    },
    {
      id: '2',
      text: 'Write a journal',
      done: true,
    },
    {
      id: '3',
      text: 'Practice French',
      done: true,
    },
  ]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const checkHandler = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteHandler = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  return (
    <Card>
       <h1>ToDoList</h1>
      <Form addTask={addTask} />
      <TaskList tasks={tasks} checkHandler={checkHandler} deleteHandler={deleteHandler} />
    </Card>
  );
};

export default App;



