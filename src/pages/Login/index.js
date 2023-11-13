import { useRef, useEffect } from "react";
import { ExtendInputStyle } from "../InputStyle";

import HookTimer from "./components/HookTimer";
import PrevData from "./components/PrevData";
import ReduxCounter from "./components/ReduxCounter";

const Login = ()=>{
  // 1.宣告ref並初始化
  const inputRef = useRef(null);
  useEffect(() => {
    // 3.載入頁面時input就自動被focus
    // useRef會回傳一個含有 current 這個屬性的物件
    // console.log(inputRef);
   inputRef.current.focus();
  }, [])
  
  return (
    <div>
      {/* 2.連接宣告好的ref */}
      <div>
        <label htmlFor="account">帳號</label>
        <ExtendInputStyle type="text" id="account" placeholder="example@mail.com" ref={inputRef} />
      </div>
      <div>
        <label htmlFor="password">密碼</label>
        <ExtendInputStyle type="text" id="password" placeholder="*****" />
      </div>
      <HookTimer />
      <PrevData />
      <ReduxCounter />
    </div>
  )
}

export default Login;