import React, { useState } from "react";
import Task from "./Task";

function Tasklist() {

  const [newTask, setNewTask] = useState("");

  const [tasks, setTasks] = useState([
    { name: "Task 1", completed: false },
    { name: "Task 2", completed: false },
    { name: "Task 3", completed: false },
  ]);

  const handleNewTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleNewTaskAdd = () => {
    setTasks([...tasks, { name: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTaskCompleted = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <input type="text" value={newTask} onChange={handleNewTaskChange} />
      <button onClick={handleNewTaskAdd}> Add Task </button>
      {tasks.map((tasks, index) =>(
      <Task
        name={tasks.name}
        completed={tasks.completed}
        toggleTaskCompleted={() => toggleTaskCompleted(index)}
        deleteTask={() => deleteTask(index)}
        />
      ))}

    </div>
  );
}

export default Tasklist;
