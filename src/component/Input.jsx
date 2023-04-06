import React from "react";

const Input = ({ onAddTask }) => {
  function addTask(e) {
    const text = document.querySelector("input");
    if (text.value !== "") onAddTask(text.value.trim());
  }
  return (
    <div
      id="input-box"
      className="h-[90px] sm:h-[100px] w-[300px] sm:w-[400px] flex justify-center items-center"
    >
      <input
        type="text"
        placeholder="add your task here"
        className="h-[50px] w-[250px] caret-purple-500 sm:w-[350px] px-4 dark:bg-[#454545] dark:text-[#BDCDD6] border-none outline-none"
      />
      <button
        onClick={addTask}
        className="h-[50px] w-[50px] text-[30px] bg-blue-500"
      >
        &#43;
      </button>
    </div>
  );
};

export default Input;
