import { useState, useEffect } from "react";
import { API_GET_DATA } from "../../components/constants";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

async function fetchData(){
  const res = await fetch(API_GET_DATA)
  const { data } = await res.json()
  console.log(data)
}

const Home = () => { 
  const [todoList, setTodoList] = useState([]);
  
  useEffect(()=>{
    // 綁定事情
    fetchData();
    // return () =>{
    //   // 取消綁定
    // }
  }, [todoList])
  return (
    <div className="app">
      <Edit add={setTodoList} />
      <List listData={todoList} deleteItem={setTodoList} />
    </div>
  );
};

export default Home;
