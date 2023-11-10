import { useParams } from "react-router-dom";
import useFetch from "../../../hook/useFetch";
import { API_GET_MENU } from "../../../components/constants";
import { useEffect, useState } from "react";

const MenuItem = ()=>{
  const { id } = useParams();
  const {data: menuItem } = useFetch(`${API_GET_MENU}`);
  const [showItem, setShowItem] = useState(null)
  const test = menuItem?.filter((item)=> item.id === Number(id));
  useEffect(()=>{
    setShowItem(...test||[])
  },[test])
  return (
    showItem && <div>
      MenuItem
      <img src={showItem.img} alt={showItem.title} />
      <p className="product-title">{showItem.title}</p>
      <p>{showItem?.intro}</p>
    </div>
  )
}

export default MenuItem;