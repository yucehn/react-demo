import { Link, useNavigate } from "react-router-dom";

const NotFound = ()=>{
  const navigate = useNavigate();
  const backToPrevious = ()=>{
    navigate(-1)
  }
  return (
    <div>
      <h1>NotFound</h1>
      <Link to="/">回首頁</Link>
      <button onClick={backToPrevious}>回上一頁</button>
    </div>
  )
}

export default NotFound;