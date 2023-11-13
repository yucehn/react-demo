import { useRef, useEffect, useState } from "react";

const HookTimer = ()=>{
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(()=>{
    // 如果這樣宣告在 useEffect 以外就取不到，而且會無限迴圈
    // const interval = setInterval(()=>{
    //   setTimer(prevTimer=> prevTimer + 1)
    // }, 1000)

    intervalRef.current = setInterval(()=>{
      setTimer(prevTimer => prevTimer + 1)
    }, 1000)

    // 在functional component 裡做 componentWillUnmount 的卸載動作
    return ()=> {
      clearInterval(intervalRef.current)
    };
  },[])

  return (
    <div>
    <div>{timer}</div>
    <button onClick={()=>clearInterval(intervalRef.current)}>stop</button>
  </div>
  )
}

export default HookTimer;