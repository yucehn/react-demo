import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from "../../components/constants";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.scss";

async function fetchData(setTodoList) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  setTodoList(data);
}

async function fetchSetData(todoList) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: todoList }),
  });
}

const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const submitStatus = useRef(false);
  useEffect(() => {
    if (!submitStatus.current) {
      return;
    }
    fetchSetData(todoList).then((todoList) => (submitStatus.current = false));
  }, [todoList]);

  useEffect(() => {
    // 綁定事情
    fetchData(setTodoList);
    // return () =>{
    //   // 取消綁定
    // }
  }, []);
  return (
    <div className="app">
      <Edit add={setTodoList} submitStatus={submitStatus} />
      <List
        listData={todoList}
        deleteItem={setTodoList}
        submitStatus={submitStatus}
      />
    </div>
  );
};

export default Home;
