// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_GET_MENU } from "../../components/constants";

import "./index.scss";

import Form from "./components/Form";
import useFetch from "../../hook/useFetch";

const Mall = () => {
  const {data: menu} = useFetch(API_GET_MENU);
  
  return (
    <div>
      <h1>Mall</h1>
      <div className="mall-box">
        { Array.isArray(menu)
          ? menu.map(({ id, title, img, intro }) => (
            <Link to={`/menu-item/${id}`} key={id}>
              <img src={img} alt={title} />
              <div>
                <p className="product-title">{title}</p>
                <p>{intro}</p>
              </div>
            </Link>
          ))
          : null }
      </div>
      <Form />
    </div>
  );
};

export default Mall;
