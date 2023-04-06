import React from "react";

const Task = ({ task, onDeleteTask, onChangeTaskStatus }) => {
  const deleteTask = () => onDeleteTask(task.id);
  const changeTaskStatus = () => {
    const checkbox = document.getElementById(`${task.id}`);
    const newTask = {
      ...task,
      done: checkbox.checked,
    };
    onChangeTaskStatus(newTask);
  };
  return (
    <div className="h-[50px] w-[300px] sm:w-[392px] bg-white dark:bg-[#454545] border-b border-slate-400 flex justify-between items-center px-5">
      <input
        type="checkbox"
        className="w-[22px] h-[22px] appearance-none rounded-[11px] border dark:border-white border-black checked:border-none flex items-center justify-center checked:bg-purple-500 checked:after:content-['✓'] checked:text-center checked:font-bold checked:text-white outline-none"
        id={task.id}
        cl
        onClick={changeTaskStatus}
      />
      {task.done ? (
        <h3 className="w-[200px] sm:w-[280px] dark:text-[#BDCDD6] line-through decoration-black dark:decoration-[#BDCDD6] hover:cursor-pointer decoration-2 text-[16px]">
          {task.name}
        </h3>
      ) : (
        <h3 className="w-[200px] sm:w-[280px] dark:text-[#BDCDD6] dark:hover:text-white hover:cursor-pointer">
          {task.name}
        </h3>
      )}
      <button
        className="hover:text-red-500 dark:hover:text-red-500 dark:text-white text-[20px] font-bold"
        onClick={deleteTask}
      >
        ✕
      </button>
    </div>
  );
};

export default Task;
