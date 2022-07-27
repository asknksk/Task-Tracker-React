import { useEffect, useState } from "react";
import { TiTrash } from "react-icons/ti";

const Task = ({ task, tasks, setTasks }) => {
  const [show, setshow] = useState("show");

  const handleChange = (id) => {
    task.isDone = !task.isDone;
    console.log(task.isDone);
    setshow("as");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  const removeTask = (task) => {
    const filtered = tasks.filter((e) => e.task !== task);
    setTasks(filtered);
  };
  useEffect(() => setshow("tr"), [show]);

  return (
    <div
      className="task"
      onClick={() => handleChange(task.id)}
      style={{
        cursor: "pointer",
        textDecoration: task.isDone && "line-through",
        borderLeft: task.isDone && "solid 10px black",
      }}
    >
      <div>
        <p>{task.task}</p>
        <p>{task.day}</p>
      </div>
      <TiTrash
        size={40}
        onClick={() => removeTask(task.task)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Task;
