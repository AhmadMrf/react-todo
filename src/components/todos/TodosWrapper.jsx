import React from "react";
import HeaderApp from "../ui/HeaderApp";
import TodosList from "./TodosList";
const TodosWrapper = () => {
  const todosData = [
    {
      id: 1,
      title: "first todo title",
      content: "this is my first todo",
      modifyDate: "2022-07-20 08:23",
      completed: false,
      color: "#cd12ab"
    },
    {
      id: 2,
      title: "second todo",
      content:
        "this another todo that has multiple jjjg fffjgjg jjkkjkj oioioiio ttyttyty rtrtrtrt yuyuyuio jh ghghhf vf gkjkmhj hhjhj shhzlines",
      modifyDate: "2022-06-20 12:01",
      completed: false,
      color: "#5a45cc"
    },
    {
      id: 3,
      title: "third title",
      content: "lorem lkjds sjdflsjdf sfshef fskfse skfjwe sjfeof d",
      modifyDate: "2022-07-10 14:45",
      completed: true,
      color: "#cd12ab"
    }
  ];
  return (
    <section>
      <HeaderApp> Hi , Ahmad </HeaderApp>
      <TodosList todos={todosData} />
    </section>
  );
};

export default TodosWrapper;
