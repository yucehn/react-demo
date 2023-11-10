// import { useEffect, useState } from "react";
import { API_GET_MENU } from "../../components/constants";

import "./index.scss";
import Form from "./compoents/Form";
import useFetch from "../../hook/useFetch";

const Mall = () => {
  const {data: menu} = useFetch(API_GET_MENU);
  // const [menu, setMenu] = useState(null);
  // useEffect(() => {
  //   fetch(API_GET_MENU)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((result) => {
  //       setMenu(result.data);
  //     });
  // }, []);
  return (
    <div>
      <h1>Mall</h1>
      <div className="mall-box">
        { Array.isArray(menu)
          ? menu.map(({ id, title, img, intro }) => (
              <div key={id}>
                <img src={img} alt="title" />
                <p className="product-title">{title}</p>
                <p>{intro}</p>
              </div>
            ))
          : null }
      </div>
      <Form />
    </div>
  );
};

export default Mall;
