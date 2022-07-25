import React from "react";

const Todo = ({ todo }) => {
  return (
    <li style={{ border: "1px solid", backgroundColor: todo.color }}>
      <span>{todo.id}</span>
      <span>{todo.title}</span>
      <span>{todo.content}</span>
      <span>{todo.modifyDate}</span>
      <span>{todo.completed}</span>
    </li>
  );
};

export default Todo;
