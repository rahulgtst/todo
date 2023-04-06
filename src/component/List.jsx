import React from "react";
import Task from "./Task";

const List = ({ tasks, onDeleteTask, onChangeTaskStatus }) => {
  const Tasks = tasks.map((task) => {
    return (
      <Task
        key={task.id}
        onDeleteTask={onDeleteTask}
        task={task}
        onChangeTaskStatus={onChangeTaskStatus}
      />
    );
  });
  return tasks.length ? (
    <div
      id="list"
      className="h-[300px] w-[300px] sm:w-[400px] overflow-y-scroll bg-white dark:bg-[#454545] z-10"
    >
      {Tasks}
    </div>
  ) : (
    <div className="h-[300px] w-[300px] sm:w-[400px] flex items-center justify-center bg-white dark:bg-[#454545] dark:text-[#BDCDD6]">
      No tasks remaining
    </div>
  );
};

export default List;
