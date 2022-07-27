import React from "react";
import Header from "../components/Header";
import ShowTasks from "../components/ShowTasks";
import { useState, useEffect } from "react";

const Home = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [show, setShow] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  console.log(tasks);
  return (
    <div>
      <Header tasks={tasks} setTasks={setTasks} setShow={setShow} show={show} />
      {show && (
        <div className="tasks">
          {tasks.length === 0
            ? "No Tasks to show."
            : tasks.map((task, i) => {
                return (
                  <ShowTasks
                    task={task}
                    key={i}
                    id={i}
                    tasks={tasks}
                    setTasks={setTasks}
                  />
                );
              })}{" "}
        </div>
      )}
    </div>
  );
};

export default Home;
