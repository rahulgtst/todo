import React, { useEffect, useState } from "react";
import Input from "./component/Input";
import List from "./component/List";
import Info from "./component/Info";
import Header from "./component/Header";

const getTasks = () => {
  let tasks = localStorage.getItem("todos");
  return tasks ? JSON.parse(tasks) : [];
};

const App = () => {
  const [tasks, setTasks] = useState(getTasks());
  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        name: text,
        done: false,
      },
    ]);
    countTasks++;
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
    countTasks--;
  };

  const handleTaskStatus = (newTask) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === newTask.id) {
          return newTask;
        } else return t;
      })
    );
    if (newTask.done) countTasks--;
    else countTasks++;
  };
  const handleCompletedTasks = () => {
    setTasks(tasks.filter((t) => !t.done));
  };

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);

  const handleThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div
      id="App"
      className="h-screen bg-[#FCF8E8] bg-contain dark:bg-[url('./assets//images/bg-mobile-dark.jpg')] bg-[url('./assets//images/bg-mobile-light.jpg')] sm:dark:bg-[url('./assets//images/bg-desktop-dark.jpg')] sm:bg-[url('./assets//images/bg-desktop-light.jpg')] bg-no-repeat flex flex-col justify-center items-center dark:bg-black"
    >
      <Header theme={theme} onSwitch={handleThemeSwitch} />
      <Input onAddTask={handleAddTask} />
      <List
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onChangeTaskStatus={handleTaskStatus}
      />
      <Info countTasks={countTasks} onClearTasks={handleCompletedTasks} />
    </div>
  );
};

export default App;

let nextId = 0;
let countTasks = 0;
