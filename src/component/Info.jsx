import React from "react";

const Info = ({ countTasks, onClearTasks }) => {
  return (
    <div className="h-[50px] w-[300px] sm:w-[400px] bg-white dark:bg-[#454545] mt-3 px-5 shadow-sm dark:text-[#BDCDD6] flex justify-between items-center">
      <h3>
        Tasks left : <strong className="text-red-500">{countTasks}</strong>
      </h3>
      <button
        onClick={onClearTasks}
        className="dark:text-[#BDCDD6] dark:hover:text-red-500 hover:text-red-500"
      >
        Clear completed
      </button>
    </div>
  );
};

export default Info;
