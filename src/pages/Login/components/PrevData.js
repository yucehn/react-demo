import { useEffect, useRef, useState } from "react";

const PrevData = ()=>{
  const [input, setInput]=useState("");
  const prevInput = useRef("");

  useEffect(()=>{
    // 當input改變時記錄到useRef中(因 useRef 值改變不會造成渲染)
    prevInput.current = input;
  },[input]);
  return (
    <div>
      {/* functional component 每次更改資料都會重新渲染元件，導致無法知道之前值是什麼 */}
      <input 
        type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      />
      <p>剛輸入的是：{prevInput.current}</p>
    </div>
  )
}

export default PrevData;